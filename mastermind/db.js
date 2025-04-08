let db;

async function initDuckDB() {
    try {
        const duckdb = await import("https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.28.1-dev106.0/+esm");
        const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
        const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
        const worker_url = URL.createObjectURL(
            new Blob([`importScripts("${bundle.mainWorker}");`], { type: "text/javascript" })
        );
        const worker = new Worker(worker_url);
        const logger = new duckdb.ConsoleLogger();
        db = new duckdb.AsyncDuckDB(logger, worker);
        await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
        URL.revokeObjectURL(worker_url);

        console.log("DuckDB initialized successfully");
        
        await loadFileFromUrl("http://www.giral.do/tmp/main.duckdb");
        console.log("Database file loaded successfully");
    } 
    catch (error) {
        console.error(`Error initializing DuckDB: ${error.message}`);
    }
}

async function loadFileFromUrl(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        if (arrayBuffer.byteLength === 0) {
            throw new Error(`File ${filename} is empty (0 bytes)`);
        }
        await db.registerFileBuffer(filename, new Uint8Array(arrayBuffer));
        console.log(`Loaded ${filename} (${arrayBuffer.byteLength} bytes)`);
    } catch (error) {
        console.error(`Error loading file: ${error.message}`);
    }
}

// Run SQL query
async function getSecrets() {
    let conn = null;
    try {
        conn = await db.connect();
        const query = "SELECT nb_normal, nb_hard FROM secrets;";
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

        console.log(JSON.stringify(jsonResult, null, 2));
        return jsonResult;
    } 
    catch (error) {
        console.error("Error querying database:", error);
        throw error;
    }
    finally {
        // Always close the connection when done
        if (conn) await conn.close();
    }
}

async function main() {
    await initDuckDB();
}

main().catch(console.error);