import React, { useEffect, useRef } from 'react';
import { Target, Shield, Clock, Award, Star, Zap } from 'lucide-react';
import { staggerFadeUp } from '../../animations/gsapAnimations';
import './Features.scss';

const Features = () => {
  const featuresRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    { id: 1, title: 'Expert Faculty', icon: <Award />, desc: 'Highly qualified teachers with years of academic excellence.', color: '#2563eb' },
    { id: 2, title: 'Personalized Care', icon: <Shield />, desc: 'Individual attention to every student for better results.', color: '#22c55e' },
    { id: 3, title: 'Modern Facility', icon: <Target />, desc: 'State-of-the-art classrooms and digital learning tools.', color: '#f59e0b' },
    { id: 4, title: 'Focus on Basics', icon: <Star />, desc: 'Strengthening fundamental concepts for lifelong success.', color: '#ec4899' },
    { id: 5, title: 'Regular Tests', icon: <Clock />, desc: 'Weekly assessments to track and improve performance.', color: '#6366f1' },
    { id: 6, title: 'Doubt Clearing', icon: <Zap />, desc: 'Special sessions to resolve all student queries.', color: '#10b981' }
  ];

  useEffect(() => {
    staggerFadeUp(featuresRef.current, cardsRef.current);
  }, []);

  return (
    <section className="features section-padding" id="features" ref={featuresRef}>
      <div className="container">
        <h2 className="section-title text-center">Why Choose <span>i-Triz Academy</span></h2>
        <p className="section-subtitle text-center">We provide a unique learning experience that combines traditional values with modern methodology.</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="feature-icon" style={{ color: feature.color, borderBottomColor: feature.color }}>
                {feature.icon}
              </div>
              <div className="feature-info">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
