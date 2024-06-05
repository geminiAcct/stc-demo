import React from "react";
import SolutionCard from "../components/SolutionCard";
import { solutionsOffer } from "../constants";

const Solutions = () => {
  return (
    <div className="py-14 px-[100px] space-y-5">
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
      <div className="flex flex-1 justify-center ">
        <SolutionCard solutions={solutionsOffer} />
      </div>
    </div>
  );
};

export default Solutions;
