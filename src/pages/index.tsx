import Head from 'next/head'
import { About } from '../components/About'
import { Apresentation } from '../components/Apresentation'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Tecnologies } from '../components/Tecnologies'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murilo de Jesus</title>
      </Head>
      <Header />
      <main>
        <About />
        <Apresentation />
        <Tecnologies />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
