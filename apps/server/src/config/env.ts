import dotenv from "dotenv";
import path from "path";

export const envPath = path.resolve(__dirname, "../..", ".env." + process.env.NODE_ENV);

export const setEnv = () => {
  dotenv.config({ path: envPath });
  console.log("Environment variables loaded from", envPath);
};
