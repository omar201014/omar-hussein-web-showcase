
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay the animation start to make it more noticeable
            setTimeout(() => {
              entry.target.classList.add('animate-in');
              
              // Enhanced stagger effect for child elements
              const children = entry.target.querySelectorAll('[data-stagger]');
              children.forEach((child, index) => {
                // Create a more significant staggered delay with easing
                (child as HTMLElement).style.transitionDelay = `${0.4 + (index * 0.2)}s`;
                (child as HTMLElement).style.transitionDuration = '1.2s';
                child.classList.add('animate-in');
              });
            }, 200);
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold to start animation earlier
        rootMargin: '0px 0px -100px 0px', // Start animation before element is fully in view
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
