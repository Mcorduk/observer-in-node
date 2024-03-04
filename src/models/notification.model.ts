import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now },
});

export const Notification = mongoose.model("Notification", notificationSchema);
