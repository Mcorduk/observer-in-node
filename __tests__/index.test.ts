import request from "supertest";
import { app, server } from "../src/index";
import mongoose from "mongoose";

afterAll(() => {
  server.close();
  mongoose.connection.close();
});

describe("POST /notify", () => {
  it("should send a notification", async () => {
    const res = await request(app).post("/notify").send({
      message: "Test notification",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Notification sent!");
  });
});

describe("POST /subscribe", () => {
  it("should subscribe a user", async () => {
    const res = await request(app).post("/subscribe").send({
      name: "Test User",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "User subscribed successfully");
  });
});

describe("POST /unsubscribe", () => {
  it("should unsubscribe a user", async () => {
    const res = await request(app).post("/unsubscribe").send({
      name: "Test User",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "User unsubscribed successfully"
    );
  });
});
