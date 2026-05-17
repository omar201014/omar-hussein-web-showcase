import { useEffect } from 'react';

/**
 * Reveal-on-scroll system.
 *
 * Usage:
 *   <h2 data-reveal>Heading</h2>                  // default fade-up
 *   <p data-reveal="fade">…</p>                   // simple fade
 *   <div data-reveal="left">…</div>               // slide from left
 *   <div data-reveal-group>                       // auto-staggers direct children
 *     <Card />
 *     <Card />
 *   </div>
 *
 * Optional per-element delay override:
 *   <div data-reveal style={{ ['--reveal-delay' as any]: '300ms' }} />
 *
 * - Each element animates exactly once (observer disconnects per element).
 * - Mobile (≤768px) bypass is handled in CSS for instant visibility.
 * - Re-runs the scan on DOM mutations so async-rendered children are picked up.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.dataset.revealState = 'revealed';
            observer.unobserve(el);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const STAGGER_STEP = 110; // ms between siblings

    const register = (el: HTMLElement) => {
      if (el.dataset.revealRegistered === '1') return;
      el.dataset.revealRegistered = '1';

      if (prefersReducedMotion) {
        el.dataset.revealState = 'revealed';
        return;
      }

      observer.observe(el);
    };

    const scan = () => {
      // Auto-stagger groups: tag direct children with data-reveal + delay
      document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
        const children = Array.from(group.children) as HTMLElement[];
        children.forEach((child, i) => {
          if (!child.hasAttribute('data-reveal')) {
            child.setAttribute('data-reveal', group.dataset.revealGroup || 'up');
          }
          if (!child.style.getPropertyValue('--reveal-delay')) {
            child.style.setProperty('--reveal-delay', `${i * STAGGER_STEP}ms`);
          }
        });
      });

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(register);
    };

    // Initial scan after paint
    const raf = requestAnimationFrame(scan);

    // Re-scan when DOM changes (lazy content, route transitions, etc.)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
};
