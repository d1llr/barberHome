import { TimesApi, useGetTimesQuery } from "@/redux/api/getTimes"
import s from './styles.module.scss'
import LoadingPage from "@/components/loading/LoadingPage"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { setDateTime } from "@/redux/slices/CartSlice"

export interface Root {
    time: string
    seance_length: number
    sum_length: number
    datetime: string
}
export function Times({ barber, date }: TimesApi): JSX.Element {
    const { data, isLoading, isError, isSuccess, isFetching } = useGetTimesQuery({ barber, date })
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cartSlice)

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (event.currentTarget.dataset.datetime) {
            dispatch(setDateTime(event.currentTarget.dataset.datetime))
        }

    }

    if (isError) return <div>An error has occurred!</div>

    return (
        isLoading ? <LoadingPage /> :
            <ul className={s.ul}>
                {isSuccess && data.map((item: Root, index: number) => {


                    return <li
                        key={index}
                        className={cart.dateTime == item.datetime ? s.li_checked : s.li}
                        data-datetime={item.datetime}
                        onClick={(e) => handleClick(e)}
                    >
                        {item.time}
                    </li>
                })}
            </ul>
    )
}