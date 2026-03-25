import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Refresh ScrollTrigger after all components mount
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Fade up on scroll
export const fadeUp = (element, delay = 0) => {
  if (!element) return;
  gsap.fromTo(element, 
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Simple fade up without scroll trigger (for hero)
export const simpleFadeUp = (element, delay = 0) => {
  if (!element) return;
  gsap.fromTo(element,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: 'power3.out',
    }
  );
};

// Stagger children
export const staggerFadeUp = (container, children, delay = 0.15) => {
  if (!container || !children || children.length === 0) return;
  gsap.fromTo(children,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// Hero floating animation
export const floatingAnimation = (element) => {
  if (!element) return;
  gsap.to(element, {
    y: 15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};

// Scale in animation
export const scaleIn = (element, delay = 0) => {
  if (!element) return;
  gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
    }
  );
};

// Slide in from left/right
export const slideIn = (element, direction = 'left', delay = 0) => {
  if (!element) return;
  const xVal = direction === 'left' ? -100 : 100;
  gsap.fromTo(element,
    { x: xVal, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
    }
  );
};
