import {expression} from "@hapi/joi";
import Router, {Response, Request} from "express";
import multer from "multer";

import pool from "../configs/db";
import verifyToken from "../middlewares/verifyToken";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/feeds/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// const fileFilter = multer.
const upload = multer({storage});
export const socialRouter = Router();

socialRouter.get("/feed", verifyToken, async (req: Request, res: Response) => {
  try {
    const feeds = await pool.query(
      "SELECT sf._id, u._id, sf.text, sf.files, u.user_name, u.display_name FROM social_feed as sf, users as u WHERE u._id = sf.user_id"
    );
    return res.send(feeds.rows);
  } catch (error) {
    return res.status(400).send("error");
  }
});
socialRouter.post(
  "/feed",
  verifyToken,
  upload.array("uploads"),
  verifyToken,
  async (req: Request, res: Response) => {
    const {user, text} = req.body;
    const {files} = req;
    try {
      const filesPath = (files as []).map((file: Express.Multer.File) => {
        return file.path;
      });
      await pool.query(
        "INSERT INTO social_feed (user_id, text, files) VALUES ($1,$2, $3)",
        [user._id, text, filesPath]
      );
      return res.send("New Post has been published.");
    } catch (error) {
      return res.status(400).send(error);
    }
    return res.send(req.files);
  }
);

socialRouter.post(
  "/feeds",
  verifyToken,
  upload.array("files"),
  verifyToken,
  async (req: Request, res: Response) => {
    const {text, files, user} = req.body;
    try {
      // await pool.query('INSERT INTO ')
    } catch (error) {}
    return res.send(req.body);
  }
);
