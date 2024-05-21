import { Carousel } from "flowbite-react";
import { c_1, c_2, c_3, c_4, c_5 } from "../assets/images";

const carousel = () => {
  return (
    <div className=" h-56 sm:h-64 xl:h-[400px] 2xl:h-96">
      <Carousel>
        <img src={c_1} alt="..." />
        <img src={c_2} alt="..." />
        <img src={c_3} alt="..." />
        <img src={c_4} alt="..." />
        <img src={c_5} alt="..." />
      </Carousel>
    </div>
  );
};

export default carousel;
