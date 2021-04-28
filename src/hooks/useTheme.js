import React, { useLayoutEffect } from 'react';
import setTheme from '../utils/ThemeService';
import Theme from '../utils/ThemeService';

export default function useTheme() {
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === null) localStorage.setItem('theme', 'light');

    if (savedTheme === 'dark') {
      Theme.add('dark');
      Theme.remove('light');
    } else {
      Theme.add('light');
      Theme.remove('dark');
    }
  });
}
