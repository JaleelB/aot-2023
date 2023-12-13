type AppendGood<T> = {
  [Child in keyof T as `good_${string & Child}`]: T[Child];
};
