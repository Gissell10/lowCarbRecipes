import Head from "next/head";
import styles from "../styles/Home.module.css";

import Searchpages from "../component/Searchpages";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Low carb Recipies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="icn_cooking.svg" />
      </Head>

      <main className="Home_main__nLjiQ">
        <Searchpages />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
}
