import s from './styles.module.scss'


const LoadingPage = () => {
    return ( 
        <main className={s.main}>
            <div className={s.lds_dual_ring}>

            </div>
        </main>
     );
}
 
export default LoadingPage;