import React, { useState } from "react";
import { solutionsOffer } from "../constants";
import { infrastructure } from "../assets/images";

const SolutionCard = ({ solutions, Swiper, SwiperSlide, Pagination }) => {
  const [activeSolution, setActiveSolution] = useState(0);

  const handleClick = (index) => {
    setActiveSolution(index);
  };

  return (
    <div className="pt-10 space-y-28 h-[400px]">
      {solutions.map((solution, index) => (
        <Swiper
          direction={"vertical"}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
      ))}

      {/* {solutions.map((solution, id) => (
        <div
          key={id}
          className={` gap-10 flex justify-center items-center  ${
            solution.id === 2 || solution.id === 4
              ? " flex flex-row flex-row-reverse "
              : "flex flex-row"
          }`}
        >
          <div className="w-[50%] space-y-5 text-center">
            <h1
              className="bg-gradient-to-r 
              from-primary from-50% via-sky-500 via-30% to-secondary to-20%  text-transparent bg-clip-text
               text-3xl font-bold uppercase"
            >
              {solution.title}
            </h1>
            <p className="font-montserrat">{solution.content}</p>
          </div>
          <div
            className="w-[50%] rounded-lg drop-shadow-lg bg-gradient-to-r
           from-sky-700 via-sky-500 to-sky-400 p-3 "
          >
            <img
              src={solution.picture}
              alt="pictures"
              className="rounded-lg grayscale	"
            />
          </div>
        </div>
      ))} */}

      {/* <div className="flex flex-1 space-x-4">
        {solutions.map((solution, index) => (
          <div
            className={`flex flex-1 bg-white text-black_text rounded-full items-center justify-center gap-2 py-2 shadow-md cursor-pointer
             ${
               activeSolution === index
                 ? "active border-2 border-green ease-in duration-200 delay-75"
                 : "border-2 border-white ease-out duration-200  delay-75"
             }`}
            onClick={() => handleClick(index)}
          >
            <img src={solution.logo} alt="logo" width="15%" className="" />
            <p
              key={index}
              className="text-xl font-roboto font-medium text-black_text"
            >
              {solution.title}
            </p>
          </div>
        ))}
      </div>

      <div>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`tabs__content-item   flex items-center space-x-4 bg-white rounded-lg drop-shadow-lg ${
              activeSolution === index
                ? "active ease-in duration-200 delay-75"
                : "hidden"
            }`}
          >
            <div className="space-y-5 w-[50%] p-5">
              <h2
                className="font-roboto font-semibold text-3xl bg-gradient-to-r 
              from-primary from-40% via-sky-500 via-40% to-secondary to-20%  text-transparent bg-clip-text"
              >
                {solution.subtitle}
              </h2>
              <p className="font-montserrat">{solution.content}</p>
            </div>
            <div className="w-[50%] ">
              <img
                src={solution.picture}
                alt="infra"
                className="rounded-r-lg"
              />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SolutionCard;
