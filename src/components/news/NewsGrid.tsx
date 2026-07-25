
interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    category: 'Inovasi',
    date: '15 OKT 2024',
    title: 'Implementasi Kurikulum Metaverse di Laboratorium Digital',
    excerpt: 'SMPN 1 Hitech resmi meluncurkan modul pembelajaran berbasis Virtual Reality untuk mata pelajaran Fisika dan Sejarah.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2lA6fwKOsPHFuBwFroVfFGzQdape3GQGQtOhzh7PFBZPm-B5507Me6XST7Y3ipJPFnMoF1AWEBOh2oLiKqXLi_jHSXQE1vjrX6D5Ngj8arZW3Bvyz3Lz9fxGJH4VPfp4Ixr7cKPQM6oW2K_eMQGrDwAgvORUjUPAKOHf7HeNZZY7WYLJamlrnsvUWgWYoJ5BwWP0ceZhLkwpJX9i3FywFG_Xiz3bqB88BYxjxvoHt5JOxnw05adROYc4b-Uqt9wzGkANSs9dTOM',
    alt: 'A clean, high-tech classroom at SMPN 1 Hitech featuring advanced digital whiteboards and students using sleek laptops.',
  },
  {
    category: 'Kegiatan',
    date: '12 OKT 2024',
    title: 'Hitech Olympic 2024: Integrasi Esports dan Atletik',
    excerpt: 'Pekan olahraga tahunan sekolah kali ini menghadirkan kompetisi teknologi pendukung performa atlet siswa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYw5syuXVptANTXt-BG67t0TBo5dt_Ic8nlqS8dmEgsn3A68tjA2twJPHwYL2JT6YDMIYuzkS1TpaqzS1wFQViWbp0pQ3poKQJT5VhgUPPiaV5thcIZMkzCepxw2jATJ820q0Bf-RpU8Ypmq2Qt-InbhCSn-hLK_ItCBgpF0vgf8LRanfphmAdGV1ZiDQ1VDdtySRsCbLgnCC1mnkIIofYYI2AniaskeA_GgEPYERZoe1UnlYHb4m8PTMDEqou89SXD4VZCV4DbTA',
    alt: 'A wide shot of a prestigious award ceremony in a modern school auditorium.',
  },
  {
    category: 'Pengumuman',
    date: '10 OKT 2024',
    title: 'Jadwal Seleksi PPDB Jalur Prestasi Teknologi',
    excerpt: 'Penerimaan siswa baru jalur khusus talenta digital akan segera dibuka melalui portal resmi sekolah.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLaGnCipTMetlUpTYiwQf9vq4Mwjeq_6AruWVUms7tKv_nClYhv6qqvGcjG1O7bnzDFQli8A25YqQoX2JisdgO6NG2Ksb7G7ki5rnuonDYXmIwJfR8QNiKFdJezYwbMd9bklB3WqGRadtrJBjU6F9O9eupGRtp0osNFwSfrV_I_0CdnCLyaKOqP6NE531UWPLoRVRvrnVTKbUOL_81juBv_Vd-S0spn1zA5lFKyX2512U_Ec5aYwdY3YDYV6i6b7TX9OtzKsPmpyQ',
    alt: 'A professional close-up of a student speaking at a digital podium during a school announcement.',
  },
  {
    category: 'Inovasi',
    date: '08 OKT 2024',
    title: 'Smart Garden: Proyek Ekologi Berbasis IoT Siswa Kelas 9',
    excerpt: 'Siswa berhasil mengintegrasikan sensor kelembaban tanah dengan sistem penyiraman otomatis tenaga surya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNNB598Ue7CmOcdr9AR1SEMVBuHSyjDgsE2dy6lu7tBqNcNYhQ55NWuEfsxQiTyWULEBbUbuDbR5e3TXCqrJEz3yos184WdpqxolqYU998eY3r8W5S4HLdJLl8fVQMWV5CQzGigDyxTxBNxwnfnIRRQwtQe5ksGZNeO-jsYH-rJ6j87udVDYZuz-1y9dFfL96U0g-EAAZXnM-7jnx52x3zF-M0xJRxjY-8hLEBNU8V1Ix_K_OLVelBqfbCCvOM5GBgFmkzw36cfFk',
    alt: 'An artistic shot of a green school garden integrated with hydroponic systems and smart sensors.',
  },
  {
    category: 'Prestasi',
    date: '05 OKT 2024',
    title: 'Medali Emas Olimpiade Sains Nasional Bidang Informatika',
    excerpt: 'Dua siswa SMPN 1 Hitech meraih prestasi tertinggi dalam kompetisi pemrograman tingkat nasional.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWb0enYapKKrO_lYePs_v8-EipbSXyTm7W7sPlJE5SnzWdO8q1tBsJMKS1zPSY72HMKUYRsBADfRjsWWp3ZFGT1CQZ8bkpU5MZVzOkBcMjsCCEwvikxYtiDDW0B88ujEby2PgPYgUOG47Pj0UfC5FVMYAyD9TApwQmH2xAdcovRQd3Yr_ox1_cOHhWBJDMvhE0umYJJz-Ge8PueAxXeGwwWmegLvnxJpiaXU-g83MwYPPacgWubT-g4Z042Mx4n68mLPsBGHx4gXY',
    alt: 'A wide shot of a prestigious award ceremony in a modern school auditorium.',
  },
  {
    category: 'Kegiatan',
    date: '02 OKT 2024',
    title: 'Workshop Literasi Digital: Etika Berinternet untuk Gen-Alpha',
    excerpt: 'Program pembekalan bagi siswa untuk menjadi warga digital yang bijak dan bertanggung jawab.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhJKSW8Mkm-akDeGm5mUeglsgYg7depwRb77Y9Jyi8FPymAWoeCFhuVHHVDD1K2D_kBAkvYRgNoHXg676dzLz3sKn41038_L_uv6C5pz1fwnv3Sne8fPElpGtOVs5ud_Buz6aRiP2sp6KtymSyvu93Qr2EoCw54Oy_c0k6-CtAxogvbDQSzOyLWduYrDeUEGoAQK7M6mXaLNGhODqPAuamg7myxcfZlK8TMx-S0citP_cXZvceJhN_d3jgwONpcFEs3z-gGEmR2kU',
    alt: 'A classroom where students are engaged in a collaborative workshop, working with tablet devices and physical prototype models.',
  },
];

export default function NewsGrid() {
  return (
    <section className="px-margin-page max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {newsItems.map((item, idx) => (
        <article key={idx} className="group bg-surface-container-low rounded-xl border border-white/5 overflow-hidden flex flex-col hover:border-secondary/40 transition-all duration-300">
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
