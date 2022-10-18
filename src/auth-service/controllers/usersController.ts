import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../utils/interfaces";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { getUser, saveUser } from "../../database/userModel";

//User login controller
export const usersLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = getUser().find((user: User) => user.email === email);

  const secret = process.env.secret;

  if (!user) {
    return res.status(400).json({
      success: false,
      Message: "User not found or invalid credentials!",
    });
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        userEmail: user.email,
      },
      <string>secret,
      { expiresIn: "1d" }
    );
    res.status(200).send({
      success: true,
      Message: "User successfully login",
      token,
    });
  } else {
    res.status(400).json({
      success: false,
      Message: "User not found or invalid credentials!",
    });
  }
};

//User registration controller
export const userRegister = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  let user = {
    id: uuidv4(),
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  };

  const userData = getUser();

  if (userData.find((user: User) => user.email === email)) {
    return res
      .status(400)
      .json({ success: false, Message: "User with the email already exists!" });
  }

  userData.push(user);

  saveUser(userData);

  return res.status(200).send({ Message: "User successfully created!" });
};
