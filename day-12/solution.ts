type FindSanta<Tuple, Index extends any[] = []> = Tuple extends [
  infer Head,
  ...infer Tail
]
  ? Head extends "🎅🏼"
    ? Index["length"]
    : FindSanta<Tail, [...Index, any]>
  : never;
