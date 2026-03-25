import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Teachers from '../components/Teachers/Teachers';
import Subjects from '../components/Subjects/Subjects';
import Classes from '../components/Classes/Classes';
import Features from '../components/Features/Features';
import LearningSpace from '../components/LearningSpace/LearningSpace';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../styles/global.scss';

import { refreshScrollTrigger } from '../animations/gsapAnimations';

const Home = () => {
  useEffect(() => {
    // Refresh scroll trigger after a small delay to ensure all components are rendered
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Teachers />
      <Subjects />
      <Classes />
      <Features />
      <LearningSpace />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
