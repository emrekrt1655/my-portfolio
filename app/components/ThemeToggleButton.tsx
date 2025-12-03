"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const { state, dispatch } = useTheme();
  const isDark = state.theme === "dark";

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
        isDark
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      aria-label="Toggle theme"
    >
      <Moon
        size={20}
        className={`absolute transition-all duration-500 ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-indigo-600"
        }`}
      />
      <Sun
        size={20}
        className={`absolute transition-all duration-500 ${
          isDark
            ? "rotate-0 scale-100 opacity-100 text-amber-400"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
