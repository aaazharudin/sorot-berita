import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getLatestArticles } from "@/lib/data";
import { ArrowLeft, Eye, Calendar } from "lucide-react";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryConfig: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  accentLine: string;
  showLive?: boolean;
}> = {
  sport: {
    title: "Sport",
    subtitle: "Berita Olahraga Terkini",
    description: "Dapatkan update terbaru dari dunia sepak bola, bulu tangkis, basket, dan olahraga populer lainnya",
    icon: "⚽",
    accent: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
    accentBorder: "border-emerald-200 dark:border-emerald-800",
    accentLine: "bg-emerald-500",
    showLive: true,
  },
  tech: {
    title: "Technology",
    subtitle: "Inovasi & Teknologi Terbaru",
    description: "Informasi terbaru tentang gadget, software, AI, dan perkembangan dunia digital",
    icon: "💻",
    accent: "text-blue-600 dark:text-blue-400",
    accentBg: "bg-blue-50 dark:bg-blue-950/30",
    accentBorder: "border-blue-200 dark:border-blue-800",
    accentLine: "bg-blue-500",
  },
  viral: {
    title: "Viral",
    subtitle: "Sedang Trending",
    description: "Berita paling populer dan sedang menjadi perbincangan di media sosial",
    icon: "🔥",
    accent: "text-orange-600 dark:text-orange-400",
    accentBg: "bg-orange-50 dark:bg-orange-950/30",
    accentBorder: "border-orange-200 dark:border-orange-800",
    accentLine: "bg-orange-500",
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const config = categoryConfig[category];

  if (!config) {
    notFound();
  }

  const articles = getArticlesByCategory(category as any);
  const latestArticles = getLatestArticles(6);

  // Layout variations
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4);
  const remainingArticles = articles.slice(4);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-xs">S</span>
              </div>
              <span className="text-base font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Home
              </Link>
              <Link
                href="/category/sport"
                className={`text-xs font-medium transition-colors ${
                  category === "sport"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                Sport
              </Link>
              <Link
                href="/category/tech"
                className={`text-xs font-medium transition-colors ${
                  category === "tech"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                Tech
              </Link>
              <Link
                href="/category/viral"
                className={`text-xs font-medium transition-colors ${
                  category === "viral"
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                Viral
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Category Hero - Premium Editorial */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className={config.accent}>{config.title}</span>
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{config.icon}</span>
                {config.showLive && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide text-red-600 dark:text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-3">
                {config.title}
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-400">{config.subtitle}</p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500">
              <span className="font-semibold text-slate-900 dark:text-slate-100">{articles.length}</span> articles
            </div>
          </div>

          {/* Accent line */}
          <div className={`h-px w-32 ${config.accentLine}`}></div>
        </div>
      </section>

      {/* Featured Article - Hero Style */}
      {featuredArticle && (
        <section className="border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
                {/* Image */}
                <div className="relative lg:col-span-8 h-64 lg:h-[480px] overflow-hidden rounded-t-xl lg:rounded-xl bg-slate-100 dark:bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase ${config.accentBg} ${config.accent} mb-4`}>
                      <span>{config.icon}</span>
                      {config.title}
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 line-clamp-2">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm text-slate-300 line-clamp-2 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                </div>

                {/* Sidebar - Featured Meta */}
                <div className="lg:col-span-4 p-6 lg:p-0 lg:flex lg:flex-col lg:justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{featuredArticle.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                      </div>
                    </div>
                    <div className={`h-px ${config.accentBg.replace('/30', '/100').replace('bg-', 'bg-').split('-')[0]}-200 dark:bg-slate-800`}></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Articles Grid */}
          <div className="lg:col-span-8">
            {secondaryArticles.length > 0 && (
              <section className="mb-12">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-6">
                  Top Stories
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {secondaryArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group"
                    >
                      <article className="flex gap-4">
                        <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                            <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                            <span>•</span>
                            <span>{Math.round(article.views / 1000)}K views</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {remainingArticles.length > 0 && (
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-6">
                  More Stories
                </h3>
                <div className="space-y-6">
                  {remainingArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <article className={`flex gap-6 pb-6 border-b border-slate-100 dark:border-slate-900 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 -mx-4 px-4 rounded-lg transition-colors`}>
                        <div className="relative w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                          <div>
                            <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase rounded mb-2 ${config.accentBg} ${config.accent}`}>
                              {config.icon} {config.title}
                            </span>
                            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 mb-2">
                              {article.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                            <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                            <span>•</span>
                            <span>{article.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Load More */}
            {articles.length > 0 && (
              <div className="mt-10 text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-sm">
                  Load More Articles
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-20 space-y-8">
              {/* Latest from All Categories */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Latest News
                </h3>
                <div className="space-y-4">
                  {latestArticles.slice(0, 5).map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`inline-block px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded mb-1 ${
                            article.category === "sport" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400" :
                            article.category === "tech" ? "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400" :
                            "bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400"
                          }`}>
                            {article.category === "sport" ? "⚽" : article.category === "tech" ? "💻" : "🔥"}
                            {article.category}
                          </span>
                          <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Newsletter
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Get the latest {config.title.toLowerCase()} news delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 mb-3"
                />
                <button className="w-full px-4 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm">
                  Subscribe
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Categories
                </h3>
                <div className="space-y-1">
                  {Object.entries(categoryConfig).map(([key, value]) => (
                    <Link
                      key={key}
                      href={`/category/${key}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                        category === key
                          ? `${value.accentBg} ${value.accent}`
                          : "hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{value.icon}</span>
                        <span className="text-sm font-medium">{value.title}</span>
                      </div>
                      {category === key && (
                        <div className={`w-1.5 h-1.5 rounded-full ${value.accentLine}`}></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-xs">S</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
            </Link>
            <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contact</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Privacy</Link>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-600">
              © 2024 Sorot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: "sport" },
    { category: "tech" },
    { category: "viral" },
  ];
}
