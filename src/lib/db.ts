// lib/db.ts
import { Pool } from 'pg';
console.log("POSTGRES_URL on Vercel:", process.env.POSTGRES_URL);


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export const query = (text: string, params?: []) => pool.query(text, params);
