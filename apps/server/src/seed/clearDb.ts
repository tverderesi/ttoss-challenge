import { setEnv } from "@/config/env";
import mongoose from "mongoose";

export const clearDb = async (mongoUri: string): Promise<void> => {
  try {
    if (!mongoUri) {
      throw new Error("clearDb: MONGO_URI must be defined");
    }
    mongoose.connection.dropDatabase();

    console.log("Database Service:", "Database cleared.");
  } catch (error) {
    console.error("Error clearing database:", error);
  }
};

if (require.main === module) {
  (async () => {
    setEnv();
    const readyState = mongoose.connection.readyState;
    if (readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI as string, {});
    }
    await clearDb(process.env.MONGO_URI as string);

    process.exit(0);
  })();
}
