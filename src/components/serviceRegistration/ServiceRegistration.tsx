import { useGetServicesQuery } from "@/redux/api/getServicesApi";
import styles from './styles.module.scss'
import { ReactHTMLElement, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PullService, RemoveService } from "@/redux/slices/CartSlice";

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
    prepaid_settings:{
        status:string,
        prepaid_full:{
            amount: number,
            currency: string,
        }
        prepaid_min:{
            amount: number,
            currency: string,
        }
    }
    price_max:number,
    price_min:number,
    seance_length: number,
    sex: number,
    title:string,
    weight: number
}


const services = [4242168, 4242169, 4242170, 4242173]





const ServiceRegistration = () => {
    const dispatch = useAppDispatch()
    const [current, setCurrent] = useState('default')
    const [stage, setStage] = useState(1)
    const { data, isLoading, isError, isSuccess } = useGetServicesQuery('')
    const checkedServices = useAppSelector(state => state.cartSlice.services)

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (checkedServices.includes(Number(event.currentTarget.dataset.id))) {
            dispatch(RemoveService(Number(event.currentTarget.dataset.id)))
        }
        else {
            dispatch(PullService(Number(event.currentTarget.dataset.id)))
        }

        console.log(checkedServices);
    }
    return (
        <main className={styles.main}>
            <ul>
                <li className={current == 'default' ? styles.li_checked : styles.li} onClick={() => setCurrent('default')}>
                    Услуги
                </li>
                <li className={current == 'pro' ? styles.li_checked : styles.li} onClick={() => setCurrent('pro')}>
                    PRO услуги
                </li>
            </ul>
            <div className={styles.stages_container}>
                <div className={stage == 1 ? styles.item_current : styles.item_checked}>
                    <span>1</span>
                </div>
                <div className={styles.line} ></div>
                <div className={styles.item}>
                    <span>2</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.item}>
                    <span>3</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.item}>
                    <span>4</span>
                </div>
            </div>

            {isSuccess &&
                <div className={styles.services_container}>
                    <h2>
                        Выбор услуги
                    </h2>
                    {
                        data.category.map((category: ICategory) => {
                            if (services.includes(category.id))
                                return <div className={styles.services_wrapper}>
                                    <h3>{category.title}</h3>
                                    <div className={styles.service}>
                                        {data.services.map((el: IService) => {
                                            if (el.category_id == category.id)
                                                return <div
                                                    className={checkedServices.includes(el.id) ? styles.block_checked : styles.block}
                                                    onClick={(e) => handleClick(e)}
                                                    data-id={el.id}>
                                                    <span className={styles.title}>{el.title}</span>
                                                    <span className={styles.price}>{el.price_min}</span>
                                                </div>
                                        })}
                                    </div>
                                </div>
                        })
                    }
                </div>}
                <button>
                    Далее
                </button>
        </main>
    );
}

export default ServiceRegistration;