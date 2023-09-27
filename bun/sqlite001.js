import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite");

let query = db.query(`create table foo (nm varchar, vl int);`);
query.run();

query = db.query(`insert into foo values ('john doe',1);`);
query.run();

query = db.query(`insert into foo values ('jane doe',2);`);
query.run();

query = db.query(`select * from foo;`);

console.log(query.values(1));
