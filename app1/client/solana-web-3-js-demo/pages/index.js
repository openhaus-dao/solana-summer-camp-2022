import Head from 'next/head'
import Image from 'next/image'
import GetAccountInfo from '../components/solana/GetAccountInfo'
import SetCluster from '../components/solana/SetCluster'
import SplToken from '../components/solana/SplToken'
import TransferSol from '../components/solana/TransferSol'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenHaus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <SetCluster />
        </div>

        <div>
          <GetAccountInfo />
        </div>

        <div>
          <TransferSol />
        </div>

        <div>
          <SplToken />
        </div>
      </main>
    </div>
  )
}