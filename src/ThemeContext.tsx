import { createContext, useContext, useState } from "@lynx-js/react";

type ThemeContextType = {
  bg: string;
  toggleBg: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  bg: "#121212",
  toggleBg: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [bg, setBg] = useState("#121212");

  const toggleBg = () => {
    setBg(bg === "#121212" ? "#232323" : "#121212");
  };

  return (
    <ThemeContext.Provider value={{ bg, toggleBg }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
