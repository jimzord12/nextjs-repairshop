import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { resolve } from "path";

const envPath = resolve(__dirname, "../../.env.local");
config({ path: envPath });
// console.log("Env Path: ", resolve(__dirname, "../../.env.local"));

const sql = neon(process.env.DATABASE_URL);

// logger
// const db = drizzle(sql, { logger: true });
const db = drizzle(sql);

export { db };
