import supertest from "supertest";
import app from "../app";
import { config } from "dotenv";
import { getUser } from "../database/userModel";
import { User } from "../utils/interfaces";
config();
const request = supertest(app);
import bcrypt from "bcryptjs";
import { loginUser, regUser } from "./testInpute";

let token: string = "";
