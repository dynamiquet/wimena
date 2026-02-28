import type { Offer } from "../types/offer";

export function getOffers(): Offer[] {
  return [
    {
      id: 1,
      title: "Bakery surprise bag",
      price: 2.5,
      quantity: 3,
      providerName: "Kigali Bakery",
      location: "Kimironko",
      pickupWindow: "18:00–19:00",
    },
    {
      id: 2,
      title: "Restaurant lunch box",
      price: 4,
      quantity: 5,
      providerName: "Mama Africa Restaurant",
      location: "Remera",
      pickupWindow: "14:00–15:00",
    },
  ];
}