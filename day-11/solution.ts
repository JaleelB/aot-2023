type SantaListProtector<T> = T extends Function
  ? T // Leave functions as is
  : T extends object
  ? { readonly [P in keyof T]: SantaListProtector<T[P]> } // Recursively apply to objects
  : T extends Array<infer U>
  ? ReadonlyArray<SantaListProtector<U>> // Handle arrays
  : T; // Leave other types unchanged
