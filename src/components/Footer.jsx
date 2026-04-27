import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FOOTER_LINKS = {
  services: [
    { label: "Our Speciality", to: "/services" },
    { label: "Catalogue", to: "/services" },
    { label: "Brochures & Flyers", to: "/services" },
    { label: "Mono Cartons", to: "/services" },
    { label: "Creative Design", to: "/services" },
    { label: "Offset Printing", to: "/services" },
    { label: "Product Packaging", to: "/services" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Careers", to: "/about" },
    { label: "Blog", to: "/about" },
  ],
  support: [
    { label: "Contact Us", to: "/contact" },
    { label: "FAQ", to: "/contact" },
    { label: "Shipping Info", to: "/contact" },
    { label: "File Guidelines", to: "/services" },
    { label: "Privacy Policy", to: "/" },
    { label: "Terms of Service", to: "/" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/shyam_printing" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-akbari-51087b295/" },
];

const logo_src = "/Logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <img
        src="/feather.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 right-2 w-[24rem] opacity-20 select-none"
      />
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="group mb-6 inline-flex items-center">
              <img
                src={logo_src}
                alt="Shyam Printing logo"
                className="h-12 w-auto rounded-md transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
              />
            </Link>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/70">
              Premium printing solutions for businesses and individuals. Quality,
              speed, and creativity in every project since 2005. Your trusted
              partner for all print needs.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-110 hover:shadow-lg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white sm:mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white sm:mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white sm:mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 sm:py-8">
          <p className="text-center text-sm text-white whitespace-nowrap">
            &copy; {new Date().getFullYear()} Shyam Printing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
