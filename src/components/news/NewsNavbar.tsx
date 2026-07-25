
export default function NewsNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(76,215,246,0.1)]">
      <div className="flex justify-between items-center px-margin-page py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-title-lg text-title-lg font-bold text-secondary tracking-tighter">SMPN 1 Hitech</span>
          <div className="hidden md:flex bg-surface-container-low px-4 py-2 rounded-lg border border-white/5 items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-label-md font-label-md text-on-surface placeholder:text-on-surface-variant/40 w-48"
              placeholder="Cari..."
              type="text"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-stack-sm">
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transition-transform duration-200" href="/">
            Profil
          </a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transition-transform duration-200" href="/">
            Akademik
          </a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transition-transform duration-200" href="/">
            Kesiswaan
          </a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transition-transform duration-200" href="/">
            Portal Hub
          </a>
          <button className="ml-4 px-6 py-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-label-md text-label-md rounded-lg neon-glow-amber active:scale-95 transition-all duration-100">
            PPDB Portal
          </button>
        </div>
        <button className="md:hidden text-secondary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
