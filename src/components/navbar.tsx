'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Harga', href: '#harga' },
  { name: 'Alur Kerja', href: '#alur-kerja' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Fungsi khusus untuk menggulir mulus ke Hero/Beranda saat logo diklik
  const scrollToBeranda = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection('beranda');

    const heroElement = document.getElementById('beranda');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Perbarui URL tanpa reload
    window.history.pushState(null, '', '#beranda');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateLine = () => {
      const currentItem = itemRefs.current[activeSection];
      const navContainer = navRef.current;

      if (currentItem && navContainer) {
        const itemRect = currentItem.getBoundingClientRect();
        const navRect = navContainer.getBoundingClientRect();

        setLineStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
          opacity: 1,
        });
      }
    };

    updateLine();
    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 bg-[#F9FAFF]/95 backdrop-blur-md border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo RESYIN DEV yang mengarah ke Beranda/Hero */}
          <a
            href="#beranda"
            onClick={scrollToBeranda}
            className="text-2xl font-extrabold tracking-wider text-blacksoft flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer select-none"
            aria-label="RESYIN DEV Kembali ke Beranda"
          >
            <span>RESYIN DEV</span>
          </a>

          <nav
            ref={navRef}
            className="relative hidden md:flex items-center gap-8 py-2"
            aria-label="Navigasi Utama"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  ref={(el) => {
                    itemRefs.current[sectionId] = el;
                  }}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`text-[15px] font-semibold transition-colors duration-300 ${
                    isActive ? 'text-blacksoft font-bold' : 'text-gray-500 hover:text-blacksoft'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Garis Indikator Aktif */}
            <span
              className="absolute bottom-0 h-[3px] bg-gradient-to-r from-limesoft to-darkgreen rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none"
              style={{
                left: `${lineStyle.left}px`,
                width: `${lineStyle.width}px`,
                opacity: lineStyle.opacity,
              }}
            />
          </nav>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(item.href.replace('#', ''));
                    }}
                    className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-limesoft/30 text-blacksoft font-bold border-l-4 border-limesoft'
                        : 'text-gray-700 hover:text-blacksoft hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}