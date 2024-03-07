import connectDb from "../../db/index";
import mongoose from "mongoose";
import { setEnv } from "../../config/env";
describe("Database Connection", () => {
  let db: typeof mongoose;
  beforeAll(() => {
    setEnv();
  });

  it("should connect to the database successfully", async () => {
    const consoleLogMock = jest.spyOn(console, "log");
    consoleLogMock.mockImplementation(() => {});
    db = await connectDb();
    expect(db).toBeDefined();

    expect(consoleLogMock).toHaveBeenCalledWith("Connected to MongoDB.");

    consoleLogMock.mockRestore();
  });

  it("should disconnect from the database successfully", async () => {
    db = await connectDb();
    const consoleLogMock = jest.spyOn(console, "log");
    consoleLogMock.mockImplementation(() => {});
    await db.connection.close();
    expect(consoleLogMock).toHaveBeenCalledWith("Gracefully shutting down MongoDB...");
    consoleLogMock.mockRestore();
  });
});
