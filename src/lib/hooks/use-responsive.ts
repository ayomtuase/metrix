"use client";

//Breakpoints gotten from tailwind breakpoints https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints

import useWindowSize from "./use-window-size";

export const useResponsive = () => {
  const { width } = useWindowSize();
  if (!width) return undefined;

  return {
    base: width < 640,
    sm: width >= 640 && width < 768,
    md: width >= 768 && width < 1024,
    lg: width >= 1024 && width < 1280,
    xl: width >= 1280 && width < 1536,
    ["2xl"]: width >= 1536,
    isBigScreen: width >= 1024,
  };
};
