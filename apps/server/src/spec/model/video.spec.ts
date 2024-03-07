import { VideoModel } from "../../model/video";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

describe("Video Model", () => {
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
    await VideoModel.deleteMany({});
  });

  it("should create a new video", async () => {
    const videoData = {
      title: "Test Video",
      url: "https://example.com/test-video",
      src: "https://example.com/test-video.mp4",
      rating: 4.5,
    };

    const createdVideo = await VideoModel.create(videoData);

    expect(createdVideo.title).toEqual(videoData.title);
    expect(createdVideo.url).toEqual(videoData.url);
    expect(createdVideo.src).toEqual(videoData.src);
    expect(createdVideo.rating).toEqual(videoData.rating);
  });

  it("should retrieve a video by ID", async () => {
    const videoData = {
      title: "Test Video",
      url: "https://example.com/test-video",
      src: "https://example.com/test-video.mp4",
      rating: 4.5,
    };

    const createdVideo = await VideoModel.create(videoData);
    const retrievedVideo = await VideoModel.findById(createdVideo._id);

    expect(retrievedVideo).toBeDefined();
    expect(retrievedVideo?.title).toEqual(videoData.title);
    expect(retrievedVideo?.url).toEqual(videoData.url);
    expect(retrievedVideo?.src).toEqual(videoData.src);
    expect(retrievedVideo?.rating).toEqual(videoData.rating);
  });

  it("should update a video", async () => {
    const videoData = {
      title: "Test Video",
      url: "https://example.com/test-video",
      src: "https://example.com/test-video.mp4",
      rating: 4.5,
    };

    const createdVideo = await VideoModel.create(videoData);
    const updatedVideoData = {
      title: "Updated Video",
      url: "https://example.com/updated-video",
      src: "https://example.com/updated-video.mp4",
      rating: 3.5,
    };

    await VideoModel.findByIdAndUpdate(createdVideo._id, updatedVideoData);
    const updatedVideo = await VideoModel.findById(createdVideo._id);

    expect(updatedVideo).toBeDefined();
    expect(updatedVideo?.title).toEqual(updatedVideoData.title);
    expect(updatedVideo?.url).toEqual(updatedVideoData.url);
    expect(updatedVideo?.src).toEqual(updatedVideoData.src);
    expect(updatedVideo?.rating).toEqual(updatedVideoData.rating);
  });

  it("should delete a video", async () => {
    const videoData = {
      title: "Test Video",
      url: "https://example.com/test-video",
      src: "https://example.com/test-video.mp4",
      rating: 4.5,
    };

    const createdVideo = await VideoModel.create(videoData);
    await VideoModel.findByIdAndDelete(createdVideo._id);
    const deletedVideo = await VideoModel.findById(createdVideo._id);

    expect(deletedVideo).toBeNull();
  });
});
