import { Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechVista",
    content:
      "Shyam Printing transformed our annual report into a stunning piece. The print quality and attention to detail were absolutely remarkable. They've been our go-to printer for three years now.",
    rating: 5,
    avatarColor: "from-primary to-primary-light",
  },
  {
    name: "Michael Chen",
    role: "Owner, The Grand Bistro",
    content:
      "From menu cards to promotional banners, Shyam Printing delivers consistently excellent results. Their turnaround time is unmatched and the team is incredibly responsive.",
    rating: 5,
    avatarColor: "from-amber-500 to-orange-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Event Planner, Bloom Events",
    content:
      "I rely on Shyam Printing for all my event materials. The custom invitation suites they create are always a hit with our clients. Professional, timely, and beautiful work every time.",
    rating: 5,
    avatarColor: "from-rose-500 to-pink-400",
  },
];

const TestimonialCard = ({ name, role, content, rating, avatarColor, index }) => {
  return (
    <AnimatedSection
      delay={index === 0 ? "" : index === 1 ? "animation-delay-200" : "animation-delay-400"}
    >
      <div className="group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/20 sm:rounded-3xl sm:p-8">
        <div className="absolute -top-4 left-7 sm:left-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/40 sm:h-10 sm:w-10 sm:rounded-2xl">
            <Quote className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
          </div>
        </div>

        <div className="mb-4 flex gap-0.5 pt-3 sm:mb-5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
          ))}
        </div>

        <p className="flex-1 text-sm italic leading-relaxed text-gray-600 sm:text-base">
          &ldquo;{content}&rdquo;
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5 sm:gap-4 sm:pt-6">
          <div
            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColor} text-sm font-bold text-white shadow-md sm:h-12 sm:w-12`}
          >
            {name.charAt(0)}
            {name.split(" ")[1]?.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 sm:text-base">{name}</p>
            <p className="text-xs text-gray-400 sm:text-sm">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white relative overflow-hidden py-8 sm:py-12 lg:py-16"
    >
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-rose-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-wider sm:text-sm">
            Testimonials
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Don&apos;t just take our word for it — hear from the businesses who
            trust us with their print needs.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
