import type { NewsItem } from '../../types/news'

interface NewsGridProps {
  news: NewsItem[];
  loading: boolean;
}

export default function NewsGrid({ news, loading }: NewsGridProps) {
  if (loading) {
    return (
      <section className="px-margin-page max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-surface-container-low rounded-xl border border-white/5 overflow-hidden">
            <div className="h-56 bg-white/5 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-white/5 rounded w-1/4 animate-pulse" />
              <div className="h-6 bg-white/5 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        ))}
      </section>
    );
  }

  if (!news.length) {
    return (
      <div className="px-margin-page max-w-container-max mx-auto text-center py-20 text-on-surface-variant">
        Tidak ada berita untuk kategori ini.
      </div>
    );
  }

  return (
    <section className="px-margin-page max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {news.map((item, idx) => (
        <article key={item.id || idx} className="group bg-surface-container-low rounded-xl border border-white/5 overflow-hidden flex flex-col hover:border-secondary/40 transition-all duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={item.alt}
              src={item.image}
            />
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-secondary font-label-sm text-[10px] uppercase border border-secondary/20">
              {item.category}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <time className="text-on-surface-variant font-label-sm text-[12px] mb-3">{item.date}</time>
            <h3 className="font-title-lg text-title-lg text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
              {item.title}
            </h3>
            <p className="text-on-surface-variant text-body-md line-clamp-2 mb-6">{item.excerpt}</p>
            <div className="mt-auto flex items-center justify-between">
              <a className="flex items-center gap-2 text-secondary font-label-md text-label-md group-hover:gap-3 transition-all" href="#">
                Read More
                <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
              <span className="material-symbols-outlined text-on-surface-variant/30">share</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
