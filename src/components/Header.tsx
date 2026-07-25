
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(76,215,246,0.1)]">
      <div className="flex justify-between items-center px-margin-page py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">SMPN 1 HITECH</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-secondary border-l-2 border-secondary pl-2 font-bold font-label-md text-label-md" href="#">Profil</a>
          <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-secondary hover:scale-105 transition-all duration-300" href="#">Akademik</a>
          <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-secondary hover:scale-105 transition-all duration-300" href="#">Kesiswaan</a>
          <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-secondary hover:scale-105 transition-all duration-300" href="#">Portal Hub</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-outline text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-label-md font-label-md w-32 placeholder:text-outline" placeholder="Cari..." type="text" />
          </div>
          <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-amber-500/20">PPDB</button>
        </div>
      </div>
    </header>
  );
}
