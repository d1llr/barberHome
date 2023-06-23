import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from '../styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullBarber, PullService, RemoveBarber, RemoveService } from '@/redux/slices/CartSlice'
import { useGetBarberQuery } from '@/redux/api/getBarber'
import Image from 'next/image'
import LoadingPage from '../../loading/LoadingPage'
import sadSmile from '../../../public/img/sadsmile.png'
import ErrorPage from '../../error/ErrorPage'



interface Ibarber {
    api_id: number,
    avatar: string,
    avatar_big: string,
    bookable: boolean,
    comments_count: number,
    fired: number,
    hidden: number,
    id: number,
    name: string,
    rating: number,
    specialization: string,
    status: number,
    user_id: number,
    weight: number
}


const Barber = () => {
    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess } = useGetBarberQuery({ services: cart.services.map(item => item.id), departmentID: cart.department.id })
    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.currentTarget.dataset.id && event.currentTarget.dataset.name)
            if (cart.barber.id == Number(event.currentTarget.dataset.id)) {
                dispatch(RemoveBarber())
            }
            else {
                dispatch(PullBarber({
                    id: Number(event.currentTarget.dataset.id),
                    name: event.currentTarget.dataset.name
                }))
            }
    }

    console.log('render');
    return (
        isLoading ? <LoadingPage /> :
            isSuccess ? <main className={styles.barber_container}>
                <div className={styles.barber_wrapper}>
                    {isSuccess &&
                        data.length != 0 ?
                        data.map((item: Ibarber) => {
                            return <div
                                key={item.id}
                                className={cart.barber.id != item.id ? styles.barber : styles.barber_checked}
                                onClick={(e) => handleClick(e)}
                                data-id={item.id}
                                data-name={item.name}
                            >
                                <div className={styles.image_wrapper}>
                                    <Image src={item.avatar} width={200} height={200} alt='Фото барбера' />
                                </div>
                                <span className={styles.name}>
                                    {item.name}
                                </span>
                                <span className={styles.role}>
                                    {item.specialization}
                                </span>
                                <div className={styles.rating}>
                                    <span className={styles.stars}>
                                        ★★★★★
                                    </span>
                                    <span className={styles.comments}>
                                        {item.comments_count}
                                    </span>
                                </div>
                            </div>
                        })
                        :
                        <ErrorPage title='На выбранные услуги не нашлось мастеров' />
                    }
                </div>

            </main> : <ErrorPage title='Ошибка, отображение барберов невозможно' />
    )


}

export default Barber;