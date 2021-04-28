import React, { useLayoutEffect, useState } from 'react';
import setTheme from '../utils/ThemeService';
import Theme from '../utils/ThemeService';

export default function useTheme() {
  const [theme, setTheme] = useState();

  const themeHandler = savedTheme => {
    if (savedTheme === 'Dark') {
      Theme.add('dark');
      Theme.remove('light');
    } else {
      Theme.add('light');
      Theme.remove('dark');
    }
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
    themeHandler(theme);
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'Light';

    if (savedTheme === null) localStorage.setItem('theme', 'Light');

    setTheme(savedTheme);

    themeHandler(savedTheme);
  }, []);

  return { theme, handleThemeToggle };
}
