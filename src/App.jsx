import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Teachers from './components/Teachers/Teachers';
import Subjects from './components/Subjects/Subjects';
import Classes from './components/Classes/Classes';
import Features from './components/Features/Features';
import LearningSpace from './components/LearningSpace/LearningSpace';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { refreshScrollTrigger } from './animations/gsapAnimations';
import './styles/global.scss';

function App() {
  useEffect(() => {
    // Refresh scroll trigger after a small delay to ensure all components are rendered
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Teachers />
      <Subjects />
      <Classes />
      <Features />
      <LearningSpace />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
