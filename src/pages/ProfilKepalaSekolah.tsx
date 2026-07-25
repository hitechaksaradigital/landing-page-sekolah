import { useEffect } from 'react'

export default function ProfilKepalaSekolah() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 pb-stack-lg px-margin-page max-w-container-max mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary rounded-tl-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-3xl"></div>
          <div className="aspect-[4/5] glass-panel rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Professional portrait of a middle-aged Indonesian school principal, wearing a formal batik uniform, smiling warmly in a modern high-tech office environment. The background shows blurred digital screens and a sleek professional setting with cool blue and white ambient lighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIdzUsN0IjCVtV_VUlF_JB_1qWCXm_Z-HzNypwUzSfmrTViweYvnQRxUKwEiROihgF8XhYewSmR2kfMxij00C5X1EFFeo5QjPZL55wlpbC03uQm18HpGZPQbJJTomC3lE-qG17oLXmiJ_JvmWs1RIeZyiLcF-P6oQMSbZ-78yEdp464j95L8fGVBx93VQmNNPI3qQpzLm9_ZCv1waVrEIcOnS8kdD2f9s7P4zSE_xrB8_ET8MnhyHLy2nQN6nWp3fwFeZgTBGzweU"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-label-sm rounded">PROFIL KEPALA SEKOLAH</div>
          <h1 className="font-headline-lg text-headline-lg text-white">Drs. H. Ahmad Inovasi, M.Pd</h1>
          <p className="text-secondary font-label-md">Kepala Sekolah SMP Negeri 1 Hitech</p>

          <div className="space-y-4 text-on-surface-variant text-body-lg">
            <p>
              Memimpin SMPN 1 Hitech dengan visi menghadirkan pendidikan yang berkarakter, berteknologi, dan berdaya saing global. Berpengalaman lebih dari 20 tahun di dunia pendidikan dengan fokus pada transformasi digital pembelajaran.
            </p>
            <p>
              Berkomitmen menciptakan ekosistem sekolah yang inklusif, inovatif, dan berkelanjutan untuk menyiapkan generasi penerus yang siap menghadapi tantangan masa depan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="glass-panel p-4 rounded-xl">
              <div className="text-on-surface-variant text-sm mb-1">Pengalaman</div>
              <div className="font-bold text-white">+20 Tahun</div>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <div className="text-on-surface-variant text-sm mb-1">Landasan Pendidikan</div>
              <div className="font-bold text-white">Teknologi & Karakter</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a className="text-secondary hover:underline font-label-md" href="#">Visi & Misi</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="#">Pengalaman Organisasi</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="#">Publikasi</a>
          </div>
        </div>
      </section>

      <section className="mt-stack-lg">
        <h2 className="font-headline-lg text-headline-lg mb-4">Momen Kepemimpinan</h2>
        <div className="w-24 h-1 bg-secondary rounded-full mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover" alt="Principal speaking at a school event" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDex95Q-FWaeB8vApGW3tMewRfoBJVQESdIgPZxhkVdDGOQo-cukD8NEDkUu8Q7odLv8VruinRq11UW2_9aEvss7dBnTqbK1TqXWOYEo1KkPJcXkNMVz1xwhpsiPdWoBkIFoa7kqjkGKBTRIv1BMyyOPyKSbusbjPHHj3gcJEGEL0sv1iX6uZus3aACT0e2JsFx6PGV5uWnvh_hRORxm89zis4zSLR9yEpX37xNptzD1MSn6ZCCV48LsAJaj7DQHia01C8HyIA4g4o" />
            </div>
            <div className="p-6">
              <h3 className="font-title-lg text-title-lg text-white">Pembukaan Tahun Ajaran 2024/2025</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-2">Menegaskan komitmen sekolah terhadap peningkatan mutu pembelajaran berbasis teknologi.</p>
            </div>
          </div>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover" alt="Principal visiting classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2lA6fwKOsPHFuBwFroVfFGzQdape3GQGQtOhzh7PFBZPm-B5507Me6XST7Y3ipJPFnMoF1AWEBOh2oLiKqXLi_jHSXQE1vjrX6D5Ngj8arZW3Bvyz3Lz9fxGJH4VPfp4Ixr7cKPQM6oW2K_eMQGrDwAgvORUjUPAKOHf7HeNZZY7WYLJamlrnsvUWgWYoJ5BwWP0ceZhLkwpJX9i3FywFG_Xiz3bqB88BYxjxvoHt5JOxnw05adROYc4b-Uqt9wzGkANSs9dTOM" />
            </div>
            <div className="p-6">
              <h3 className="font-title-lg text-title-lg text-white">Kunjungan ke Laboratorium Digital</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-2">Mengevaluasi langsung implementasi kurikulum metaverse di kelas.</p>
            </div>
          </div>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover" alt="Principal receiving award" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWb0enYapKKrO_lYePs_v8-EipbSXyTm7W7sPlJE5SnzWdO8q1tBsJMKS1zPSY72HMKUYRsBADfRjsWWp3ZFGT1CQZ8bkpU5MZVzOkBcMjsCCEwvikxYtiDDW0B88ujEby2PgPYgUOG47Pj0UfC5FVMYAyD9TApwQmH2xAdcovRQd3Yr_ox1_cOHhWBJDMvhE0umYJJz-Ge8PueAxXeGwwWmegLvnxJpiaXU-g83MwYPPacgWubT-g4Z042Mx4n68mLPsBGHx4gXY" />
            </div>
            <div className="p-6">
              <h3 className="font-title-lg text-title-lg text-white">Penghargaan Sekolah Unggul</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-2">Menerima anugerah inovasi pendidikan digital tingkat nasional.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
