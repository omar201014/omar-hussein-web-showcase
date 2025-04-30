
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay before showing the element
            setTimeout(() => {
              entry.target.classList.add('animate-in');
              
              // Add stagger effect to child elements with increased delay
              const children = entry.target.querySelectorAll('[data-stagger]');
              children.forEach((child, index) => {
                // Increase stagger delay between elements
                (child as HTMLElement).style.animationDelay = `${0.3 + (index * 0.3)}s`;
                child.classList.add('animate-in');
              });
            }, 100);
          }
        });
      },
      {
        threshold: 0.15, // Slightly increase threshold
        rootMargin: '20px', // Trigger animation earlier
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
