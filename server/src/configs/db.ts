import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool: Pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_IP,
  port: parseInt(process.env.DB_PORT!),
});
export default pool;