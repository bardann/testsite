import React from 'react';

interface TechLogoProps {
  name: string;
  imageUrl: string;
}

const TechLogo: React.FC<TechLogoProps> = ({ name, imageUrl }) => {
  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-md flex items-center justify-center h-24 hover:shadow-lg transition-all duration-300"
      data-aos="zoom-in"
    >
      <img 
        src={imageUrl} 
        alt={`${name} logo`} 
        className="max-h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
      />
    </div>
  );
};

const Technologies: React.FC = () => {
  const techLogos = [
    { name: "React", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
    { name: "Node.js", imageUrl: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" },
    { name: "AWS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Python", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    { name: "Angular", imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg" },
    { name: "TypeScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
    { name: "MongoDB", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" },
    { name: "Docker", imageUrl: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" }
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technologies We Use</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techLogos.map((tech, index) => (
            <TechLogo key={index} name={tech.name} imageUrl={tech.imageUrl} />
          ))}
        </div>

        <div 
          className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold mb-4">Need a Custom Technology Solution?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of experts can help you choose the right technologies for your specific business needs and goals.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technologies;