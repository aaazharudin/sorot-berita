import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory } from "@/lib/data";
import { ArrowLeft, Cpu, TrendingUp, Eye, Clock, Zap } from "lucide-react";

// Mock trending topics
const trendingTopics = [
  { id: 1, name: "AI & Machine Learning", count: 245, icon: "🤖", trend: "up" },
  { id: 2, name: "Startups", count: 189, icon: "🚀", trend: "up" },
  { id: 3, name: "Gadgets", count: 156, icon: "📱", trend: "neutral" },
  { id: 4, name: "Cybersecurity", count: 134, icon: "🔒", trend: "up" },
  { id: 5, name: "Crypto", count: 98, icon: "₿", trend: "down" },
];

// Mock market data
const marketData = [
  { symbol: "AAPL", name: "Apple", price: "182.52", change: "+2.34%", up: true },
  { symbol: "GOOGL", name: "Google", price: "141.80", change: "+1.12%", up: true },
  { symbol: "MSFT", name: "Microsoft", price: "378.91", change: "-0.45%", up: false },
];

export default function TechCategoryPage() {
  const techArticles = getArticlesByCategory("tech" as any);
  const featuredArticle = techArticles[0];
  const trendingArticles = techArticles.slice(1, 4);
  const latestArticles = techArticles.slice(4);

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
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Home
              </Link>
              <Link href="/category/sport" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Sport
              </Link>
              <Link href="/category/tech" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Tech
              </Link>
              <Link href="/category/viral" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Viral
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Featured Tech Story */}
      <section className="border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Futuristic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 dark:from-cyan-950/30 dark:via-blue-950/20 dark:to-slate-950"></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400">Technology</span>
          </div>

          {/* Category Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Technology
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                AI, Startups, Gadgets & Future Tech
              </p>
            </div>
          </div>

          {/* Featured Story */}
          {featuredArticle && (
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <article className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
                  {/* Image */}
                  <div className="relative lg:col-span-7 h-56 lg:h-[420px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase shadow-lg">
                        <Cpu className="w-3.5 h-3.5" />
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 line-clamp-2 leading-tight">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-sm text-slate-300 line-clamp-2 max-w-2xl">
                        {featuredArticle.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase">
                        💻 Tech
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500">
                        {Math.round(featuredArticle.views / 1000)}K views
                      </span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>3 hours ago</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{featuredArticle.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>
      </section>

      {/* Trending Tech Topics Strip */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-blue-500" />
              <h3 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                Trending Topics
              </h3>
            </div>
          </div>

          {/* Topics - Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {trendingTopics.map((topic) => (
              <Link
                key={topic.id}
                href="#"
                className="flex-shrink-0 group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{topic.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {topic.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-500 dark:text-slate-500">{topic.count} articles</span>
                        {topic.trend === "up" && (
                          <TrendingUp className="w-3 h-3 text-emerald-500" />
                        )}
                        {topic.trend === "down" && (
                          <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Articles */}
          <div className="lg:col-span-8">
            {/* Trending News */}
            {trendingArticles.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Trending Now
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {trendingArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group"
                    >
                      <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase">
                              💻 Tech
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 leading-snug">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-500">
                            <span>{Math.round(article.views / 1000)}K views</span>
                            <span>•</span>
                            <span>5h ago</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Latest Stories */}
            {latestArticles.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Latest Stories
                  </h3>
                </div>

                <div className="space-y-4">
                  {latestArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <article className="flex gap-4 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300">
                        <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase mb-2">
                              💻 Tech
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                              {article.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-500">
                            <span>{article.views.toLocaleString()} views</span>
                            <span>•</span>
                            <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* Market Snapshot */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Market Snapshot
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-500">Real-time</span>
                </div>
                <div className="space-y-3">
                  {marketData.map((stock) => (
                    <div key={stock.symbol} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{stock.symbol}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-500">{stock.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">${stock.price}</p>
                        <p className={`text-[10px] font-medium ${stock.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                          {stock.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Companies */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Trending Companies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI", "Apple", "Google", "Microsoft", "Meta", "NVIDIA"].map((company) => (
                    <Link
                      key={company}
                      href="#"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {company}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-5 text-white">
                <h4 className="text-xs font-black uppercase tracking-wide mb-2">
                  Tech Newsletter
                </h4>
                <p className="text-xs text-cyan-100 mb-4">
                  Get the latest tech news and insights delivered daily.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cyan-200 text-xs focus:outline-none focus:ring-2 focus:ring-white/30 mb-3"
                />
                <button className="w-full px-4 py-2.5 bg-white text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors text-xs">
                  Subscribe Free
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
