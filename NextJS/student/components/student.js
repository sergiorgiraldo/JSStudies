import { React, useRef } from "react";
import styles from "../styles/Home.module.css";
import StudentList from "../components/student-list";

function Student(props) {
	const studentRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();
		const newStudent = studentRef.current.value;
		fetch("/api/student", {
			method: "POST",
			body: JSON.stringify({ student: newStudent }),
			headers: {
				"Content-Type": "application/json"
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	return (
		<div className={styles.maincont}>
			<h1>Student</h1>
			<div className={styles.newstudent}>
				<h3>Add new Student</h3>
				<form onSubmit={handleSubmit}>
					<div className={styles.semi}>
						<input
							type="text"
							id="student"
							placeholder="new student"
							ref={studentRef}
						/>
					</div>
					<div className={styles.semi}>
						<button>Add Student</button>
					</div>
				</form>
				<hr />
				<div>
					<StudentList list={props.list} />
				</div>
			</div>
		</div>
	);
}

export default Student;
