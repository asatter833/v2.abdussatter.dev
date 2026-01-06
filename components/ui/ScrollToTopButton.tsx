"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll depth
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 lg:right-10 bottom-10 p-0 w-12 h-12 z-[90] transition-all duration-500 flex items-center justify-center cursor-pointer",
        "bg-transparent border border-hazard text-hazard hover:bg-hazard hover:text-dark",
        isVisible
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-10 opacity-0 invisible"
      )}
      aria-label="Back to top"
    >
      <div className="flex flex-col items-center justify-center h-full relative group w-full">
        {/* Decorative corner bracket */}
        <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-hazard group-hover:border-dark" />

        {/* Up Arrow Icon */}
        <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-current rotate-45 mb-[2px]" />

        {/* Label */}
        <span className="font-mono text-[0.6rem] font-bold tracking-tighter">
          TOP
        </span>

        {/* Subtle scanline effect on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 pointer-events-none" />
      </div>
    </button>
  );
};
