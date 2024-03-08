declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      EXPRESS_PORT: string;
      MONGO_URI: string;
    }
  }
}

export {};
