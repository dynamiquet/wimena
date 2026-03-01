import { useState } from "react";
import type { Offer } from "../types/offer"
import OfferCard from "../Components/OfferCard";
import { getOffers } from "../services/offerServices";

function HomePage() {
    const [offers] = useState<Offer[]>(getOffers());

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