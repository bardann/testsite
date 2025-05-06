import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import ScrollReveal from './utils/ScrollReveal';
import './styles/aos.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'DebugDream - Innovating Digital Solutions';

    // Apply fade-in effect to the body
    document.body.classList.add('fade-in');
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <ScrollReveal>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;