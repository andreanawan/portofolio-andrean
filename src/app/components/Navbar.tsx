"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-500/20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-xl tracking-wider text-purple-500">
          Andrean Awan
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-purple-500 transition">Home</a>
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
          <a href="#experience" className="hover:text-purple-500 transition">Experience</a>
          <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
        </nav>

        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-full border border-slate-500/20 hover:scale-110 transition cursor-pointer"
          aria-label="Toggle Theme"
        >
          {mounted && resolvedTheme === "dark" ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-slate-700" />
          )}
        </button>
      </div>
    </header>
  );
}