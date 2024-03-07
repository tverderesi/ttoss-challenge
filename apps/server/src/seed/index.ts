import mongoose, { mongo } from "mongoose";
import { videos } from "./videos";
import { VideoModel } from "../model/video";
import { setEnv } from "@/config/env";
export async function seedVideos(uri?: string) {
  setEnv();
  const mongoUri = uri || process.env.MONGO_URI; // Replace with your MongoDB connection URI
  if (!mongoUri) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(mongoUri);
    // Insert the videos into the collection
    const result = await VideoModel.insertMany(videos);
    console.log(`${result.length} videos seeded successfully.`);
  } catch (error) {
    console.error("Error seeding videos:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedVideos().catch(console.error);
