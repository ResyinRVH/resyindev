"use client";

import { motion, type Variants } from "framer-motion";

export default function Harga() {
  const packages = [
    {
      name: "Paket Starter",
      sub: "Landing Page / Digital Menu",
      price: "Rp. 1,5JT",
      isPopular: false,
      features: [
        "Halaman: 1 Halaman",
        "Domain & Hosting: Gratis 1 Tahun (.com)",
        "Optimasi: SEO & Speed",
        "Revisi: 2x Revisi Minor",
      ],
      link: "https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Starter",
    },
    {
      name: "Paket Bisnis",
      sub: "Company Profile",
      price: "Rp. 3JT",
      isPopular: true, // Paket rekomendasi / terlaris
      features: [
        "Halaman : 3-5 Halaman",
        "Domain & Hosting: Gratis 1 Tahun (.com)",
        "Optimasi : SEO On-Page + Google Analytics",
        "Revisi: 3x Revisi",
      ],
      link: "https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Bisnis",
    },
    {
      name: "Paket Custom",
      sub: "Toko Online / F&B Pos Online / Fitur Khusus",
      price: "Custom Price",
      isPopular: false,
      features: [
        "Halaman : Tak Terbatas",
        "Domain & Hosting: Server Khusus",
        "Optimasi : Full SEO, Custom API, Payment",
        "Revisi : Bebas Revisi Masa Garansi",
      ],
      link: "https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20Paket%20Custom",
    },
  ];

  // Container untuk mengontrol jeda kemunculan antar kartu
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Selang waktu antar kartu: 0.15 detik
      },
    },
  };

  // Animasi tiap kartu paket
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="harga" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Judul */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 text-left"
      >
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Harga</h2>
        </div>
      </motion.div>

      {/* Grid Kartu Paket */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 ${
              pkg.isPopular
                ? "border-2 border-limesoft shadow-[0_0_35px_rgba(163,230,53,0.18)] md:-translate-y-2"
                : "border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:border-limesoft hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
            }`}
          >
            {/* Badge Rekomendasi khusus Paket Bisnis */}
            {pkg.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-limesoft to-darkgreen text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                Paling Populer
              </span>
            )}

            <div>
              <h3 className="text-2xl font-extrabold text-blacksoft mb-1">{pkg.name}</h3>
              <p className="text-sm font-semibold text-slate-700 mb-4">{pkg.sub}</p>
              
              <div className="text-3xl font-extrabold text-blacksoft mb-6">
                {pkg.price}
              </div>

              <ul className="space-y-3 text-sm text-slate-800 mb-8 border-t border-gray-100 pt-6">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-limesoft inline-block flex-shrink-0" />
                    <span className="font-medium text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol CTA */}
            <motion.a
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pilih ${pkg.name} via WhatsApp`}
              whileTap={{ scale: 0.97 }}
              className="block w-full text-center py-3.5 px-6 rounded-2xl bg-gradient-to-r from-limesoft to-darkgreen text-white font-extrabold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5"
            >
              Pilih Paket
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}