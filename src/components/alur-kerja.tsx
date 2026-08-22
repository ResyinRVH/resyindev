export default function AlurKerja() {
  const stepsRow1 = [
    {
      title: '1. Briefing',
      desc: 'Konsultasi kebutuhan bisnis, referensi desain, dan target audiens Anda.',
    },
    {
      title: '2. Desain & Prototyping',
      desc: 'Pembuatan tata letak visual dan elemen desain digital untuk disetujui sebelum coding.',
    },
    {
      title: '3. Development & Integrasi',
      desc: 'Pemrograman website responsif, integrasi fitur, pengisian konten, dan optimasi performa.',
    },
  ];

  const stepsRow2 = [
    {
      title: '4. Review & Revisi',
      desc: 'Uji coba fitur di server staging server, untuk memastikan semua fitur berjalan sempurna sesuai keinginan.',
    },
    {
      title: '5. Peluncuran',
      desc: 'Website resmi dihubungkan ke domain utama dan diluncurkan beserta panduan pengelolaan.',
    },
  ];

  return (
    <section id="alur-kerja" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Alur Kerja</h2>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsRow1.map((step, index) => (
            <div
              key={index}
              className="bg-limesoft rounded-3xl p-8 text-blacksoft text-left shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-black mb-3 text-blacksoft">{step.title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-blacksoft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {stepsRow2.map((step, index) => (
            <div
              key={index}
              className="bg-limesoft rounded-3xl p-8 text-blacksoft text-left shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-black mb-3 text-blacksoft">{step.title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-blacksoft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
