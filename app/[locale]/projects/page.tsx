"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "@/app/components/ProjectCard";
import { useTheme } from "@/app/context/ThemeContext";
import { Code } from "lucide-react";
import { projects } from "@/app/constants/projects";

const ProjectsPage = () => {
  const t = useTranslations("ProjectsPage");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  return (
    <div
      className={`min-h-screen py-12 px-6 transition-colors duration-300 ${
        isDark
          ? "bg-linear-to-b from-gray-900 to-gray-950"
          : "bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={40}
            />
            <h1
              className={`text-5xl md:text-6xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("title") || "My Projects"}
            </h1>
          </div>
          <p
            className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("subtitle") ||
              "A collection of projects I've worked on. Click on any project to learn more about it."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <Code
              className={`mx-auto mb-4 transition-colors duration-300 ${
                isDark ? "text-gray-600" : "text-gray-400"
              }`}
              size={64}
            />
            <p
              className={`text-xl transition-colors duration-300 ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              {t("noProjects") || "No projects yet. Check back soon!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
