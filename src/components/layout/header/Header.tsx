
import Image from 'next/image';
import styles from './styles.module.scss'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.location}>
                <Image src={'https://speedmouse.ru/index/img/map.png'} alt='location'  width={20} height={20}/>
                <span>Москва</span>
            </div>
        </header>
     );
}
 
export default Header;