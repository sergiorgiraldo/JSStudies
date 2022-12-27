import { MongoClient } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/?retryWrites=true&w=majority"
	);
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db("blog");
	const result = await db.collection(collection).insertOne(document);

	return result;
}
