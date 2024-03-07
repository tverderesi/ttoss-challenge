import { setEnv, envPath } from "../../config/env";

describe("Environment Variables should be working.", () => {
  it("should load environment variables", () => {
    const consoleLogMock = jest.spyOn(console, "log");
    consoleLogMock.mockImplementation(() => {});
    setEnv();
    expect(consoleLogMock).toHaveBeenCalledWith("Environment variables loaded from", envPath);
    consoleLogMock.mockRestore();
  });
});
