import supertest from "supertest";
import app from "../app";
import { config } from "dotenv";
config();
const request = supertest(app);
import { token } from "./authService.test";

// Random quote test
describe("GEt /quote", () => {
  if (token) {
    test("user should get quote", async () => {
      const res = await request
        .get("/api/v1/random/quote")
        .set("Authorization", `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        quote: expect.any(Object),
      });
    });
  } else {
    test("user should not get quote", async () => {
      const res = await request.get("/api/v1/random/quote");
      expect(res.status).toBe(401);
    });
  }
});
