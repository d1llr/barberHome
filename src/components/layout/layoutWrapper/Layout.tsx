
import Header from "../header/Header"
import styles from './styles.module.scss'
type LayoutProps = {
    children: React.ReactNode,
};


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>

        </>
    )
}