const trendingTags = [
  { tag: "Elections", count: "125K" },
  { tag: "Climate", count: "89K" },
  { tag: "Technology", count: "67K" },
  { tag: "Economy", count: "54K" },
  { tag: "Healthcare", count: "48K" },
  { tag: "Markets", count: "42K" },
  { tag: "AI", count: "38K" },
  { tag: "Space", count: "31K" },
  { tag: "Culture", count: "27K" },
  { tag: "Sports", count: "24K" },
];

export default function TrendingTags() {
  return (
    <div className="border-b border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {trendingTags.map((trending, index) => (
            <a
              key={index}
              href={`#${trending.tag.toLowerCase()}`}
              className="flex-shrink-0 px-4 py-2 bg-white dark:bg-primary-900 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
            >
              {trending.tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
