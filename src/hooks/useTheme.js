import React, { useLayoutEffect, useState } from 'react';
import setTheme from '../utils/ThemeService';
import Theme from '../utils/ThemeService';

export default function useTheme() {
  const [theme, setTheme] = useState();

  const themeHandler = savedTheme => {
    if (savedTheme === 'dark') {
      Theme.remove('light');
      Theme.add('dark');
    } else {
      Theme.remove('dark');
      Theme.add('light');
    }
  };

  const handleThemeToggle = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(toggledTheme);
    window.location.reload(); //코드 블록 다크모드 적용을 위한 새로고침
    themeHandler(toggledTheme);
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === null) localStorage.setItem('theme', 'light');

    setTheme(savedTheme);

    themeHandler(savedTheme);
  }, []);

  return { theme: theme, handleThemeToggle };
}
