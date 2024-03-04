import express from "express";
import { EventEmitter } from "events";
import mongoose, { ConnectOptions } from "mongoose";
import { Notification } from "./models/notification.model";
import { Server } from "http";
import { Server as IOServer } from "socket.io";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/notificationservice", {
  useUnifiedTopology: true,
} as ConnectOptions);

const eventEmitter = new EventEmitter();

class User {
  constructor(private name: string, private eventEmitter: EventEmitter) {
    this.eventEmitter.on("notification", (message: string) => {
      console.log(`${this.name} received a notification: ${message}`);
    });
  }
}

type Users = {
  [key: string]: User;
};

const users: Users = {
  "User 1": new User("User 1", eventEmitter),
  "User 2": new User("User 2", eventEmitter),
  "User 3": new User("User 3", eventEmitter),
};
const app = express();
app.use(express.json());

const httpServer = new Server(app);
const io = new IOServer(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.post("/notify", async (req, res) => {
  const { message } = req.body;
  eventEmitter.emit("notification", message);

  // Emit the notification to all connected Socket.IO clients
  io.emit("notification", message);

  // Save the notification to MongoDB
  const notification = new Notification({ message });
  await notification.save();

  res.send({ message: "Notification sent!" });
});

app.post("/subscribe", (req, res) => {
  const { name } = req.body;
  if (users[name]) {
    return res.status(400).send({ message: "User already subscribed" });
  }
  users[name] = new User(name, eventEmitter);
  res.send({ message: "User subscribed successfully" });
});

app.post("/unsubscribe", (req, res) => {
  const { name } = req.body;
  if (!users[name]) {
    return res.status(400).send({ message: "User not found" });
  }
  delete users[name];
  res.send({ message: "User unsubscribed successfully" });
});
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export { app, server };
