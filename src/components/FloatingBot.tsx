
export default function FloatingBot() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <button className="bg-secondary p-4 rounded-full shadow-2xl flex items-center gap-3 group-hover:pr-6 transition-all duration-300 relative">
        <span className="material-symbols-outlined text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        <span className="text-on-secondary font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">Hitech-Bot</span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-error rounded-full border-2 border-background"></div>
      </button>
    </div>
  );
}
