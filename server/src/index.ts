import express, {Application, Request, Response} from "express";
import pool from "./configs/db";
import cors from "cors";
import {usersRouter} from "./routes/users";
import {socialRouter} from "./routes/socialFeeds";
const app: Application = express();
const db = pool;
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    exposedHeaders: "auth-token",
  })
);
db.connect();
app.use("/api/users", usersRouter);
app.use("/api/social", socialRouter);

app.listen(process.env.PORT || 3002, () => {
  console.log("Listining on port 3002");
});
