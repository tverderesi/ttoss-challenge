import mongoose from "mongoose";
import { seedAdmin } from "@/seed/seedAdmin";
import { UserModel } from "@/model/user";
import { setEnv } from "../../config/env";
import { MongoMemoryServer } from "mongodb-memory-server";
import { admin } from "@/seed/users";

describe("Seed Admin", () => {
  setEnv();
  let db: MongoMemoryServer;

  beforeAll(async () => {
    db = await MongoMemoryServer.create({
      instance: {
        dbName: "db",
      },
      binary: {
        version: "4.4.17",
      },
    });
    await mongoose.connect(db.getUri());
  });

  beforeEach(async () => {
    await mongoose.connect(db.getUri());
    await UserModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await db.stop();
  });

  it("should seed the Admin", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    await seedAdmin();
    expect(console.log).toHaveBeenCalledWith(
      `An admin with the username ${admin.username} and password ${admin.password} was seeded successfully. Remember to change your password on your first login.`
    );
    await mongoose.connect(db.getUri());
    const users = await UserModel.find({});
    expect(users.length).toBe(1);
  });

  it("throw an error if an error occurs while seeding the Admin", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const mongoUri = db.getUri();
    await mongoose.connect(mongoUri);
    const insertManySpy = jest.spyOn(UserModel, "create").mockRejectedValue(new Error("Error"));
    await seedAdmin();
    expect(console.error).toHaveBeenCalledWith("Error seeding admin:", new Error("Error"));
    insertManySpy.mockRestore();
  });

  it("should not seed the admin if there is an Admin present", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    const mongoUri = db.getUri();
    await mongoose.connect(mongoUri);
    await UserModel.create({
      username: "test",
      password: "password",
      role: "admin",
    });
    await seedAdmin();
    expect(console.log).toHaveBeenCalledWith("There is already an admin. Skipping seeding.");
  });
});
