'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Harga', href: '#harga' },
  { name: 'Alur Kerja', href: '#alur-kerja' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F9FAFF]/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#beranda"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-extrabold tracking-wider text-blacksoft flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            aria-label="RESYIN DEV Beranda"
          >
            <span>RESYIN DEV</span>
            <span className="w-2.5 h-2.5 rounded-full bg-limesoft inline-block"></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-gray-800 hover:text-blacksoft transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            className="md:hidden p-2.5 rounded-xl text-gray-800 hover:text-blacksoft hover:bg-gray-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blacksoft"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-base font-semibold text-gray-800 hover:text-blacksoft hover:bg-gray-100 px-3 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}