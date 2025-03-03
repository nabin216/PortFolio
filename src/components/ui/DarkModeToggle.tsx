import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { IconWrapper } from '../../utils/IconWrapper';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <IconWrapper icon={SunIcon} className="h-5 w-5" />
      ) : (
        <IconWrapper icon={MoonIcon} className="h-5 w-5" />
      )}
    </button>
  );
};

export default DarkModeToggle; 