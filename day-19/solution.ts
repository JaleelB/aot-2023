type Gifts = {
  1: "🛹";
  2: "🚲";
  3: "🛴";
  4: "🏄";
};

type Increment<N extends number> = N extends 1
  ? 2
  : N extends 2
  ? 3
  : N extends 3
  ? 4
  : 1;

type DuplicateString<
  Str extends string,
  Count extends number,
  Acc extends string[] = []
> = Acc["length"] extends Count
  ? Acc
  : DuplicateString<Str, Count, [...Acc, Str]>;

type Rebuild<
  List extends Array<any>,
  CurrentGift extends keyof Gifts = 1,
  Result extends Array<any> = []
> = List extends [infer First, ...infer Rest]
  ? First extends number
    ? Rebuild<
        Rest,
        CurrentGift extends 4 ? 1 : Increment<CurrentGift>,
        [...Result, ...DuplicateString<Gifts[CurrentGift], First>]
      >
    : never
  : Result;
