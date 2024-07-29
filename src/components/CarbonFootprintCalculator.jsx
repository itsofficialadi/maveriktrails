import React from 'react';

const CarbonFootprintCalculator = () => {
  return (
    <div className="relative">
      <iframe
        title="Carbon Footprint Calculator"
        style={{ height: '730px', width: '100%', border: 'none' }} // Ensure no border
        src="https://sustainabletravel.org/wp-content/plugins/sti_client/src/shortcode/shortcode.php?api_key=STIKEY_66a3599d5d035282884803&primary_color=%23001685&secondary_color=%2382f722&light_primary_color=%23cce2ff&sort_order=Flight%2CCar%2CBoat"
      />
      <div className="iframe-overlay"></div> {/* Full-screen overlay */}
    </div>
  );
};

export default CarbonFootprintCalculator;
