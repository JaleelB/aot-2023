type BuildArrayOfIndices<
  T extends number,
  Acc extends number[] = []
> = T extends Acc["length"]
  ? Acc[number]
  : BuildArrayOfIndices<T, [Acc["length"], ...Acc]>;

type DayCounter<From extends number, To extends number> =
  | Exclude<BuildArrayOfIndices<To>, BuildArrayOfIndices<From>>
  | To;

type test = DayCounter<1, 25>;
