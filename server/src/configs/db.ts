import {Client} from "pg";
const dotenv = require("dotenv").config();

const pool: Client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;
