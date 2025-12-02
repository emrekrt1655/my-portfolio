"use client";

import { useTranslations } from "next-intl";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MessageSquareText,
  User,
  FolderOpen,
  MessageCircle,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Components.Hero");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const cvPath =
    currentLocale === "de"
      ? "/cv/Emre_Kurt_Lebenslauf.pdf"
      : "/cv/Emre_Kurt_CV.pdf";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-linear-to-b from-white to-gray-50">
      <Link
        className="mb-6 w-[200px] h-[200px] rounded-full overflow-hidden border-4 hover:border-indigo-600 shadow-lg transition-all duration-300 cursor-pointer"
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

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
        {t("greeting")} <span className="text-indigo-600">{t("name")}</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-5">{t("title")}</h2>

      <p className="max-w-2xl text-gray-600 mb-8 leading-relaxed">
        {t("description")}
      </p>

      {/* Social Links Section */}
      <div className="flex gap-8 mb-8">
        <Link
          href="https://github.com/emrekrt1655"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Github size={32} className="text-indigo-600" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emrekrt16/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Linkedin size={32} className="text-indigo-600" />
        </Link>
        <Link
          href="https://medium.com/@emrekrt16"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <MessageSquareText size={32} className="text-indigo-600" />
        </Link>
        <Link
          href="mailto:emrekurtt1655@gmail.com"
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <Mail size={32} className="text-indigo-600" />
        </Link>
      </div>

      <div className="relative mt-8 mb-10">
        {/* Arka plan dekoratif elemanlar */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>

        {/* Ana buton container */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {/* About Me Button */}
          <Link
            href={`/${currentLocale}/about`}
            className="group relative bg-white border-2 border-gray-200 hover:border-indigo-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 group-hover:text-white transition-colors duration-300">
              <User
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("aboutMe")}</span>
            </div>
          </Link>

          {/* Download CV Button */}
          <Link
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <FileText
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("downloadCV")}</span>
            </div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-200%] group-hover:translate-x-[200%] skew-x-12 transition-transform duration-700"></div>
          </Link>

          {/* Projects Button */}
          <Link
            href={`/${currentLocale}/projects`}
            className="group relative bg-white border-2 border-gray-200 hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 group-hover:text-white transition-colors duration-300">
              <FolderOpen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("viewProjects")}</span>
            </div>
          </Link>

          <Link
            href={`/${currentLocale}/contact`}
            className="group relative bg-white border-2 border-gray-200 hover:border-pink-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 text-gray-700 group-hover:text-white transition-colors duration-300">
              <MessageCircle
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>{t("connectWithMe")}</span>
            </div>
          </Link>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16">
        <div className="flex flex-wrap justify-center gap-5 text-3xl text-gray-600 max-w-3xl mx-auto">
          {[
            { class: "devicon-html5-plain colored", name: "HTML5" },
            { class: "devicon-css3-plain colored", name: "CSS3" },
            { class: "devicon-react-original colored", name: "React" },
            { class: "devicon-nextjs-original", name: "Next.js" },
            { class: "devicon-vuejs-plain colored", name: "Vue.js" },
            { class: "devicon-stenciljs-original colored", name: "Stencil.js" },
            { class: "devicon-typescript-plain colored", name: "TypeScript" },
            {
              class: "devicon-tailwindcss-plain colored",
              name: "Tailwind CSS",
            },
            { class: "devicon-sass-original colored", name: "SCSS / Sass" },
            { class: "devicon-nodejs-plain colored", name: "Node.js" },
            { class: "devicon-express-original colored", name: "Express.js" },
            { class: "devicon-django-plain colored", name: "Django" },
            { class: "devicon-symfony-original", name: "Symfony" },
            { class: "devicon-prisma-original colored", name: "Prisma ORM" },
            { class: "devicon-mysql-plain colored", name: "MySQL" },
            { class: "devicon-postgresql-plain colored", name: "PostgreSQL" },
            { class: "devicon-mongodb-plain colored", name: "MongoDB" },
            { class: "devicon-docker-plain colored", name: "Docker" },
            { class: "devicon-gitlab-plain colored", name: "GitLab" },
            { class: "devicon-jest-plain colored", name: "Jest" },
            { class: "devicon-cypressio-plain colored", name: "Cypress" },
            { class: "devicon-playwright-plain colored", name: "Playwright" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="relative group flex flex-col items-center"
            >
              <i
                className={`${tech.class} hover:scale-125 transition-transform duration-300 cursor-pointer`}
              ></i>

              <span className="absolute bottom-[-30px] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
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
