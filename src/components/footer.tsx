export default function Footer() {
  return (
    <footer className="w-full bg-limesoft mt-16 py-12 text-blacksoft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-2xl font-black text-blacksoft">RESYIN DEV</p>
            <p className="text-sm font-semibold text-blacksoft/90 mt-1">
              Jasa Pembuatan Website & SEO Professional
            </p>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-extrabold text-blacksoft" aria-label="Navigasi Footer">
            <a href="#beranda" className="hover:underline">Beranda</a>
            <a href="#layanan" className="hover:underline">Layanan</a>
            <a href="#portofolio" className="hover:underline">Portofolio</a>
            <a href="#harga" className="hover:underline">Harga</a>
            <a href="#alur-kerja" className="hover:underline">Alur Kerja</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
        <div className="border-t border-blacksoft/20 mt-8 pt-6 text-center text-xs font-bold text-blacksoft">
          &copy; 2026 RESYIN DEV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
