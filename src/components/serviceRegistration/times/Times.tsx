import { TimesApi, useGetTimesQuery } from "@/redux/api/getTimes"
import s from './styles.module.scss'
import LoadingPage from "@/components/loading/LoadingPage"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setDateTime } from "@/redux/slices/CartSlice"
import ErrorPage from "@/components/error/ErrorPage"
import { memo } from "react"

export interface Root {
    time: string
    seance_length: number
    sum_length: number
    datetime: string
}
function Times({ barber }: { barber: number }): JSX.Element {

    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess, isFetching } = useGetTimesQuery({ barber, date: cart.date, departmentID: cart.department.id })
    const dispatch = useAppDispatch()


    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (event.currentTarget.dataset.datetime) {
            dispatch(setDateTime(event.currentTarget.dataset.datetime))
        }

    }

    if (isError) return <div>An error has occurred!</div>

    return (
        isLoading ? <LoadingPage /> :
            isSuccess ?
                <ul className={s.ul}>
                    {data.length != 0 ?
                        data.map((item: Root, index: number) => {
                            return <li
                                key={index}
                                className={cart.dateTime == item.datetime ? s.li_checked : s.li}
                                data-datetime={item.datetime}
                                onClick={(e) => handleClick(e)}
                            >
                                {item.time}
                            </li>
                        }) :
                        <ErrorPage title="Ошибка, на данную дату времени нет" />
                    }
                </ul> :
                <ErrorPage title="Ошибка при выводе времени" />
    )
}

export default memo(Times)