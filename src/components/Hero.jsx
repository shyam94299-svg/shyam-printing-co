import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import SectionBottomCurve from "./SectionBottomCurve";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #012832 0%, #04647B 40%, #1a98b8 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-32 top-1/3 h-52 w-52 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl sm:h-64 sm:w-64" />
      </div>

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

      <div className="relative mx-auto flex min-h-[calc(100dvh-1rem)] max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:min-h-screen lg:flex-row lg:gap-16 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="w-full py-6 text-center sm:py-12 lg:flex-1 lg:py-0 lg:text-left">
          <Link
            to="/services#pantone-color-print"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm animate-fade-in sm:mb-8 sm:px-5 sm:py-2.5 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary sm:h-4 sm:w-4" />
            <span className="text-xs font-semibold text-white tracking-wide sm:text-sm">
              Speciality in Pantone Color Print
            </span>
          </Link>

          <h1 className="mb-8 font-display font-bold leading-tight text-white animate-fade-in-up sm:mb-8 text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            Bringing Your
            <span className="block mt-1 sm:mt-2">
              <span className="relative text-secondary inline-block pb-10 sm:pb-12">
                Ideas to{" "}
                <span className="text-secondary">Print</span>
                <svg
                  className="absolute bottom-1 md:-bottom-3 left-0 w-full"
                  viewBox="-347 -30.19147 694 96.19147"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    style={{ animationDuration: "1.25s" }}
                    d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.04299926757812 147.14700317382812,-29.308000564575193 335,2"
                    stroke="#FCECEC"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/80 animate-fade-in-up animation-delay-200 sm:mb-10 sm:max-w-xl sm:text-md lg:mx-0 lg:text-lg">
            From High Quality Printing to Packaging, We deliver
            exceptional accuracy with fast turnaround and unmatched
            attention to detail.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up animation-delay-400 sm:flex-row sm:gap-4 lg:justify-start">
            <Link
              to="/contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-secondary active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Get Quotation Today
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/services"
              className="w-full rounded-xl border-2 border-white/30 px-6 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 animate-fade-in-up animation-delay-600 sm:mt-10 sm:gap-x-6 lg:justify-start">
            {["Free Consultation", "On Time Delivery", "Quality Guaranteed"].map(
              (item) => (
                <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-secondary sm:h-4 sm:w-4" />
                  <span className="text-xs font-medium text-white/70 sm:text-sm">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="hidden flex-1 lg:flex lg:justify-end animate-slide-in-right">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
              <img
                src="/hero.jpeg"
                alt="Printing press machine in operation"
                className="h-[380px] w-[560px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-8 animate-float">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/25">
                    <span className="text-xl font-bold text-white">60K+</span>
                  </div>
                  <div>
                    <p className="text-md font-bold text-primary">Everyday</p>
                    <p className="text-sm text-gray-500">Printing Capacity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-6 animate-float" style={{ animationDelay: "1s" }}>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">15+ Years</p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-3 gap-4 pt-4 animate-fade-in-up animation-delay-600 sm:mt-10 sm:gap-6 sm:pt-8 lg:hidden">
          {[
            { number: "15K+", label: "Projects Done" },
            { number: "500+", label: "Happy Clients" },
            { number: "20+", label: "Years Exp." },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <p className="text-xl font-bold text-white sm:text-2xl">{number}</p>
              <p className="text-xs text-white/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionBottomCurve className="text-white hidden sm:block" />

    </section>
  );
};

export default Hero;
