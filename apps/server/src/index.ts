import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 6000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on port ${EXPRESS_PORT}`);
});

process.on("SIGINT", () => {
  console.log("Gracefully shutting down...");

  process.exit(0);
});
