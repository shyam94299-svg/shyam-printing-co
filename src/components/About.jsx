import { CheckCircle2, Award, Users, Clock, Captions, icons } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const HIGHLIGHTS = [
  "Semi Automatic Offset Printing & Packaging Technology.",
  "Custom Design Tailored To Your Brand.",
  "On-time Delivery You Can Always Rely On.",
  "Cost-effective Solutions Without Compromissing Quality.",
];

const STATS = [
  { icon: Captions, value: "60k+ Sheets", label: "Everyday Printing Capacity" },
  { icon: Users, value: "200+", label: "Repeat Orders" },
  { icon: Captions, value: "40+", label: "Unique Products" },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <AnimatedSection animation="slide-in-left">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-wider sm:mb-4 sm:px-5 sm:py-2 sm:text-sm">
                About Us
              </span>
              <h2 className="mb-5 font-display text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
                Crafting Print Excellence{" "}
                <span className="text-primary">Since 2005</span>
              </h2>
              <p className="mb-5 text-base leading-relaxed text-gray-600 sm:mb-6 sm:text-lg">
                At <span className="font-semibold text-primary">Shyam Printing</span>, we bring together advanced printing technology and years of industry expertise to deliver exceptional results. Since 2005, we have been helping businesses enhance their brand presence through high-quality printing and innovative packaging solutions.
              </p>
              <p className="mb-5 text-base leading-relaxed text-gray-600 sm:mb-6 sm:text-lg">
                From business essentials to customized packaging, every project is handled with precision, creativity, and attention to detail. Our focus is not just printing — but creating impactful brand experiences that leave a lasting impression.
              </p>
              <p className="mb-5 text-base leading-relaxed text-gray-600 sm:mb-6 sm:text-lg">
                We believe in building long-term relationships with our clients by offering reliable service, consistent quality, and timely delivery — every single time.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed sm:text-base">
                Whether you need small-volume prints or large-scale production, our team ensures smooth execution from design to delivery. With in-house capabilities and a customer-first approach, we provide complete solutions under one roof.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — image, highlights, stats */}
          <AnimatedSection animation="slide-in-right">
            <div className="flex flex-col gap-8">

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 sm:rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=525&fit=crop&q=80"
                    alt="Modern printing press at Shyam Printing facility"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 overflow-hidden rounded-xl shadow-xl sm:-bottom-6 sm:-right-6 sm:rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?w=300&h=200&fit=crop&q=80"
                    alt="Close-up of printed materials quality"
                    className="h-24 w-32 object-cover sm:h-40 sm:w-56"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-3 sm:space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                    <span className="text-sm text-gray-700 font-medium sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl sm:p-4"
                  >
                    <Icon className="mx-auto mb-1.5 h-4 w-4 text-primary sm:mb-2 sm:h-5 sm:w-5" />
                    <p className="text-lg font-bold text-primary sm:text-xl">{value}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                ))}
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default About;
