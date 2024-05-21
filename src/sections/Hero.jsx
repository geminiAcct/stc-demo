import { hero } from "../assets/images";
import Button from "../components/Button";
import { hero_animation } from "../assets/images";
import Lottie from "react-lottie";
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
    <div className="flex flex-row bg-stc-hero bg-cover bg-no-repeat h-screen">
      <div className="w-[50%] h-screen  ">
        <div className="relative top-[330px] left-[120px]">
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
