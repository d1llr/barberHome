import { useGetDatesQuery } from "@/redux/api/getDates";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Wheel from "./Wheel";
import { format, subDays } from "date-fns"
import { memo } from "react";


const Dates = memo(() => {
    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess } = useGetDatesQuery(cart.barber)
    console.log(data);
    function formateDate(_relative: number, absolute: number) {
        console.log(format(subDays(new Date(), absolute), "iii d LLL"));

        return format(subDays(new Date(), absolute), "iii d LLL")
    }

    return (
        <main className={styles.dates_container} style={{ width: 180, height: 180 }}>
            <Wheel
                loop
                length={24}
                width={140}
                perspective="right"
                setValue={formateDate}
            />
        </main>
    );
}
)

export default Dates;