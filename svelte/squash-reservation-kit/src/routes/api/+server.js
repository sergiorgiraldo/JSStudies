import Database from "better-sqlite3";
import { json } from "@sveltejs/kit";
import { resolve } from "path";

const dbPath = resolve("static", "squash_reservations.db");

export async function POST({ request }) {
	const db = new Database(dbPath);

	const data = await request.formData();
	const date = data.get("date");
	const time = data.get("time");
	const court_number = data.get("court_number");
	const name = data.get("name");

	const stmt = db.prepare(
		"INSERT INTO reservations (date, time, court_number, name) VALUES (?, ?, ?, ?)"
	);

	try {
		stmt.run(date, time, court_number, name);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{ status: 400 }
		);
	}
}

export async function GET() {
	const db = new Database(dbPath);

	const stmt = db.prepare(
		"SELECT * FROM reservations WHERE date >= DATE('now')"
	);
	const reservations = stmt.all();
	return json(reservations);
}
