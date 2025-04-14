import React, { useEffect } from "react";
import PropTypes from "prop-types";

const CachedImage = ({ src, alt, className }) => {
  useEffect(() => {
    if ("caches" in window) {
      caches.open("dynamic-assets").then((cache) => {
        cache.add(src).catch((err) => {
          console.error("Failed to cache image:", src, err);
        });
      });
    }
  }, [src]);

  return <img src={src} alt={alt} className={className} />;
};

CachedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CachedImage;
