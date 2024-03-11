import { updateEloRating } from "@/util/updateEloRating";
describe("updateEloRating", () => {
  it("should return the correct new ratings for the videos for a winning outcome", () => {
    const videoA = { rating: 1200 };
    const videoB = { rating: 1000 };
    const outcome = "WIN";

    const result = updateEloRating(videoA, videoB, outcome);

    expect(result.newRatingA).toBeGreaterThan(videoA.rating);
    expect(result.newRatingB).toBeLessThan(videoB.rating);
  });
  it("should return the correct new ratings for the videos for a losing outcome", () => {
    const videoA = { rating: 1200 };
    const videoB = { rating: 1000 };
    const outcome = "LOSE";

    const result = updateEloRating(videoA, videoB, outcome);

    expect(result.newRatingA).toBeLessThan(videoA.rating);
    expect(result.newRatingB).toBeGreaterThan(videoB.rating);
  });
  it("should return the correct new ratings for the videos for a draw outcome", () => {
    const videoA = { rating: 1200 };
    const videoB = { rating: 1000 };
    const outcome = "DRAW";

    const result = updateEloRating(videoA, videoB, outcome);

    expect(result.newRatingA).toBeCloseTo(1192);
    expect(result.newRatingB).toBeCloseTo(1008);
  });
});
