import { hero } from "../assets/images";
import Button from "../components/Button";
import { hero_animation } from "../assets/images";
import Lottie from "react-lottie";
import { stc_bg } from "../assets/images";
import "../App.css";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hero_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" bg-blue-500 space-x-10 relative h-screen flex justify-center">
      <div className="half_spiral h-screen w-full absolute blur-md"></div>
      <div
        className=" relative flex flex-col justify-center items-center
      space-y-5"
      >
        <div
          className="text-[7em] text-white leading-[0.9em] uppercase font-bold font-montserrat
        flex flex-col justify-center items-center"
        >
          <div className="flex">
            <img src={stc_bg} alt="" height={15} width={105} />
            <h1>ne</h1>
          </div>
          <h1>shellsoft</h1>
          <p className="text-sm font-medium">Techonology Corporation</p>
        </div>
        <div className="space-x-5">
          <Button name="Explore" bg_color="bg-green" destination="#services" />
          <Button name="About Us" bg_color="bg-green" destination="#services" />
        </div>
      </div>

      {/* <div className="w-[50%] flex justify-start items-center">
        <div className=" flex justify-start  rounded-[30rem] items-center image_spiral h-[85%] w-[85%] ">
          <Lottie
            options={defaultOptions}
            height={380}
            width={490}
            className="border-2 border-pink-500"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
