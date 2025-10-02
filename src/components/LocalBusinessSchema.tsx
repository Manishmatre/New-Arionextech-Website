import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://arionextech.com/#organization",
    "name": "ArionexTech",
    "alternateName": ["ArionexTech Software", "Arionex Tech"],
    "url": "https://arionextech.com",
    "logo": "https://arionextech.com/logo.png",
    "image": [
      "https://arionextech.com/og-image.jpg",
      "https://arionextech.com/logo.png"
    ],
    "description": "ArionexTech is a leading software development company in India specializing in custom software solutions, web development, mobile app development, WordPress development, and digital marketing services. We transform businesses through innovative technology solutions.",
    "foundingDate": "2023",
    "slogan": "Innovation • Excellence • Growth",
    "knowsAbout": [
      "Software Development",
      "Web Development", 
      "Mobile App Development",
      "WordPress Development",
      "Custom Software Solutions",
      "Digital Marketing",
      "UI/UX Design",
      "SEO Services",
      "E-commerce Development",
      "Technology Consulting"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8817088544",
        "contactType": "customer service",
        "email": "info@arionextech.com",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/arionextech-software",
      "https://twitter.com/arionextech",
      "https://facebook.com/arionextech",
      "https://instagram.com/arionextech",
      "https://github.com/arionextech",
      "https://www.youtube.com/@arionextech"
    ],
    "founder": {
      "@type": "Person",
      "name": "Manish Matre",
      "jobTitle": "CEO & Founder",
      "sameAs": [
        "https://www.linkedin.com/in/manish-matre"
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Manish Matre",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person", 
        "name": "Nidhi Sharma",
        "jobTitle": "Business Development Executive"
      },
      {
        "@type": "Person",
        "name": "Arjun Kumar", 
        "jobTitle": "Chief Technology Officer"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "3-10"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions designed specifically for your business needs",
            "provider": {
              "@type": "Organization",
              "name": "ArionexTech"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Web Development",
            "description": "Professional website development with modern technologies",
            "provider": {
              "@type": "Organization",
              "name": "ArionexTech"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development", 
            "description": "Native and cross-platform mobile applications for iOS and Android",
            "provider": {
              "@type": "Organization",
              "name": "ArionexTech"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Development",
            "description": "Custom WordPress websites and e-commerce solutions",
            "provider": {
              "@type": "Organization", 
              "name": "ArionexTech"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing strategies to grow your business online",
            "provider": {
              "@type": "Organization",
              "name": "ArionexTech"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajneesh Choudhury"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "ArionexTech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Suvankar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Working with ArionexTech was a game-changer for our business. They developed a mobile app that perfectly captures our vision and serves our customers brilliantly."
      }
    ],
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI", "PayPal"],
    "currenciesAccepted": "INR, USD",
    "openingHours": "Mo-Sa 09:00-18:00",
    "telephone": "+91-8817088544",
    "email": "info@arionextech.com",
    "vatID": "GST123456789",
    "taxID": "PAN123456789",
    "naics": "541511",
    "isicV4": "6201"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
