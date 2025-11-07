
import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElementsRef = useRef<Set<Element>>(new Set());

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animatedElementsRef.current.has(entry.target)) {
        animatedElementsRef.current.add(entry.target);
        
        // Batch DOM updates
        requestAnimationFrame(() => {
          entry.target.classList.add('animate-in');
          
          // Handle project cards with staggered animation
          const projectCards = entry.target.querySelectorAll('.project-card');
          if (projectCards.length) {
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  card.classList.add('animate-in');
                });
              }, 100 * (index + 1)); // Optimized delay
            });
          }
          
          // Handle stagger children
          const children = entry.target.querySelectorAll('[data-stagger]');
          if (children.length) {
            children.forEach((child, index) => {
              const element = child as HTMLElement;
              element.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
              element.style.transitionDuration = '0.8s';
              requestAnimationFrame(() => {
                element.classList.add('animate-in');
              });
            });
          }
        });
        
        // Unobserve after animation to free memory
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      });
    }

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      animatedElementsRef.current.clear();
    };
  }, [handleIntersection]);
};
