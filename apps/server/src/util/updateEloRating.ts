/**
 * updateEloRating - Updates the ELO rating of two videos based on the outcome of a match.
 *
 * @param videoA - The first video being rated.
 * @param videoB  - The second video being rated.
 * @param outcome - The outcome of the match. It can be "WIN", "LOSE", or "DRAW". 1 for a win, 0.5 for a draw, and 0 for a loss, relative to videoA.
 * @returns - An object containing the new ratings for videoA and videoB.
 *
 */

export function updateEloRating(videoA: number, videoB: number, outcome: "WIN" | "LOSE" | "DRAW") {
  const K = 32;
  const expectedOutcomeA = 1 / (1 + Math.pow(10, (videoB - videoA) / 400));
  const expectedOutcomeB = 1 - expectedOutcomeA;
  const outcomeValue = {
    WIN: 1,
    LOSE: 0,
    DRAW: 0.5,
  };
  const newRatingA = Math.round(videoA + K * (outcomeValue[outcome] - expectedOutcomeA));
  const newRatingB = Math.round(videoB + K * (1 - outcomeValue[outcome] - expectedOutcomeB));

  return { newRatingA, newRatingB };
}
