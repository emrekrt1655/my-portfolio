"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Globe, Tag, ArrowLeft, Clock } from "lucide-react";
import { blogs } from "@/app/constants/blogs";
import { notFound } from "next/navigation";

const BlogDetailPage = () => {
  const params = useParams();
  const pathname = usePathname();
  const t = useTranslations("BlogPage");
  const currentLocale = pathname.split("/")[1] || "en";

  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const languageColors: Record<string, string> = {
    en: "bg-blue-500 dark:bg-blue-400",
    de: "bg-yellow-500 dark:bg-yellow-400",
    tr: "bg-red-500 dark:bg-red-400",
  };

  const categoryColors: Record<string, string> = {
    tutorial: "bg-green-500 dark:bg-green-400",
    opinion: "bg-purple-500 dark:bg-purple-400",
    news: "bg-orange-500 dark:bg-orange-400",
    guide: "bg-cyan-500 dark:bg-cyan-400",
  };

  const readingTime = blog.content
    ? Math.ceil(blog.content.split(" ").length / 200)
    : 5;

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/${currentLocale}/blog`}
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium mb-8 mt-10 transition-colors duration-300 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          {t("backToBlog") || "Back to Blog"}
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <span
              className={`${
                languageColors[blog.language] || "bg-gray-500"
              } text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}
            >
              <Globe size={16} />
              {blog.language.toUpperCase()}
            </span>
            <span
              className={`${
                categoryColors[blog.category] || "bg-gray-500"
              } text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}
            >
              <Tag size={16} />
              {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {new Date(blog.date).toLocaleDateString(currentLocale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>
                {readingTime} {t("minRead") || "min read"}
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl border-2 border-gray-200 dark:border-gray-700">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {blog.excerpt && (
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 dark:border-indigo-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
        )}

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-6">
            {blog.content && (
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="blog-content"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                }}
              />
            )}
          </div>
        </article>

        <div className="mt-16 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("sharePost") || "Share this post"}
          </h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                blog.title
              )}&url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
