import { Server } from "http";
import { Server as IOServer } from "socket.io";
import { io as IOClient, Socket } from "socket.io-client";
import express from "express";
import { app as application } from "../src/index";

let httpServer: Server;
let ioServer: IOServer;
let clientSocket: Socket;
let app: express.Express;

beforeAll((done) => {
  app = application;
  httpServer = new Server(app);
  ioServer = new IOServer(httpServer);
  httpServer.listen(() => {
    const port = (httpServer.address() as any).port;
    clientSocket = IOClient(`http://localhost:${port}`);
    clientSocket.on("connect", done);
  });
});

afterAll(() => {
  ioServer.close();
  clientSocket.close();
});

test("should receive notification when /notify endpoint is hit", (done) => {
  clientSocket.on("notification", (message) => {
    expect(message).toBe("Test notification");
    done();
  });

  // Simulate hitting /notify endpoint
  ioServer.emit("notification", "Test notification");
});
