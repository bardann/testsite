import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4 my-8 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6 flex-grow">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{position}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with DebugDream has been a game-changer for our business. Their web development team created a stunning, user-friendly site that has significantly increased our conversion rates.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "GlobalTech Inc.",
      rating: 5
    },
    {
      quote: "The mobile app DebugDream developed for us has received outstanding feedback from our users. Their attention to detail and commitment to quality is truly impressive.",
      author: "Michael Chen",
      position: "CEO",
      company: "MobiConnect",
      rating: 5
    },
    {
      quote: "Their cloud migration service was seamless and efficient. We experienced zero downtime, and our systems are now more reliable and scalable than ever.",
      author: "David Wilson",
      position: "CTO",
      company: "DataStream Solutions",
      rating: 4
    },
    {
      quote: "The cybersecurity solutions implemented by DebugDream have given us peace of mind. Their team's expertise and proactive approach has strengthened our security posture considerably.",
      author: "Jennifer Lee",
      position: "IT Director",
      company: "SecureBank Financial",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const nextSlide = () => {
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative" data-aos="fade-up">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
                width: isMobile 
                  ? `${testimonials.length * 100}%` 
                  : `${(testimonials.length * 50)}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 px-4"
                >
                  <Testimonial 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    company={testimonial.company}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;