import mongoose from "mongoose";
import { UserModel } from "@/model/user";
import { setEnv } from "@/config/env";
import { admin } from "./users";

export async function seedAdmin(uri?: string) {
  setEnv();
  const mongoUri = uri || process.env.MONGO_URI; // Replace with your MongoDB connection URI
  if (!mongoUri) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(mongoUri);

    //check if the users collection is empty
    const existingAdmins = await UserModel.find({ role: "admin" });
    if (existingAdmins.length > 0) {
      console.log("There is already an admin. Skipping seeding.");
      return;
    } else {
      await UserModel.create(admin);

      console.log(
        `An admin with the username ${admin.username} and password ${admin.password} was seeded successfully. Remember to change your password on your first login.`
      );
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    await mongoose.disconnect();
  }
}
