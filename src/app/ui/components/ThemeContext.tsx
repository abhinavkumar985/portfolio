"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Default to 'light'

  useEffect(() => {
    // This code will only run on the client-side after the initial render
    const initialTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);