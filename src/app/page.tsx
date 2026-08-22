import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const Layanan = dynamic(() => import("@/components/layanan"));
const Harga = dynamic(() => import("@/components/harga"));
const AlurKerja = dynamic(() => import("@/components/alur-kerja"));
const Portofolio = dynamic(() => import("@/components/portofolio"));
const Kontak = dynamic(() => import("@/components/kontak"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFF] text-[#171717]">
      <Navbar />
      <Hero />
      <Layanan />
      <Harga />
      <AlurKerja />
      <Portofolio />
      <Kontak />
      <Footer />
    </main>
  );
}