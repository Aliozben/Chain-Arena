import Router, {Response, Request} from "express";
import pool from "../configs/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {registerValidation} from "../validations/usersValidation";
import authorize from "../middlewares/verifyToken";

export const usersRouter = Router();

usersRouter.post("/login", async (req: Request, res: Response) => {
  const loginInfo = req.body;
  const user = await pool.query("SELECT * FROM users WHERE user_name=$1", [
    loginInfo.username,
  ]);
  if (user.rowCount === 0)
    return res.status(400).send("Username or password is wrong, my friend.");
  const validPass = await bcrypt.compare(
    loginInfo.password,
    user.rows[0].password
  );
  if (!validPass)
    return res.status(400).send({
      errorCode: 10001,
      Message: "Username or password is wrong, hehehe",
    });
  const token = jwt.sign({_id: user.rows[0]._id}, process.env.TOKEN_SECRET!);
  res.header("auth-token", token);
  return res.send("Logged in ma man.");
});

usersRouter.post("/register", async (req: Request, res: Response) => {
  const {error} = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const registerInfo = req.body;
  const emailExist = await pool.query("SELECT * FROM users WHERE email=$1", [
    registerInfo.email,
  ]);
  if (emailExist.rowCount > 0)
    return res.status(400).send("Email already exist.");

  const usernameExist = await pool.query(
    "SELECT * FROM users WHERE user_name=$1",
    [registerInfo.username]
  );
  if (usernameExist.rowCount > 0)
    return res.status(400).send("Username already exist.");

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(registerInfo.password, salt);
  try {
    const query = await pool.query(
      "INSERT INTO users (user_name, password, display_name, email) VALUES ($1,$2,$3,$4)",
      [
        registerInfo.username,
        hashedPass,
        registerInfo.displayName,
        registerInfo.email,
      ]
    );
    return res.send("You have successfuly registered.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

usersRouter.get("/isAuth", authorize, async (req: Request, res: Response) => {
  return res.send(true);
});
