import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Premium Printing Services in Ahmedabad — Offset, Packaging & Design"
        description="Shyam Printing offers premium offset printing, product packaging, and creative design in Ahmedabad. Speciality in Pantone Color Print. 15K+ projects, 500+ clients, 20+ years experience. Get a free quote today."
        path="/"
      />
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
