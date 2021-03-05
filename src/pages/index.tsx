import Head from 'next/head'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murilo de Jesus</title>
      </Head>

      <Header />
      <About />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
