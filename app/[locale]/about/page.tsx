"use client";

import { useTranslations } from "next-intl";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";
import { skillCategories } from "@/app/constants/skillCategories";
import { Education, WorkExperience } from "@/types/about";
import PhotoAlbum from "@/app/components/PhotoAlbum";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  const workExperiences = t.raw("workExperiences") as WorkExperience[];
  const educationList = t.raw("education") as Education[];
  const certifications = t.raw("certifications") as string[];

  return (
    <div className="min-h-screen mt-6 py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {t("title")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
            {t("subtitle")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("description")}
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={32}
            />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("workExperienceTitle")}
            </h3>
          </div>
          <div className="space-y-6">
            {workExperiences.map((job, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 hover:shadow-xl hover:border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      {job.role}
                    </h4>
                    <p className="font-semibold flex items-center gap-2 text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                      <span>{job.company}</span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm flex flex-col items-start md:items-end gap-1 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {job.duration}
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={32}
            />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("educationTitle")}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 hover:shadow-xl hover:border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl dark:hover:border-indigo-500 transition-all duration-300"
              >
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  {edu.degree}
                </h4>
                <p className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                  {edu.school}
                </p>
                <p className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  <Calendar size={14} />
                  {edu.duration}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={32}
            />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("certificationsTitle")}
            </h3>
          </div>
          <div className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="mt-1 text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                    <Award size={20} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={32}
            />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("skillsTitle")}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.key}
                className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 hover:shadow-xl hover:border-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {category.label}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {t(`skills.${category.key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Heart
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={32}
            />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("interestsTitle")}
            </h3>
          </div>
          <div className="rounded-xl shadow-lg p-8 border bg-white border-indigo-100 dark:bg-gray-800 dark:to-gray-750 dark:border-gray-700 transition-colors duration-300">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-300">
              {t("interests")}
            </p>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-8">
            
          </div>
          <div className="rounded-xl shadow-lg p-8 border bg-white border-indigo-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <PhotoAlbum />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
