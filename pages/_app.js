import '../styles/globals.css'
import '../components/header/Header.css'
import '../components/footer/Footer.css'
import'../components/home/Home.css'
import '../components/login/Login.css'
import '../components/button/Button.css'
import '../components/input/Input.css'
import Head from "next/head";

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
            <Component {...pageProps}/>
      </div>
  )

}

export default MyApp
