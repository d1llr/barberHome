import { useGetCompanyQuery } from '@/redux/api/getCompanyApi';
import styles from './styles.module.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import backImage from '../../../public/img/back.png'
import { useAppDispatch } from '@/redux/store';
import { nextStage } from '@/redux/slices/StageSlice';

const CompanyChoise = () => {
    const { data, isError, isLoading, isSuccess } = useGetCompanyQuery('')
    const dispatch = useAppDispatch()
    return (
        <main className={styles.main}>
            {/* <span className={styles.header_text}>
                В какое отделение?
            </span> */}

            {isLoading && <div className={styles.department}>
                <Skeleton count={5} />
            </div>}

            {isSuccess && <div className={styles.department}>
                <div className={styles.image_wrapper}>
                    <Image src={data.logo} alt='logo' width={230} height={230} />
                </div>
                <span className={styles.adress}>
                    {data.address}
                </span>
                <span className={styles.schedule}>
                    {data.schedule}
                </span>
            </div>}



            {isLoading && <button className={styles.next_stage}><span>Загрузка</span></button>}
            {isError && <button className={styles.next_stage}><span>Ошибка</span></button>}
            {isSuccess && <button className={styles.next_stage} onClick={()=>dispatch(nextStage(1))}><span>Перейти к заказу</span></button>}
        </main>
    );
}

export default CompanyChoise;