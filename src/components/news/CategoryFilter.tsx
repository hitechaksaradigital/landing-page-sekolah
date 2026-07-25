
import { useState } from 'react'

type Category = 'Semua' | 'Prestasi' | 'Inovasi' | 'Kegiatan' | 'Pengumuman';

export default function CategoryFilter() {
  const [active, setActive] = useState<Category>('Semua');
  const categories: Category[] = ['Semua', 'Prestasi', 'Inovasi', 'Kegiatan', 'Pengumuman'];

  return (
    <section className="px-margin-page max-w-container-max mx-auto mb-stack-md">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-lg font-label-md text-label-md transition-all whitespace-nowrap ${
                active === cat
                  ? 'bg-secondary text-on-secondary-container neon-glow-primary'
                  : 'text-on-surface-variant hover:text-secondary hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4 text-on-surface-variant font-label-sm uppercase tracking-widest text-[10px]">
          <span>Urutkan: Terbaru</span>
          <span className="material-symbols-outlined text-[16px]">filter_list</span>
        </div>
      </div>
    </section>
  );
}
