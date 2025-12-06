"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import BlogCard from "@/app/components/BlogCard";
import { BookOpen } from "lucide-react";
import { blogs } from "@/app/constants/blogs";

const BlogPage = () => {
  const t = useTranslations("BlogPage");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const languages = ["all", ...new Set(blogs.map((blog) => blog.language, ))];
  const categories = ["all", ...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const languageMatch =
      selectedLanguage === "all" || blog.language === selectedLanguage;
    const categoryMatch =
      selectedCategory === "all" || blog.category === selectedCategory;
    return languageMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={40}
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("title") || "My Blog"}
            </h1>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("subtitle") ||
              "Thoughts, tutorials, and insights about web development and technology."}
          </p>
        </div>

        <div className="mb-12 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("language") || "Language"}
              </label>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedLanguage === lang
                        ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {lang === "all" ? t("all") || "All" : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("category") || "Category"}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-purple-600 dark:bg-purple-500 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {cat === "all"
                      ? t("all") || "All"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {t("showing") || "Showing"} {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1
              ? t("result") || "result"
              : t("results") || "results"}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              image={blog.image}
              slug={blog.slug}
              language={blog.language}
              categoryColor={blog.categoryColor}
              languageColor={blog.languageColor}
              category={blog.category}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <BookOpen
              className="mx-auto mb-4 text-gray-400 dark:text-gray-600 transition-colors duration-300"
              size={64}
            />
            <p className="text-xl text-gray-500 dark:text-gray-400 transition-colors duration-300">
              {t("noPosts") ||
                "No blog posts found. Try adjusting your filters."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
