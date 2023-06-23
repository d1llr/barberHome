import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from '../styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullService, RemoveAllService, RemoveService, setCurrentCategory } from '@/redux/slices/CartSlice'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../../loading/LoadingPage'
import ErrorPage from '@/components/error/ErrorPage'

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

export enum categoryType { services, servicesPRO = 'PRO', servicesTOP = 'ТОП-Барбер' }

const Service: React.FC = () => {

    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess, isFetching } = useGetServicesQuery(cart.department.id)
    const checkedServices = useAppSelector(state => state.cartSlice.services.map(item => item.id))
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
        if (event.currentTarget.dataset.id && event.currentTarget.dataset.title && event.currentTarget.dataset.price)
            if (checkedServices.includes(Number(event.currentTarget.dataset.id))) {
                dispatch(RemoveService({
                    id: Number(event.currentTarget.dataset.id),
                    name: event.currentTarget.dataset.title,
                    price: Number(event.currentTarget.dataset.price)
                }))
            }
            else {
                dispatch(PullService({
                    id: Number(event.currentTarget.dataset.id),
                    name: event.currentTarget.dataset.title,
                    price: Number(event.currentTarget.dataset.price)
                }))
            }
    }


    return (
        isLoading ? <LoadingPage /> :
            isSuccess ?
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
                        <li
                            className={currentCategory == categoryType.servicesTOP ? styles.li_checked : styles.li}
                            onClick={() => {
                                dispatch(setCurrentCategory(categoryType.servicesTOP))
                                dispatch(RemoveAllService())
                            }}>
                            TOP услуги
                        </li>
                    </ul>
                    {
                        data.length != 0 ?
                            data.category.map((category: ICategory, index: number) => {
                                switch (currentCategory) {
                                    case categoryType.servicesPRO:
                                        if (category.title.indexOf(categoryType.servicesPRO) > 0) {
                                            return <div className={styles.services_wrapper} key={index}>
                                                <h3>{category.title}</h3>
                                                <div className={styles.service}>
                                                    {data.services.map((el: IService) => {
                                                        if (el.category_id == category.id)
                                                            return <div
                                                                className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                                onClick={(e) => handleClick(e)}
                                                                data-id={el.id}
                                                                data-title={el.title}
                                                                data-price={el.price_min}
                                                                key={el.id}
                                                            >
                                                                <span className={styles.title}>{el.title}</span>
                                                                <span className={styles.price}>{el.price_min}₽</span>
                                                            </div>
                                                    })}
                                                </div>
                                            </div>
                                        }
                                        break;
                                    case categoryType.servicesTOP:
                                        if (category.title.indexOf(categoryType.servicesTOP) > 0) {
                                            return <div className={styles.services_wrapper} key={index}>
                                                <h3>{category.title}</h3>
                                                <div className={styles.service}>
                                                    {data.services.map((el: IService) => {
                                                        if (el.category_id == category.id)
                                                            return <div
                                                                className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                                onClick={(e) => handleClick(e)}
                                                                data-id={el.id}
                                                                data-title={el.title}
                                                                data-price={el.price_min}
                                                                key={el.id}>
                                                                <span className={styles.title}>{el.title}</span>
                                                                <span className={styles.price}>{el.price_min}₽</span>
                                                            </div>
                                                    })}
                                                </div>
                                            </div>
                                        }
                                        break;

                                    case categoryType.services:
                                        if ((category.title.indexOf(categoryType.servicesTOP) < 0) && (category.title.indexOf(categoryType.servicesPRO) < 0)) {
                                            return <div className={styles.services_wrapper} key={index}>
                                                <h3>{category.title}</h3>
                                                <div className={styles.service}>
                                                    {data.services.map((el: IService) => {
                                                        if (el.category_id == category.id)
                                                            return <div
                                                                className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                                onClick={(e) => handleClick(e)}
                                                                data-id={el.id}
                                                                data-title={el.title}
                                                                data-price={el.price_min}
                                                                key={el.id}
                                                            >
                                                                <span className={styles.title}>{el.title}</span>
                                                                <span className={styles.price}>{el.price_min}₽</span>
                                                            </div>
                                                    })}
                                                </div>
                                            </div>
                                        }
                                        break;
                                }
                            }) :
                            <ErrorPage title='Ошибка с отображением сервиса' />
                    }
                </div> :
                <ErrorPage title='Глобальная ошибка, обратитесь в поддержку' />
    );
}

export default Service;