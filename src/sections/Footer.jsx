import React from "react";
import Form from "../components/Form";
import { fb } from "../assets/images";

const Footer = () => {
  return (
    <div className="max-contaier text-white ">
      <div className="flex flex-1 flex-row space-x-28 justify-center  p-14 ">
        <div className="space-y-5 ">
          <h1 className="uppercase font-roboto font-bold text-5xl ">
            one shellsoft
          </h1>

          <p className="font-montserrat">
            <span className="uppercase font-medium">Address:</span> <br />
            <span className="font-light">
              7th Floor, Santolan Town Plaza 276 Santolan Road 1500 <br />
              San Juan City, Philippines
            </span>
          </p>
          <p className="font-montserrat">
            <span className="uppercase font-medium">Contact no:</span> <br />
            <span className="font-light">
              Tel. No: +632 8740-0431, 8882-0008 <br /> Fax No: +632 8740-0431 x
              219
            </span>
          </p>
          <div className="space-y-1">
            <p className="font-montserrat uppercase font-medium">socials:</p>
            <img src={fb} alt="facebook" width="30rem" />
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div className="text-center py-2">
        Shellsoft Technology Corporation © 2024
      </div>
    </div>
  );
};

export default Footer;
