import '../styles/globals.css'
import '../components/header/Header.css'
import '../components/footer/Footer.css'
import'../components/home/Home.css'
import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/Footer";
import HomePage from "../components/home/HomePage";
function MyApp({ Component, pageProps }) {
  return (
      <div>
      <Head>
        <title>Calcino App</title>
        <meta name="description" content="Calcino App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <Header />
          <div className={styles.container}>
              <main className={styles.main}>
                  <Component {...pageProps} />
              </main>
          </div>

          <Footer />
      </div>
  )

}

export default MyApp
