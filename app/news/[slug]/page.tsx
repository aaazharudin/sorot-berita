import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eye, Clock, ArrowLeft, Bookmark } from "lucide-react";
import { getArticleBySlug, getLatestArticles, formatViews, formatDate, timeAgo } from "@/lib/data";

interface NewsPageProps {
  params: {
    slug: string;
  };
}

export default function NewsPage({ params }: NewsPageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const latestArticles = getLatestArticles(4);

  const categoryStyles = {
    sport: {
      text: "text-emerald-700 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
      label: "Sport",
    },
    tech: {
      text: "text-blue-700 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      label: "Technology",
    },
    viral: {
      text: "text-orange-700 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-950/30",
      border: "border-orange-200 dark:border-orange-800",
      label: "Viral",
    },
  };

  const style = categoryStyles[article.category];

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
              <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Home
              </Link>
              <Link href="/category/sport" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Sport
              </Link>
              <Link href="/category/tech" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Tech
              </Link>
              <Link href="/category/viral" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                Viral
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        {/* Top Accent Bar */}
        <div className={`h-1 w-20 rounded-full mb-8 ${style.bg.replace('/30', '').replace('bg-', 'bg-').split('-')[0]}-500`}></div>

        {/* Category Badge */}
        <Link
          href={`/category/${article.category}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide mb-6 ${style.bg} ${style.text} hover:opacity-80 transition-opacity`}
        >
          {style.label}
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight tracking-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
            <Eye className="w-4 h-4" />
            <span className="font-medium">{formatViews(article.views)} views</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
            <Clock className="w-4 h-4" />
            <span>{timeAgo(article.createdAt)}</span>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
            {formatDate(article.createdAt)}
          </span>
          <button className="ml-auto p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bookmark className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800 shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Excerpt */}
        <div className={`p-6 rounded-xl border-l-4 ${style.border} ${style.bg} mb-8`}>
          <p className="text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">Akhir Artikel</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
        </div>

        {/* Share Section */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-4">
            Bagikan artikel ini
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:shadow-md text-sm">
              Facebook
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:shadow-md text-sm">
              Twitter
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:shadow-md text-sm">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-6">
            Artikel Terkait
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {latestArticles
              .filter((a) => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="group block"
                >
                  <article className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          {timeAgo(related.createdAt)}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-sm">S</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sorot</span>
                <p className="text-xs text-slate-500 dark:text-slate-500">Berita yang Lagi Jadi Perhatian</p>
              </div>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Portal berita modern dengan fokus pada topik yang sedang viral dan relevan
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-500 mb-6">
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Tentang</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Kontak</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Privasi</Link>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              © 2024 Sorot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = [
    { slug: "timnas-indonesia-lolos-piala-asia-2024" },
    { slug: "apple-rilis-iphone-16-pro-ai-canggih" },
    { slug: "video-awan-tsunami-jepang-viral" },
    { slug: "persija-jakarta-juara-liga-1-2023-2024" },
    { slug: "google-gemelin-melampaui-gpt-4" },
    { slug: "artis-inisial-r-ditangkap-narkoba" },
    { slug: "anthony-ginting-juara-indonesia-open-2024" },
    { slug: "x-spaces-kembali-online-indonesia" },
  ];

  return articles;
}
