import { Database } from "bun:sqlite";

const db = new Database();

const ddl = db.query("create table cats (name varchar)");
ddl.run();

const insert = db.prepare("INSERT INTO cats (name) VALUES ($name)");
const insertCats = db.transaction(cats => {
  for (const cat of cats) insert.run(cat);
  return cats.length;
});

const count = insertCats([
  { $name: "Keanu" },
  { $name: "Salem" },
  { $name: "Crookshanks" },
]);

console.log(`Inserted ${count} cats`);

const query = db.query("select * from cats;")
console.log(query.all());