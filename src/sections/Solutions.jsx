import React from "react";
import SolutionCard from "../components/SolutionCard";

const Solutions = () => {
  return (
    <div className="py-10 ">
      <div className="flex justify-center">
        <h1 className="text-white text-4xl font-roboto font-semibold">
          Our Solutions
        </h1>
      </div>
      <div className="flex flex-1 justify-center py-10 ">
        <SolutionCard />
      </div>
    </div>
  );
};

export default Solutions;
