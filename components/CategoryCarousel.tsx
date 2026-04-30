"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Article } from "@/lib/data";

interface CategoryCarouselProps {
  articles: Article[];
  category: string;
  config: {
    icon: string;
    accent: string;
    accentBg: string;
    accentBorder: string;
  };
  variant?: "sport" | "tech" | "viral";
}

export default function CategoryCarousel({
  articles,
  category,
  config,
  variant = "sport"
}: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setIsAutoPlaying(false);
  };

  if (articles.length === 0) return null;

  const currentArticle = articles[currentIndex];

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <Link
          href={`/news/${currentArticle.slug}`}
          className="group block"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <article
            className={`relative bg-white dark:bg-slate-900 overflow-hidden border-2 transition-all duration-500 ${
              variant === "sport"
                ? "border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-600"
                : "border-blue-200 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 lg:hidden"></div>
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-bold uppercase shadow-lg ${
                      variant === "sport" ? "bg-emerald-500" : "bg-blue-500"
                    }`}
                  >
                    {config.icon}
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      variant === "sport"
                        ? "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"
                        : "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400"
                    }`}
                  >
                    {config.icon} {category}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    {Math.round(currentArticle.views / 1000)}K views
                  </span>
                </div>
                <h3
                  className={`text-2xl lg:text-3xl font-bold mb-4 leading-tight transition-colors line-clamp-2 ${
                    variant === "sport"
                      ? "text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      : "text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {currentArticle.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                  {currentArticle.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      variant === "sport"
                        ? "text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                        : "text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    Baca Selengkapnya
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-30 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-30 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? variant === "sport"
                    ? "w-8 h-2 bg-emerald-500 rounded-full"
                    : "w-8 h-2 bg-blue-500 rounded-full"
                  : "w-2 h-2 bg-white/50 dark:bg-slate-700/50 rounded-full hover:w-4"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {articles.map((article, index) => (
          <button
            key={article.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all border-2 ${
              index === currentIndex
                ? variant === "sport"
                  ? "border-emerald-500 scale-105"
                  : "border-blue-500 scale-105"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
