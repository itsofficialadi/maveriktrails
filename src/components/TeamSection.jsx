import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

const teamMembers = [
  {
    name: 'Akash Kr. Gupta',
    role: 'Leader',
    image: 'src/assets/Akash-Kumar-Gupta-min.jpeg',
    github: 'https://github.com/akash7596',
    twitter: 'https://x.com/akashku77810153',
    linkedin: 'https://linkedin.com/in/akash-kumar-gupta-5a8980157',
  },
  {
    name: 'Aditya Shekhar',
    role: 'Member 2',
    image: 'src/assets/Aditya-Shekhar-min.jpeg',
    github: 'https://github.com/itsofficialadi',
    twitter: 'https://x.com/itsofficialadi',
    linkedin: 'https://www.linkedin.com/in/itsofficialadi/',
  },
  {
    name: 'Nikhil Kumhar',
    role: 'Member 3',
    image: 'src/assets/nikhil-kumhar-min.jpeg',
    github: 'https://github.com/Nikhilkumhar',
    twitter: '#',
    linkedin: 'https://www.linkedin.com/in/nikhil-kumhar-724187265',
  },
  {
    name: 'Piyush Bharadwaj',
    role: 'Member 4',
    image: 'src/assets/Piyush-Bharadwaj-min.jpeg',
    github: 'https://github.com/Piyush3010i',
    twitter: 'https://twitter.com/3010_piyush',
    linkedin: 'https://www.linkedin.com/in/piyush-bharadwaj-6114a9319/',
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
                  <a href={member.github} className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-white">
                    <FontAwesomeIcon icon={faXTwitter} />
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