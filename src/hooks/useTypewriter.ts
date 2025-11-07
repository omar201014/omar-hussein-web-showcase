
import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    setDisplayText('');
    
    let currentIndex = 0;
    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!isMountedRef.current) return;
      
      if (timestamp - lastTimestamp >= speed) {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          lastTimestamp = timestamp;
        } else {
          return;
        }
      }
      
      if (currentIndex < text.length) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      isMountedRef.current = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [text, speed]);
  
  return displayText;
};
