import React, { useEffect, useRef } from 'react';
import { X, Mail, Phone, Calendar, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import './TeacherModal.scss';

const TeacherModal = ({ teacher, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        autoAlpha: 1, // Handles both opacity and visibility
        duration: 0.3
      })
      .fromTo(contentRef.current, 
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' },
        "-=0.1"
      );
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
      }
    });

    tl.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'power2.in'
    })
    .to(overlayRef.current, {
      autoAlpha: 0,
      duration: 0.3
    }, "-=0.2");
  };

  if (!teacher) return null;

  return (
    <div 
      className={`teacher-modal-overlay ${isOpen ? 'active' : ''}`} 
      ref={overlayRef}
      onClick={handleClose}
    >
      <div 
        className="teacher-modal-content" 
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>
          <X size={24} />
        </button>

        <div className="modal-inner">
          <div className="modal-left">
            <div className="teacher-image-container">
              {teacher?.image ? (
                <img src={teacher.image} alt={teacher.name} />
              ) : (
                <div className="avatar-placeholder" style={{ backgroundColor: teacher?.color }}>
                  {teacher?.avatar}
                </div>
              )}
            </div>
            <div className="quick-info">
              <div className="info-item">
                <BookOpen size={18} />
                <span>{teacher?.role}</span>
              </div>
              <div className="info-item">
                <Calendar size={18} />
                <span>10+ Years Exp.</span>
              </div>
            </div>
          </div>

          <div className="modal-right">
            <h2 className="modal-title">{teacher?.name}</h2>
            <p className="modal-role">{teacher?.role}</p>
            
            <div className="modal-bio">
              <h3>Biography</h3>
              <p>{teacher?.desc}</p>
              <p>Passionately dedicated to student development, bringing innovative teaching methodologies to the classroom. Highly experienced in preparing students for competitive examinations and fostering a deep understanding of core concepts.</p>
            </div>

            <div className="modal-contact">
              <h3>Contact Information</h3>
              <div className="contact-link">
                <Mail size={18} />
                <span>{teacher?.name?.toLowerCase()?.replace(/\s+/g, '.')}@brightacademy.com</span>
              </div>
              <div className="contact-link">
                <Phone size={18} />
                <span>+91 98765 43XXX</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn btn-primary">Schedule Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherModal;
