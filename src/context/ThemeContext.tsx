'use client'
import { ThemeContextProps } from "@/@types/theme/theme";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
      return (localStorage.getItem("theme") as "light" | "dark") || "dark";
    });
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme precisa ser usado dentro de um ThemeProvider");
    }
    return context;
}