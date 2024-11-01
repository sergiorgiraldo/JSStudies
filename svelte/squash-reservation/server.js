import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Database from "better-sqlite3";

const db = new Database("squash_reservations.db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to create a reservation
app.post("/api/reservation", (req, res) => {
	const { date, time, court_number, name } = req.body;
	const stmt = db.prepare(
		"INSERT INTO reservations (date, time, court_number, name) VALUES (?, ?, ?, ?)"
	);
	try {
		stmt.run(date, time, court_number, name);
		res.status(200).send({ success: true });
	} catch (error) {
		res.status(400).send({ success: false, error: error.message });
	}
});

// Endpoint to get reservations
app.get("/api/reservations", (req, res) => {
	const stmt = db.prepare(
		"SELECT * FROM reservations WHERE date >= DATE('now')"
	);
	const reservations = stmt.all();
	res.json(reservations);
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
