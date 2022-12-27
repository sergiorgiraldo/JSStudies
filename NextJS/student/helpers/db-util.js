import { MongoClient, ObjectID } from "mongodb";

export async function connectDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://sa:sa@cluster0.nnllzq2.mongodb.net/?retryWrites=true&w=majority"
	);

	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db("school");

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function deleteDocument(client, collection, student) {
	const db = client.db("school");

	const query = { _id: new ObjectID(student) };

	const result = await db.collection(collection).deleteOne(query);

	return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
	const db = client.db("school");

	const documents = await db
		.collection(collection)
		.find(filter)
		.sort(sort)
		.toArray();

	var list = documents.map((d) => {
		return {
			_id: d._id.toString(),
			student: d.student
		};
	});

	return list;
}
