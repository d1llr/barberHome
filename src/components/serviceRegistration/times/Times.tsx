import { TimesApi, useGetTimesQuery } from "@/redux/api/getTimes"
import s from './styles.module.scss'
import LoadingPage from "@/components/loading/LoadingPage"

export interface Root {
    time: string
    seance_length: number
    sum_length: number
    datetime: string
  }
export function Times({ barber, date }: TimesApi): JSX.Element {
    const { data, isLoading, isError, isSuccess } = useGetTimesQuery({ barber, date })

    if (isError) return <div>An error has occurred!</div>

    return (
        isLoading ? <LoadingPage/> : 
        <ul className={s.ul}>
            {isSuccess && data.map((item:Root, index: number)=>{
                return <li key={index}>
                    {item.time}
                </li>
            })}
        </ul>
    )
}