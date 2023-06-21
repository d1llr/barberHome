import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullService, RemoveAllService, RemoveService, setCurrentCategory } from '@/redux/slices/CartSlice'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../loading/LoadingPage'

interface ICategory {
    api_id: number,
    id: number,
    sex: number,
    title: string,
    weight: number
}
interface IService {
    abonement_restriction: number,
    active: number,
    category_id: number,
    comment: string,
    discount: number,
    id: number,
    image: string,
    prepaid: string,
    prepaid_settings: {
        status: string,
        prepaid_full: {
            amount: number,
            currency: string,
        }
        prepaid_min: {
            amount: number,
            currency: string,
        }
    }
    price_max: number,
    price_min: number,
    seance_length: number,
    sex: number,
    title: string,
    weight: number
}

export enum categoryType { services, servicesPRO }

const Service: React.FC = () => {

    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess, isFetching } = useGetServicesQuery(cart.department.id)
    const checkedServices = useAppSelector(state => state.cartSlice.services)
    const dispatch = useAppDispatch()

    const currentCategory = useAppSelector(state => state.cartSlice.categoryType)

    // let services: number[] = []

    // if (currentCategory == 'pro') {
    //     services = [12652125, 12652128, 12652121, 12652131]
    // }
    // else {
    //     services = [12652126, 12652129, 12652123, 12652132]
    // }


    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (checkedServices.includes(Number(event.currentTarget.dataset.id))) {
            dispatch(RemoveService(Number(event.currentTarget.dataset.id)))
        }
        else {
            dispatch(PullService(Number(event.currentTarget.dataset.id)))
        }
    }


    return (
        isLoading ? <LoadingPage /> :
            <div className={styles.services_container}>
                <ul>
                    <li
                        className={currentCategory == categoryType.services ? styles.li_checked : styles.li}
                        onClick={() => {
                            dispatch(setCurrentCategory(categoryType.services))
                            dispatch(RemoveAllService())
                        }}>
                        Услуги
                    </li>
                    <li
                        className={currentCategory == categoryType.servicesPRO ? styles.li_checked : styles.li}
                        onClick={() => {
                            dispatch(setCurrentCategory(categoryType.servicesPRO))
                            dispatch(RemoveAllService())
                        }}>
                        PRO услуги
                    </li>
                </ul>
                {isSuccess &&
                    data.category.map((category: ICategory, index: number) => {
                        if (currentCategory == categoryType.servicesPRO) {
                            if (index % 2 != 0)
                                return <div className={styles.services_wrapper} key={index}>
                                    <h3>{category.title}</h3>
                                    <div className={styles.service}>
                                        {data.services.map((el: IService) => {
                                            if (el.category_id == category.id)
                                                return <div
                                                    className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                    onClick={(e) => handleClick(e)}
                                                    data-id={el.id}
                                                    key={el.id}
                                                    >
                                                    <span className={styles.title}>{el.title}</span>
                                                    <span className={styles.price}>{el.price_min}₽</span>
                                                </div>
                                        })}
                                    </div>
                                </div>
                        }
                        else {
                            if (index % 2 == 0)
                                return <div className={styles.services_wrapper} key={index}>
                                    <h3>{category.title}</h3>
                                    <div className={styles.service}>
                                        {data.services.map((el: IService) => {
                                            if (el.category_id == category.id)
                                                return <div
                                                    className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                    onClick={(e) => handleClick(e)}
                                                    data-id={el.id}>
                                                    <span className={styles.title}>{el.title}</span>
                                                    <span className={styles.price}>{el.price_min}₽</span>
                                                </div>
                                        })}
                                    </div>
                                </div>
                        }

                    })
                }
                {
                    isError &&
                    <div>
                        Error...
                    </div>
                }
            </div>
    );
}

export default Service;