import mongoose from "mongoose";
import { seedVideos } from "@/seed/seedVideos";
import { VideoModel } from "../../model/video";
import { setEnv } from "../../config/env";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Seed Videos", () => {
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
    await VideoModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await db.stop();
  });

  it("should seed videos", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    await seedVideos(db.getUri());

    expect(console.log).toHaveBeenCalledWith("5 videos seeded successfully.");
    await mongoose.connect(db.getUri());
    const videos = await VideoModel.find({});

    expect(videos.length).toBe(5);
  });

  it("throw an error if MONGO_URI is not defined", async () => {
    process.env.MONGO_URI = "";
    await expect(seedVideos()).rejects.toThrow("MONGO_URI must be defined");
  });

  it("throw an error if an error occurs while seeding videos", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const mongoUri = db.getUri();
    await mongoose.connect(mongoUri);
    const insertManySpy = jest.spyOn(VideoModel, "insertMany").mockRejectedValue(new Error("Error seeding videos"));
    await seedVideos(mongoUri);
    expect(console.error).toHaveBeenCalledWith("Error seeding videos:", new Error("Error seeding videos"));
    insertManySpy.mockRestore();
  });

  it("should not seed videos if the collection is not empty", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    const mongoUri = db.getUri();
    await mongoose.connect(mongoUri);
    await VideoModel.create({
      title: "Test Video",
      url: "https://example.com/test-video",
      src: "https://example.com/test-video.mp4",
      rating: 4.5,
    });
    await seedVideos(mongoUri);
    expect(console.log).toHaveBeenCalledWith("Videos collection is not empty. Skipping seeding.");
  });
});
