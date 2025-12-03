"use client";

import { useParams, usePathname, notFound } from "next/navigation";
import { projects } from "@/app/constants/projects";
import { useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { useTranslations } from "next-intl";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const pathname = usePathname();
  const slug = params.slug as string;
  const currentLocale = pathname.split("/")[1] || "en";
  const t = useTranslations("ProjectsPage");

  const project = projects.find((p) => p.slug === slug);

  const { state } = useTheme();
  const isDark = state.theme === "dark";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const hasImages = project.images && project.images.length > 0;

  const title =
    typeof project.title === "string"
      ? project.title
      : project.title[currentLocale as "en" | "de"];
  const description =
    typeof project.description === "string"
      ? project.description
      : project.description[currentLocale as "en" | "de"];

  const contributionText = project.contributionText
    ? project.contributionText[currentLocale as "en" | "de"]
    : currentLocale === "de"
    ? "Wenn Ihnen dieses Projekt gefällt und Sie einen Beitrag leisten möchten, können Sie gerne das Repository forken, einen neuen Branch erstellen und einen Pull Request einreichen. Alle Beiträge sind willkommen!"
    : "If you like this project and want to contribute, feel free to fork the repository, create a new branch, and submit a pull request. All contributions are welcome!";

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images!.length) % project.images!.length
      );
    }
  };

  return (
    <div
      className={`min-h-screen py-12 px-6 transition-colors duration-300 ${
        isDark
          ? "bg-linear-to-b from-gray-900 to-gray-950"
          : "bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-5xl mx-auto mt-10">
        {/* Back Button */}
        <Link
          href={`/${currentLocale}/projects`}
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            isDark
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <ChevronLeft size={20} />
          {t("backtoProjects")}
        </Link>

        <div className="mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <Github size={20} />
              View Source Code
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              <ExternalLink size={20} />
              View Live Demo
            </Link>
          )}
        </div>

        {/* Live Demo or Image Carousel */}
        {project.liveUrl ? (
          <div
            className={`rounded-xl overflow-hidden border shadow-lg mb-12 ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <iframe
              src={project.liveUrl}
              className="w-full h-[600px]"
              title={`${title} Live Demo`}
            />
          </div>
        ) : hasImages ? (
          <div
            className={`relative rounded-xl overflow-hidden border shadow-lg mb-12 ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Carousel */}
            <div className="relative h-[500px]">
              <Image
                src={project.images![currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              {project.images!.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800/80 text-white hover:bg-gray-700"
                        : "bg-white/80 text-gray-900 hover:bg-white"
                    }`}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800/80 text-white hover:bg-gray-700"
                        : "bg-white/80 text-gray-900 hover:bg-white"
                    }`}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images!.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? isDark
                              ? "bg-indigo-400 w-8"
                              : "bg-indigo-600 w-8"
                            : isDark
                            ? "bg-gray-600 hover:bg-gray-500"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`rounded-xl p-12 border text-center mb-12 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              No preview available for this project.
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-12">
          <h2
            className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Technologies Used
          </h2>
          <div
            className={`rounded-xl p-8 border transition-colors duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-8 text-4xl">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center"
                >
                  <i
                    className={`${tech.icon} hover:scale-125 transition-transform duration-300 cursor-pointer`}
                  ></i>
                  <span
                    className={`absolute bottom-[-35px] text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 font-medium ${
                      isDark
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution Section */}
        {project.githubUrl && project.contributionEnabled !== false && (
          <div
            className={`rounded-xl p-8 border transition-colors duration-300 ${
              isDark
                ? "bg-linear-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/50"
                : "bg-linear-to-r from-indigo-50 to-purple-50 border-indigo-200"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              🚀{" "}
              {currentLocale === "de"
                ? "Möchten Sie beitragen?"
                : "Want to Contribute?"}
            </h2>
            <p
              className={`mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {contributionText}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isDark
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  1
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <code
                    className={`px-2 py-1 rounded text-sm font-mono ${
                      isDark
                        ? "bg-gray-800 text-indigo-300"
                        : "bg-white text-indigo-600"
                    }`}
                  >
                    git clone {project.githubUrl}
                  </code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isDark
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  2
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <code
                    className={`px-2 py-1 rounded text-sm font-mono ${
                      isDark
                        ? "bg-gray-800 text-indigo-300"
                        : "bg-white text-indigo-600"
                    }`}
                  >
                    git checkout -b feature/your-feature-name
                  </code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isDark
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  3
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Make your changes and commit:{" "}
                  <code
                    className={`px-2 py-1 rounded text-sm font-mono ${
                      isDark
                        ? "bg-gray-800 text-indigo-300"
                        : "bg-white text-indigo-600"
                    }`}
                  >
                    git commit -m "Add feature"
                  </code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isDark
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  4
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <code
                    className={`px-2 py-1 rounded text-sm font-mono ${
                      isDark
                        ? "bg-gray-800 text-indigo-300"
                        : "bg-white text-indigo-600"
                    }`}
                  >
                    git push origin feature/your-feature-name
                  </code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isDark
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  5
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Open a Pull Request on GitHub and describe your changes
                </p>
              </div>
            </div>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              <Github size={20} />
              {currentLocale === "de"
                ? "Auf GitHub beitragen"
                : "Contribute on GitHub"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
