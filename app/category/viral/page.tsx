import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory } from "@/lib/data";
import { ArrowLeft, Flame, TrendingUp, Eye, Zap, Share2, Heart } from "lucide-react";

// Mock trending hashtags
const trendingHashtags = [
  { id: 1, name: "#ViralVideo", count: 156000, icon: "📹", trend: "up" },
  { id: 2, name: "#TikTok", count: 134000, icon: "🎵", trend: "up" },
  { id: 3, name: "#Twitter", count: 98000, icon: "💬", trend: "up" },
  { id: 4, name: "#Instagram", count: 87000, icon: "📸", trend: "neutral" },
  { id: 5, name: "#FYP", count: 65000, icon: "⭐", trend: "up" },
  { id: 6, name: "#Trending", count: 43000, icon: "🔥", trend: "up" },
];

// Mock social stats
const socialStats = [
  { platform: "TikTok", name: "Video Kucing Lucu", views: "2.5M", likes: "156K", shares: "23K" },
  { platform: "Twitter", name: "Thread Unik", views: "890K", likes: "45K", shares: "12K" },
  { platform: "Instagram", name: "Foto Viral", views: "1.2M", likes: "89K", shares: "8K" },
];

export default function ViralCategoryPage() {
  const viralArticles = getArticlesByCategory("viral" as any);
  const featuredArticle = viralArticles[0];
  const trendingArticles = viralArticles.slice(1, 4);
  const latestArticles = viralArticles.slice(4);

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
              <Link href="/category/tech" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Tech
              </Link>
              <Link href="/category/viral" className="text-xs font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                Viral
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Featured Viral Story */}
      <section className="border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-yellow-50 dark:from-orange-950/30 dark:via-rose-950/20 dark:to-yellow-950/20"></div>

        {/* Animated flame pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50' y='50' font-size='80' text-anchor='middle' fill='%23ff6600' opacity='0.3'%3E🔥%3C/text%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-600 dark:text-orange-400">Viral</span>
          </div>

          {/* Category Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20 relative">
              <Flame className="w-8 h-8 text-white" />
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 animate-ping opacity-20"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  Viral
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-black uppercase tracking-wide animate-pulse">
                  <Zap className="w-3 h-3" />
                  Trending
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Sedang ramai dibahas & trending di media sosial
              </p>
            </div>
          </div>

          {/* Featured Story */}
          {featuredArticle && (
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <article className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
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
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase shadow-lg">
                        <Flame className="w-3.5 h-3.5" />
                        Most Viral
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase shadow-lg">
                        <TrendingUp className="w-3.5 h-3.5" />
                        #1 Trending
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
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase">
                        🔥 Viral
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
                          <Eye className="w-3.5 h-3.5" />
                          <span>{featuredArticle.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{Math.round(featuredArticle.views / 10)} shares</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:gap-3 transition-all">
                        Baca Selengkapnya
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>
      </section>

      {/* Trending Hashtags Strip */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                  Trending Hashtags
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-500">What&apos;s hot on social media</p>
              </div>
            </div>
          </div>

          {/* Hashtags - Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {trendingHashtags.map((tag) => (
              <Link
                key={tag.id}
                href="#"
                className="flex-shrink-0 group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tag.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {tag.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-500 dark:text-slate-500">{tag.count.toLocaleString()} posts</span>
                        {tag.trend === "up" && (
                          <TrendingUp className="w-3 h-3 text-emerald-500" />
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
            {/* Trending Now */}
            {trendingArticles.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                      Hot Right Now
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {trendingArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group"
                    >
                      <article className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 h-full">
                        {/* Rank Badge */}
                        <div className="absolute top-3 left-3 z-20">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-md ${
                            index === 0 ? "bg-amber-500" :
                            index === 1 ? "bg-slate-400" :
                            "bg-amber-700"
                          }`}>
                            {index + 1}
                          </div>
                        </div>

                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase">
                              🔥 Viral
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 mb-2 leading-snug">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-500">
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

            {/* Latest Viral Content */}
            {latestArticles.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Latest Viral
                  </h3>
                </div>

                <div className="space-y-4">
                  {latestArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <article className="flex gap-4 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-md transition-all duration-300">
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
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase mb-2">
                              🔥 Viral
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 mb-1">
                              {article.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-500">
                              <span>{article.views.toLocaleString()} views</span>
                              <span>•</span>
                              <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-600">
                              <Heart className="w-3 h-3" />
                              <span>{Math.round(article.views / 100)}K</span>
                            </div>
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
              {/* Social Stats */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Top Viral Today
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-500">Social Media</span>
                </div>
                <div className="space-y-3">
                  {socialStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{stat.platform === "TikTok" ? "🎵" : stat.platform === "Twitter" ? "💬" : "📸"}</span>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{stat.name}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-500">{stat.views} views</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-orange-600 dark:text-orange-400">{stat.likes}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-500">likes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-5 text-white">
                <h4 className="text-xs font-black uppercase tracking-wide mb-4">
                  Hot Topics
                </h4>
                <div className="space-y-2">
                  {["FYP Indonesia", "Viral TikTok", "Twitter Thread", "Instagram Reels", "Konten Kreator", "Meme Lucu"].map((topic, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="block py-2 border-b border-white/20 last:border-0 hover:bg-white/10 rounded px-2 transition-colors"
                    >
                      <p className="text-xs font-medium">{topic}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Explore Categories
                </h4>
                <div className="space-y-1">
                  <Link href="/category/sport" className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">⚽</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                        Sport
                      </span>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all rotate-180" />
                  </Link>
                  <Link href="/category/tech" className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💻</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                        Technology
                      </span>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all rotate-180" />
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-2">
                  Viral Alerts
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Get notified when content goes viral.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 mb-3"
                />
                <button className="w-full px-4 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors text-xs">
                  Subscribe
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
