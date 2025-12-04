"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Components.Footer");

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("builtWith")}{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              TypeScript
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Tailwind CSS
            </a>
            .
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("sourceCode")}{" "}
            <a
              href="https://github.com/emrekrt1655/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              GitHub
            </a>
            .
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
            © 2025 | Emre Kurt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
