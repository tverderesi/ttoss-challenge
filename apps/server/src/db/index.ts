import mongoose from "mongoose";

export default async function connectDb() {
  const db = await mongoose.connect(process.env.MONGO_URI as string, {});
  console.log("Connected to MongoDB.");
  db.connection.on("close", () => {
    console.log("Gracefully shutting down MongoDB...");
  });
  return db;
}
