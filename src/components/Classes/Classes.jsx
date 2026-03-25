import React, { useEffect, useRef } from 'react';
import { staggerFadeUp } from '../../animations/gsapAnimations';
import './Classes.scss';

const Classes = () => {
  const classesRef = useRef(null);
  const cardsRef = useRef([]);

  const classData = [
    { id: 1, title: 'Class 5', sessions: '40 Sessions', students: '25+ Students', color: '#2563eb' },
    { id: 2, title: 'Class 6', sessions: '45 Sessions', students: '30+ Students', color: '#22c55e' },
    { id: 3, title: 'Class 7', sessions: '50 Sessions', students: '28+ Students', color: '#f59e0b' },
    { id: 4, title: 'Class 8', sessions: '55 Sessions', students: '32+ Students', color: '#ec4899' },
    { id: 5, title: 'Class 9', sessions: '60 Sessions', students: '35+ Students', color: '#6366f1' },
    { id: 6, title: 'Class 10', sessions: '65 Sessions', students: '40+ Students', color: '#10b981' }
  ];

  useEffect(() => {
    staggerFadeUp(classesRef.current, cardsRef.current);
  }, []);

  return (
    <section className="classes section-padding" id="classes" ref={classesRef}>
      <div className="container">
        <h2 className="section-title text-center">Our <span>Classes</span></h2>
        <p className="section-subtitle text-center">Tailored educational programs for students from middle school to high school graduation.</p>
        
        <div className="classes-grid">
          {classData.map((item, index) => (
            <div 
              key={item.id} 
              className="class-card" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="class-header" style={{ background: `linear-gradient(135deg, ${item.color} 0%, rgba(255,255,255,0.1) 100%)` }}>
                <h3>{item.title}</h3>
                <span className="sessions">{item.sessions}</span>
              </div>
              <div className="class-body">
                <div className="detail">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  {item.students}
                </div>
                <div className="detail">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  Weekly Mock Tests
                </div>
                <div className="detail">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  Personalized Mentoring
                </div>
              </div>
              <div className="class-footer">
                <button className="btn btn-primary" style={{ background: item.color }}>Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
