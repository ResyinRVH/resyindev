"use client";

import { motion, type Variants } from "framer-motion";

export default function Layanan() {
  const services = [
    {
      title: "Landing Page",
      desc: "Perancangan halaman web khusus agar calon pelanggan fokus pada informasi produk Anda.",
    },
    {
      title: "Company Profile",
      desc: "Website profesional untuk memamerkan kredibilitas, keunggulan, layanan, dan profil perusahaan.",
    },
    {
      title: "Digital Menu",
      desc: "Tampilan menu digital yang menarik bagi pelanggan kafe & restoran.",
    },
    {
      title: "Toko Online",
      desc: "Kembangkan bisnis online Anda sendiri tanpa ketergantungan pada marketplace.",
    },
    {
      title: "F&B POS Online",
      desc: "Sistem kasir dan manajemen pesanan berbasis web untuk usaha makanan & minuman.",
    },
    {
      title: "Web Custom",
      desc: "Solusi pembuatan website khusus sesuai kebutuhan fitur bisnis Anda.",
    },
  ];

  // Container mengontrol kapan animasi mulai saat masuk viewport & jeda antar kartu
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Setiap kartu muncul dengan jeda 0.12 detik
      },
    },
  };

  // Varian untuk masing-masing kartu layanan
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Kurva easing halus
      },
    },
  };

  return (
    <section id="layanan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Judul Layanan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 text-left"
      >
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Layanan</h2>
        </div>
      </motion.div>

      {/* Grid Kartu dengan Efek Stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            tabIndex={0}
            role="button"
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white p-8 
                       shadow-[0_0_25px_rgba(0,0,0,0.06)] 
                       hover:shadow-[0_0_35px_rgba(0,0,0,0.14)] 
                       transition-all duration-500 ease-out 
                       hover:-translate-y-1.5 active:scale-[0.98] select-none flex flex-col justify-between"
          >
            {/* Layer Gradien di Latar Belakang (Transisi Opacity Lembut) */}
            <div className="absolute inset-0 bg-gradient-to-r from-limesoft to-darkgreen opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100" />

            {/* Konten Utama (z-10 di atas layer gradien) */}
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-4 text-blacksoft transition-colors duration-500 ease-out group-hover:text-white group-active:text-white group-focus:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-semibold leading-relaxed text-slate-700 transition-colors duration-500 ease-out group-hover:text-white/95 group-active:text-white/95 group-focus:text-white/95">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}