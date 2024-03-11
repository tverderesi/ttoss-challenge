import express from "express";
import { setEnv } from "@/config/env";
import connectDb from "./db";
import cookieParser from "cookie-parser";
import { applyCors } from "@/config/cors";
import bodyParser from "body-parser";
import { clearDb } from "@/seed/clearDb";
import { seedAll } from "./seed";
import { bindGraphQLServer } from "./graphql";

setEnv();
const EXPRESS_PORT = process.env.EXPRESS_PORT;

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
  if (process.env.NODE_ENV !== "production" && process.env.RESEED_DB === "true") {
    console.log(`Server is running on ${process.env.NODE_ENV} mode with RESEED_DB set to ${process.env.RESEED_DB}.`);
    console.log("If you wish to not reseed on every run, set this parameter to false.");
    console.log("Clearing database...");
    await clearDb(process.env.MONGO_URI);
  }
  await seedAll();
  await bindGraphQLServer(app);
})();

process.on("SIGINT", () => {
  console.log("Gracefully shutting down...");
  process.exit(0);
});
