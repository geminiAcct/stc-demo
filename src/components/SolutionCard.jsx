import React from "react";
import { solutionsOffer } from "../constants";

const SolutionCard = () => {
  return (
    <div className=" w-[85%] bg-bg-test">
      <div className="flex flex-1 flex-col gap-10 grid grid-cols-2 gap-4 ">
        {solutionsOffer.map((solution, index) => (
          <div
            className={`flex flex-1 flex-col gap-2 justify-start items-center transition
             ease-in-out delay-150 hover:-translate-y-1 text-white hover:text-black hover:scale-110 
              hover:bg-white duration-300 py-5 rounded-md bg-secondary ${
                index === 1 || index === 3 ? "flex-row-reverse" : "flex-row"
              } px-10`}
            key={solution.id} // Add a unique key
          >
            <img className="w-[40%]" src={solution.logo} alt="logo" />
            <span className="flex flex-1 flex-col gap-5 justify-start items-center  text-wrap ">
              <h2 className=" font-roboto text-3xl">{solution.title}</h2>
              <p className={`font-montserrat text-sm`}>{solution.content}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionCard;
