
export default function Sambutan() {
  return (
    <section className="py-stack-lg px-margin-page max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary rounded-tl-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-3xl"></div>
          <div className="aspect-[4/5] glass-panel rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Professional portrait of a middle-aged Indonesian school principal, wearing a formal batik uniform, smiling warmly in a modern high-tech office environment. The background shows blurred digital screens and a sleek professional setting with cool blue and white ambient lighting, reflecting an innovative educational atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIdzUsN0IjCVtV_VUlF_JB_1qWCXm_Z-HzNypwUzSfmrTViweYvnQRxUKwEiROihgF8XhYewSmR2kfMxij00C5X1EFFeo5QjPZL55wlpbC03uQm18HpGZPQbJJTomC3lE-qG17oLXmiJ_JvmWs1RIeZyiLcF-P6oQMSbZ-78yEdp464j95L8fGVBx93VQmNNPI3qQpzLm9_ZCv1waVrEIcOnS8kdD2f9s7P4zSE_xrB8_ET8MnhyHLy2nQN6nWp3fwFeZgTBGzweU"
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-label-sm rounded">PESAN DARI PIMPINAN</div>
          <h2 className="font-headline-lg text-headline-lg">Mempersiapkan Pemimpin Masa Depan di Era Digital</h2>
          <div className="space-y-4 text-on-surface-variant text-body-lg italic">
            <p>"Selamat datang di SMPN 1 Hitech. Di sini, kami tidak hanya memberikan ilmu pengetahuan, tetapi juga menanamkan karakter dan penguasaan teknologi sebagai bekal utama di masa depan. Kami percaya setiap anak memiliki potensi jenius yang bisa diasah melalui ekosistem pendidikan digital yang tepat."</p>
          </div>
          <div className="pt-4">
            <p className="font-bold text-on-surface text-xl">Drs. H. Ahmad Inovasi, M.Pd</p>
            <p className="text-secondary font-label-md">Kepala Sekolah SMPN 1 Hitech</p>
          </div>
        </div>
      </div>
    </section>
  );
}
