import React, { useState, useEffect, useRef } from 'react';
import { staggerFadeUp } from '../../animations/gsapAnimations';
import TeacherModal from './TeacherModal';
import alexImg from '../../assets/teachers/alex.png';
import priyaImg from '../../assets/teachers/priya.png';
import aniketImg from '../../assets/teachers/aniket.png';
import './Teachers.scss';

const Teachers = () => {
  const teachersRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teachers = [
    {
      id: 1,
      name: 'Mr. Alex Smith',
      role: 'Mathematics Expert',
      avatar: 'AS',
      image: alexImg,
      badge: 'Senior',
      desc: '10+ years experience in teaching advanced mathematics and calculus.',
      color: '#2563eb'
    },
    {
      id: 2,
      name: 'Ms. Priya Rai',
      role: 'Physics Specialist',
      avatar: 'PR',
      image: priyaImg,
      badge: 'HOD',
      desc: 'Specializes in quantum mechanics and competitive exam preparation.',
      color: '#22c55e'
    },
    {
      id: 3,
      name: 'Mr. Aniket K.',
      role: 'English Lead',
      avatar: 'AK',
      image: aniketImg,
      badge: 'Expert',
      desc: 'Expert in linguistics, literature, and communication skills development.',
      color: '#f59e0b'
    }
  ];

  useEffect(() => {
    staggerFadeUp(teachersRef.current, cardsRef.current);
  }, []);

  return (
    <section className="teachers section-padding" id="teachers" ref={teachersRef}>
      <div className="container">
        <h2 className="section-title text-center">Meet Our <span>Teachers</span></h2>
        <p className="section-subtitle text-center">Our faculty comprises highly experienced and dedicated educators committed to student success.</p>
        
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className="teacher-card" 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="teacher-header">
                <div className="teacher-avatar" style={{ backgroundColor: teacher.color }}>
                  {teacher.avatar}
                </div>
                <span className="teacher-badge">{teacher.badge}</span>
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
                <p className="teacher-desc">{teacher.desc}</p>
              </div>
              <div className="teacher-footer">
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedTeacher(teacher);
                    setIsModalOpen(true);
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TeacherModal 
        teacher={selectedTeacher}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Teachers;
