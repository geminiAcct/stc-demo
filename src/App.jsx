import "./App.css";
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
      <section
        className="bg-stc-hero bg-coverbbg-no-repeat h-screen index-10"
        id="home"
      >
        <Hero />
      </section>
      {/* <section id="services">
        <Services />
      </section> */}
      <section className="bg-dark_white bg-cover " id="solutions">
        <Solutions />
      </section>
      <section className="bg-dark_white" id="partners">
        <Partners />
      </section>
      <section className="bg-bg-test bg-cover" id="about">
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
