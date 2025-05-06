import React from 'react';
import { Code, Smartphone, CloudCog, BarChart3, Database, Lock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
      data-aos="fade-up"
    >
      <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and responsive design principles."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: <CloudCog size={28} />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure design, migration, and management services."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, engagement, and conversions."
    },
    {
      icon: <Database size={28} />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Lock size={28} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and sensitive information."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology and IT services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;