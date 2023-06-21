import { useGetCompanyQuery } from '@/redux/api/getCompanyApi';
import styles from './styles.module.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import backImage from '../../../public/img/back.png'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { nextStage } from '@/redux/slices/StageSlice';
import LoadingPage from '../loading/LoadingPage';
import { ICompany } from './ICompany';
import { setDepartment } from '@/redux/slices/CartSlice';

const CompanyChoise = () => {
    const { data, isError, isLoading, isSuccess } = useGetCompanyQuery('')
    const dispatch = useAppDispatch()
    const department = useAppSelector(state => state.cartSlice.department)

    return (
        <main className={styles.main}>
            {/* <span className={styles.header_text}>
                В какое отделение?
            </span> */}

            {isLoading && <LoadingPage />}

            {isSuccess &&
                data.map((item: ICompany, index: number) => {
                    return <div
                        className={department.id == item.id ? styles.department_checked : styles.department}
                        key={index}
                        onClick={() => dispatch(setDepartment({id: item.id, address: item.address}))}
                    >
                        <div className={styles.image_wrapper}>
                            <Image src={item.logo} alt='logo' width={150} height={150} />
                        </div>
                        <span className={styles.adress}>
                            {item.address}
                        </span>
                        <span className={styles.schedule}>
                            {item.schedule}
                        </span>
                    </div>
                })


            }



            {isLoading && <button className={styles.next_stage}><span>Загрузка</span></button>}
            {isError && <button className={styles.next_stage}><span>Ошибка</span></button>}
            {
                department.id != 0 ?
                <button className={styles.next_stage} onClick={() => dispatch(nextStage(1))}><span>Перейти к заказу</span></button>
                :
                <button className={styles.next_stage_disable}><span>Перейти к заказу</span></button>
            }
        </main>
    );
}

export default CompanyChoise;