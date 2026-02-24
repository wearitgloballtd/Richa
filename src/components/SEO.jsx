import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  type,
  name,
  href,
  alternateHref,
  hreflang,
  siteName = "Richa Industries Limited",
  image,
  facebookUrl,
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags for social media sharing */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {siteName && <meta property="og:site_name" content={siteName} />}
      {href && <meta property="og:url" content={href} />}
      {keywords && <meta property="og:keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Facebook tags */}
      <meta name="facebook:title" content={title} />
      <meta name="facebook:description" content={description} />
      {facebookUrl && <meta name="facebook:url" content={facebookUrl} />}
      <meta name="facebook:card" content="summary" />

      {href && <link rel="canonical" href={href} />}
      {alternateHref && hreflang && (
        <link rel="alternate" href={alternateHref} hreflang={hreflang} />
      )}
    </Helmet>
  );
}
