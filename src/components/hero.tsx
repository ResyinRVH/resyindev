"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const heroData = {
    description:
      "Buat brand bisnismu jadi lebih profesional, dapat meningkatkan penjualan dan tingkatkan kepercayaan pelanggan dengan website SEO.",
    konsul: "Konsultasi Gratis Sekarang!",
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="beranda" className="px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      <div className="max-w-7xl mx-auto p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blacksoft tracking-tight leading-tight"
            >
              Jasa Pembuatan{" "}
              <span className="bg-gradient-to-r from-limesoft to-darkgreen bg-clip-text text-transparent">
                Website dan SEO
              </span>{" "}
              Professional
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-blacksoft max-w-xl leading-relaxed"
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi Gratis Sekarang via WhatsApp"
                className="inline-flex items-center justify-center bg-gradient-to-r from-limesoft to-darkgreen text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-lime-300 transition-all shadow-md transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blacksoft"
              >
                {heroData.konsul}
              </Link>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <div className="relative rounded-5xl overflow-hidden shadow-2xl bg-blacksoft aspect-[290/367] group outline-4 outline-offset-4 outline-limesoft">
                import Image from "next/image";

                <Image
                  src="/profile.webp"
                  alt="Foto Professional Website Developer RESYIN DEV"
                  width={316}
                  height={400}
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 350px"
                  priority
                  quality={75}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-5 right-20 sm:right-30 bg-blacksoft px-4 py-2.5 gap-7 rounded-xl shadow-md flex items-center space-x-3 text-white z-20"
              >
                <div className="text-left">
                  <p className="text-[11px] text-gray-200 font-medium leading-none">Cek</p>
                  <p className="text-xs font-bold text-limesoft mt-0.5">Portofolio Kami</p>
                </div>
                <a
                  href="#portofolio"
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-limesoft to-darkgreen text-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow"
                  aria-label="Lihat Portofolio Kami"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}