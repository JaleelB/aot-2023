type StringToNumber<S extends string | number | symbol> =
  S extends keyof StringNumberMap ? StringNumberMap[S] : never;

type StringNumberMap = {
  "0": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
};

type FindSanta<Forest extends string[][]> = {
  [I in keyof Forest]: {
    [J in keyof Forest[I]]: Forest[I][J] extends "🎅🏼"
      ? [StringToNumber<I>, StringToNumber<J>]
      : never;
  }[keyof Forest[I]];
}[number];
