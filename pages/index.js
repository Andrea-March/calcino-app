import { useRouter } from 'next/router';
import HomePage from "../components/home/HomePage";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/Footer";
import AuthWrapper from "../components/auth-wrapper/authWrapper";
import Layout from "../components/layout/Layout";

export default function Home() {


  return (
      <Layout>
          <>
            <AuthWrapper />
            <HomePage />
          </>
      </Layout>
  )
}
