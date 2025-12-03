"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from "@/app/context/ThemeContext";

const Navbar = () => {
  const t = useTranslations("Components.Navbar");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";
  const otherLocale = currentLocale === "en" ? "de" : "en";

  const changeLocalePath = `/${otherLocale}${pathname.replace(
    /^\/(en|de)/,
    ""
  )}`;

  const navLinks = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "/about" },
    { name: t("Projects"), href: "/projects" },
    { name: t("Contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-sm z-50 transition-colors duration-300 ${
        isDark ? "bg-gray-900/80" : "bg-white/80"
      }`}
    >
      <div className="w-full px-8 py-4 flex justify-between items-center">
        <Link
          href={`/${currentLocale}`}
          className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <span
            className={`transition-colors duration-300 ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Emre
          </span>
          .dev
        </Link>

        <div
          className={`hidden md:flex space-x-8 font-medium items-center transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <ThemeToggleButton />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-indigo-400" : "hover:text-indigo-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
              isDark
                ? "text-gray-400 hover:text-indigo-400"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        <button
          className={`block md:hidden transition-colors duration-300 ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`md:hidden shadow-md transition-colors duration-300 ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className={`block px-6 py-3 transition-colors duration-300 ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  : "text-gray-700 hover:bg-gray-100 hover:text-indigo-500"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className={`flex items-center gap-2 px-6 py-3 transition-colors duration-300 ${
              isDark
                ? "text-gray-400 hover:bg-gray-800 hover:text-indigo-400"
                : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>
          <div
            className={`flex items-center gap-2 px-6 py-3 transition-colors duration-300 ${
              isDark
                ? "text-gray-400 hover:bg-gray-800 hover:text-indigo-400"
                : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
            }`}
          >
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
