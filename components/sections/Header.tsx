"use client";
import React, { useState, useEffect } from "react";

interface HeaderProps {
  name: string;
  version: string;
}

export const Header = ({ name, version }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark/85 backdrop-blur-xl border-b border-dim py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-10">
        <div className="font-mono text-[0.8rem] py-2 px-4 border border-dim tracking-[2px] bg-black/20 relative">
          <div className="absolute w-1 h-1 bg-hazard -top-[1px] -left-[1px]" />
          <div className="absolute w-1 h-1 bg-hazard -bottom-[1px] -right-[1px]" />
          {name} / <span className="text-hazard">{version}</span>
        </div>
        <nav className="hidden lg:flex gap-8">
          {[
            "infrastructure",
            "core components",
            "system-assets",
            "telemetry",
            "contact",
          ].map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-mono text-[0.75rem] text-grey hover:text-hazard transition-colors uppercase"
            >
              0{i + 1}. {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
