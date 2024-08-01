import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import akashImage from '/src/assets/Akash-Kumar-Gupta-min.jpeg';
import adityaImage from '/src/assets/Aditya-Shekhar-min.jpeg';
import nikhilImage from '/src/assets/nikhil-kumhar-min.jpeg';
import piyushImage from '/src/assets/Piyush-Bharadwaj-min.jpeg';

const teamMembers = [
  {
    name: 'Akash Kr. Gupta',
    role: 'Member 1',
    image: akashImage,
    github: 'https://github.com/akash7596',
    twitter: 'https://x.com/akashku77810153',
    linkedin: 'https://linkedin.com/in/akash-kumar-gupta-5a8980157',
  },
  {
    name: 'Aditya Shekhar',
    role: 'Member 2',
    image: adityaImage,
    github: 'https://github.com/itsofficialadi',
    twitter: 'https://x.com/itsofficialadi',
    linkedin: 'https://www.linkedin.com/in/itsofficialadi/',
  },
  {
    name: 'Nikhil Kumhar',
    role: 'Member 3',
    image: nikhilImage,
    github: 'https://github.com/Nikhilkumhar',
    twitter: '#',
    linkedin: 'https://www.linkedin.com/in/nikhil-kumhar-724187265',
  },
  {
    name: 'Piyush Bharadwaj',
    role: 'Member 4',
    image: piyushImage,
    github: 'https://github.com/Piyush3010i',
    twitter: 'https://x.com/3010_piyush',
    linkedin: 'https://www.linkedin.com/in/piyush-bharadwaj-6114a9319/',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-teal-300 to-blue-900 text-black py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-zinc-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 text-center">
                <div className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-red-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg text-black-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.github} className="text-black-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href={member.twitter} className="text-black-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                  </a>
                  <a href={member.linkedin} className="text-black-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
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
