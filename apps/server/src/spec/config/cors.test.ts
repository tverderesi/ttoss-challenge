import request from "supertest";
import express from "express";
import { applyCors } from "@/config/cors";
import http from "http";
import cookieParser from "cookie-parser";

describe("CORS", () => {
  let app: express.Application;
  let server: http.Server;
  beforeAll(() => {
    app = express();
    app.use(cookieParser());
    app.use(express.json());
    applyCors(app, "development");
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    server = app.listen(process.env.EXPRESS_PORT);
  });
  afterAll((done) => {
    server.close(done);
  });

  it("should aceppt a request from the 5173 port on Development mode", async () => {
    process.env.NODE_ENV = "development";
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    const response = await request(app).get("/").set("Origin", "http://localhost:5173");

    expect(response.headers["access-control-allow-origin"]).toBeDefined();
    expect(response.headers["access-control-allow-credentials"]).toBeTruthy();
  });

  it("shouldn't accept a request from any place that is not port 5173 on Development mode", async () => {
    const response = await request(app).get("/").set("Origin", "http://localhost:3000");

    expect(response.headers["access-control-allow-origin"]).toBeUndefined();
  });
});
