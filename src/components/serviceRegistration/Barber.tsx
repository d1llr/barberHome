import { useGetServicesQuery } from '@/redux/api/getServicesApi'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { PullBarber, PullService, RemoveBarber, RemoveService } from '@/redux/slices/CartSlice'
import { useGetBarberQuery } from '@/redux/api/getBarber'
import Image from 'next/image'

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
    const { data, isLoading, isError, isSuccess } = useGetBarberQuery(cart.services)

    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (cart.barber == Number(event.currentTarget.dataset.id)) {
            dispatch(RemoveBarber())
        }
        else {
            dispatch(PullBarber(Number(event.currentTarget.dataset.id)))
        }

        console.log(cart);
    }
    return (
        <div className={styles.barber_container}>
            <h2>
                Выбор мастера
            </h2>
            <div className={styles.barber_wrapper}>
                {isSuccess &&
                    data.map((item: Ibarber) => {
                        return <div className={cart.barber != item.id ? styles.barber : styles.barber_checked} onClick={(e) => handleClick(e)} data-id={item.id}>
                            <div className={styles.image_wrapper}>
                                <Image src={item.avatar} width={200} height={200} alt='Фото баребра' />
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
                }
            </div>

        </div>
    );
}

export default Barber;