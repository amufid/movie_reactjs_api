// src/DarkMode.js

import { useEffect } from 'react';

const DarkMode = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }

    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return null;
};

export default DarkMode;