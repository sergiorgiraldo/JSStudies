import Head from "next/head";
import styles from "../styles/Home.module.css";
import Student from "../components/Student";
import { connectDatabase, getAllDocuments} from "../helpers/db-util";

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


export async function getServerSideProps(){
	const client = await connectDatabase();
	const list = await getAllDocuments(client, "students",{_id: -1},{});
	console.log(list);
	client.close();

	return {
		props:{"list":list}
	}
}
