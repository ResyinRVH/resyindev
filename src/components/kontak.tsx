import { WhatsApp } from "@/lib/whatsapp";
import {
  TikTok

} from "@/lib/instagram";
export default function Kontak() {
  return (
    <section id="kontak" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blacksoft">Kontak</h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6">
        <a
          href="https://wa.me/6282229535137?text=Halo%20RESYIN%20DEV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi kami via Whatsapp"
          className="inline-flex items-center gap-3 px-8 py-2 rounded-lg bg-radial-[at_0%_200%] from-yellowsoft to-limesoft hover:bg-lime-400 text-blacksoft font-extrabold text-base shadow-md transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blacksoft"
        >
          <div className="rounded-full bg-white p-2">
            <WhatsApp className="w-5 h-5" />
          </div>

          <span>Whatsapp</span>
        </a>

        <a
          href="https://www.tiktok.com/@rvhprogrammer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kunjungi TikTok RESYIN DEV"
          className="inline-flex items-center gap-3 px-8 py-2 rounded-lg bg-radial-[at_0%_200%] from-yellowsoft to-limesoft hover:bg-lime-400 text-blacksoft font-extrabold text-base shadow-md transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blacksoft"
        >
          <div className="rounded-full bg-white p-2">
            <TikTok className="w-5 h-5" />
          </div>
          <span>Tiktok</span>
        </a>
      </div>
    </section>
  );
}
