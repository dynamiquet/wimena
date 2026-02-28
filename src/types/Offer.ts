export type Offer = {
  id: number;
  title: string;
  price: number;
  quantity: number;

  // future-proof fields
  providerName: string;
  location: string;
  pickupWindow: string;
};