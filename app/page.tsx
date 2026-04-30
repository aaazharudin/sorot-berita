import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import CategoryCarousel from "@/components/CategoryCarousel";
import { getLatestArticles, getTrendingArticles, getArticlesByCategory } from "@/lib/data";
import { TrendingUp, ArrowRight, Newspaper, Zap, Trophy, Cpu, Activity } from "lucide-react";

export default function HomePage() {
  const latestArticles = getLatestArticles(10);
  const trendingArticles = getTrendingArticles(5);

  // Featured articles
  const featuredArticle = latestArticles[0];
  const secondaryArticles = latestArticles.slice(1, 4);
  const remainingArticles = latestArticles.slice(4);

  // Category-specific articles
  const sportArticles = getArticlesByCategory("sport" as any);
  const techArticles = getArticlesByCategory("tech" as any);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900 dark:after:bg-slate-100">
                Home
              </Link>
              <Link href="/category/sport" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Sport
              </Link>
              <Link href="/category/tech" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Tech
              </Link>
              <Link href="/category/viral" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Viral
              </Link>
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wide">
                <TrendingUp className="w-3.5 h-3.5" />
                Edisi Hari Ini
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                Berita yang
                <span className="block text-slate-600 dark:text-slate-400">Lagi Disorot</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Portal berita modern dengan kurasi berita terbaik dari berbagai kategori.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/category/sport"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 text-sm"
                >
                  Sport
                </Link>
                <Link
                  href="/category/tech"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 text-sm"
                >
                  Tech
                </Link>
                <Link
                  href="/category/viral"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all text-sm"
                >
                  <Zap className="w-4 h-4" />
                  Viral
                </Link>
              </div>
            </div>

            {/* Right - Featured Article */}
            <div className="relative">
              {featuredArticle && (
                <Link href={`/news/${featuredArticle.slug}`} className="group block">
                  <article className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase mb-3 ${
                          featuredArticle.category === "sport" ? "bg-emerald-500 text-white" :
                          featuredArticle.category === "tech" ? "bg-blue-500 text-white" :
                          "bg-orange-500 text-white"
                        }`}>
                          {featuredArticle.category === "sport" ? "⚽ Sport" :
                           featuredArticle.category === "tech" ? "💻 Tech" :
                           "🔥 Viral"}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                          {featuredArticle.title}
                        </h2>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                          <span>{Math.round(featuredArticle.views / 1000)}K views</span>
                          <span>•</span>
                          <span>{new Date(featuredArticle.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800">
                <TrendingUp className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
                  Sedang Sorot
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-500">Berita terpopuler hari ini</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trendingArticles.map((article, index) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group"
              >
                <div className="relative bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                      index === 0 ? "bg-amber-500" :
                      index === 1 ? "bg-slate-400" :
                      index === 2 ? "bg-amber-700" :
                      "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    }`}>
                      {index + 1}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">{Math.round(article.views / 1000)}K</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Section - Dynamic & Energetic with Carousel */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Sport</h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500 text-white text-xs font-bold uppercase tracking-wide animate-pulse">
                    <Activity className="w-3 h-3" />
                    Live
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Berita olahraga terkini & pertandingan live</p>
              </div>
            </div>
            <Link
              href="/category/sport"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel */}
          <CategoryCarousel
            articles={sportArticles}
            category="Sport"
            config={{
              icon: "⚽",
              accent: "text-emerald-600 dark:text-emerald-400",
              accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
              accentBorder: "border-emerald-200 dark:border-emerald-800",
            }}
            variant="sport"
          />

          {/* More Sport Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {sportArticles.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group"
              >
                <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                      <span>{Math.round(article.views / 1000)}K</span>
                      <span>•</span>
                      <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - Clean & Modern with Carousel */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Technology</h2>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Inovasi terbaru dari dunia teknologi</p>
              </div>
            </div>
            <Link
              href="/category/tech"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel */}
          <CategoryCarousel
            articles={techArticles}
            category="Tech"
            config={{
              icon: "💻",
              accent: "text-blue-600 dark:text-blue-400",
              accentBg: "bg-blue-50 dark:bg-blue-950/30",
              accentBorder: "border-blue-200 dark:border-blue-800",
            }}
            variant="tech"
          />

          {/* More Tech Articles - Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {techArticles.slice(0, 2).map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group"
              >
                <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">
                        💻 Tech
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-600">
                        {new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          {Math.round(article.views / 1000)}K views
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="latest" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Latest Articles */}
          <div className="lg:col-span-2 space-y-12">

            {/* Section 1: Featured Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Pilihan Editor
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">4 artikel terpilih hari ini</p>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {secondaryArticles.map((article) => (
                  <NewsCard key={article.id} article={article} size="default" />
                ))}
              </div>
            </section>

            {/* Visual Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-slate-950 px-4 text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Lihat Juga
                </span>
              </div>
            </div>

            {/* Section 2: More Articles - List Style */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Artikel Lainnya
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{remainingArticles.length} artikel lagi untuk kamu</p>
                </div>
              </div>

              {/* List layout for remaining articles */}
              <div className="space-y-4">
                {remainingArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group block"
                  >
                    <article className="flex gap-5 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300">
                      {/* Image */}
                      <div className="relative w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                        <div>
                          {/* Category */}
                          <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase rounded mb-2 ${
                            article.category === "sport" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400" :
                            article.category === "tech" ? "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400" :
                            "bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400"
                          }`}>
                            {article.category === "sport" ? "⚽ Sport" : article.category === "tech" ? "💻 Tech" : "🔥 Viral"}
                          </span>

                          {/* Title */}
                          <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 mb-2">
                            {article.title}
                          </h4>

                          {/* Excerpt */}
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                          <span>{Math.round(article.views / 1000)}K views</span>
                          <span>•</span>
                          <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {remainingArticles.length > 0 && (
                <div className="pt-6 text-center">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 text-sm">
                    Muat Lebih Banyak
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Kategori
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/category/sport"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">⚽</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                        Sport
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/category/tech"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💻</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                        Technology
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/category/viral"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔥</span>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300">
                        Viral
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-orange-400 group-hover:text-orange-600 dark:group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 text-white">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-2">Berita Harian</h3>
                <p className="text-sm text-slate-400 mb-4">Dapatkan sorotan berita terbaru langsung ke inbox kamu setiap pagi.</p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email kamu"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  />
                  <button className="w-full px-4 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors text-sm">
                    Langganan Gratis
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                  <span className="text-white dark:text-slate-900 font-bold text-sm">S</span>
                </div>
                <div>
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Berita yang Lagi Jadi Perhatian</p>
                </div>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                Portal berita modern dengan fokus pada topik yang sedang viral dan relevan untuk Gen Z Indonesia.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-4">Perusahaan</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Tentang Kami</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Karir</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Privasi</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Kebijakan</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-600 dark:text-slate-500">
                © 2024 Sorot. All rights reserved.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-600">
                Dibuat untuk Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
