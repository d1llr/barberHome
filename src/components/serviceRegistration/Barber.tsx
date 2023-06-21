import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullBarber, PullService, RemoveBarber, RemoveService } from '@/redux/slices/CartSlice'
import { useGetBarberQuery } from '@/redux/api/getBarber'
import Image from 'next/image'
import LoadingPage from '../loading/LoadingPage'
import sadSmile from '../../../public/img/sadsmile.png'



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
    const { data, isLoading, isError, isSuccess } = useGetBarberQuery({ services: cart.services, departmentID: cart.department.id })
    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (cart.barber == Number(event.currentTarget.dataset.id)) {
            dispatch(RemoveBarber())
        }
        else {
            dispatch(PullBarber(Number(event.currentTarget.dataset.id)))
        }
    }

    return (
        isLoading ? <LoadingPage /> :
            <main className={styles.barber_container}>
                <div className={styles.barber_wrapper}>
                    {isSuccess &&
                        data.length != 0 ?
                        data.map((item: Ibarber) => {
                            return <div key={item.id} className={cart.barber != item.id ? styles.barber : styles.barber_checked} onClick={(e) => handleClick(e)} data-id={item.id}>
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
                        <div className={styles.unknown}>
                            <div className={styles.image_wrapper}>
                                <Image src={sadSmile} width={200} height={200} alt='Фото барбера' />
                            </div>
                            <span className={styles.name}>
                                Ошибка
                            </span>
                            <span className={styles.role}>
                                На выбранные услуги не нашлось мастеров
                            </span>
                            <div className={styles.rating}>
                                <span className={styles.stars}>
                                    Попробуйте выбрать другие
                                </span>
                            </div>
                        </div>
                    }
                </div>

            </main>
    );
}

export default Barber;