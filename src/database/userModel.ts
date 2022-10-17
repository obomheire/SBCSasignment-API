import fs from "fs";
import { User } from "../utils/interfaces";

export const getUser = () => {
  const users = fs.readFileSync(__dirname + "/../database/authUser.json", {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(users);
};

export const saveUser = (newUser: User) => {
  fs.writeFileSync(
    __dirname + "/../database/authUser.json",
    JSON.stringify(newUser)
  );
};
