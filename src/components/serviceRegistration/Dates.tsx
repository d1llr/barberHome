import { useGetDatesQuery } from "@/redux/api/getDates";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import calendarImage from '../../../public/img/calendar.png'
import { TimesApi, getTimes, useGetTimesQuery } from "@/redux/api/getTimes";
import Times from "./times/Times";
import { removeDateTime, setDates } from "@/redux/slices/CartSlice";
import LoadingPage from "../loading/LoadingPage";
import { setDate } from "date-fns";
import ErrorPage from "../error/ErrorPage";

const Dates = () => {
    const cart = useAppSelector(state => state.cartSlice)
    const dispatch = useAppDispatch()
    const { data, isLoading, isError, isSuccess } = useGetDatesQuery({ barber: cart.barber.id, departmentID: cart.department.id })
    const [calendarOpen, setCalendarOpen] = useState(false)

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const monthsI = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const today = new Date()
    const mouth = months[today.getMonth()]

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (event.currentTarget.dataset.id) {
            if (cart.date != data.booking_dates[event.currentTarget.dataset.id])
                dispatch(removeDateTime())
            dispatch(setDates(event.currentTarget.dataset.id))
        }

    }


    console.log('render');


    const setDataId = (day: number) => {
        let index = data.booking_days[today.getMonth() + 1].indexOf(day)
        let iso = data.booking_dates[index]
        return iso
    }


    const daysInMonth = useCallback((month: number, year: number) => {
        console.log(new Date(year, month - 1, 0).getDate());
        let arr = []
        for (let index = 1; index <= new Date(year, month - 1, 0).getDate(); index++) {
            arr.push(index)
        }
        return arr
    }, [isSuccess])

    // проверка на сегодняшний день, для того, чтобы сразу выбирать нынешнюю дату как активную
    useEffect(() => {
        if (isSuccess && cart.date == '')
            dispatch(setDates(data.booking_dates[0]))
    }, [isSuccess])

    return (
        isLoading ? <LoadingPage /> :
            isSuccess ?
                <main className={styles.dates_container}>
                    <p>
                        Сегодня {today.getDate()} {months[today.getMonth()]} | {days[today.getDay()]}
                    </p>
                    <div className={styles.dates_wrapper}>
                        <ul className={styles.ul}>
                            {(isSuccess &&  data.booking_days[today.getMonth() + 1]) && data.booking_days[today.getMonth() + 1].map((day: number, index: number) => {
                                if (index < 5) {
                                    return <li
                                        key={index}
                                        className={cart.date == setDataId(day) ? styles.li_selected : styles.li}
                                        onClick={(e) => handleClick(e)}
                                        data-id={setDataId(day)}
                                    >
                                        <span>{day}</span>
                                    </li>
                                }
                                else {

                                }
                            })}
                            <li
                                className={styles.li}
                                onClick={() => { setCalendarOpen(prev => !prev) }}
                            >
                                <Image src={calendarImage} width={30} height={30} alt="Календарь" />

                            </li>
                        </ul>
                        {calendarOpen && <div className={styles.calendar_wrapper}>
                            <div className={styles.header}>
                                {monthsI[today.getMonth()]} {today.getFullYear()}
                            </div>
                            <ul className={styles.ul_dates}>
                                {daysInMonth(today.getMonth(), today.getFullYear()).map((item: number, index) => {
                                    if (data.booking_days[today.getMonth() + 1].includes(item)) {
                                        return <li
                                            key={index}
                                            className={cart.date == setDataId(item) ? styles.li_selected : styles.li_avaible}
                                            onClick={(e) => handleClick(e)}
                                            data-id={setDataId(item)}
                                        >
                                            {item}
                                        </li>
                                    }
                                    else {
                                        return <li
                                            key={index}
                                            className={styles.li_unavailible}>
                                            {item}
                                        </li>
                                    }

                                })}
                            </ul>
                        </div>
                        }
                        <div className={styles.hr}>

                        </div>
                        {cart.date != '' && <Times barber={cart.barber.id} />}
                    </div>

                </main> :
                <ErrorPage title="Ошибка" />
    );
}

export default Dates;