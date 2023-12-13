type PrefixToExclude<Key extends string> = Key extends `naughty${infer _Rest}`
  ? Key
  : never;

type RemoveNaughtyChildren<List> = {
  [Property in keyof List as Exclude<
    Property,
    PrefixToExclude<string & Property>
  >]: List[Property];
};
