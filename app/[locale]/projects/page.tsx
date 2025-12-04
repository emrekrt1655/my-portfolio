"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "@/app/components/ProjectCard";
import { Code } from "lucide-react";
import { projects } from "@/app/constants/projects";

const ProjectsPage = () => {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={40}
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("title") || "My Projects"}
            </h1>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("subtitle") ||
              "A collection of projects I've worked on. Click on any project to learn more about it."}
          </p>
        </div>

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
              className="mx-auto mb-4 text-gray-400 dark:text-gray-600 transition-colors duration-300"
              size={64}
            />
            <p className="text-xl text-gray-500 transition-colors duration-300">
              {t("noProjects") || "No projects yet. Check back soon!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
