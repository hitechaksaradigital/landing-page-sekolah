
export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-overlay -z-10"></div>

      <div className="px-margin-page max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
        <div className="space-y-stack-sm">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 px-4 py-1 rounded-full font-label-md text-label-sm">
            <span className="material-symbols-outlined text-sm">verified</span>
            AKREDITASI A+ (UNGGUL)
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
            Mewujudkan Generasi <span className="text-secondary">Cerdas</span>, Berkarakter, dan Berbasis <span className="text-primary">Teknologi</span>
          </h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
            SMP Negeri 1 Hitech: Pelopor Pendidikan Berbasis Inovasi dan Teknologi Digital yang mempersiapkan siswa menghadapi masa depan industri 4.0.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all">
              Pendaftaran PPDB
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="glass-panel text-on-surface px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">visibility</span>
              Jelajahi Tur Virtual
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-panel rounded-2xl overflow-hidden aspect-video border border-white/10 scan-animation">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
              <div className="w-16 h-16 bg-secondary/80 rounded-full flex items-center justify-center text-on-surface shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              alt="A modern cinematic view of a high-tech middle school campus in the evening, featuring sleek glass buildings, glowing neon blue accent lighting, and a digital grid projection in the sky. The atmosphere is professional and futuristic, with clean lines and a dark navy blue color palette consistent with a high-end technology institution."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0Xr_AbKaVMtfMLWv-wFkjFprXrcEtoqMz1buSurs4u8G2V2cc8xfNsgPk0jIEHpTeV9zAN1U0IwZ8kwvpACb2dldnjEFYo9Uc0bwwAP6x2NBS65MYh32FQKO6S2z8Tg-btHfoNtAMWpnAQdYzoeYIrKCcyAd2Q-VXf1UdffKtbpzAsu1a6um_oZC7NiahMgRE-RJp7eloZWg5wVSabDhC4LByVsKQ00_LVjENVoFYnxID0_YHUNlFs3B2f6U4yiLOxcVvjTkk1Bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
