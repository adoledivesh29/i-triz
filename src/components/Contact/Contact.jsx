import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <h2 className="section-title text-center">Reach <span>Us</span></h2>
        <p className="section-subtitle text-center">Have questions? Get in touch with us through any of these channels.</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon-box blue"><Phone size={24} /></div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box green"><MessageCircle size={24} /></div>
              <div className="info-text">
                <h3>WhatsApp</h3>
                <p>+91 98765 43210</p>
                <button className="btn btn-secondary">Chat Now</button>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box orange"><Mail size={24} /></div>
              <div className="info-text">
                <h3>Email</h3>
                <p>info@itrizacademy.com</p>
                <p>support@itrizacademy.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box indigo"><MapPin size={24} /></div>
              <div className="info-text">
                <h3>Vist Us</h3>
                <p>123 Academy Road, Education City</p>
                <p>Maharashtra, India - 400001</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-marker">
                <div className="marker-inner">
                  <span className="logo-icon">i</span>
                </div>
              </div>
              <div className="map-overlay">
                <button className="btn btn-primary">Open in Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
