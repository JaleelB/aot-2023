type SplitStringByDeliminator<
  S extends string,
  Deliminator extends string = "/"
> = S extends `${infer First}${Deliminator}${infer Rest}`
  ? First | SplitStringByDeliminator<Rest, Deliminator>
  : S;

type DecipherNaughtyList<T extends string> = Exclude<
  SplitStringByDeliminator<T>,
  ""
>;
