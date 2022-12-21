export async function getAllStudents() {
	// const response = await fetch(
	// 	"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/events.json"
	// );
	// const data = await response.json();

	const list = [
        {"id":1, "name":"john doe"},
        {"id":2, "name":"jane doe"}

    ];

	// for (const key in data) {
	// 	events.push({
	// 		id: key,
	// 		...data[key]
	// 	});
	// }

	return list;
}

export async function getStudentById(id) {
	const allStudents = await getAllStudents();
	return allStudents.find((s) => s.id === id);
}