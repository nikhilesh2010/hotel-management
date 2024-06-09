'use client';
import { useEffect, useState } from "react";
import ThemeContext from "@/context/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode } ) => {
  const themeFromStorage: boolean = typeof window !== "undefined" && localStorage.getItem('hotel-theme') ? JSON.parse(localStorage.getItem('hotel-theme')!) : false;
  // let themeFromStorage = typeof(localStorage) !== "undefined" && localStorage.getItem('hotel-theme'); 
  // console.log(themeFromStorage);
  // themeFromStorage = themeFromStorage ? JSON.parse(localStorage.getItem('hotel-theme')!) : 'false';
  // console.log(themeFromStorage);
  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  
  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    setRenderComponent(true);
  }, []);

  // Use useEffect to update localStorage whenever darkTheme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('hotel-theme', JSON.stringify(darkTheme));
    }
  }, [darkTheme]);

  if (!renderComponent) {
    return <></>;
  }

  return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <div className={`${ darkTheme ? 'dark': '' } min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          { children }
        </div>
      </div>
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;

