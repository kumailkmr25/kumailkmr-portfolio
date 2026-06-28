"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = "white" | "blue" | "red" | "yellow" | "purple" | "emerald";

interface ColorContextType {
  color: ThemeColor;
  setColor: (color: ThemeColor) => void;
  cycleColor: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const colors: ThemeColor[] = ["white", "blue", "red", "yellow", "purple", "emerald"];

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColorState] = useState<ThemeColor>("white");

  const setColor = (newColor: ThemeColor) => {
    setColorState(newColor);
    localStorage.setItem("theme-color", newColor);
    
    // Remove all theme classes from document root
    const html = document.documentElement;
    colors.forEach(c => html.classList.remove(`theme-${c}`));
    
    // Add new theme class
    html.classList.add(`theme-${newColor}`);
  };

  const cycleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  // Load color from localStorage on mount
  useEffect(() => {
    const savedColor = localStorage.getItem("theme-color") as ThemeColor;
    if (savedColor && colors.includes(savedColor)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setColor(savedColor);
    } else {
      setColor("white");
    }
  }, []);

  return (
    <ColorContext.Provider value={{ color, setColor, cycleColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}
