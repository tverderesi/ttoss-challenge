import { seedVideos } from "./seedVideos";
import { seedAdmin } from "./seedAdmin";
import mongoose from "mongoose";
import { setEnv } from "@/config/env";
export const seedAll = async () => {
  await seedAdmin().catch(console.error);
  await seedVideos().catch(console.error);
};

if (require.main === module) {
  (async () => {
    setEnv();
    const readyState = mongoose.connection.readyState;
    if (readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI as string, {});
    }
    await seedAll();
    process.exit(0);
  })();
}
