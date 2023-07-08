// contexts/ThemeContext.js

import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
