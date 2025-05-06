import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-600 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white pt-24 md:pt-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Innovating Digital Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              We transform businesses through cutting-edge technology and strategic IT solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center sm:justify-start group"
              >
                Get Started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center sm:justify-start"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="hidden md:block" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-lg opacity-10 blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Technology team working together" 
                className="rounded-lg shadow-xl relative w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;