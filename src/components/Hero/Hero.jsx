import React, { useEffect, useRef } from 'react';
import { Play, Users, CheckCircle } from 'lucide-react';
import { floatingAnimation, simpleFadeUp as fadeUp } from '../../animations/gsapAnimations';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    fadeUp(titleRef.current);
    floatingAnimation(cardRef.current);
  }, []);

  return (
    <section className="hero section-padding" id="home" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Admission Open 2024-25
          </div>
          <h1 className="hero-title" ref={titleRef}>
            i-Triz <span>Academy</span>
          </h1>
          <p className="hero-subtitle">
            Empowering students with quality education, expert teachers, and a modern learning environment. Join us to shape a brighter future.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Join Now</button>
            <button className="btn btn-outline">
              <Play size={18} fill="currentColor" />
              Watch Video
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1k+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Teachers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
        </div>

        <div className="hero-image" ref={cardRef}>
          <div className="hero-card glass">
            <div className="card-header">
              <div className="avatar-group">
                <div className="avatar">A</div>
                <div className="avatar">B</div>
                <div className="avatar">C</div>
              </div>
              <div className="header-status">
                <CheckCircle size={14} color="#22c55e" />
                Live Classes
              </div>
            </div>
            <div className="card-content">
              <div className="content-line large"></div>
              <div className="content-line medium"></div>
              <div className="content-line small"></div>
            </div>
            <div className="card-footer">
              <div className="footer-item"></div>
              <div className="footer-item"></div>
            </div>
          </div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
