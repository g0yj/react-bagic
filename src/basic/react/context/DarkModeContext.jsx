import { createContext, useState } from 'react';


// DarkModeContext : createContext() 에 있는 데이터를 담는 변수명
export const DarkModeContext = createContext();

// DarkModeProvider : 우산을 만드는 과정
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (

    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                              { /* value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}*/}
      {children}
    </DarkModeContext.Provider>
  );
}
