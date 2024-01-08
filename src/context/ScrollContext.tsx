'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScrollContextProps {
  isScrollActive: boolean;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children } : any) => {
  const [isScrollActive, setIsScrollActive] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    console.log(isScrollActive)

    const handleScroll = () => {
      setIsScrollActive(true);

      // Reset the timeout every time the user scrolls
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrollActive(false);
      }, 200); // Set the timeout duration as needed (in milliseconds)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrollActive]);

  return (
    <ScrollContext.Provider value={{ isScrollActive }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollNow = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll deve ser usado dentro de um ScrollProvider');
  }
  return context;
};