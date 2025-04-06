let db;
let conn;

import * as duckdb from './duckdb.wasm';

async function initDuckDB() {
	try {
        const JSDELIVR_BUNDLES = {
            mvp: {
                mainModule: './duckdb-mvp.wasm',
                mainWorker: './duckdb-browser-mvp.worker.js',
            },
            eh: {
                mainModule: './duckdb-eh.wasm',
                mainWorker: './duckdb-browser-eh.worker.js',
            }
        };
        
        // Select bundle based on browser support
        const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
        
        // Instantiate the asynchronous version of DuckDB
        const worker = new Worker(bundle.mainWorker);
        const logger = new duckdb.ConsoleLogger();
        db = new duckdb.AsyncDuckDB(logger, worker);
        await db.instantiate(bundle.mainModule);

		// Create a connection
		conn = await db.connect();

		// Fetch the DuckDB file
		const response = await fetch("main.duckdb");
		if (!response.ok) {
			throw new Error(
				`Failed to load database file: ${response.statusText}`
			);
		}

		// Get the file as ArrayBuffer
		const dbData = await response.arrayBuffer();

		// Register the database file
		await db.registerFileBuffer("main.duckdb", new Uint8Array(dbData));

		// Attach the database file
		await conn.query(`ATTACH 'main.duckdb' AS db`);

    } 
    catch (error) {
		console.error(error);
	}
}

// Run SQL query
async function getSecrets(dt) {
	try {
		const query = 'select nb_normal, nb_hard from secrets';
		const result = await conn.query(query);

		// Convert result to JSON and display
		const jsonResult = result.toArray().map((row) => {
			const obj = {};
			for (let i = 0; i < result.getChildrenCount(); i++) {
				const colName = result.getChildName(i);
				obj[colName] = row.getChild(i).toJS();
			}
			return obj;
		});

		console.write(JSON.stringify(jsonResult, null, 2));
	} 
    catch (error) {
		console.error(error);
	}
}
initDuckDB();
