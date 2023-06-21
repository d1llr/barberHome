import { useGetCompanyQuery } from '@/redux/api/getCompanyApi';
import styles from './styles.module.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import backImage from '../../../public/img/back.png'
import { useAppDispatch } from '@/redux/store';
import { nextStage } from '@/redux/slices/StageSlice';
import LoadingPage from '../loading/LoadingPage';
import { ICompany } from './ICompany';

const CompanyChoise = () => {
    const { data, isError, isLoading, isSuccess } = useGetCompanyQuery('')
    const dispatch = useAppDispatch()
    console.log(data);

    return (
        <main className={styles.main}>
            {/* <span className={styles.header_text}>
                В какое отделение?
            </span> */}

            {isLoading && <LoadingPage />}

            {isSuccess &&
                data.map((item: ICompany, index:number) => {
                    return <div className={styles.department} key={index}>
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
            {isSuccess && <button className={styles.next_stage} onClick={() => dispatch(nextStage(1))}><span>Перейти к заказу</span></button>}
        </main>
    );
}

export default CompanyChoise;