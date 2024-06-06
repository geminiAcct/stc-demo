import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import {
  Nav,
  Hero,
  Services,
  Partners,
  Solutions,
  About,
  Contact,
  Footer,
} from "./sections";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 ">
        <Nav />
      </header>
      <section className=" index-10" id="home">
        <Hero />
      </section>
      {/* <section id="services">
        <Services />
      </section> */}
      <section className="bg-dark_white" id="solutions">
        <Solutions
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          Pagination={Pagination}
          Mousewheel={Mousewheel}
        />
      </section>
      <section className="bg-dark_white" id="partners">
        <Partners
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          Autoplay={Autoplay}
          EffectFade={EffectFade}
        />
      </section>
      <section className="bg-dark_white" id="about">
        <About />
      </section>
      <section id="contact-us" className="bg-dark_white">
        <Contact />
      </section>
      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  );
}

export default App;
