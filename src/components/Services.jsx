import { PenTool, FileText, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    icon: PenTool,
    title: "Creative Design",
    description:
      "Our in-house designers bring your vision to life with creative layouts and professional typography.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=260&fit=crop&q=80",
    tag: "Creative Studio",
    id: "creative-design",
  },
  {
    icon: FileText,
    title: "Offset Printing",
    description:
      "Offset Printing for Consistent Branding - Delivering Premium Business cards, Corporate stationery, Marketing materials with High-volume efficiency.",
    image: "/printing.jpg",
    tag: "Most Popular",
    id: "offset-printing",
  },
  {
    icon: Package,
    title: "Product Packaging",
    description:
      "Durable & Attractive Packaging solution that Boost product and Elevate your brand experience.",
    image: "/Packaging.png",
    tag: "Brand Packaging",
    id: "product-packaging",
  },
];

const SERVICE_GALLERIES = [
 {
    id: "our-speciality",
    title: "Our Speciality",
    images: [
    { src: "/Pantone/PANTONE-2.jpeg", alt: "Creative design workspace", name: "Pantone Color" },
    { src: "/Pantone/PANTONE-1.jpeg", alt: "Creative design workspace", name: "Pantone Color" },
    { src: "/Pantone/PANTONE-3.jpeg", alt: "Creative design workspace", name: "Pantone Color" },
  ]},
  {
    id: "creative-design",
    title: "Creative Design",
    images: [
      { src: "Design/Logo1.jpg", alt: "Logo design", name: "Logo Design" },
      { src: "Design/image3.jpg", alt: "Brochure Design", name: "Brochure Design" },
      { src: "Design/catalogue.jpg", alt: "Catalogue Design", name: "Catalogue Design" },
      { src: "Design/image2.jpg", alt: "Brand Identity", name: "Brand Identity" },
      { src: "Design/Ad Creatives.jpg", alt: "Ad Creatives", name: "Ad Creatives" },
      { src: "Design/presentation.webp", alt: "Presentation Design", name: "Presentation Design" },
    ],
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    images: [
      { src: "/Printing/Business Card.jpg", alt: "Business Card", name: "Business Card" },
      { src: "/Printing/Dangler.jpg", alt: "Danglers", name:"Danglers" },
      { src: "/Printing/food-paper.jpg", alt: "Food Paper bag", name: "Food Paper Bag" },
      { src: "/Printing/Stationery.jpg", alt: "Corporate stationery", name: "Corporate stationery" },
      { src: "/Printing/paper-bag.png", alt: "Paper Bag", name: "Paper Bag" },
      { src: "/Printing/Stickers.png", alt: "Stickers", name: "Stickers" },
    ],
  },
  {
    id: "product-packaging",
    title: "Product Packaging",
    images: [
      { src: "/Packaging/Auto Lock Box.jpg", alt: "Product packaging", name: "Product Packaging" },
      { src: "/Packaging/Auto Parts Box.webp", alt: "Product packaging", name: "Auto Parts Box" },
      { src: "/Packaging/Cake Box.jpg", alt: "Product packaging", name: "Cake Box" },
      { src: "/Packaging/Tube Box.jpg", alt: "Product packaging", name: "Tube Box" },
      { src: "/Packaging/LED Box.jpg", alt: "Product packaging", name: "LED Box" },
      { src: "/Packaging/Pharma Box.png", alt: "Product packaging", name: "Pharmaceutical Box" },
      { src: "/Packaging/PIzza Box.jpg", alt: "Product packaging", name: "Pizza Box" },
      { src: "/Packaging/Label1.jpg", alt: "Product packaging", name: "Product Packaging" },
      { src: "/Packaging/Foil.webp ", alt: "Product packaging", name: "Foil Packaging" },
     ],
  },
];

const ServiceCard = ({ icon: Icon, title, description, image, tag, id, index }) => (
  <AnimatedSection
    delay={
      index % 3 === 0 ? "" : index % 3 === 1 ? "animation-delay-200" : "animation-delay-400"
    }
  >
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/20"
       style={{ background: "linear-gradient(160deg, #f8fafc 0%, #f0f9ff 50%, #f8fafc 100%)" }}
    >
      <Link to={`/services#${id}`} className="relative block h-48 overflow-hidden sm:h-52">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur-sm sm:left-4 sm:top-4">
          {tag}
        </span>
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/30 sm:h-12 sm:w-12">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-lg">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-500">{description}</p>
        <Link
          to={`/services#${id}`}
          className="mt-4 flex items-center gap-1.5 text-xs font-bold text-primary transition-all duration-300 sm:mt-5 sm:text-sm hover:gap-2.5"
        >
          Explore more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

const ServiceGallery = ({ id, title, images }) => (
  <AnimatedSection>
    <div id={id} className="scroll-mt-24">
      <h3 className="mb-12 font-display text-2xl font-bold text-primary sm:text-2xl lg:text-5xl">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-5">
        {images.map((img) => (
          <div
            key={img.alt}
            className="group relative overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-100"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 lg:h-56"
              loading="lazy"
            />
            {img.name && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="w-full px-3 py-2.5 text-xs font-semibold text-white sm:text-sm">
                  {img.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Services = ({ view = "cards" }) => {
  if (view === "galleries") {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-20"      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            {SERVICE_GALLERIES.map((gallery, index) => (
              <>
                <ServiceGallery key={gallery.id} {...gallery} />
                {index < SERVICE_GALLERIES.length - 1 && (
                  <hr key={`divider-${gallery.id}`} className="mt-8 mb-12 border-t-2 border-primary/30" />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-wider sm:text-sm">
            Our Services
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Everything You Need in{" "}
            <span className="text-primary">Print</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            From Concept to Delivery, comprehensive printing solutions tailored
            to your unique requirements.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
