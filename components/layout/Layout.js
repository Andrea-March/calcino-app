
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}