'use client';

import { useTheme } from '../Context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full bg-dark-bg/95 backdrop-blur-md border-b border-dark-border dark:bg-slate-900/95 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center text-white font-bold text-lg">
            O
          </div>
          <span className="hidden sm:inline text-white font-bold text-lg">Omar Hussein</span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#work" className="text-slate-300 hover:text-white transition-colors">
            Work
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Switch to light mode"
            className="p-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 rounded-full bg-gradient-hero text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
