type GiftWrapper<
  Present extends String,
  From extends String,
  To extends String
> = {
  present: Present;
  from: From;
  to: To;
};
