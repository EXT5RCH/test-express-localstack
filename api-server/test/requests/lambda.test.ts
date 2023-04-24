import request from "supertest";
import app from "../../src/app";
import { describe, test } from "@jest/globals";

describe("/lambda", () => {
  test("POST /", async () => {
    return request(app)
      .post("/lambda")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toMatch(/application\/json/);
        const body = JSON.parse(res.body);
        expect(body.statusCode).toBe(201);
        expect(body.body).toBe(
          JSON.stringify({
            message: "hello world",
          })
        );
      });
  });
});
