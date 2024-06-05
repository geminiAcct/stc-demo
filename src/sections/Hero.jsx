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
    <div className="flex flex-row bg-blue-500 h-screen">
      <div className="w-[50%] h-screen  relative top-[160px] left-[100px] space-y-5">
        <div
          className="text-[5.5em] text-white leading-[0.9em] uppercase font-bold font-montserrat
        flex flex-col"
        >
          <div className="flex">
            <img src={stc_bg} alt="" height={10} width={90} />
            <h1>ne </h1>
          </div>
          <h1>shellsoft</h1>
          <p className="text-sm font-medium">Techonology Corporation</p>
        </div>
        <div className="">
          <Button name="Explore" bg_color="bg-green" destination="#services" />
        </div>
      </div>

      <div className="w-[50%] flex justify-start items-center">
        <Lottie options={defaultOptions} height={400} width={490} />
      </div>
    </div>
  );
};

export default Hero;
