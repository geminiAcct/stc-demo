import React from "react";
import Button from "../components/Button";
import { right_arrow } from "../assets/images";
const Contact = () => {
  return (
    <div className="max-container py-[5rem] flex flex-1 justify-center items-center flex-col gap-10 text-black_text">
      <div className="bg-dark_white text-center flex flex-1 flex-col justify-center items-center gap-5">
        <h1 className="uppercase text-5xl font-bold">shellsoft on security</h1>
        <h3 className="font-montserrat w-[80%] ">
          Balancing security and productivity is tough. Multiple solutions
          complicate security. Microsoft 365, with the Intelligent Security
          Graph, simplifies and enhances it.
        </h3>
      </div>
      <div className="flex flex-1 gap-5">
        <Button
          name="Contact Us"
          bg_color="bg-green"
          destination="#contact-us"
        />
        <a
          href=""
          className="group flex flex-1 justify-center items-center gap-2 hover:text-dark_white"
        >
          <p className="flex items-center font-roboto text-md">Learn more</p>
          <img
            src={right_arrow}
            alt="arrow"
            className="w-4 h-4 group-hover:translate-x-[-3rem] transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
