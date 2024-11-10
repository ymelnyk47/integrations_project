import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { THEME_MAP } from '@/lib/constants';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case 'light': return <Sun className="w-4 h-4" />;
      case 'dark': return <Moon className="w-4 h-4" />;
      case 'system': return <Monitor className="w-4 h-4" />;
      default: return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          hover:bg-gray-100 dark:hover:bg-gray-700 
          transition-colors duration-200"
        aria-label="Theme selector"
      >
        {getThemeIcon(theme || 'system')}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700
          z-50">
          {Object.entries(THEME_MAP).map(([themeName, { label }]) => (
            <button
              key={themeName}
              onClick={() => {
                setTheme(themeName);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2
                ${theme === themeName ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'}
                hover:bg-gray-100 dark:hover:bg-gray-700
                first:rounded-t-lg last:rounded-b-lg`}
            >
              {getThemeIcon(themeName)}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;