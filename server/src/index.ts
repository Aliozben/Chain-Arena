import express, {Application, Request, Response} from "express";
import pool from "./configs/db";
import cors from "cors";
import {usersRouter} from "./routes/users";
import {socialRouter} from "./routes/socialFeeds";
const app: Application = express();
const db = pool;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_DOMAIN,
    exposedHeaders: "auth-token",
  })
);

app.use("/api/users", usersRouter);
app.use("/api/social", socialRouter);

app.listen(3002, () => {
  console.log("Listining on port 3002");
});
