import styles from './styles.module.scss'
import sadSmile from '../../../public/img/sadsmile.png'
import Image from 'next/image';


type IProps = {
    title:string
}

const ErrorPage:React.FC<IProps> = ({title}) => {
    return (
        <div className={styles.unknown}>
            <div className={styles.image_wrapper}>
                <Image src={sadSmile} width={200} height={200} alt='Фото барбера'/>
            </div>
            <span className={styles.name}>
                Ошибка
            </span>
            <span className={styles.role}>
                {title}
            </span>
            <div className={styles.rating}>
                <span className={styles.stars}>
                    Попробуйте позже
                </span>
            </div>
        </div>
    );
}

export default ErrorPage;