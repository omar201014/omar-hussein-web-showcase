import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

interface AuroraProps {
  speed?: number;
  amplitude?: number;
  blend?: number;
}

export default function Aurora({ speed = 1, amplitude = 1, blend = 0.5 }: AuroraProps) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      if (theme === 'system') {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      } else {
        setIsDark(theme === 'dark');
      }
    };
    checkTheme();
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);
    return () => mediaQuery.removeEventListener('change', checkTheme);
  }, [theme]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base gradient background */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark 
            ? 'bg-gradient-to-b from-[#1a1025] via-[#0f0a15] to-[#0a0510]' 
            : 'bg-gradient-to-b from-[#f0f4f8] via-[#e8eef5] to-[#dce5f0]'
        }`}
      />
      
      {/* Aurora blobs */}
      <div 
        className="absolute inset-0"
        style={{
          filter: `blur(${60 * blend}px)`,
        }}
      >
        {/* Primary aurora blob */}
        <div 
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600' 
              : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400'
          }`}
          style={{
            width: '80vw',
            height: '60vh',
            top: '-20%',
            left: '10%',
            opacity: 0.6,
            animation: `aurora-move-1 ${20 / speed}s ease-in-out infinite`,
            transform: `scale(${amplitude})`,
          }}
        />
        
        {/* Secondary aurora blob */}
        <div 
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500' 
              : 'bg-gradient-to-r from-sky-400 via-teal-300 to-sky-400'
          }`}
          style={{
            width: '70vw',
            height: '50vh',
            top: '-10%',
            right: '5%',
            opacity: 0.4,
            animation: `aurora-move-2 ${25 / speed}s ease-in-out infinite`,
            transform: `scale(${amplitude * 0.9})`,
          }}
        />
        
        {/* Tertiary aurora blob */}
        <div 
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500' 
              : 'bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300'
          }`}
          style={{
            width: '60vw',
            height: '40vh',
            top: '5%',
            left: '20%',
            opacity: 0.3,
            animation: `aurora-move-3 ${30 / speed}s ease-in-out infinite`,
            transform: `scale(${amplitude * 0.8})`,
          }}
        />
      </div>
      
      {/* Noise texture overlay for more organic feel */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <style>{`
        @keyframes aurora-move-1 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(${amplitude});
          }
          25% {
            transform: translate(5%, 10%) rotate(5deg) scale(${amplitude * 1.1});
          }
          50% {
            transform: translate(-5%, 5%) rotate(-5deg) scale(${amplitude * 0.95});
          }
          75% {
            transform: translate(3%, -5%) rotate(3deg) scale(${amplitude * 1.05});
          }
        }
        
        @keyframes aurora-move-2 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(${amplitude * 0.9});
          }
          33% {
            transform: translate(-8%, 8%) rotate(-8deg) scale(${amplitude});
          }
          66% {
            transform: translate(6%, -3%) rotate(6deg) scale(${amplitude * 0.85});
          }
        }
        
        @keyframes aurora-move-3 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(${amplitude * 0.8});
          }
          50% {
            transform: translate(10%, 5%) rotate(10deg) scale(${amplitude * 0.9});
          }
        }
      `}</style>
    </div>
  );
}
