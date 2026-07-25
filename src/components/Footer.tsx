
export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-stack-md mt-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-page max-w-container-max mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-title-lg text-title-lg text-primary">SMPN 1 HITECH</span>
          </div>
          <p className="text-on-surface-variant text-sm max-w-xs">Jl. Inovasi Digital No. 101, Kota Hitech. Menuju pusat unggulan pendidikan nasional berbasis teknologi.</p>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h4 className="font-bold text-on-surface">Navigasi</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Kurikulum</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Fasilitas</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">PPDB Online</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-on-surface">Legal</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bantuan</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Kontak</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Socials</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface">Update Mingguan</h4>
          <p className="text-on-surface-variant text-sm">Dapatkan info terbaru kegiatan sekolah langsung di email Anda.</p>
          <div className="flex gap-2">
            <input className="bg-surface-container px-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary w-full text-sm" placeholder="Email Anda" type="email" />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">OK</button>
          </div>
          <p className="text-label-sm text-label-sm text-on-surface-variant opacity-60">© 2024 SMPN 1 HITECH. Engineering Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
