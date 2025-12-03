"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { usePathname } from "next/navigation";

interface ProjectCardProps {
  title: string;
  image: string;
  slug: string;
}

const ProjectCard = ({ title, image, slug }: ProjectCardProps) => {
  const { state } = useTheme();
  const isDark = state.theme === "dark";
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <Link href={`/${currentLocale}/projects/${slug}`}>
      <div
        className={`group rounded-xl overflow-hidden shadow-lg border transition-all duration-300 cursor-pointer ${
          isDark
            ? "bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500"
            : "bg-white border-gray-100 hover:shadow-xl hover:border-indigo-200"
        }`}
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isDark
                ? "bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"
                : "bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
            }`}
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3
              className={`text-2xl font-bold transition-all duration-300 ${
                isDark
                  ? "text-white"
                  : "text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className={`p-4 ${isDark ? "hidden" : "block group-hover:hidden"}`}>
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;