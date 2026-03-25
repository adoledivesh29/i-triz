import React, { useEffect, useRef } from 'react';
import { BookOpen, Calculator, Beaker } from 'lucide-react';
import { staggerFadeUp } from '../../animations/gsapAnimations';
import './Subjects.scss';

const Subjects = () => {
  const subjectsRef = useRef(null);
  const cardsRef = useRef([]);

  const subjects = [
    {
      id: 1,
      title: 'English',
      icon: <BookOpen size={40} />,
      desc: 'Focus on grammar, literature, and communication skills.',
      color: '#2563eb'
    },
    {
      id: 2,
      title: 'Mathematics',
      icon: <Calculator size={40} />,
      desc: 'Mastering numbers, algebra, and complex problem-solving.',
      color: '#22c55e'
    },
    {
      id: 3,
      title: 'Science',
      icon: <Beaker size={40} />,
      desc: 'Exploring biology, chemistry, and molecular physics.',
      color: '#f59e0b'
    }
  ];

  useEffect(() => {
    staggerFadeUp(subjectsRef.current, cardsRef.current);
  }, []);

  return (
    <section className="subjects section-padding" id="subjects" ref={subjectsRef}>
      <div className="container">
        <h2 className="section-title text-center">What We <span>Teach</span></h2>
        <p className="section-subtitle text-center">Comprehensive curriculum designed to foster academic excellence across core disciplines.</p>
        
        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div 
              key={subject.id} 
              className="subject-card" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="subject-icon" style={{ borderColor: subject.color, color: subject.color }}>
                {subject.icon}
              </div>
              <h3>{subject.title}</h3>
              <p>{subject.desc}</p>
              <ul className="subject-list">
                <li><span className="dot" style={{ backgroundColor: subject.color }}></span> Expert Faculty</li>
                <li><span className="dot" style={{ backgroundColor: subject.color }}></span> Interactive Sessions</li>
                <li><span className="dot" style={{ backgroundColor: subject.color }}></span> Weekly Tests</li>
              </ul>
              <button className="btn-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
