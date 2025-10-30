import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
const teamMembers = [{
  name: 'David Johnson',
  position: 'Farm Owner',
  bio: 'With 25 years of experience in poultry farming, John oversees all farm operations.',
  image: '/images/img2.jpg',
  social: {
    linkedin: '#',
    twitter: '#',
    email: 'david@agrigrow.com'
  }
}, {
  name: 'Sarah Williams',
  position: 'Operations Manager',
  bio: 'Sarah ensures that our daily operations run smoothly and efficiently.',
  image: '/images/img2.jpg',
  social: {
    linkedin: '#',
    twitter: '#',
    email: 'sarah@agrigrow.com'
  }
}, {
  name: 'Michael Chen',
  position: 'Poultry Specialist',
  bio: 'Michael specializes in chicken health and nutrition to keep our flock healthy.',
  image: '/images/img2.jpg',
  social: {
    linkedin: '#',
    twitter: '#',
    email: 'michael@agrigrow.com'
  }
}, {
  name: 'Emma Rodriguez',
  position: 'Sales Manager',
  bio: 'Emma handles our client relationships and ensures timely product delivery.',
  image: '/images/img2.jpg',
  social: {
    linkedin: '#',
    twitter: '#',
    email: 'emma@agrigrow.com'
  }
}];
const TeamSection = () => {
  return <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 mb-2">OUR TEAM</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Agricultural Experts
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our team of experienced professionals is dedicated to helping
            farmers achieve sustainable growth and maximize productivity through
            innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-green-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="p-2 text-gray-600 hover:text-green-600 transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                    <Linkedin size={18} />
                  </a>
                  <a href={member.social.twitter} className="p-2 text-gray-600 hover:text-green-600 transition-colors" aria-label={`${member.name}'s Twitter`}>
                    <Twitter size={18} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="p-2 text-gray-600 hover:text-green-600 transition-colors" aria-label={`Email ${member.name}`}>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;