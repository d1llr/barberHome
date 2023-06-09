import { useGetServicesQuery } from "@/redux/api/getServicesApi";
import styles from './styles.module.scss'
import { ReactHTMLElement, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PullService, RemoveService } from "@/redux/slices/CartSlice";
import Service from "./Service";
import Barber from "./Barber";
import Dates from "./Dates"
import { setStage, prevStage, nextStage } from "@/redux/slices/orderStageSlice";

interface ICategory {
    api_id: number,
    id: number,
    sex: number,
    title: string,
    weight: number
}


interface IService {
    abonement_restriction: number,
    active: number,
    category_id: number,
    comment: string,
    discount: number,
    id: number,
    image: string,
    prepaid: string,
    prepaid_settings: {
        status: string,
        prepaid_full: {
            amount: number,
            currency: string,
        }
        prepaid_min: {
            amount: number,
            currency: string,
        }
    }
    price_max: number,
    price_min: number,
    seance_length: number,
    sex: number,
    title: string,
    weight: number
}


const services = [4242168, 4242169, 4242170, 4242173]





const ServiceRegistration = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cartSlice)

    const stage = useAppSelector(state => state.orderStageSlice.stage)
    const switcher = (stage: number) => {
        switch (stage) {
            case 1:
                return <Service />
                break;
            case 2:
                return <Barber />
                break;
            case 3:
                return <Dates />
                break;
            default:
                break;
        }
    }



    const handleNextStage = (stage: number) => {
        switch (stage) {
            case 2:
                cart.services.length != 0 && dispatch(setStage(2))
                break;
            case 3:
                cart.services.length == 0 ? dispatch(setStage(1)) :
                    cart.barber == 0 ? dispatch(setStage(2)) :
                        dispatch(setStage(3))
                break;

            default:
                break;
        }
    }


    return (
        <main className={styles.main}>
            <div className={styles.stages_container}>
                <div
                    className={stage == 1 ? styles.item_current : styles.item_available}
                    onClick={() => handleNextStage(1)}>
                    <span>1</span>
                </div>
                <div className={styles.line} ></div>
                <div
                    className={
                        stage == 2 ? styles.item_current : cart.services.length != 0 ? styles.item_available : styles.item_unavailable}
                    onClick={() => handleNextStage(2)} >
                    <span>2</span>
                </div>
                <div className={styles.line}></div>
                <div
                    className={stage == 3 ? styles.item_current : cart.barber != 0 ? styles.item_available : styles.item_unavailable}
                    onClick={() => handleNextStage(3)}>
                    <span>3</span>
                </div>
                <div className={styles.line}></div>
                <div
                    className={stage == 4 && cart.date != '' ? styles.item_current : styles.item_unavailable}
                    onClick={() => handleNextStage(4)}>
                    <span>4</span>
                </div>
            </div>
            {switcher(stage)}
            <div className={styles.buttons_container}>
                {
                    stage > 1 &&
                    <button onClick={() => dispatch(prevStage())}>
                        Назад
                    </button>
                }
                {
                    stage == 1 ?
                        cart.services.length != 0 &&
                        <button onClick={() => dispatch(nextStage())}>
                            Далее
                        </button>
                        :
                        stage == 2 ?
                            cart.barber != 0 &&
                            <button onClick={() => dispatch(nextStage())}>
                                Далее
                            </button>
                            :
                            stage == 3 ?
                                cart.date != '' &&
                                <button onClick={() => dispatch(nextStage())}>
                                    Далее
                                </button>
                                : ''
                }
            </div>
        </main>
    );
}

export default ServiceRegistration;