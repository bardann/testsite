import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const keyPoints = [
    'Established in 2010 with over 100 successful projects',
    'Team of certified experts in various technology domains',
    'Client-focused approach with tailored solutions',
    'Commitment to innovation and continuous improvement'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover who we are and what drives our passion for delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg -rotate-2"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team in action"
                className="rounded-lg shadow-lg relative rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At DebugDream, we are dedicated to empowering businesses through innovative digital solutions. 
              Our mission is to bridge the gap between complex technology and real-world business challenges, 
              delivering strategies and solutions that drive growth, efficiency, and competitive advantage.
            </p>

            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            <a 
              href="#services" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 group"
            >
              Discover Our Services
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;