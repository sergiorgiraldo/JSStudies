import {connectDatabase, insertDocument} from "../../lib/db-util";

async function handler(req, res) {
	let client;

	try {
		client = await connectDatabase();
	} 
	catch (error) {
		res.status(500).json({ message: "Connecting to the database failed! " + error });
		return;
	}

	if (req.method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			client.close();
			return;
		}

		const newComment = {
			email,
			name,
			message
		};

		let result;

		try {
			result = await insertDocument(client, "comments", newComment);
			newComment._id = result.insertedId;
			res.status(201).json({
				message: "Added comment.",
				comment: newComment
			});
		} 
		catch (error) {
			client.close();
			res.status(500).json({ message: "Inserting comment failed!" });
		}
		finally{
			client.close();
		}
	}

}

export default handler;
