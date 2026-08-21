'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  isFeatured?: boolean;
}

export default function Portofolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolios: PortfolioItem[] = [
    {
      id: 'wmj',
      title: 'WMJ - Warung Masakan Jawa',
      category: 'Landing Page Kuliner & Digital Menu',
      description:
        'Website pemesanan makanan & menu digital interaktif dengan fitur form pemesanan WhatsApp, pilihan menu soto & rawon, galeri foto kuliner, dan ulasan pelanggan.',
      image: '/wmj-portfolio.png',
      isFeatured: true,
    },
    {
      id: 'resto-pos',
      title: 'Resto POS & Cashier System',
      category: 'Sistem Kasir & Manajemen Pesanan',
      description:
        'Aplikasi web manajemen kasir resto dengan sistem pencatatan stok, laporan penjualan harian, dan pembayaran QRIS.',
      isFeatured: false,
    },
    {
      id: 'company-prof',
      title: 'Corporate Profile Business',
      category: 'Profil Perusahaan Responsive',
      description:
        'Website profil perusahaan profesional untuk meningkatkan kredibilitas brand dengan galeri proyek dan formulir kontak.',
      isFeatured: false,
    },
    {
      id: 'custom-app',
      title: 'Custom Web Application',
      category: 'Aplikasi Web Fitur Khusus',
      description:
        'Sistem web dinamis yang disesuaikan dengan alur kerja bisnis spesifik klien dengan arsitektur cepat & aman.',
      isFeatured: false,
    },
  ];

  return (
    <section id="portofolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Portofolio</h2>
          <span className="w-3 h-3 rounded-full bg-limesoft inline-block"></span>
        </div>
        <p className="text-sm font-medium text-slate-700 mt-2">
          Lihat beberapa contoh hasil pembuatan website profesional yang telah kami kerjakan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolios.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1"
          >
            {/* Header Browser Window Bar */}
            <div className="bg-yellowsoft p-3.5 border-b border-yellow-400/30 flex items-center justify-between">
              <div className="flex items-center space-x-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-blacksoft bg-white/70 px-2 py-0.5 rounded-full">
                {item.isFeatured ? 'Project Featured' : 'Preview'}
              </span>
            </div>

            {/* Thumbnail Preview Area */}
            <div className="relative min-h-[220px] bg-gradient-to-b from-yellowsoft/30 via-yellow-100/40 to-limesoft/30 overflow-hidden flex items-center justify-center p-3">
              {item.image ? (
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow border border-gray-200/80 bg-white">
                  <Image
                    src={item.image}
                    alt={`Preview website ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              ) : (
                <div className="w-full h-full p-4 flex flex-col justify-between w-full" aria-hidden="true">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-sm mb-3">
                    <div className="w-1/2 h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="h-10 rounded-lg bg-yellow-200 border border-yellow-300"></div>
                    <div className="h-10 rounded-lg bg-yellow-200 border border-yellow-300"></div>
                    <div className="h-10 rounded-lg bg-yellow-200 border border-yellow-300"></div>
                    <div className="h-10 rounded-lg bg-yellow-200 border border-yellow-300"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Card Content Info */}
            <div className="p-5 bg-white text-left">
              <h3 className="font-extrabold text-blacksoft text-base group-hover:text-blacksoft/80 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-slate-700 mt-1">{item.category}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-bold text-blacksoft">
                <span>Klik Detail Preview</span>
                <svg className="w-4 h-4 text-blacksoft group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal Lightbox Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-limesoft p-5 flex items-center justify-between text-blacksoft border-b border-blacksoft/10">
              <div>
                <h3 className="text-xl font-extrabold">{selectedItem.title}</h3>
                <p className="text-xs font-semibold text-blacksoft/80">{selectedItem.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup modal preview"
                className="w-9 h-9 rounded-full bg-blacksoft text-white flex items-center justify-center font-bold hover:bg-blacksoft/80 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {selectedItem.image ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src={selectedItem.image}
                    alt={`Detail tampilan ${selectedItem.title}`}
                    width={800}
                    height={1600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-2xl p-8 text-center text-gray-500 font-medium">
                  Mockup pratinjau interaktif
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-base font-extrabold text-blacksoft">Deskripsi Proyek:</h4>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedItem.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20tertarik%20dengan%20desain%20website%20seperti%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan website mirip ini"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellowsoft hover:bg-yellow-400 text-blacksoft font-extrabold text-sm shadow transition-transform transform hover:-translate-y-0.5"
                >
                  <span>Pesan Website Seperti Ini</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
