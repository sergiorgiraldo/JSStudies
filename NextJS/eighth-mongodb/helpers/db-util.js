import { MongoClient } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/?retryWrites=true&w=majority"
	);

	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db("test");

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
	const db = client.db("test");

	const documents = await db
		.collection(collection)
		.find(filter)
		.sort(sort)
		.toArray();

	return documents;
}
