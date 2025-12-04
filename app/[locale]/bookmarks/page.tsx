"use client";

import { useTranslations } from "next-intl";
import { Bookmark } from "lucide-react";
import { usePathname } from "next/navigation";
import { bookmarks } from "@/app/constants/bookmarks";
import Link from "next/link";

export default function BookmarksPage() {
  const pathname = usePathname();
  const t = useTranslations("BookmarksPage");
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bookmark
              className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              size={40}
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {t("title") || "My Projects"}
            </h1>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("subtitle") ||
              "A collection of bookmarks I've pinned. Click on any folder to learn more about it."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookmarks.map((bookmark, index) => (
            <Link href={bookmark.url} target="_blank" key={index}>
              <div
                className={`group cursor-pointer rounded-lg ${bookmark.bgColor} overflow-hidden transition-transform duration-300 hover:scale-105`}
              >
                <div className="aspect-video flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-full ${bookmark.circleColor}  transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {currentLocale === "de"
                      ? bookmark.titleDe || bookmark.titleEn
                      : bookmark.titleEn}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentLocale === "de"
                      ? bookmark.subtitleDe || bookmark.subtitleEn
                      : bookmark.subtitleEn}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
