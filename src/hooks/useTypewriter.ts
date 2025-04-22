
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    // Reset the display text when the input text changes
    setDisplayText('');
    
    // Create a new typing animation
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    
    // Clean up the interval when the component unmounts or text changes
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);
  
  return displayText;
};
