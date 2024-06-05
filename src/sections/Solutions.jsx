import React from "react";
import SolutionCard from "../components/SolutionCard";
import { offers, solutionsOffer } from "../constants";

const Solutions = ({ Swiper, SwiperSlide, Pagination, Mousewheel }) => {
  return (
    <div className="pt-14 px-[100px] space-y-5 h-screen">
      <div className="text-center text-black_text font-montserrat space-y-2">
        <h1
          className=" bg-gradient-to-r 
              from-primary from-50% via-sky-500 via-30% to-secondary to-20%  text-transparent bg-clip-text
               text-xl font-bold uppercase"
        >
          our solutions
        </h1>
        <h2 className="text-5xl font-bold">We provide industry leading</h2>
        <p>
          cloud productivity, cloud infrastructure, cyber security, data
          security and architecture and engineering solutions
        </p>
      </div>
      <div className="flex flex-1 justify-center h-[25rem] z-100 bg-blue-500 rounded-lg">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {solutionsOffer.map((solution, index) => (
            <SwiperSlide
              className={`p-5 gap-10 flex justify-center items-center  ${
                solution.id === 2 || solution.id === 4
                  ? " flex flex-row flex-row-reverse "
                  : "flex flex-row"
              }`}
            >
              <div className="w-[50%] space-y-5 text-center flex flex-col items-center text-white">
                <h1
                  className="bg-white text-blue-500 w-[60%] rounded-lg p-2
               text-3xl font-bold uppercase"
                >
                  {solution.title}
                </h1>
                <p className="font-montserrat">{solution.content}</p>
              </div>
              <div className="w-[50%] rounded-lg drop-shadow-lg bg-white p-3 ">
                <img
                  src={solution.picture}
                  alt="solution's picture"
                  className="rounded-lg grayscale	"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Solutions;
