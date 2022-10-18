import supertest from "supertest";
import app from "../app";
import { config } from "dotenv";
import { getUser } from "../database/userModel";
import { User } from "../utils/interfaces";
config();
const request = supertest(app);
import bcrypt from "bcryptjs";
import { loginUser, regUser } from "./testInpute";

export let token: string = "";

//User registration test
describe("POST /register ", () => {
  describe("user should be/shoudn't be able to register", () => {
    const userData = getUser();
    if (userData.find((user: User) => user.email === regUser.email)) {
      test("Existing user should not be registered", async () => {
        const res = await request.post("/api/v1/users/register").send(regUser);
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          Message: "User with the email already exists!",
        });
      });
    } else {
      test("a new user can register", async () => {
        const res = await request.post("/api/v1/users/register").send(regUser);
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
          Message: "User successfully created!",
        });
      });
    }
  });
});

// User login test
describe("POST /login", () => {
  describe("User should be/shouldn't be able to login", () => {
    const userData = getUser();
    const user = userData.find((user: User) => user.email === loginUser.email);
    if (!user) {
      test("User with incorrect email should not be able to login", async () => {
        const res = await request.post("/api/v1/users/login").send(loginUser);
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          Message: "User not found or invalid credentials!",
        });
      });
    } else if (user && bcrypt.compareSync(loginUser.password, user.password)) {
      test("user with valid password should be able to login", async () => {
        const res = await request.post("/api/v1/users/login").send(loginUser);
        token = res.body.token;
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
          Message: "User successfully login",
        });
      });
    } else {
      test("user with incorrect password should not be able to login", async () => {
        const res = await request.post("/api/v1/users/login").send(loginUser);
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          Message: "User not found or invalid credentials!",
        });
      });
    }
  });
});

// Random quote test
// describe("GEt /quote", () => {
//   describe("User should be/shouldn't get quote", () => {
//     if (token) {
//       test("user should get quote", async () => {
//         const res = await request
//           .get("/api/v1/random/quote")
//           .set("Authorization", `Bearer ${token}`);
//         expect(res.status).toBe(200);
//         expect(res.body).toMatchObject({
//           quote: expect.any(Object),
//         });
//       });
//     } else {
//       test("user should not get quote", async () => {
//         const res = await request.get("/api/v1/random/quote");
//         expect(res.status).toBe(401);
//       });
//     }
//    });
  
// });

