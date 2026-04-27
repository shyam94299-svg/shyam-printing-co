import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const PORTFOLIO_ITEMS = [
  {
    title: "Luxury Brand Package",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Annual Report Design",
    category: "Booklet",
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Wedding Invitation Suite",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Restaurant Menu Collection",
    category: "Menu Design",
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Corporate Identity Kit",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Event Banner Series",
    category: "Large Format",
    image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?w=500&h=400&fit=crop&q=80",
  },
];

const PortfolioCard = ({ title, category, image, index }) => {
  const col = index % 3;
  const delay =
    col === 0 ? "" : col === 1 ? "animation-delay-200" : "animation-delay-400";

  return (
    <AnimatedSection delay={delay}>
      <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 sm:rounded-2xl">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14">
              <ExternalLink className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-1 text-center text-base font-bold text-white sm:text-lg">
              {title}
            </h3>
            <p className="text-center text-xs font-medium text-white/70 sm:text-sm">
              {category}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 transition-opacity duration-300 group-hover:opacity-0 sm:p-4">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-white/70">{category}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-secondary py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-wider sm:mb-4 sm:px-5 sm:py-2 sm:text-sm">
            Our Work
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Explore our diverse portfolio of print projects delivered with
            precision and creativity.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
