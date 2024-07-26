import React from 'react';

const CarbonFootprintCalculator = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <iframe
          style={{ height: '1000px', width: '100%' }}
          src="https://sustainabletravel.org/wp-content/plugins/sti_client/src/shortcode/shortcode.php?api_key=STIKEY_66a3599d5d035282884803&primary_color=%23001685&secondary_color=%2382f722&light_primary_color=%23cce2ff&sort_order=Flight%2CCar%2CBoat"
          title="Carbon Footprint Calculator"
        ></iframe>
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
