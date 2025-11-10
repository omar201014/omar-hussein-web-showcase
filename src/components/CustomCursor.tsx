import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isPointer, setIsPointer] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    let rippleId = 0;
    let lastRippleTime = 0;
    const rippleInterval = 150; // ms between ripples

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isInteractive);

      // Create ripple effect on mouse move (throttled)
      const now = Date.now();
      if (now - lastRippleTime > rippleInterval) {
        const newRipple = { id: rippleId++, x: e.clientX, y: e.clientY };
        setRipples(prev => [...prev, newRipple]);
        lastRippleTime = now;

        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Water ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-purple-400/30 animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '0px',
            height: '0px',
            animation: 'ripple 1s cubic-bezier(0, 0, 0.2, 1) forwards',
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={`absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-transform duration-100 ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      
      {/* Cursor outline */}
      <div
        className={`absolute border-2 border-purple-400/50 rounded-full transition-all duration-200 ${
          isPointer ? 'w-12 h-12 border-pink-400/70' : 'w-8 h-8'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Trailing glow */}
      <div
        className="absolute w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl transition-all duration-500"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
