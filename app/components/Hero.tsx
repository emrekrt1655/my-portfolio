"use client";

import { useTranslations } from "next-intl";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  User,
  FolderOpen,
  MessageCircle,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { techStack } from "../constants/techStack";

const Hero = () => {
  const t = useTranslations("Components.Hero");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const cvPath =
    currentLocale === "de"
      ? "/cv/Emre_Kurt_Lebenslauf.pdf"
      : "/cv/Emre_Kurt_CV.pdf";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <Link
        className="mt-20 mb-6 w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-gray-200 hover:border-indigo-600 dark:border-gray-700 dark:hover:border-indigo-500 shadow-lg dark:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
        href={`/${currentLocale}/about`}
      >
        <Image
          src="/images/emrekurt.png"
          alt="Emre Kurt"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </Link>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
        {t("greeting")}{" "}
        <span className="text-indigo-600 dark:text-indigo-400">
          {t("name")}
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-5 transition-colors duration-300">
        {t("title")}
      </h2>

      <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
        {t("description")}
      </p>

      <div className="flex gap-8 mb-8">
        <Link
          href="https://github.com/emrekrt1655"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Github
            size={32}
            className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emrekrt16/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Linkedin
            size={32}
            className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          />
        </Link>
        <Link
          href="https://medium.com/@emrekurtt1655"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <BookmarkCheck
            size={32}
            className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          />
        </Link>
        <Link
          href="mailto:emrekurtt1655@gmail.com"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Mail
            size={32}
            className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          />
        </Link>
      </div>

      <div className="relative mt-8 mb-10">
        <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 blur-3xl -z-10"></div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <Link
            href={`/${currentLocale}/about`}
            className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              <User
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("aboutMe")}</span>
            </div>
          </Link>

          <Link
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <FileText
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("downloadCV")}</span>
            </div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-200%] group-hover:translate-x-[200%] skew-x-12 transition-transform duration-700"></div>
          </Link>

          <Link
            href={`/${currentLocale}/projects`}
            className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              <FolderOpen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("viewProjects")}</span>
            </div>
          </Link>

          <Link
            href={`/${currentLocale}/contact`}
            className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl dark:hover:shadow-pink-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              <MessageCircle
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("connectWithMe")}</span>
            </div>
          </Link>
          <Link
            href={`/${currentLocale}/bookmarks`}
            className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              <Bookmark
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("bookmarks")}</span>
            </div>
          </Link>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-indigo-500 dark:via-indigo-400 to-transparent rounded-full"></div>
      </div>

      <div className="mt-16 mb-16">
        <div className="flex flex-wrap justify-center gap-5 text-3xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="relative group flex flex-col items-center"
            >
              <i
                className={`${tech.class} hover:scale-125 transition-transform duration-300 cursor-pointer`}
              ></i>

              <span className="absolute bottom-[-30px] bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
