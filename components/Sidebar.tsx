import { ArrowRight } from "lucide-react";

export default function Sidebar() {
  const popularToday = [
    { rank: 1, title: "Supreme Court Rules on Major Environmental Case", views: "125K" },
    { rank: 2, title: "Tech Giants Face New Antitrust Regulations", views: "98K" },
    { rank: 3, title: "Breaking: Major Peace Agreement Reached in Middle East", views: "87K" },
    { rank: 4, title: "Scientists Discover High-Speed Solar Winds", views: "76K" },
    { rank: 5, title: "New Study Links Sleep Patterns to Cognitive Decline", views: "65K" },
  ];

  const topics = [
    "Politics", "Business", "Technology", "Science",
    "Health", "World", "Climate", "Economy"
  ];

  return (
    <aside className="space-y-8">
      {/* Popular Today */}
      <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-950 dark:text-white mb-6">
          Popular Today
        </h3>

        <ol className="space-y-5">
          {popularToday.map((item) => (
            <li
              key={item.rank}
              className="group flex gap-4 cursor-pointer"
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm font-bold text-primary-400 dark:text-primary-600">
                {item.rank}
              </span>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-primary-950 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2 mb-1">
                  {item.title}
                </h4>
                <span className="text-xs text-primary-500 dark:text-primary-500">
                  {item.views} reads
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Topics */}
      <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-950 dark:text-white mb-6">
          Topics
        </h3>

        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 text-sm font-medium border border-primary-300 dark:border-primary-700 rounded-lg text-primary-700 dark:text-primary-300 hover:border-primary-400 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900 transition-all"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="p-6 border border-primary-200 dark:border-primary-800 rounded-xl">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-950 dark:text-white mb-2">
          Newsletter
        </h3>

        <p className="text-body-sm text-primary-600 dark:text-primary-400 mb-4">
          Get the most important stories delivered to your inbox daily.
        </p>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 text-sm border border-primary-300 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-900 text-primary-950 dark:text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
          />

          <button className="w-full px-4 py-3 text-sm font-semibold text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors flex items-center justify-center gap-2">
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-primary-500 dark:text-primary-500 mt-4">
          Join 50,000+ subscribers
        </p>
      </div>
    </aside>
  );
}
