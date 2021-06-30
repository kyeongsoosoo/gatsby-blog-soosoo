import { useLayoutEffect } from 'react';
import { useThemeUpdate, useThemeMode } from '../context/ThemeContext';

import Theme from '../utils/ThemeService';

export default function useTheme() {

  const theme = useThemeMode();
  const setTheme = useThemeUpdate();

  const themeHandler = (savedTheme) => {
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
    // new Location().makeReload(); //코드 블록 다크모드 적용을 위한 새로고침
    themeHandler(toggledTheme);
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === null) localStorage.setItem('theme', 'light');

    setTheme(savedTheme);

    themeHandler(savedTheme);
  }, [setTheme]);

  return { theme: theme, handleThemeToggle };
}
