type SantasList<Bad extends readonly any[], Good extends readonly any[]> = [
  ...Bad,
  ...Good
];
