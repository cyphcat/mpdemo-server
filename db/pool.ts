import {Pool} from "pg";

export const pool = new Pool({
  connectionString: "postgresql://mpdemo:mysecretpassword@localhost:15432/mpdemo"
});
