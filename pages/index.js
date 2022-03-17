import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "../components/footer/Footer";
import HomePage from "../components/home/HomePage";

export default function Home() {
  return (
      <HomePage />
  )
}
