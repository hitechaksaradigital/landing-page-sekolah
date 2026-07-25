
import { Link } from 'react-router-dom'

export default function BeritaKegiatan() {
  return (
    <section className="py-stack-lg px-margin-page max-w-container-max mx-auto">
      <div className="flex items-center justify-between mb-stack-md">
        <h2 className="font-headline-lg text-headline-lg">Kabar Hitech</h2>
        <Link className="text-secondary font-label-md flex items-center gap-2 hover:underline" to="/berita">
          Lihat Semua <span className="material-symbols-outlined text-sm">open_in_new</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <article className="glass-panel rounded-2xl overflow-hidden group">
          <div className="aspect-video overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="A group of middle school students in a brightly lit robotics lab, working together on a complex humanoid robot. They are focused and collaborating, with modern workstations and technical equipment in the background. The scene is lit with cool daylight and accent blue LEDs, emphasizing a professional and innovative educational atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiLpIRko4TaLE6SmsoJmsnVS7lJXwmb7bVmENm3kPGu-EuEj7o9R6DAcAGT4qAZ9_BBEF1vo-s-S2aDV_IsA-Y-jKHRtRrghS3Q-SezqiMMRQMhoq4uEfKc4yy59UQpXyrXzNhJahBr6Tu-HV9pAY3DgmVJw6NdpYv8VChlFhARU0_8WDa-fruOSXmTvRZVIopOEp2yWr-XDbM8BwKYqN0Kpb7h6dMjFEE1H3zixk3m9B53pXZwhRQvySJcvpdWVUbUdAFCehXKQs"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="text-secondary font-label-sm">PRESTASI - 12 OKT 2024</span>
            <h3 className="font-title-lg text-title-lg group-hover:text-secondary transition-colors">Juara 1 Nasional Kontes Robotika Remaja</h3>
            <p className="text-on-surface-variant line-clamp-2">Tim Robotics SMPN 1 Hitech berhasil menyabet gelar juara pertama di ajang KRI 2024...</p>
          </div>
        </article>
        <article className="glass-panel rounded-2xl overflow-hidden group">
          <div className="aspect-video overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="A futuristic classroom where students are using virtual reality headsets for a biology lesson, looking at a floating holographic 3D model of a DNA strand. The room is dark with glowing blue and cyan interactive elements, creating a highly immersive and cutting-edge educational environment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1GXOVbdnpqY9_jP_eAUDRo_KChl8kn2NOjOcnt93CyS0-8Yq1qTPGg-vkhFFsOHcZqh6QQ4bYYpQ4YaS1Mt0rck15ecTn2z3zROCa8-ZELL8xyxEblYsm-YL-TY57VIqxM3lY4LIqFuA1TnqCHxXGDavLG2rwgd5_DoeEnLc6oocN3lrWr9mn67C2SvGd0ut2KqAnACbW-Dl3hHx9ro0iKv_aFzsdr4RY5lTTWTkFhRk_gw6Sk-wU-UNoj76Q86wv6caAhdGIdvw"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="text-primary font-label-sm">INOVASI - 05 OKT 2024</span>
            <h3 className="font-title-lg text-title-lg group-hover:text-primary transition-colors">Penerapan VR Learning dalam Kelas Sains</h3>
            <p className="text-on-surface-variant line-clamp-2">Mulai semester ini, materi biologi dan fisika akan didukung dengan perangkat Virtual Reality...</p>
          </div>
        </article>
        <article className="glass-panel rounded-2xl overflow-hidden group">
          <div className="aspect-video overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="An organized outdoor school event in a modern courtyard, featuring students in uniform participating in a digital literacy workshop. There are large LED screens showing educational content, and the setting is bright, sunny, and energetic, with a focus on community and modern learning."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN8ISxdpulmdhUKyLvMFukQQAI58nGR2hDo2p07-jcreUnQuIQZZ2Muku90gS-cRZw09ohfauAVIjNMTgDp9uS2rWUNgbSLzSuOhsOR_E8rZdL1xIB_Av5a5XukAp3oi3Bde7yYxTmkB475ua79LmgapvESxryEQ1vXMy52yLnkCTanM0nyaZ4H75Ldwnp4LeXxgkMJ2kcuhXYxKWnGXbK9ot_5J4XCXWc0j9VDeTDLHvwKmoDyUMd8CBIb4kcIYJFHLXZBI4NipU"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="text-tertiary font-label-sm">KEGIATAN - 28 SEP 2024</span>
            <h3 className="font-title-lg text-title-lg group-hover:text-tertiary transition-colors">Workshop Literasi Digital bagi Siswa Baru</h3>
            <p className="text-on-surface-variant line-clamp-2">Membekali siswa baru dengan etika berinternet dan dasar-dasar keamanan siber...</p>
          </div>
        </article>
      </div>
    </section>
  );
}
