import { User, UserModel } from "@/model/user";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
describe("User Model", () => {
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
  afterAll(async () => {
    await mongoose.disconnect();
    await db.stop();
  });
  beforeEach(async () => {
    // Clear the database or perform any necessary setup
    await UserModel.deleteMany({});
  });

  it("should create a new user", async () => {
    const userData: User = {
      username: "testuser",
      password: "password",
      role: "user",
    };

    const createdUser = await UserModel.create(userData);
    const retrievedUser = await UserModel.findById(createdUser._id);
    const isPasswordMatch = await bcrypt.compare(userData.password, retrievedUser?.password || "");

    expect(retrievedUser).toBeDefined();
    expect(retrievedUser?.username).toEqual(userData.username);
    expect(retrievedUser?.role).toEqual(userData.role);
    expect(isPasswordMatch).toBeTruthy();
  });

  it("should create a new admin", async () => {
    const userData: User = {
      username: "admin",
      password: "password",
      role: "admin",
    };

    const createdUser = await UserModel.create(userData);
    const retrievedUser = await UserModel.findById(createdUser._id);
    const isPasswordMatch = await bcrypt.compare(userData.password, retrievedUser?.password || "");

    expect(retrievedUser).toBeDefined();
    expect(retrievedUser?.username).toEqual(userData.username);
    expect(retrievedUser?.role).toEqual(userData.role);
    expect(isPasswordMatch).toBeTruthy();
  });

  it("should retrieve a user by ID", async () => {
    const userData: User = {
      username: "testuser",
      password: "password",
      role: "user",
    };

    const createdUser = await UserModel.create(userData);
    const retrievedUser = await UserModel.findById(createdUser._id);

    expect(retrievedUser).toBeDefined();
    expect(retrievedUser?.username).toEqual(userData.username);
    expect(retrievedUser?.role).toEqual(userData.role);
  });

  it("should update a user", async () => {
    const userData: User = {
      username: "testuser",
      password: "password",
      role: "user",
    };

    const createdUser = await UserModel.create(userData);
    const updatedUserData: User = {
      username: "updateduser",
      password: "password",
      role: "admin",
    };

    await UserModel.findByIdAndUpdate(createdUser._id, updatedUserData);
    const updatedUser = await UserModel.findById(createdUser._id);

    expect(updatedUser).toBeDefined();
    expect(updatedUser?.username).toEqual(updatedUserData.username);
    expect(updatedUser?.role).toEqual(updatedUserData.role);
  });

  it("should delete a user", async () => {
    const userData: User = {
      username: "testuser",
      password: "password",
      role: "user",
    };

    const createdUser = await UserModel.create(userData);
    await UserModel.findByIdAndDelete(createdUser._id);
    const deletedUser = await UserModel.findById(createdUser._id);

    expect(deletedUser).toBeNull();
  });
});
