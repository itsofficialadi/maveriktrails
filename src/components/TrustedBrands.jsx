import React from 'react';

const TrustedBrands = () => {
  return (
    <div className="py-20">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {['microsoft', 'airbnb', 'google', 'ge', 'netflix', 'google-cloud'].map((brand, index) => (
            <img
              key={index}
              src={`/brands/${brand}.svg`}
              alt={brand}
              className="h-12 mx-4 inline-block brand-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
