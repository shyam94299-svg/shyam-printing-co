import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shyam Printing",
  "description": "Premium offset printing, product packaging, Pantone color printing, and creative design services in Ahmedabad, Gujarat. 15K+ projects, 500+ happy clients, 20+ years of experience.",
  "url": "https://shyamprinting.com",
  "telephone": "+919429914888",
  "email": "connect@shyamprinting.com",
  "image": "https://shyamprinting.com/Logo%20color.png",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "S/4, 2nd Floor, Raspan Arcade, Raspan Cross Road, Nikol",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382350",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Printing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Offset Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Packaging" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pantone Color Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Design" } }
    ]
  }
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
        </script>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;