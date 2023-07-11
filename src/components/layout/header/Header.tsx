
import Image from 'next/image';
import styles from './styles.module.scss'
import img from '../../../../public/img/razor.png'
import loginImage from '../../../../public/img/lk.png'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import mapImage from '../../../../public/img/map.png'
import backImage from '../../../../public/img/back.png'
import { prevStage } from '@/redux/slices/StageSlice';



import logo from '../../../../public/img/logotype.png'
import { openModal } from '@/redux/slices/UserModalSlice';
import UserModal from '@/components/user/UserModal';
import { UserStages, setUserStage } from '@/redux/slices/UserSlice';
import { setStage } from '@/redux/slices/orderStageSlice';
const Header = () => {

    const state = useAppSelector(state => state.stageSlice.stage == 0 ? undefined : state.stageSlice)
    const dispatch = useAppDispatch()

    const departmentID = useAppSelector(state => state.cartSlice.department.id)
    return (
        <header className={styles.header}>
            {state &&
                <div className={styles.backImage_wrapper}>
                    <Image src={backImage} alt='Back image' width={20} height={20} onClick={() => {
                        dispatch(prevStage())
                        dispatch(setStage(1))
                    }} />
                </div>
            }
            {state ?
                <div className={styles.location_wrapper}>
                    <Image src={logo} width={70} height={70} alt='logo' />
                </div> :
                <div className={styles.location_wrapper}>
                    <div className={styles.location}>
                        <Image src={mapImage} alt='location' width={20} height={20} />
                        <span>Москва</span>
                    </div>
                    <div className={styles.image_container}>
                        <Image src={img} alt='фото' width={40} height={40} />
                        <div className={styles.line}>

                        </div>
                        <Image src={img} alt='фото' width={40} height={40} className={styles.right} />
                    </div>
                </div>}
            {
                departmentID ? <div className={styles.login} onClick={() => dispatch(openModal())}>
                    <Image src={loginImage} alt='login' width={50} height={50} />
                </div> : <div></div>
            }

            <UserModal />
        </header>
    );
}

export default Header;