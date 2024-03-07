import mongoose from "mongoose";
import dotenv from "dotenv";
export default async function connectDb() {
  dotenv.config();
  const db = await mongoose.connect(process.env.MONGO_URI as string, {});
  console.log("Connected to MongoDB.");
  db.connection.on("close", () => {
    console.log("Gracefully shutting down MongoDB...");
  });
  return db;
}
