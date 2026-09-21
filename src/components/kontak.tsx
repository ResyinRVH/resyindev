"use client";

import { motion, type Variants } from "framer-motion";
import { WhatsApp } from "@/lib/whatsapp";
import { TikTok } from "@/lib/tiktok";

export default function Kontak() {
  const contactLinks = [
    {
      name: "WhatsApp",
      handle: "+62 822-2953-5137",
      subtext: "Respon Cepat & Konsultasi Gratis",
      href: "https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV",
      ariaLabel: "Hubungi kami via WhatsApp",
      icon: <WhatsApp className="w-6 h-6 text-darkgreen" />,
      accentBadge: "Online",
    },
    {
      name: "TikTok",
      handle: "@rvhprogrammer",
      subtext: "Tutorial & Tips Web Development",
      href: "https://www.tiktok.com/@rvhprogrammer",
      ariaLabel: "Kunjungi TikTok RESYIN DEV",
      icon: <TikTok className="w-6 h-6 text-blacksoft" />,
      accentBadge: "Follow",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="kontak" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Judul */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 text-left"
      >
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Kontak</h2>
        </div>
        <p className="text-sm font-medium text-slate-700 mt-2">
          Punya pertanyaan atau ingin mulai membuat website? Hubungi kami langsung.
        </p>
      </motion.div>

      {/* Grid Kontak Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl"
      >
        {contactLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-between p-6 rounded-3xl bg-white 
                       border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                       hover:border-limesoft hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] 
                       transition-all duration-300"
          >
            {/* Info Kiri */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F9FAFF] border border-gray-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-limesoft/20 group-hover:to-darkgreen/10 transition-all duration-300">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-blacksoft">{item.name}</h3>
                  
                </div>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{item.handle}</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">{item.subtext}</p>
              </div>
            </div>

            {/* Panah Aksi Kanan */}
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-limesoft group-hover:to-darkgreen group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2">
              <svg
                className="w-5 h-5 text-blacksoft group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}