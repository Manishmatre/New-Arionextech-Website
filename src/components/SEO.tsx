import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object;
}

const SEO = ({
  title = "ArionexTech Software - Leading Software Development Company | Custom Software Solutions",
  description = "ArionexTech Software is a premier software development company specializing in custom software solutions, web development, mobile apps, WordPress development, and digital marketing. Transform your business with our innovative technology solutions.",
  keywords = "ArionexTech Software, ArionexTech, Arionex Tech, software development company, custom software development, web development, mobile app development, WordPress development, digital marketing, IT company, software solutions, technology company, India, Manish Matre",
  image = "/og-image.jpg",
  url = "https://arionextech.com",
  type = "website",
  author = "ArionexTech",
  publishedTime,
  modifiedTime,
  schema
}: SEOProps) => {
  const fullTitle = title.includes('ArionexTech') ? title : `${title} | ArionexTech`;
  const fullUrl = url.startsWith('http') ? url : `https://arionextech.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://arionextech.com${image}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ArionexTech Software",
    "alternateName": ["ArionexTech", "Arionex Tech", "ArionexTech Software Company"],
    "url": "https://arionextech.com",
    "logo": "https://arionextech.com/logo.png",
    "description": "ArionexTech Software - Leading software development company providing custom software solutions, web development, mobile apps, and digital marketing services. Founded by Manish Matre.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Manish Matre"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8817088544",
      "contactType": "customer service",
      "email": "info@arionextech.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/arionextech-software",
      "https://twitter.com/arionextech",
      "https://facebook.com/arionextech",
      "https://instagram.com/arionextech",
      "https://github.com/arionextech",
      "https://www.youtube.com/@arionextech"
    ],
    "services": [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "WordPress Development",
      "UI/UX Design",
      "Digital Marketing",
      "SEO Services",
      "Graphic Design"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Professional website development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ArionexTech" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@arionextech" />
      <meta name="twitter:creator" content="@arionextech" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="ArionexTech" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />

      {/* Business Meta Tags */}
      <meta name="rating" content="5" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content="English" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEO;
