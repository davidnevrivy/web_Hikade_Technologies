import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hikade Technologies — Engineering for Extreme Environments",
    template: "%s | Hikade Technologies",
  },
  description:
    "Hikade Technologies develops advanced mechatronic systems, precision gimbal platforms, clean and vacuum processing systems, and custom engineering solutions for HAPS, aerospace, and industrial R&D applications.",
  keywords: [
    "HAPS gimbal",
    "stratospheric payload",
    "two-axis gimbal",
    "payload stabilization",
    "aerospace mechatronics",
    "custom mechatronics",
    "rapid prototyping",
    "embedded control",
    "clean processing workstation",
    "vacuum compatible processing",
    "material testing fixture",
    "motor test stand",
    "precision positioning",
  ],
  openGraph: {
    title: "Hikade Technologies — Engineering for Extreme Environments",
    description:
      "Advanced mechatronic systems for HAPS, aerospace, industrial R&D and extreme environments. Based in Brno, Czech Republic.",
    url: "https://hikade.cz",
    siteName: "Hikade Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#18261D] text-white">
        {/* Global stratosphere background — always visible, never black */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Image
            src="/assets/hero/stratosphere-real.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.18]"
            priority
          />
        </div>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
