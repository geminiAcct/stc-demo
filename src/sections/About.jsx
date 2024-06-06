import { about_us } from "../constants";
import { stc_bg } from "../assets/images";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { more_arrow, more_arrow_white } from "../assets/images";
import { about_banner } from "../assets/images";
const about1 = about_us[0];
const about2 = about_us[1];

const About = () => {
  return (
    <div className="flex flex-row  half_spiral drop-shadow-lg	">
      <div className=" flex space-x-5 backdrop-blur-md ">
        <div className=" p-10 rounded-lg text-wrap p-9 ">
          <div className=" font-montserrat space-y-5">
            <h1 className="font-bold text-3xl text-blue-500 bg-white p-2 rounded-lg   text-center">
              Shellsoft: Delivering IT Confidence
            </h1>
            <p className="text-white">{about1.content}</p>
            {/* <p className="text-white">{about2.content}</p> */}
            <div className="group flex items-center curr-pointer">
              <p className="text-white font-roboto font-semibold text-md flex hover:text-transparent">
                learn more
                <img
                  src={more_arrow_white}
                  width={25}
                  height={10}
                  className="group-hover:translate-x-[-3rem] transition-transform"
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={about_banner}
            alt=""
            width="6250rem"
            height="170rem"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
