import { Database } from "@db/sqlite";
import * as insightsTable from "$tables/insights.ts";
import * as path from "@std/path";

const dbFilePath = path.resolve("tmp", "db.sqlite3");

console.log(`Opening SQLite database at ${dbFilePath}`);

await Deno.mkdir(path.dirname(dbFilePath), { recursive: true });

const db = new Database(dbFilePath);

console.log("Creating table");
db.exec(insightsTable.createTable);

console.log("Done");
