import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

const teamMembers = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    image: '/images/leonard.jpg',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    image: '/images/floyd.jpg',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Emily Selman',
    role: 'VP, User Experience',
    image: '/images/emily.jpg',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'John Doe',
    role: 'Backend Developer',
    image: '/images/john.jpg',
    twitter: '#',
    linkedin: '#',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 text-center">
                <div className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.twitter} className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href={member.linkedin} className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;