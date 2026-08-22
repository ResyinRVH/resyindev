export default function Layanan() {
  const services = [
    {
      title: 'Landing Page',
      desc: 'Perancangan halaman web khusus agar calon pelanggan fokus pada informasi produk Anda.',
      isGreen: false,
    },
    {
      title: 'Company Profile',
      desc: 'Website profesional untuk memamerkan kredibilitas, keunggulan, layanan, dan profil perusahaan.',
      isGreen: true,
    },
    {
      title: 'Digital Menu',
      desc: 'Tampilan menu digital yang menarik bagi pelanggan kafe & restoran.',
      isGreen: false,
    },
    {
      title: 'Toko Online',
      desc: 'Kembangkan bisnis online Anda sendiri tanpa ketergantungan pada marketplace.',
      isGreen: true,
    },
    {
      title: 'F&B POS Online',
      desc: 'Sistem kasir dan manajemen pesanan berbasis web untuk usaha makanan & minuman.',
      isGreen: false,
    },
    {
      title: 'Web Custom',
      desc: 'Solusi pembuatan website khusus sesuai kebutuhan fitur bisnis Anda.',
      isGreen: true,
    },
  ];

  return (
    <section id="layanan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Layanan</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 transition-all hover:shadow-xl flex flex-col justify-between ${
              item.isGreen
                ? 'bg-radial-[at_0%_200%] from-yellowsoft to-limesoft text-blacksoft'
                : 'bg-white text-blacksoft border border-gray-200 shadow-sm'
            }`}
          >
            <div>
              <h3 className="text-2xl font-extrabold mb-4 text-blacksoft">{item.title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-slate-800">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
