import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import Downloads from '../components/Downloads';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Testimonials />
      <Downloads />
    </div>
  );
};

export default HomePage;