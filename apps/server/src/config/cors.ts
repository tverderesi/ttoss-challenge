import cors from "cors";
import { Application } from "express";
export const applyCors = (app: Application, env: "production" | "development" | "test" | undefined) => {
  if (!env) {
    throw new Error("Environment not set");
  }
  app.use(
    cors({
      credentials: true,
      origin:
        env === "production"
          ? [
              "https://project-mgmt-app-drab.vercel.app",
              "https://project-mgmt-server-vnup.onrender.com",
              "https://apollo-server-landing-page.cdn.apollographql.com",
              "https://sandbox.embed.apollographql.com",
            ]
          : ["http://localhost:5173", "https://sandbox.embed.apollographql.com"],
    })
  );
};
