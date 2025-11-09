
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
    // Small delay to ensure CSS is applied before observing
    const setupObserver = () => {
      if (!observerRef.current) {
        // Optimized settings for smooth scroll-triggered animations
        observerRef.current = new IntersectionObserver(handleIntersection, {
          threshold: 0.15, // Trigger when 15% visible
          rootMargin: '0px 0px -100px 0px', // Only trigger when scrolled into view
        });
      }

      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        // Ensure initial state is set
        if (!animatedElementsRef.current.has(el)) {
          el.classList.remove('animate-in');
        }
        observerRef.current?.observe(el);
      });

      // Also directly observe project cards
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card) => {
        // Ensure initial state is set
        if (!animatedElementsRef.current.has(card)) {
          card.classList.remove('animate-in');
        }
        observerRef.current?.observe(card);
      });
    };

    // Use RAF to ensure DOM is ready and CSS is applied
    requestAnimationFrame(() => {
      setTimeout(setupObserver, 50);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      animatedElementsRef.current.clear();
    };
  }, [handleIntersection]);
};
