
export default function VirtualCampus() {
  return (
    <section className="py-stack-lg px-margin-page max-w-container-max mx-auto">
      <div className="relative glass-panel rounded-[2rem] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 hidden lg:block"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="A wide-angle 360-degree panoramic view of a futuristic school atrium, featuring sleek white curved architecture, floating holographic information displays, and green indoor vertical gardens. The lighting is bright and airy with soft blue secondary tones, giving a sense of vast space and advanced technological integration in a campus environment."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGzDYJ-ujzCWjW5wkyOzjvnF3eVLT66VRpwd2Mmfqmbiv7ZPNsa2df09HpTWu86jM2XS27t67Cgpt_-8tWfSdFqBCsir7gZk-qnyW5_hez73FGg9Ypeecwqy5TLJbwK5_gGNxmfhYC5bXvC90gk4ffQCAQIAcfL5GUiCvXze9yYACInBgj9HiZsXarnCAOEhNgTozxjKHLY5DDiuj79phhexfa5SPfWe_Ls3Ldm4ggDCPCvsIRISLQawYsYbtUC7d3HBpc8zlchuY"
        />
        <div className="relative z-20 p-stack-lg lg:w-1/2 space-y-6">
          <h2 className="font-headline-lg text-headline-lg">Virtual Campus Tour 360°</h2>
          <p className="text-on-surface-variant font-body-lg">Jelajahi setiap sudut fasilitas kami dari kenyamanan rumah Anda. Rasakan pengalaman belajar di lingkungan tercanggih.</p>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-[0_0_20px_rgba(76,215,246,0.5)] transition-all">
            <span className="material-symbols-outlined">explore</span>
            Explore Now
          </button>
        </div>
        <div className="absolute right-12 bottom-12 z-20 hidden lg:block">
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
              <span className="material-symbols-outlined text-secondary">360</span>
            </div>
            <p className="font-label-md text-white">Full Immersive Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
