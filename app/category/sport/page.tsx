import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getLatestArticles } from "@/lib/data";
import { ArrowLeft, TrendingUp, Activity, Trophy, Clock, Eye, Flame } from "lucide-react";

// Mock live matches data
const liveMatches = [
  {
    id: 1,
    homeTeam: "Persija Jakarta",
    awayTeam: "Persib Bandung",
    homeScore: 2,
    awayScore: 1,
    minute: "67'",
    status: "LIVE",
    league: "Liga 1",
  },
  {
    id: 2,
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    homeScore: 1,
    awayScore: 1,
    minute: "45+2'",
    status: "HT",
    league: "Premier League",
  },
  {
    id: 3,
    homeTeam: "LA Lakers",
    awayTeam: "Golden State Warriors",
    homeScore: 98,
    awayScore: 95,
    minute: "Q4",
    status: "LIVE",
    league: "NBA",
  },
  {
    id: 4,
    homeTeam: "Anthony Ginting",
    awayTeam: "Viktor Axelsen",
    homeScore: 21,
    awayScore: 19,
    minute: "Set 2",
    status: "LIVE",
    league: "Indonesia Open",
  },
  {
    id: 5,
    homeTeam: "Timnas Indonesia",
    awayTeam: "Timnas Jepang",
    homeScore: 0,
    awayScore: 0,
    minute: "20:00",
    status: "UPCOMING",
    league: "Asian Cup",
  },
  {
    id: 6,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 3,
    awayScore: 2,
    minute: "FT",
    status: "FINAL",
    league: "La Liga",
  },
];

