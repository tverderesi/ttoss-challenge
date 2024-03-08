import express from "express";
import { setEnv } from "@/config/env";
import connectDb from "./db";
import cookieParser from "cookie-parser";
import { applyCors } from "@/config/cors";
import bodyParser from "body-parser";
import { clearDb } from "@/seed/clearDb";
import { seedAll } from "./seed";

setEnv();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 6000;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

applyCors(app, process.env.NODE_ENV);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(EXPRESS_PORT, () => {
  console.log("Server is running on port", EXPRESS_PORT);
});

(async () => {
  await connectDb();
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server is running on ${process.env.NODE_ENV} mode. Clearing database...`);
    await clearDb(process.env.MONGO_URI);
  }
  await seedAll();
})();

process.on("SIGINT", () => {
  console.log("Gracefully shutting down...");
  process.exit(0);
});
