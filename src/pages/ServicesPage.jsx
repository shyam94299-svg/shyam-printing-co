import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import AnimatedSection from "../components/AnimatedSection";
import SectionBottomCurve from "../components/SectionBottomCurve";

const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    tryScroll();
  }, [hash]);

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
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/75 leading-relaxed">
              Comprehensive printing solutions tailored to your unique business needs.
            </p>
          </AnimatedSection>
        </div>
        <SectionBottomCurve />
      </section>
      <Services view="galleries" />
      <WhyChooseUs />
    </>
  );
};

export default ServicesPage;
 