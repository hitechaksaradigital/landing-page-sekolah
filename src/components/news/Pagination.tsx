
export default function Pagination() {
  return (
    <section className="px-margin-page max-w-container-max mx-auto mt-stack-md flex justify-center">
      <div className="flex items-center gap-2 font-label-md text-label-md">
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/40 transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 border border-secondary/30 text-secondary neon-glow-primary">
          [ 01 ]
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/40 transition-all">
          02
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/40 transition-all">
          03
        </button>
        <span className="text-on-surface-variant/40 mx-2">...</span>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/40 transition-all">
          10
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/40 transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
