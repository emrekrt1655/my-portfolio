"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("Components.Navbar");

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";
  const otherLocale = currentLocale === "en" ? "de" : "en";

  const changeLocalePath = `/${otherLocale}${pathname.replace(/^\/(en|de)/, "")}`;

  const navLinks = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "#about" },
    { name: t("Projects"), href: "#projects" },
    { name: t("Contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="w-full px-8 py-4 flex justify-between items-center">
        <Link href={`/${currentLocale}`} className="text-2xl font-bold text-gray-900">
          <span className="text-indigo-600">Emre</span>.dev
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className="hover:text-indigo-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        <button
          className="block md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-indigo-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={changeLocalePath}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            <Globe size={18} />
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
