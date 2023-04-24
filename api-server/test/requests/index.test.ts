import request from "supertest";
import app from "../../src/app";
import { describe, test } from "@jest/globals";

describe("/", () => {
  test("GET /", async () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch(/application\/json/);
      });
  });
});
