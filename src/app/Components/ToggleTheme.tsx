'use client';
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
  const toggleTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }else{
      document.documentElement.classList.add('dark')
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  }

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark')
          setIsDarkMode(false);
        }
      },[])
     
 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        } transition-colors duration-300`}
      >
        <div
          className={`h-6 w-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-8 bg-yellow-500" : "translate-x-0 bg-blue-500"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