export default function SportCategoryPage() {
  const sportArticles = getArticlesByCategory("sport" as any);
  const featuredArticle = sportArticles[0];
  const secondaryArticles = sportArticles.slice(1, 4);
  const remainingArticles = sportArticles.slice(4);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header - Compact */}
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
              <Link href="/category/sport" className="text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
                Sport
              </Link>
              <Link href="/category/tech" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Tech
              </Link>
              <Link href="/category/viral" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Viral
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width Featured Story */}
      {featuredArticle && (
        <section className="relative border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-red-950/20 dark:via-slate-950 dark:to-slate-950"></div>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-red-600 dark:text-red-400">Sport</span>
            </div>

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight uppercase">
                    Sport
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-black uppercase tracking-wide">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Berita olahraga terkini, skor langsung, dan highlight</p>
              </div>
            </div>

            {/* Featured Story - Full Width */}
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-600 transition-all duration-500 shadow-xl">
                {/* Image */}
                <div className="relative lg:col-span-8 h-64 lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-black uppercase shadow-lg">
                      <Trophy className="w-3.5 h-3.5" />
                      Featured Story
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 text-xs font-black uppercase backdrop-blur-sm">
                      <Activity className="w-3.5 h-3.5 text-red-500" />
                      Breaking
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold uppercase">
                        ⚽ Sport
                      </span>
                      <span className="text-xs text-slate-300">{Math.round(featuredArticle.views / 1000)}K views</span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-black text-white mb-2 line-clamp-2 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm text-slate-300 line-clamp-2 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 flex flex-col justify-center border-l border-slate-200 dark:border-slate-800">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Eye className="w-4 h-4" />
                        <span>{featuredArticle.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span>2 jam lalu</span>
                      </div>
                    </div>
                    <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-500 text-white text-xs font-bold uppercase group-hover:bg-red-600 transition-colors">
                        Baca Selengkapnya
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Live / Trending Strip - Horizontal Scroll */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500">
                <Activity className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">Live Matches</h3>
                <p className="text-xs text-slate-500 dark:text-slate-500">Real-time scores & updates</p>
              </div>
            </div>
            <Link href="/category/sport" className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
              View All
              <ArrowLeft className="w-3 h-3 rotate-180" />
            </Link>
          </div>

          {/* Match Cards - Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {liveMatches.map((match) => (
              <Link
                key={match.id}
                href="#"
                className="flex-shrink-0 w-64 bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-4">
                  {/* League & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-500">{match.league}</span>
                    {match.status === "LIVE" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-[10px] font-black uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        {match.minute}
                      </span>
                    ) : match.status === "HT" ? (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase">
                        HT
                      </span>
                    ) : match.status === "FINAL" ? (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase">
                        FT
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase">
                        {match.minute}
                      </span>
                    )}
                  </div>

                  {/* Teams & Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{match.homeTeam}</span>
                      <span className={`text-lg font-black ${match.status === "LIVE" ? "text-red-600 dark:text-red-400" : "text-slate-900 dark:text-slate-100"}`}>
                        {match.homeScore}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{match.awayTeam}</span>
                      <span className={`text-lg font-black ${match.status === "LIVE" ? "text-red-600 dark:text-red-400" : "text-slate-900 dark:text-slate-100"}`}>
                        {match.awayScore}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid - Masonry Layout */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-8">
            {/* Trending Section */}
            {secondaryArticles.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="text-base font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                      Trending Now
                    </h3>
                  </div>
                </div>

                {/* Mixed Layout - Large + Small Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Large Feature Card */}
                  {secondaryArticles[0] && (
                    <Link href={`/news/${secondaryArticles[0].slug}`} className="group sm:row-span-2">
                      <article className="relative h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-600 hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 sm:h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                          <Image
                            src={secondaryArticles[0].image}
                            alt={secondaryArticles[0].title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-3 left-3 z-20">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold uppercase">
                              ⚽ Sport
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                            <h4 className="text-sm font-bold text-white line-clamp-3 mb-2">
                              {secondaryArticles[0].title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                              <span>{Math.round(secondaryArticles[0].views / 1000)}K views</span>
                              <span>•</span>
                              <span>2 jam lalu</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  )}

                  {/* Small Compact Cards */}
                  <div className="space-y-4">
                    {secondaryArticles.slice(1, 3).map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="group block">
                        <article className="flex gap-3 bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-600 hover:shadow-md transition-all duration-300">
                          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 p-3 flex flex-col justify-between">
                            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-500">
                              <span>{Math.round(article.views / 1000)}K</span>
                              <span>•</span>
                              <span>3 jam lalu</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Latest Stories - List Layout */}
            {remainingArticles.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-black uppercase tracking-wide text-slate-900 dark:text-slate-100">
                    Latest Stories
                  </h3>
                </div>

                <div className="space-y-4">
                  {remainingArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <article className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300">
                        <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase mb-2">
                              ⚽ Sport
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 mb-1">
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

          {/* Sidebar - Desktop Only */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* League Table */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Liga 1 Standings
                </h4>
                <div className="space-y-2">
                  {[
                    { pos: 1, team: "Persib Bandung", played: 20, points: 45 },
                    { pos: 2, team: "Persija Jakarta", played: 20, points: 43 },
                    { pos: 3, team: "Bali United", played: 20, points: 38 },
                    { pos: 4, team: "PSM Makassar", played: 20, points: 35 },
                    { pos: 5, team: "Arema FC", played: 20, points: 32 },
                  ].map((team) => (
                    <div key={team.pos} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                          team.pos <= 3 ? "bg-emerald-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}>
                          {team.pos}
                        </span>
                        <span className="text-xs font-medium text-slate-900 dark:text-slate-100 truncate">{team.team}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{team.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Scorers */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-5 text-white">
                <h4 className="text-sm font-black uppercase tracking-wide mb-4">
                  Top Scorers
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Ciro Alves", goals: 18, team: "Persib" },
                    { name: "Marko Simic", goals: 16, team: "Persija" },
                    { name: "David da Silva", goals: 14, team: "Persib" },
                  ].map((player, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold">{player.name}</p>
                        <p className="text-[10px] text-red-100">{player.team}</p>
                      </div>
                      <span className="text-lg font-black">{player.goals}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Fixtures */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
                  Upcoming Fixtures
                </h4>
                <div className="space-y-3">
                  {[
                    { home: "Persija", away: "Bali United", date: "12 Feb", time: "19:00" },
                    { home: "Persib", away: "PSM", date: "13 Feb", time: "15:30" },
                    { home: "Arema", away: "Persis", date: "14 Feb", time: "16:00" },
                  ].map((match, index) => (
                    <div key={index} className="text-center py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {match.home} vs {match.away}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-500">
                        {match.date} • {match.time}
                      </p>
                    </div>
                  ))}
                </div>
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
