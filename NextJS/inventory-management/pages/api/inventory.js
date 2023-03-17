// pages/api/inventory.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDatabase() {
  return open({
    filename: "./database/inventory.db",
    driver: sqlite3.Database,
  });
}

async function getAllItems(db) {
  const items = await db.all("SELECT * FROM inventory");
  return items;
}

async function addItem(db, item) {
  const { name, quantity } = item;
  const result = await db.run(
    "INSERT INTO inventory (name, quantity) VALUES (?, ?)",
    name,
    quantity
  );
  return {
    id: result.lastID,
    name,
    quantity,
  };
}

async function updateItem(db, id, item) {
  const { name, quantity } = item;
  await db.run(
    "UPDATE inventory SET name = ?, quantity = ? WHERE id = ?",
    name,
    quantity,
    id
  );
}

async function deleteItem(db, id) {
  await db.run("DELETE FROM inventory WHERE id = ?", id);
}

export default async function handler(req, res) {
  const { method } = req;
  const db = await openDatabase();

  switch (method) {
    case "GET":
      try {
        const items = await getAllItems(db);
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: "Error fetching inventory items" + error});
      }
      break;

    case "POST":
      try {
        const newItem = req.body;
        const addedItem = await addItem(db, newItem);
        res.status(201).json(addedItem);
      } catch (error) {
        res.status(500).json({ error: "Error adding inventory item" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const updatedItem = req.body;
        await updateItem(db, id, updatedItem);
        res.status(200).json({ message: "Item updated successfully" });
      } catch (error) {
        res.status(500).json({ error: "Error updating inventory item" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        await deleteItem(db, id);
        res.status(200).json({ message: "Item deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Error deleting inventory item" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
