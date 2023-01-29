import supertest from "supertest";

import  app  from "./app";

describe("app", () => {
  it("should return 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  });
})