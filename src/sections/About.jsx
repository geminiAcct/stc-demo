import { about_us } from "../constants";
import { stc_bg } from "../assets/images";
import Carousel from "../components/Carousel";

const About = () => {
  return (
    <div className="flex flex-col px-[100px] py-10 gap-5">
      <div>
        <h1 className="font-roboto font-semibold text-4xl">About Us</h1>
      </div>
      <div className="bg-dark_white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-5 py-5">
        {about_us.length > 0 && (
          <p>
            {about_us.map((about, index) =>
              index === 0 ? about.content : null
            )}
          </p>
        )}
      </div>
      <div>
        <Carousel />
      </div>
      <div className="w-full flex flex-row   font-montserrat text-sm">
        <div className=" w-full">
          {about_us.length > 4 && (
            <p className=" w-full flex flex-row w-full gap-5 ">
              {about_us.slice(1, 5).map((about, index) => (
                <span
                  className="w-full py-5 px-5 bg-dark_white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
                  key={index}
                >
                  {about.content}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
