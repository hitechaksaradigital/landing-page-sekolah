
export default function PortalHub() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest">
      <div className="px-margin-page max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-stack-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg">Portal Hub</h2>
            <p className="text-on-surface-variant">Akses cepat ke ekosistem digital kami</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <a className="glass-panel p-8 rounded-2xl hover:bg-primary-container/20 transition-all group flex flex-col items-center text-center" href="#">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-5xl text-primary">person_4</span>
            </div>
            <h4 className="font-title-lg text-title-lg mb-2">Portal Guru</h4>
            <p className="text-on-surface-variant text-sm">Manajemen kurikulum, nilai, dan administrasi mengajar digital.</p>
          </a>
          <a className="glass-panel p-8 rounded-2xl hover:bg-secondary-container/20 transition-all group flex flex-col items-center text-center border-2 border-secondary/30" href="#">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-5xl text-secondary">school</span>
            </div>
            <h4 className="font-title-lg text-title-lg mb-2">Portal Siswa</h4>
            <p className="text-on-surface-variant text-sm">Akses materi, pengumpulan tugas, dan laporan capaian akademik.</p>
          </a>
          <a className="glass-panel p-8 rounded-2xl hover:bg-tertiary-container/20 transition-all group flex flex-col items-center text-center" href="#">
            <div className="w-20 h-20 bg-tertiary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-5xl text-tertiary">family_restroom</span>
            </div>
            <h4 className="font-title-lg text-title-lg mb-2">Portal Orang Tua</h4>
            <p className="text-on-surface-variant text-sm">Monitoring kehadiran, perkembangan nilai, dan komunikasi sekolah.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
