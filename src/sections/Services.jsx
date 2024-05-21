import ServicesCard from "../components/ServicesCard";
import { offers } from "../constants";
export const Services = () => {
  return (
    <div
      className="bg-primary flex flex-1 px-[100px] py-[100px]  "
      id="bg_grad"
    >
      <div className="flex flex-1 space-x-4 justify-around items-center rounded-md gap-10">
        {offers.map((offer) => (
          <ServicesCard key={offer.id} {...offer} bg_image="bg-bg-idea" />
        ))}
      </div>
    </div>
  );
};

export default Services;
