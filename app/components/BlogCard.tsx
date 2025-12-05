import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Globe, Tag } from "lucide-react";

interface BlogCardProps {
  title: string;
  image: string;
  slug: string;
  language: string;
  category: string;
  excerpt?: string;
  date: string;
}

const BlogCard = ({
  title,
  image,
  slug,
  language,
  category,
  excerpt,
  date,
}: BlogCardProps) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

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

  return (
    <Link
      href={`/${currentLocale}/blog/${slug}`}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-lg hover:shadow-2xl dark:hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`${
              languageColors[language] || "bg-gray-500"
            } text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg`}
          >
            <Globe size={12} />
            {language.toUpperCase()}
          </span>
          <span
            className={`${
              categoryColors[category] || "bg-gray-500"
            } text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg`}
          >
            <Tag size={12} />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {excerpt && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
          <Calendar size={16} className="mr-2" />
          <span>{new Date(date).toLocaleDateString(currentLocale)}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;