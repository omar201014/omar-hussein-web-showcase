
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
          
          // If this is a project card itself, just animate it
          if (entry.target.classList.contains('project-card')) {
            // Already added animate-in class above
            observerRef.current?.unobserve(entry.target);
            return;
          }
          
          // Handle project cards with staggered animation
          const projectCards = entry.target.querySelectorAll('.project-card');
          if (projectCards.length) {
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  card.classList.add('animate-in');
                });
              }, 120 * index); // Smooth sequential stagger
            });
          }
          
          // Handle stagger children
          const children = entry.target.querySelectorAll('[data-stagger]');
          if (children.length) {
            children.forEach((child, index) => {
              const element = child as HTMLElement;
              element.style.transitionDelay = `${0.05 + (index * 0.08)}s`;
              element.style.transitionDuration = '0.6s';
              requestAnimationFrame(() => {
                element.classList.add('animate-in');
              });
            });
          }
        });
        
        // Unobserve after animation to free memory
        setTimeout(() => {
          observerRef.current?.unobserve(entry.target);
        }, 1000);
      }
    });
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      // Optimized settings for smooth scroll-triggered animations
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -80px 0px', // Trigger before element fully in view
      });
    }

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    // Also directly observe project cards as a fallback
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      animatedElementsRef.current.clear();
    };
  }, [handleIntersection]);
};
