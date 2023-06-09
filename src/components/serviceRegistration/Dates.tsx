import { useGetDatesQuery } from "@/redux/api/getDates";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { memo } from "react";


const Dates = () => {
    const cart = useAppSelector(state => state.cartSlice)
    const { data, isLoading, isError, isSuccess } = useGetDatesQuery(cart.barber)

    return (
        <main className={styles.dates_container} style={{ width: 180, height: 180 }}>
            
        </main>
    );
}

export default Dates;