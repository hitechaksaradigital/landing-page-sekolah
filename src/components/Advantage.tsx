
export default function Advantage() {
  return (
    <section className="py-stack-lg px-margin-page max-w-container-max mx-auto">
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg">Keunggulan Hitech</h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="glass-panel p-8 rounded-2xl hitech-glow transition-all group border-l-4 border-l-secondary">
          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl">smart_display</span>
          </div>
          <h3 className="font-title-lg text-title-lg mb-4">Smart Classroom</h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Ruang kelas masa depan yang dilengkapi dengan papan interaktif dan tablet per siswa untuk pembelajaran kolaboratif yang dinamis.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl hitech-glow transition-all group border-l-4 border-l-primary">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl">auto_stories</span>
          </div>
          <h3 className="font-title-lg text-title-lg mb-4">Integrated LMS</h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Platform manajemen pembelajaran terpusat untuk mengakses perpustakaan digital, tugas, dan ujian secara paperless.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl hitech-glow transition-all group border-l-4 border-l-tertiary">
          <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
          </div>
          <h3 className="font-title-lg text-title-lg mb-4">Ekskul Teknologi</h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Wadahi minat siswa di bidang Robotics, Coding, hingga E-sports dengan fasilitas lab berstandar internasional.
          </p>
        </div>
      </div>
    </section>
  );
}
