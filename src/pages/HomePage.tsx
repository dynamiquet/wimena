import { useState } from "react";
import type { Offer } from "../types/offer"
import OfferCard from "../Components/OfferCard";

function HomePage() {
    const [offers] = useState<Offer[]>([
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
        title: "Fresh Pasta Bundle",
        price: 2.5,
        quantity: 3,
        providerName: "Kigali Kitchen",
        location: "Kigali City Center",
        pickupWindow: "18:00–19:00",
    },
    {
        id:3,
        title: "Pastry Assortment",
        price: 2.5,
        quantity: 3,
        providerName: "Downtown Cafe",
        location: "Nyarutarama",
        pickupWindow: "18:00–19:00",
    },
    ]);

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  function handleSelect(offer: Offer) {
    setSelectedOffer(offer);
  }

  return (
    <main>
      <h2>Find rescued food near you</h2>

      <ul>
        {offers.map((offer) => (
        <OfferCard
            key={offer.id}
            offer={offer}
            onSelect={handleSelect}
            selected={selectedOffer?.id === offer.id}
        />
        ))}
      </ul>

        {selectedOffer && (
        <p>
            You selected: {selectedOffer.title} (${selectedOffer.price})
        </p>
        )}
    </main>
  );
}

export default HomePage;