type StreetSuffixTester<
  Street extends string,
  Suffix extends string
> = Street extends `${infer Prefix}${Suffix}`
  ? Prefix extends `${infer _}${" "}`
    ? true
    : Prefix extends ""
    ? true
    : false
  : false;
