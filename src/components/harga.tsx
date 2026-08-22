export default function Harga() {
  const packages = [
    {
      name: 'Paket Starter',
      sub: 'Landing Page / Digital Menu',
      price: 'Rp. 1,5JT',
      features: [
        'Halaman: 1 Halaman',
        'Domain & Hosting: Gratis 1 Tahun (.com)',
        'Optimasi: SEO & Speed',
        'Revisi: 2x Revisi Minor',
      ],
      link: 'https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Starter',
    },
    {
      name: 'Paket Bisnis',
      sub: 'Company Profile',
      price: 'Rp. 3JT',
      features: [
        'Halaman : 3-5 Halaman',
        'Domain & Hosting: Gratis 1 Tahun (.com)',
        'Optimasi : SEO On-Page + Google Analytics',
        'Revisi: 3x Revisi',
      ],
      link: 'https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Bisnis',
    },
    {
      name: 'Paket Custom',
      sub: 'Toko Online / F&B Pos Online / Fitur Khusus',
      price: 'Custom Price',
      features: [
        'Halaman : Tak Terbatas',
        'Domain & Hosting: Server Khusus',
        'Optimasi : Full SEO, Custom API, Payment',
        'Revisi : Bebas Revisi Masa Garansi',
      ],
      link: 'https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Custom',
    },
  ];

  return (
    <section id="harga" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Harga</h2>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:border-limesoft transition-all flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-blacksoft mb-1">{pkg.name}</h3>
              <p className="text-sm font-semibold text-slate-700 mb-4">{pkg.sub}</p>
              <div className="text-3xl font-extrabold text-blacksoft mb-6">{pkg.price}</div>
              <ul className="space-y-3 text-sm text-slate-800 mb-8 border-t border-gray-200 pt-6">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-limesoft inline-block flex-shrink-0"></span>
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pilih ${pkg.name} via WhatsApp`}
              className="block w-full text-center py-3.5 px-6 rounded-2xl bg-limesoft hover:bg-lime-400 text-white font-extrabold transition shadow-sm focus:ring-2 focus:ring-blacksoft"
            >
              Pilih Paket
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
