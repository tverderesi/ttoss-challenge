import cors from "cors";
import { Application } from "express";
export const applyCors = (app: Application, env: "production" | "development" | "test" | undefined) => {
  if (!env) {
    throw new Error("Environment not set");
  }
  app.use(
    cors({
      allowedHeaders: "*",
      origin: "*",
    })
  );
};
