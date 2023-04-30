import { useAppDispatch } from '@/redux/store';
import styles from './styles.module.scss'
import { nextStage } from '@/redux/slices/StageSlice';
import Image from 'next/image';
import logo from '../../../public/img/logotype.png'

const Intro = () => {
    const dispatch = useAppDispatch()
    return (
        <main className={styles.main}>
            <div className={styles.image_wrapper}>
                <Image src={logo} width={350} height={350} alt='Logotype'/>
                <span>— стрижем и бреем —</span>
            </div>

            <button className={styles.next_stage} onClick={() => dispatch(nextStage(1))}>
                Записаться
            </button>
        </main>
    );
}

export default Intro;