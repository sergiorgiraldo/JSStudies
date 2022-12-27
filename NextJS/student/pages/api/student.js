import {
	connectDatabase,
	getAllDocuments,
	insertDocument,
	deleteDocument
} from "../../helpers/db-util";

async function handler(req, res) {
	let client;

	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({
			message: "Connecting to the database failed!"
		});
		return;
	}

	if (req.method === "POST") {
		const newStudent = req.body.student;

		try {
			await insertDocument(client, "students", { student: newStudent });
			client.close();
		} catch (error) {
			res.status(500).json({ message: "Inserting data failed!" });
			return;
		}

		res.status(201).json({ message: "New student enrolled!" });
	} else if (req.method === "GET") {
		try {
			const documents = await getAllDocuments(
				client,
				"students",
				{ _id: -1 },
				{}
			);
			res.status(200).json({ list: documents });
			client.close();
		} catch (error) {
			res.status(500).json({ message: "Getting students failed." });
		}
	} else if (req.method === "DELETE") {
		try {
			await deleteDocument(client, "students", req.body.student);
			res.status(200).json({ message: "Student deleted" });
			client.close();
		} catch (error) {
			res.status(500).json({ message: "Deleting student failed." });
		}
	}
}
export default handler;
