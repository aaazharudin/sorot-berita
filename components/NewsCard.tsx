import Image from "next/image";
import Link from "next/link";
import { Eye, Clock, ArrowRight } from "lucide-react";
import { Article, formatViews, timeAgo } from "@/lib/data";

interface NewsCardProps {
  article: Article;
  size?: "default" | "large" | "small";
  showRank?: boolean;
  rank?: number;
}

const categoryStyles = {
  sport: {
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: "⚽",
    bar: "bg-emerald-500",
  },
  tech: {
    text: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    icon: "💻",
    bar: "bg-blue-500",
  },
  viral: {
    text: "text-orange-700 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    icon: "🔥",
    bar: "bg-orange-500",
  },
};

const categoryLabels = {
  sport: "Sport",
  tech: "Technology",
  viral: "Viral",
};

export default function NewsCard({ article, size = "default", showRank = false, rank = 0 }: NewsCardProps) {
  const style = categoryStyles[article.category];
  const isLarge = size === "large";
  const isSmall = size === "small";

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className={`relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 ${isLarge ? 'md:col-span-2' : ''}`}>
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${style.bar} z-10`}></div>

        {/* Rank Badge */}
        {showRank && rank <= 3 && (
          <div className="absolute top-4 left-4 z-20">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-md ${
              rank === 1 ? "bg-amber-500" :
              rank === 2 ? "bg-slate-400" :
              "bg-amber-700"
            }`}>
              {rank}
            </div>
          </div>
        )}

        {/* Image */}
        <div className={`relative w-full ${isLarge ? 'h-72' : isSmall ? 'h-36' : 'h-48'} overflow-hidden bg-slate-100 dark:bg-slate-800`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Badge on Image */}
          <div className={`absolute top-4 ${showRank ? 'right-4' : 'left-4'} z-10`}>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide backdrop-blur-sm ${style.bg} ${style.text}`}>
              <span className="text-sm">{style.icon}</span>
              {categoryLabels[article.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-5 ${isSmall ? 'p-4' : ''}`}>
          {/* Title */}
          <h3 className={`font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors ${isLarge ? 'text-2xl line-clamp-2' : isSmall ? 'text-sm line-clamp-2' : 'text-lg line-clamp-2'}`}>
            {article.title}
          </h3>

          {/* Excerpt - hide for small cards */}
          {!isSmall && (
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className={`flex items-center justify-between ${isSmall ? 'pt-0' : 'pt-3'} border-t border-slate-100 dark:border-slate-800`}>
            <div className={`flex items-center gap-3 ${style.text}`}>
              <div className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span className={isSmall ? 'text-xs' : 'text-xs'}>{formatViews(article.views)}</span>
              </div>
              {!isSmall && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs">{timeAgo(article.createdAt)}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              <span className={`font-medium ${isSmall ? 'text-xs' : 'text-xs'}`}>Read</span>
              <ArrowRight className={isSmall ? "w-3.5 h-3.5" : "w-4 h-4"} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Compact version for sidebar
export function NewsCardCompact({ article }: { article: Article }) {
  const style = categoryStyles[article.category];

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold uppercase rounded mb-2 ${style.bg} ${style.text}`}>
              <span className="text-xs">{style.icon}</span>
              {categoryLabels[article.category]}
            </span>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2">
              {article.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
            <span>{formatViews(article.views)} views</span>
            <span>•</span>
            <span>{timeAgo(article.createdAt)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Minimal version for list view
export function NewsCardMinimal({ article }: { article: Article }) {
  const style = categoryStyles[article.category];

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="flex gap-5 py-5 border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 -mx-4 px-4 transition-all duration-200">
        <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase rounded ${style.bg} ${style.text}`}>
              {categoryLabels[article.category]}
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 mb-2">
            {article.title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1 mb-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
            <span>{formatViews(article.views)} views</span>
            <span>•</span>
            <span>{timeAgo(article.createdAt)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
