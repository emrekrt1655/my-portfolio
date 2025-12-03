"use client";

import { useTranslations } from "next-intl";
import { Briefcase, GraduationCap, Award, Code, Heart, MapPin, Calendar } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

type WorkExperience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
};

type Education = {
  degree: string;
  school: string;
  duration: string;
};

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  const workExperiences = t.raw("workExperiences") as WorkExperience[];
  const educationList = t.raw("education") as Education[];
  const certifications = t.raw("certifications") as string[];

  const skillCategories = [
    { label: "Frontend", icon: "💻", key: "frontend" },
    { label: "Backend", icon: "⚙️", key: "backend" },
    { label: "Databases", icon: "🗄️", key: "databases" },
    { label: "Testing", icon: "🧪", key: "testing" },
    { label: "Tools", icon: "🛠️", key: "tools" },
    { label: "State Management", icon: "📦", key: "state" },
    { label: "Languages", icon: "🌐", key: "languages" },
  ];

  return (
    <div
      className={`min-h-screen mt-6 py-12 px-6 transition-colors duration-300 ${
        isDark ? "bg-linear-to-b from-gray-900 to-gray-950" : "bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {t("title")}
          </h1>
          <h2
            className={`text-2xl md:text-3xl font-semibold mb-6 transition-colors duration-300 ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {t("subtitle")}
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("description")}
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={32}
            />
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("workExperienceTitle")}
            </h3>
          </div>
          <div className="space-y-6">
            {workExperiences.map((job, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-6 border transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500"
                    : "bg-white border-gray-100 hover:shadow-xl hover:border-gray-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4
                      className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {job.role}
                    </h4>
                    <p
                      className={`font-semibold flex items-center gap-2 transition-colors duration-300 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      <span>{job.company}</span>
                    </p>
                  </div>
                  <div
                    className={`mt-2 md:mt-0 text-sm flex flex-col items-start md:items-end gap-1 transition-colors duration-300 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
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
                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={32}
            />
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("educationTitle")}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-6 border transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500"
                    : "bg-white border-gray-100 hover:shadow-xl hover:border-gray-200"
                }`}
              >
                <h4
                  className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {edu.degree}
                </h4>
                <p
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {edu.school}
                </p>
                <p
                  className={`text-sm flex items-center gap-1 transition-colors duration-300 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
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
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={32}
            />
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("certificationsTitle")}
            </h3>
          </div>
          <div
            className={`rounded-xl shadow-lg p-6 border transition-colors duration-300 ${
              isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-200 ${
                    isDark ? "hover:bg-gray-700" : "hover:bg-indigo-50"
                  }`}
                >
                  <div
                    className={`mt-1 transition-colors duration-300 ${
                      isDark ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    <Award size={20} />
                  </div>
                  <p
                    className={`transition-colors duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
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
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={32}
            />
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("skillsTitle")}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.key}
                className={`rounded-xl shadow-lg p-6 border transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500"
                    : "bg-white border-gray-100 hover:shadow-xl hover:border-indigo-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h4
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isDark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {category.label}
                  </h4>
                </div>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t(`skills.${category.key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Heart
              className={`transition-colors duration-300 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={32}
            />
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {t("interestsTitle")}
            </h3>
          </div>
          <div
            className={`rounded-xl shadow-lg p-8 border transition-colors duration-300 ${
              isDark
                ? "bg-linear-to-r from-gray-800 to-gray-750 border-gray-700"
                : "bg-linear-to-r from-indigo-50 to-purple-50 border-indigo-100"
            }`}
          >
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {t("interests")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;