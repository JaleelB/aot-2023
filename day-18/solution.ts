type Count<
  ToyStack extends Array<any>,
  Indexer extends string,
  ToyAcc extends Array<any> = []
> = ToyStack extends [infer First, ...infer Rest]
  ? First extends Indexer
    ? Count<Rest, Indexer, [...ToyAcc, any]>
    : Count<Rest, Indexer, ToyAcc>
  : ToyAcc["length"];
