"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/app/context/ThemeContext";

export function Footer() {
  const t = useTranslations("Components.Footer");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "border-gray-700 bg-linear-to-b from-gray-900 to-gray-950"
          : "border-gray-200 bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-2 text-center">
          <p
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("builtWith")}{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 hover:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 hover:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              TypeScript
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 hover:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Tailwind CSS
            </a>
            .
          </p>
          <p
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("sourceCode")}{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 hover:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              GitHub
            </a>
            .
          </p>
          <p
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © 2025 | Emre Kurt
          </p>
        </div>
      </div>
    </footer>
  );
}
