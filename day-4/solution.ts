type Address = { address: string; city: string };
type PresentDeliveryList<MixedBehaviorList> = {
  [Child in keyof MixedBehaviorList]: Address;
};
