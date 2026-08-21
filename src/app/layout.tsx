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
  title: "RESYIN DEV - Jasa Pembuatan Website & SEO Professional",
  description:
    "Buat brand bisnismu jadi lebih profesional, dapat meningkatkan penjualan dan tingkatkan kepercayaan pelanggan dengan website SEO terpercaya dari RESYIN DEV.",
  keywords: [
    "jasa pembuatan website",
    "seo professional",
    "website toko online",
    "company profile",
    "digital menu",
    "resyin dev",
  ],
  authors: [{ name: "RESYIN DEV" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "RESYIN DEV - Jasa Pembuatan Website & SEO Professional",
    description:
      "Buat brand bisnismu jadi lebih profesional, dapat meningkatkan penjualan dan tingkatkan kepercayaan pelanggan dengan website SEO.",
    type: "website",
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
