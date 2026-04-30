import { Clock } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Featured News - 70% */}
          <div className="lg:col-span-3 group cursor-pointer">
            <div className="relative h-[400px] lg:h-[520px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop"
                alt="Featured News"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm text-white rounded">
                  Politics
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  Global Leaders Gather for Historic Climate Summit as New Policies Are Debated
                </h1>

                <p className="text-gray-200 text-base lg:text-lg mb-4 line-clamp-2 max-w-3xl font-light">
                  World leaders convene to discuss urgent climate action measures that could reshape global environmental policy for decades to come.
                </p>

                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Michael Chen</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Cards - 30% */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-[248px] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="Tech News"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold uppercase bg-accent-600/90 text-white rounded">
                    Technology
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                    Apple Unveils Revolutionary AI Features Coming to iPhone This Fall
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 text-xs">
                    <span>Sarah Johnson</span>
                    <span>•</span>
                    <span>4h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-[248px] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
                  alt="Business News"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold uppercase bg-emerald-600/90 text-white rounded">
                    Business
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                    Markets Rally as Fed Signals Potential Rate Cuts in Coming Months
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 text-xs">
                    <span>David Park</span>
                    <span>•</span>
                    <span>6h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
