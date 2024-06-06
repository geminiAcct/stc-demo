import Tabs from "../components/Tab";
import { products } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export const Partners = ({ Swiper, SwiperSlide, Autoplay, EffectFade }) => {
  return (
    <div
      className="space-y-10 px-[50px] h-screen flex flex-col justify-center place-self-center"
      id="partners"
    >
      <div className="font-montserrat text-black_text space-y-2 text-center">
        <h1
          className="bg-gradient-to-r 
              from-primary from-50% via-sky-500 via-30% to-secondary to-20%  text-transparent bg-clip-text
               text-xl font-bold uppercase"
        >
          our trusted partners
        </h1>
        <h1 className="text-5xl font-bold">
          Together with industry <br />
          experts, we deliver.
        </h1>
        <p>
          From cutting-edge solutions to unparalleled expertise, our partners
          extend our reach and empower you to achieve more.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          allowTouchMove={false}
          runCallbacksOnInit={true}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide className="flex place-self-center">
              <img
                src={product.logo}
                alt="partner's logo"
                width={product.width}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
