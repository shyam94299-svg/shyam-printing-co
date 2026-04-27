import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import AnimatedSection from "../components/AnimatedSection";
import SectionBottomCurve from "../components/SectionBottomCurve";

const AboutPage = () => {
  return (
    <>
      <section
        className="relative pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{
          background: "linear-gradient(135deg, #012832 0%, #04647B 40%, #1a98b8 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              About <span className="text-secondary">Shyam Printing</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/75 leading-relaxed">
              Two decades of printing excellence, innovation, and unwavering commitment to quality.
            </p>
          </AnimatedSection>
        </div>
        <SectionBottomCurve className="text-secondary" />
      </section>
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default AboutPage;
