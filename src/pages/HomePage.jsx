import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <WhyChooseUs />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
