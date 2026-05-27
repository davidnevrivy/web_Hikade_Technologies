"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { href: "/",          en: "Home",                   cs: "Domů",                   exact: true  },
  { href: "/products",  en: "Portfolio & Projects",   cs: "Portfolio & projekty",   exact: false },
  { href: "/history",   en: "History",                cs: "Historie",               exact: false },
  { href: "/about",     en: "About",                  cs: "O nás",                  exact: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#18261D]/80 backdrop-blur-md border-b border-white/15 shadow-lg"
          : "bg-[#18261D]/40 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 xl:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/assets/logo/hikade-logo-transparent.png"
            alt="Hikade Technologies"
            width={360}
            height={140}
            className="h-[110px] w-auto"
            style={{ filter: "invert(1)" }}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded border text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? "text-white font-semibold border-[#82D5CA]/40 bg-[#82D5CA]/5"
                    : "text-white border-transparent hover:text-white hover:font-semibold hover:border-white/25 hover:bg-white/5"
                }`}
              >
                {link[lang]}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-0.5 border border-white/20 rounded-md overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-2 text-sm font-semibold transition-all ${
                lang === "en"
                  ? "bg-[#82D5CA] text-black"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>
            <div className="w-px h-5 bg-white/15" />
            <button
              onClick={() => setLang("cs")}
              className={`px-3 py-2 text-sm font-semibold transition-all ${
                lang === "cs"
                  ? "bg-[#82D5CA] text-black"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              CS
            </button>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#82D5CA] text-black text-sm font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors"
          >
            {lang === "en" ? "Contact" : "Kontakt"}
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } bg-[#18261D]/95 backdrop-blur-md border-b border-white/10`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-2.5 px-3 rounded border transition-all duration-150 ${
                  isActive
                    ? "text-white font-semibold border-[#82D5CA]/30 bg-[#82D5CA]/5"
                    : "text-white font-medium border-transparent"
                }`}
              >
                {link[lang]}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 px-4 py-3 bg-[#82D5CA] text-black text-sm font-semibold rounded text-center"
          >
            {lang === "en" ? "Contact" : "Kontakt"}
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono py-2">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white font-semibold" : "text-white"}
            >EN</button>
            <span className="text-white">/</span>
            <button
              onClick={() => setLang("cs")}
              className={lang === "cs" ? "text-white font-semibold" : "text-white"}
            >CS</button>
          </div>
        </div>
      </div>
    </header>
  );
}
