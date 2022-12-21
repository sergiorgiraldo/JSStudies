import Head from "next/head";
import styles from "../styles/Home.module.css";
import Student from "../components/Student";
import { getAllStudents } from "../helpers/api-utils";

export default function Home(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>New Student</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Student list={props.list}/>
		</div>
	);
}


export const getServerSideProps = async (ctx) => {
	const list = await getAllStudents();

	return {
		props:{
			list:list
		}
	}
}
