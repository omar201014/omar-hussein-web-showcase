
import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElementsRef = useRef<Set<Element>>(new Set());
  const rafRef = useRef<number | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    // Cancel any pending animation frames
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElementsRef.current.has(entry.target)) {
          animatedElementsRef.current.add(entry.target);
          
          entry.target.classList.add('animate-in');
          
          // If this is a project card itself, just animate it
          if (entry.target.classList.contains('project-card')) {
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
              }, 100 * index); // Faster stagger for better performance
            });
          }
          
          // Handle stagger children
          const children = entry.target.querySelectorAll('[data-stagger]');
          if (children.length) {
            children.forEach((child, index) => {
              const element = child as HTMLElement;
              element.style.transitionDelay = `${0.05 + (index * 0.06)}s`;
              element.style.transitionDuration = '0.5s';
              requestAnimationFrame(() => {
                element.classList.add('animate-in');
              });
            });
          }
          
          // Unobserve after animation to free memory
          setTimeout(() => {
            observerRef.current?.unobserve(entry.target);
          }, 800);
        }
      });
    });
  }, []);

  useEffect(() => {
    // Small delay to ensure CSS is applied before observing
    const setupObserver = () => {
      if (!observerRef.current) {
        // Optimized settings for smooth scroll-triggered animations
        observerRef.current = new IntersectionObserver(handleIntersection, {
          threshold: 0.1, // Trigger earlier for smoother feel
          rootMargin: '0px 0px -80px 0px', // Trigger when scrolled into view
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
      setTimeout(setupObserver, 30); // Reduced delay for faster setup
    });

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      animatedElementsRef.current.clear();
    };
  }, [handleIntersection]);
};
