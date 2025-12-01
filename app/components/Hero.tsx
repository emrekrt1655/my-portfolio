"use client";

import { useTranslations } from "next-intl";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MessageSquareText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Components.Hero");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-linear-to-b from-white to-gray-50">
      <div className="mb-6 w-[200px] h-[200px] rounded-full overflow-hidden border-4 hover:border-indigo-600 shadow-lg">
        <Image
          src="/images/emrekurt.png"
          alt="Emre Kurt"
          width={140}
          height={140}
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
        {t("greeting")} <span className="text-indigo-600">{t("name")}</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-5">{t("title")}</h2>

      <p className="max-w-2xl text-gray-600 mb-8 leading-relaxed">
        {t("description")}
      </p>

      <div className="flex gap-4 mb-10">
        <Link
          href={`/${currentLocale}#projects`}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          {t("viewProjects")}
        </Link>
        <Link
          href="/Emre_Kurt_CV.pdf"
          target="_blank"
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition flex items-center gap-2"
        >
          <FileText size={18} /> {t("downloadCV")}
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-5 text-3xl text-gray-600 mt-10 max-w-3xl mx-auto">
        {[
          { class: "devicon-html5-plain colored", name: "HTML5" },
          { class: "devicon-css3-plain colored", name: "CSS3" },
          { class: "devicon-react-original colored", name: "React" },
          { class: "devicon-nextjs-original", name: "Next.js" },
          { class: "devicon-vuejs-plain colored", name: "Vue.js" },
          { class: "devicon-stenciljs-original colored", name: "Stencil.js" },
          { class: "devicon-typescript-plain colored", name: "TypeScript" },
          { class: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
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

            <span className="absolute bottom-[-30px] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex mt-10 gap-6 text-gray-600">
        <Link href="https://github.com/emrekrt1655" target="_blank">
          <Github size={24} className="text-indigo-600 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/emrekrt16/" target="_blank">
          <Linkedin size={24} className="text-indigo-600 transition" />
        </Link>
        <Link href="https://medium.com/@emrekrt16" target="_blank">
          <MessageSquareText
            size={24}
            className="text-indigo-600 transition"
          />
        </Link>
        <Link href="mailto:emrekurtt1655@gmail.com">
          <Mail size={24} className="text-indigo-600 transition" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
