"use client";

import { motion, type Variants } from "framer-motion";

export default function AlurKerja() {
  const stepsRow1 = [
    {
      title: "1. Briefing",
      desc: "Konsultasi kebutuhan bisnis, referensi desain, dan target audiens Anda.",
    },
    {
      title: "2. Desain & Prototyping",
      desc: "Pembuatan tata letak visual dan elemen desain digital untuk disetujui sebelum coding.",
    },
    {
      title: "3. Development & Integrasi",
      desc: "Pemrograman website responsif, integrasi fitur, pengisian konten, dan optimasi performa.",
    },
  ];

  const stepsRow2 = [
    {
      title: "4. Review & Revisi",
      desc: "Uji coba fitur di server staging server, untuk memastikan semua fitur berjalan sempurna sesuai keinginan.",
    },
    {
      title: "5. Peluncuran",
      desc: "Website resmi dihubungkan ke domain utama dan diluncurkan beserta panduan pengelolaan.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    /* 1. SECTION: Full lebar layar (w-full) dengan warna gradien */
    <section
      id="alur-kerja"
      className="w-full bg-gradient-to-r from-limesoft to-darkgreen py-20"
    >
      {/* 2. INNER CONTAINER: Menjaga konten tetap rapi di tengah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-left"
        >
          <div className="inline-flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Alur Kerja
            </h2>
          </div>
        </motion.div>

        {/* Pembungkus Seluruh Langkah dengan Alur Bertahap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {/* Baris 1: Langkah 1 - 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepsRow1.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white text-left 
                           shadow-[0_0_25px_rgba(0,0,0,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] 
                           cursor-default select-none"
              >
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/90">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Baris 2: Langkah 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {stepsRow2.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white text-left 
                           shadow-[0_0_25px_rgba(0,0,0,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] 
                           cursor-default select-none"
              >
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/90">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}