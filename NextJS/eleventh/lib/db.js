import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/auth-demo?retryWrites=true&w=majority"
	);

	return client;
}
