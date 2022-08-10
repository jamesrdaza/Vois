import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { web3 } from "web3";

export default function home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Vois</title>
        <meta name="description" content="Vois" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AppTest
        </h1>
        <div className={styles.buttonContainer} >
          <Link href="/signup" className={styles.button}></Link>
          <Link href="/login">Sign In</Link>
        </div>


      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
