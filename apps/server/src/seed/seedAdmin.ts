import { UserModel } from "@/model/user";
import { admin } from "./users";

export async function seedAdmin() {
  try {
    //check if the users collection is empty
    const existingAdmins = await UserModel.find({ role: "admin" });
    if (existingAdmins.length > 0) {
      console.log("There is already an admin. Skipping seeding.");
      return;
    } else {
      await UserModel.create(admin);

      console.log(`An admin with the username ${admin.username} and password ${admin.password} was seeded successfully.`);
      console.log("Remember to change your password on your first login.");
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
}
