import React from 'react';

const Features = () => {
  return (
    <div className="text-white py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'The lowest price', text: 'Some text here' },
          { title: 'The fastest on the market', text: 'Some text here' },
          { title: 'The most loved', text: 'Some text here' },
        ].map((feature, index) => (
          <div key={index}>
            <h3 className="font-bold text-xl">{feature.title}</h3>
            <p className="text-secondary mt-2">{feature.text}</p>
            <div className="mt-4 border-t border-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
