import React, { useEffect, useRef } from 'react';
import { Home, Notebook, Microscope, Paintbrush, Monitor, Pencil } from 'lucide-react';
import { staggerFadeUp } from '../../animations/gsapAnimations';
import './LearningSpace.scss';

const LearningSpace = () => {
  const spaceRef = useRef(null);
  const cardsRef = useRef([]);

  const spaces = [
    { id: 1, title: 'Library', icon: <Notebook size={40} />, color1: '#10b981', color2: '#34d399' },
    { id: 2, title: 'Science Lab', icon: <Microscope size={40} />, color1: '#2563eb', color2: '#60a5fa' },
    { id: 3, title: 'Art Studio', icon: <Paintbrush size={40} />, color1: '#f59e0b', color2: '#fbbf24' },
    { id: 4, title: 'IT Center', icon: <Monitor size={40} />, color1: '#ec4899', color2: '#f472b6' },
    { id: 5, title: 'Classrooms', icon: <Home size={40} />, color1: '#6366f1', color2: '#818cf8' },
    { id: 6, title: 'Study Hall', icon: <Pencil size={40} />, color1: '#ef4444', color2: '#f87171' }
  ];

  useEffect(() => {
    staggerFadeUp(spaceRef.current, cardsRef.current);
  }, []);

  return (
    <section className="learning-space section-padding" id="learning-space" ref={spaceRef}>
      <div className="container">
        <h2 className="section-title text-center">Our <span>Learning Space</span></h2>
        <p className="section-subtitle text-center">A peek into our modern campus and infrastructure designed for an immersive learning experience.</p>
        
        <div className="space-grid">
          {spaces.map((space, index) => (
            <div 
              key={space.id} 
              className="space-card" 
              ref={el => cardsRef.current[index] = el}
              style={{ background: `linear-gradient(135deg, ${space.color1} 0%, ${space.color2} 100%)` }}
            >
              <div className="space-icon">
                {space.icon}
              </div>
              <div className="space-info">
                <h3>{space.title}</h3>
                <div className="space-overlay">
                  <button className="btn-view">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSpace;
