import { Pool } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from "../config/env";

const pool = new Pool({
    connectionString: env.POSTGRES_URI,
    ssl: true
  });
  
export const db = drizzle(pool);
