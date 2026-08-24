import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#8ECA3C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & SEO Professional di Jombang | Resyin Dev",
  description:
    "Jasa pembuatan website dan SEO profesional, terjangkau, dan responsif di Jombang. Melayani pembuatan landing page, web portofolio, toko online, dan sistem web kustom.",
  keywords: [
    "jasa pembuatan website dan seo di jombang",
    "jasa pembuatan website peterongan",
    "jasa pembuatan website di peterongan",
    "jasa pembuatan web peterongan",
    "seo professional",
    "jasa bikin web jombang",
    "jasa pembuatan web jombang",
    "jasa bikin website di jombang",
    "resyin dev",
  ],
  authors: [{ name: "RESYIN DEV" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Jasa Pembuatan Website di Jombang - Resyin Dev",
    description:
      "Solusi pembuatan website modern, cepat, dan SEO-friendly untuk bisnis & UMKM di Jombang dan sekitarnya.",
    url: 'https://resyindev.web.id',
    locale: "id_ID",
    siteName: "RESYIN DEV",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jasa Pembuatan Website dan seo profesional di Jombang - Resyin Dev',
    url: 'https://resyindev.web.id',
    telephone: '+62 822-2953-5137',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jombang',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    areaServed: 'Jombang',
    priceRange: '$$',
    description: 'Jasa pembuatan website dan seo profesional di Jombang Jawa Timur.',
  }
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9FAFF] text-[#171717]">
        {children}
      </body>
    </html>
  );
}
