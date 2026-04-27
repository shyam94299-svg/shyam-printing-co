import { Shield, Zap, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const REASONS = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every print goes through rigorous checks before delivery. Premium materials and advanced presses ensure flawless results — every single time.",
    headerGradient: "linear-gradient(135deg, #012832 0%, #04647B 100%)",
    number: "01",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description:
      "Same-day and next-day rush options available. We meet your tightest deadlines without ever compromising on print quality or finish.",
    headerGradient: "linear-gradient(135deg, #78350f 0%, #f59e0b 100%)",
    number: "02",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "A dedicated project manager handles every order. From first quote to final delivery, your satisfaction is our only measure of success.",
    headerGradient: "linear-gradient(135deg, #881337 0%, #f43f5e 100%)",
    number: "03",
  },
];

const STATS = [
  { value: "999+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16"
      style={{ background: "linear-gradient(160deg, #f8fafc 0%, #f0f9ff 50%, #f8fafc 100%)" }}
    >
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-wider sm:text-sm">
            Why Choose Us
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            The <span className="text-primary">Shyam Printing</span> Advantage
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Three core reasons why hundreds of businesses trust us for every print job.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-12 grid grid-cols-2 gap-3 sm:mb-16 sm:gap-5 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="group rounded-2xl border border-primary/10 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-6">
              <p className="text-2xl font-black text-primary sm:text-3xl lg:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {REASONS.map(({ icon: Icon, title, description, headerGradient, number }, index) => (
            <AnimatedSection
              key={title}
              delay={index === 0 ? "" : index === 1 ? "animation-delay-200" : "animation-delay-400"}
            >
              <div className="group overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden sm:h-56"
                  style={{ background: headerGradient }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <span className="pointer-events-none absolute left-4 bottom-1 select-none font-black leading-none text-white/10 text-[100px]">
                    {number}
                  </span>
                  <img
                    src="/feather.png"
                    alt=""
                    className="pointer-events-none absolute right-0 bottom-0 h-28 w-28 select-none object-contain opacity-20"
                  />
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 ring-2 ring-white/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                    <Icon className="h-11 w-11 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="bg-white p-7 sm:p-8">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 sm:text-base">{description}</p>
                  <div className="mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
