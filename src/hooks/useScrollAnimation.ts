
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  // Store observer in a ref to avoid recreating it on every render
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create the observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Use requestAnimationFrame for smoother animations
              requestAnimationFrame(() => {
                entry.target.classList.add('animate-in');
                
                // Sequential card animation for projects section
                const projectCards = entry.target.querySelectorAll('.project-card');
                if (projectCards.length) {
                  projectCards.forEach((card, index) => {
                    // Using setTimeout inside requestAnimationFrame for better performance
                    setTimeout(() => {
                      requestAnimationFrame(() => {
                        card.classList.add('animate-in');
                      });
                    }, 200 * (index + 1)); // Reduced delay for better responsiveness
                  });
                }
                
                // Enhanced stagger effect for child elements with better performance
                const children = entry.target.querySelectorAll('[data-stagger]');
                children.forEach((child, index) => {
                  const delay = 0.3 + (index * 0.2); // Reduced delay for performance
                  (child as HTMLElement).style.transitionDelay = `${delay}s`;
                  (child as HTMLElement).style.transitionDuration = '1s'; // Shorter duration for performance
                  requestAnimationFrame(() => {
                    child.classList.add('animate-in');
                  });
                });
              });
            }
          });
        },
        {
          threshold: 0.1, // Slight increase for better detection
          rootMargin: '0px 0px -80px 0px', // Adjusted for performance
        }
      );
    }

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, []);
};
