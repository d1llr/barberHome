import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullService, RemoveAllService, RemoveService } from '@/redux/slices/CartSlice'
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

const Service: React.FC = () => {


    const { data, isLoading, isError, isSuccess, isFetching } = useGetServicesQuery('')
    const checkedServices = useAppSelector(state => state.cartSlice.services)
    const dispatch = useAppDispatch()
    const [current, setCurrent] = useState<string>('default')
    let services: number[] = []

    if (current == 'pro') {
        services = [12652125, 12652128, 12652121, 12652131]
    }
    else {
        services = [12652126, 12652129, 12652123, 12652132]
    }


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
                        className={current == 'default' ? styles.li_checked : styles.li}
                        onClick={() => {
                            setCurrent('default')
                            dispatch(RemoveAllService())
                        }}>
                        Услуги
                    </li>
                    <li
                        className={current == 'pro' ? styles.li_checked : styles.li}
                        onClick={() => {
                            setCurrent('pro')
                            dispatch(RemoveAllService())
                        }}>
                        PRO услуги
                    </li>
                </ul>
                {isSuccess &&
                    data.category.map((category: ICategory) => {
                        if (services.includes(category.id))
                            return <div className={styles.services_wrapper}>
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