import { connectDatabase, getAllDocuments, insertDocument } from "../../helpers/db-util";

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
	}
	else if (req.method === "GET") {
		try {
			const documents = await getAllDocuments(client, "students",{_id: -1},{});
			res.status(200).json({ list: documents });
			client.close();
		} catch (error) {
			res.status(500).json({ message: "Getting students failed." });
		}
	}
}

export default handler;
