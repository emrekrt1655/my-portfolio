"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const t = useTranslations("Components.Navbar");
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
    { name: t("Bookmarks"), href: "/bookmarks" },
    { name: t("Contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-sm z-50 
        bg-white/80 dark:bg-gray-900/80 
        transition-colors duration-300`}
    >
      <div className="w-full px-8 py-4 flex justify-between items-center">
        <Link
          href={`/${currentLocale}`}
          className="text-2xl font-bold transition-colors duration-300 text-gray-900 dark:text-gray-100"
        >
          <span className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            Emre
          </span>
          .dev
        </Link>

        <div className="hidden md:flex space-x-8 font-medium items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>

          <ThemeToggleButton />
        </div>

        <button
          className="block md:hidden text-gray-800 dark:text-gray-200 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden shadow-md bg-white dark:bg-gray-900 transition-colors duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>

          <div className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
