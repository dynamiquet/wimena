import type { Offer } from "../types/Offer";

function OfferCard({
  offer,
  onSelect,
  selected,
}: {
  offer: Offer;
  onSelect: (offer: Offer) => void;
  selected: boolean;
}) {
  return (
    <li
      onClick={() => onSelect(offer)}
      style={{
        border: selected ? "4px solid green" : "1px solid gray",
        padding: "1rem",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      <strong>{offer.title}</strong> — ${offer.price} ({offer.quantity} left)
    </li>
  );
}

export default OfferCard;
