
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delayed animation start for main element
            setTimeout(() => {
              entry.target.classList.add('animate-in');
              
              // Sequential card animation for projects section
              const projectCards = entry.target.querySelectorAll('.project-card');
              if (projectCards.length) {
                projectCards.forEach((card, index) => {
                  // Create a sequential delay for each project card
                  setTimeout(() => {
                    card.classList.add('animate-in');
                  }, 300 * (index + 1)); // Increasing delay per card
                });
              }
              
              // Enhanced stagger effect for child elements
              const children = entry.target.querySelectorAll('[data-stagger]');
              children.forEach((child, index) => {
                // Create a more significant staggered delay with easing
                (child as HTMLElement).style.transitionDelay = `${0.4 + (index * 0.3)}s`;
                (child as HTMLElement).style.transitionDuration = '1.4s';
                child.classList.add('animate-in');
              });
            }, 200);
          }
        });
      },
      {
        threshold: 0.05, // Lower threshold to start animation earlier
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
