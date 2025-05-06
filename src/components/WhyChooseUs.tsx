import React from 'react';
import { Users, Clock, Award, HeartHandshake } from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-6"
      data-aos="fade-up"
    >
      <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "Our team consists of certified professionals with years of experience in various technology domains."
    },
    {
      icon: <Clock size={24} />,
      title: "Timely Delivery",
      description: "We are committed to delivering projects on time without compromising on quality."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure we deliver error-free and high-performance solutions."
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Client Satisfaction",
      description: "We prioritize our clients' needs and work closely with them throughout the development process."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            We are dedicated to delivering exceptional results through our expertise, commitment, and innovative approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Reason
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-left max-w-3xl">
              <h3 className="text-2xl font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">
                Let us help you leverage technology to achieve your business goals and stay ahead of the competition.
              </p>
            </div>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors duration-300 whitespace-nowrap"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;