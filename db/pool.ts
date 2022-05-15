import {Pool} from "pg";

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://mpdemo:mysecretpassword@localhost:15432/mpdemo";

export const pool = new Pool({
  connectionString: DATABASE_URL,
  // ssl: {rejectUnauthorized: false}
});
