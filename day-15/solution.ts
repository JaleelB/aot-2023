/** @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types */
type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

type BoxToys<
  Toy extends string,
  BoxCount extends number,
  Acc extends Array<string> = []
> = IsUnion<BoxCount> extends false
  ? Acc["length"] extends BoxCount
    ? Acc
    : BoxToys<Toy, BoxCount, [...Acc, Toy]>
  : BoxCount extends any
  ? BoxToys<Toy, BoxCount, [...Acc, Toy]>
  : never;

type t = BoxToys<"nutcracker", 8>;
