"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "@/app/components/ProjectCard";
import { Code } from "lucide-react";
import { projects } from "@/app/constants/projects";
import { useState } from "react";

const ProjectsPage = () => {
  const t = useTranslations("ProjectsPage");

  const [selectedTechStack, setSelectedTechStack] = useState<string[]>(["all"]);

  const techStacks = [
    "all",
    ...new Set(
      projects.flatMap((project) => project?.mainTechStack.map(tech => tech) || []),
    ),
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedTechStack.includes("all")) {
      return true;
    }
    
    return project.mainTechStack.some(tech => 
      selectedTechStack.includes(tech)
    );
  });

  const handleTechStackClick = (tech: string) => {
    if (tech === "all") {
      setSelectedTechStack(["all"]);
    } else {
      setSelectedTechStack((prev) => {
        const withoutAll = prev.filter(t => t !== "all");
        
        if (withoutAll.includes(tech)) {
          const newSelection = withoutAll.filter(t => t !== tech);
          return newSelection.length === 0 ? ["all"] : newSelection;
        }
        
        return [...withoutAll, tech];
      });
    }
  };

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

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
            {t("filterByTechStack") || "Filter by Tech Stack"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStacks.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechStackClick(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedTechStack.includes(tech)
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {tech === "all" ? "All" : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Code
              className="mx-auto mb-4 text-gray-400 dark:text-gray-600 transition-colors duration-300"
              size={64}
            />
            <p className="text-xl text-gray-500 transition-colors duration-300">
              {t("noProjectsMessage") || "No projects matching the selected technologies."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;