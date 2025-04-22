
import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef(text);

  useEffect(() => {
    // Complete reset when text changes
    setDisplayText('');
    textRef.current = text;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};
