import React from 'react';

const TrustedBrands = () => {
  return (
    <div className="py-20">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {['ibm-sb-min', 'csrbox', 'ignou-logo', 'sti-logo', 'united-nations',].map((brand, index) => (
            <img
              key={index}
              src={`/brands/${brand}.png`}
              alt={brand}
              className="h-16 mx-4 inline-block brand-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
