import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import { User } from "../utils/interfaces";

 export const getUsers = (): User[] => {
  const users = fs.readFileSync(__dirname + "/../utils/authUser.json", {
    encoding: "utf8",
    flag: "r",
  });
  console.log(JSON.parse(users));
  return JSON.parse(users);
}


export const usersLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = getUsers().find((user: User) => user.email === email);


  const secret = process.env.secret;

  if (!user) {
    return res
      .status(400)
      .json({ success: false, Message: "Seller not found!" });
  }

  if (user && user.password === password) {
    const token = jwt.sign(
      {
        userEmail: user.email,
      },
      <string>secret,
      { expiresIn: "1d" }
    );
    res.status(200).send({ success: true, user: user.email, token });
  } else {
    res.status(400).json({ success: false, Message: "Invalid credentials!" });
  }
};
