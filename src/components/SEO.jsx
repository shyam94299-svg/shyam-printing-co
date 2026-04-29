import { Helmet } from "react-helmet-async";

const BASE_URL = "https://shyamprinting.com";
const DEFAULT_IMAGE = `${BASE_URL}/Logo%20color.png`;

const SEO = ({ title, description, path = "", image = DEFAULT_IMAGE }) => {
  const full_title = title
    ? `${title} | Shyam Printing`
    : "Shyam Printing — Premium Printing Services in Ahmedabad";

  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{full_title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={full_title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Shyam Printing" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full_title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
