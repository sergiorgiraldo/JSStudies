import Head from "next/head";
import styles from "../styles/Home.module.css";
import Student from "../components/Student";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>New Student</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Student />
		</div>
	);
}
