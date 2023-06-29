import { useGetUserRecordsQuery } from "@/redux/api/getUserRecords";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import s from './styles.module.scss'
import { useState } from "react";
import LoadingPage from "@/components/loading/LoadingPage";
import ErrorPage from "@/components/error/ErrorPage";
import Image from "next/image";
import logOutImage from '../../../../public/img/exit.png'
import { UserStages, setUserStage } from "@/redux/slices/UserSlice";
import likeImage from '../../../../public/img/like.png'





interface IRecord {
    id: number
    services: Service[]
    company: Company
    clients_count: number
    date: string
    datetime: string
    create_date: string
    comment: string
    deleted: boolean
    attendance: number
    length: number
    notify_by_sms: number
    notify_by_email: number
    master_requested: boolean
    online: boolean
    api_id: string
    last_change_date: string
    prepaid: boolean
    prepaid_confirmed: boolean
    activity_id: number
    resource_instances: any[]
    staff: Staff
    paid_amount: number
    allow_delete_record: boolean
    allow_change_record: boolean
    is_confirmation_needed: boolean
}

interface Service {
    id: number
    title: string
    cost: number
    price_min: number
    price_max: number
    discount: number
    amount: number
    seance_length: number
    api_id: string
    abonement_restriction: number
    prepaid_settings: PrepaidSettings
}

interface PrepaidSettings {
    status: string
    prepaid_full: PrepaidFull
    prepaid_min: PrepaidMin
}

interface PrepaidFull {
    amount: number
    currency: string
}

interface PrepaidMin {
    amount: number
    percent: number
    currency: string
}

interface Company {
    id: number
    title: string
    country_id: number
    country: string
    city_id: number
    city: string
    phone: string
    phones: string[]
    timezone: number
    address: string
    coordinate_lat: number
    coordinate_lon: number
    allow_delete_record: boolean
    allow_change_record: boolean
    site: string
    currency_short_title: string
    allow_change_record_delay_step: number
    allow_delete_record_delay_step: number
    logo: string
}

interface Staff {
    id: number
    name: string
    specialization: string
    position: any[]
    show_rating: number
    rating: number
    votes_count: number
    avatar: string
    avatar_big: string
    comments_count: number
}



const User = () => {
    const user_token = useAppSelector(state => state.UserSlice.userToken)
    const dispatch = useAppDispatch()



    const { data, isSuccess, isError, isLoading } = useGetUserRecordsQuery({ user_token })
    const [stage, setStage] = useState(1)
    isLoading && <LoadingPage />
    isError && <ErrorPage title="Ошибка при получении записей" />

    const logOut = (): void => {
        localStorage.removeItem('user_token')
        dispatch(setUserStage({ stage: UserStages.Auth, userToken: null },))
    }


    const DateConvertation = (value: string): string => {
        const date: Date = new Date(value);

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            weekday: 'short'
        };

        return date.toLocaleDateString('ru-RU', options);
    }


    return (
        <main className={s.user_main}>
            <h2 className={s.h2}>Мои записи</h2>
            <ul className={s.ul}>
                <li className={stage == 1 ? s.li_checked : s.li} onClick={() => setStage(1)}>
                    Активные
                </li>
                <li className={stage == 2 ? s.li_checked : s.li} onClick={() => setStage(2)}>
                    История
                </li>
            </ul>
            {
                isSuccess && <ul className={s.record_container}>
                    {data.data.map((item: IRecord) => {
                        if (item.deleted && stage == 2)
                            return <li className={s.record} key={item.id}>
                                <div>
                                    <span className={s.title_date}>
                                        {DateConvertation(item.date)}
                                    </span>
                                </div>
                                <div>
                                    <div className={s.department}>
                                        <div className={s.image_wrapper}>
                                            <Image src={item.company.logo} alt='logo' width={100} height={100} />
                                        </div>
                                        <span className={s.adress}>
                                            {item.company.address}
                                        </span>
                                        <span className={s.phone}>
                                            {item.company.phone}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    {item.services.map((li) => {
                                        return <span className={s.services}>
                                            <span className={s.title}>
                                                {li.title}
                                            </span>
                                            <span className={s.price}>
                                                {li.price_max}₽
                                            </span>
                                        </span>
                                    })}
                                </div>
                                <div>
                                    <div className={s.barber}>
                                        <div className={s.image_wrapper}>
                                            <Image src={item.staff.avatar} width={200} height={200} alt='Фото барбера' />
                                        </div>
                                        <span className={s.name}>
                                            {item.staff.name}
                                        </span>
                                        <span className={s.role}>
                                            {item.staff.specialization}
                                        </span>
                                        <div className={s.rating}>
                                            <span className={s.stars}>
                                                ★★★★★
                                            </span>
                                            <span className={s.comments}>
                                                {item.staff.comments_count}
                                                <Image src={likeImage} width={10} height={10} alt="оценок"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </li>
                    })}
                </ul>
            }
            {isLoading && <LoadingPage />}
            {isError && <ErrorPage title="Ошибка при получении записей" />}
            <div className={s.logout} onClick={() => logOut()}>
                <Image src={logOutImage} width={20} height={20} alt="Выход" />
            </div>
        </main>
    );
}

export default User;