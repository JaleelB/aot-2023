type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type WinningCombinations = {
  "👊🏻": "🖐🏾";
  "🖐🏾": "✌🏽";
  "✌🏽": "👊🏻";
};

type WhoWins<
  Opponent extends RockPaperScissors,
  Player extends RockPaperScissors
> = Player extends Opponent
  ? "draw"
  : Opponent extends WinningCombinations[Player]
  ? "lose"
  : "win";
