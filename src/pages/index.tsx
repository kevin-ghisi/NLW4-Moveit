import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <section>
        <div>
          <h1>Oi</h1>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}