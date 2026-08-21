import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroData = {
    headline: "Jasa Pembuatan Website dan SEO Professional",
    description:
      "Buat brand bisnismu jadi lebih profesional, dapat meningkatkan penjualan dan tingkatkan kepercayaan pelanggan dengan website SEO.",
    konsul: "Konsultasi Gratis Sekarang!",
  };

  return (
    <section id="beranda" className="px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      <div className="max-w-7xl mx-auto bg-limesoft rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blacksoft tracking-tight leading-tight">
              {heroData.headline}
            </h1>
            <p className="text-base sm:text-lg font-medium text-blacksoft max-w-xl leading-relaxed">
              {heroData.description}
            </p>
            <div className="pt-2">
              <Link
                href="https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi Gratis Sekarang via WhatsApp"
                className="inline-flex items-center justify-center bg-yellowsoft text-blacksoft font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all shadow-md transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blacksoft"
              >
                {heroData.konsul}
              </Link>
            </div>
          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Profile Image Frame with exact intrinsic aspect ratio 290:367 */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-blacksoft aspect-[290/367] group border-2 border-white/20">
                <Image
                  src="/profile.svg"
                  alt="Foto Professional Website Developer RESYIN DEV"
                  width={290}
                  height={367}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blacksoft/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge Overlay at Bottom Right */}
              <div className="absolute -bottom-4 right-2 sm:right-4 bg-blacksoft p-2.5 pr-4 rounded-full border border-white/10 shadow-2xl flex items-center space-x-3 text-white">
                <div className="w-10 h-10 rounded-full bg-limesoft text-blacksoft flex items-center justify-center font-extrabold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-gray-200 font-medium leading-none">Cek</p>
                  <p className="text-xs font-bold text-yellowsoft mt-0.5">Portofolio Kami</p>
                </div>
                <a
                  href="#portofolio"
                  className="w-9 h-9 rounded-full bg-yellowsoft text-blacksoft flex items-center justify-center hover:bg-yellow-300 transition-colors shadow"
                  aria-label="Lihat Portofolio Kami"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}