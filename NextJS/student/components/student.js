import { React, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function Student() {
	const [newStudent, setStudent] = useState("");
	const handleInput = (e) => {
		setStudent(e.target.value);
	};
	const HandleSubmit = (e) => {
		console.log(newStudent);
	};

	return (
		<div className={styles.maincont}>
			<h1>Student</h1>
			<div className={styles.newstudent}>
				<h3>Add new Student</h3>
				<p className={styles.semi}>
					<input
						type="text"
						value={newStudent}
						onChange={(e) => handleInput(e)}
					/>
				</p>
				<p className={styles.semi}>
					<button onClick={() => HandleSubmit()}>Add Student</button>
				</p>
			</div>
		</div>
	);
}
export default Student;
