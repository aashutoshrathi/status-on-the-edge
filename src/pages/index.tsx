import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Status on the Edge</title>
        <meta name="description" content="Status on the Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>{"Get started by adding status to the path like ->"}</p>
          <a href={"https://status-on-the-edge.vercel.app/api/400"}>
            https://status-on-the-edge.vercel.app/api/400
          </a>
        </div>
      </main>
    </>
  );
}
