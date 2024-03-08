import { clearDb } from "@/seed/clearDb";
import { setEnv } from "@/config/env";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { admin } from "@/seed/users";
import { UserModel } from "@/model/user";
import { VideoModel } from "@/model/video";
import { videos } from "@/seed/videos";
describe("clearDb", () => {
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

  afterAll(async () => {
    await mongoose.disconnect();
    await db.stop();
  });

  it("should clear the database", async () => {
    await UserModel.create(admin);
    await VideoModel.insertMany(videos);

    await clearDb(db.getUri());
    const users = await UserModel.find({});
    const foundVideos = await VideoModel.find({});

    expect(users.length).toBe(0);
    expect(foundVideos.length).toBe(0);
  });
});
