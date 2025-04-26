import Head from "next/head";
import styles from "../../styles/home.module.css";
 
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1>Meu projeto</h1>
    </div>
  );
}
