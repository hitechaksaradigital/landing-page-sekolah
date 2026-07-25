import type { NewsItem } from '../../types/news'

interface NewsHeroProps {
  news?: NewsItem | null;
}

export default function NewsHero({ news }: NewsHeroProps) {
  if (news) {
    return (
      <section className="px-margin-page max-w-container-max mx-auto mb-stack-lg">
        <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-white/10 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${news.image}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 md:left-12 md:bottom-12 max-w-3xl">
            <div className="glass-panel p-8 rounded-xl border-secondary/20 relative overflow-hidden">
              <div className="data-scan-line"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary/20 text-secondary text-label-sm font-label-sm px-3 py-1 rounded border border-secondary/30 uppercase tracking-widest">
                  Featured
                </span>
                <span className="text-on-surface-variant text-label-sm font-label-sm">{news.date}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-white mb-6">
                {news.title}
              </h1>
              <p className="text-on-surface-variant text-body-lg mb-8 line-clamp-2">
                {news.excerpt}
              </p>
              <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 neon-glow-primary">
                Baca Selengkapnya
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-margin-page max-w-container-max mx-auto mb-stack-lg">
      <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-white/10 group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDex95Q-FWaeB8vApGW3tMewRfoBJVQESdIgPZxhkVdDGOQo-cukD8NEDkUu8Q7odLv8VruinRq11UW2_9aEvss7dBnTqbK1TqXWOYEo1KkPJcXkNMVz1xwhpsiPdWoBkIFoa7kqjkGKBTRIv1BMyyOPyKSbusbjPHHj3gcJEGEL0sv1iX6uZus3aACT0e2JsFx6PGV5uWnvh_hRORxm89zis4zSLR9yEpX37xNptzD1MSn6ZCCV48LsAJaj7DQHia01C8HyIA4g4o')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute bottom-10 left-10 right-10 md:left-12 md:bottom-12 max-w-3xl">
          <div className="glass-panel p-8 rounded-xl border-secondary/20 relative overflow-hidden">
            <div className="data-scan-line"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-secondary/20 text-secondary text-label-sm font-label-sm px-3 py-1 rounded border border-secondary/30 uppercase tracking-widest">
                Featured
              </span>
              <span className="text-on-surface-variant text-label-sm font-label-sm">18 OKT 2024</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-white mb-6">
              SMPN 1 Hitech Menjuarai Kompetisi Robotik Internasional di Tokyo
            </h1>
            <p className="text-on-surface-variant text-body-lg mb-8 line-clamp-2">
              Tim robotik sekolah berhasil mengalahkan perwakilan dari 24 negara melalui inovasi robot penyelamat berbasis AI yang mereka kembangkan di Command Center sekolah.
            </p>
            <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 neon-glow-primary">
              Baca Selengkapnya
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
