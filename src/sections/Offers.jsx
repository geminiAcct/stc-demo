import ServicesCard from "../components/ServicesCard";
import { offers } from "../constants";
export const Offers = () => {
  return (
    <div>
      {offers.map((offer) => (
        <ServicesCard key={offer.id} {...off} />
      ))}
    </div>
  );
};
