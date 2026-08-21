import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Layanan from "@/components/layanan";
import Portofolio from "@/components/portofolio";
import Harga from "@/components/harga";
import AlurKerja from "@/components/alur-kerja";
import Kontak from "@/components/kontak";
import Footer from "@/components/footer";

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
