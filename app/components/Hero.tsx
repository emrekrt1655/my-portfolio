"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Github, Linkedin, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Components.Hero");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        {t("greeting")}{" "}
        <span className="text-indigo-600">{t("name")}</span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
        {t("title")}
      </h2>

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

      <div className="flex gap-6 text-gray-600">
        <Link href="https://github.com/emrekrt1655" target="_blank">
          <Github size={24} className="hover:text-indigo-600 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/emrekrt16/" target="_blank">
          <Linkedin size={24} className="hover:text-indigo-600 transition" />
        </Link>
        <Link href="mailto:emrekurtt1655@gmail.com">
          <Mail size={24} className="hover:text-indigo-600 transition" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
