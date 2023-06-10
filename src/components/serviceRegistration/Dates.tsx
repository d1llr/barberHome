import { useGetDatesQuery } from "@/redux/api/getDates";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { memo } from "react";


const Dates = () => {
    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess } = useGetDatesQuery(cart.barber)

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const today = new Date()
    const mouth = months[today.getMonth()]

    return (
        <main className={styles.dates_container}>
            <h2>
                Выбор даты
            </h2>
            <p>
                Сегодня {today.getDate()} {months[today.getMonth()]} | {days[today.getDay()]}
            </p>
            <ul>
                {isSuccess && data.booking_days[today.getMonth() + 1].map((day: number, index: number) => {
                    if (index < 5) {
                        return <li key={index}><span>{day}</span></li>
                    }
                    else {

                    }
                })}
            </ul>
        </main>
    );
}

export default Dates;