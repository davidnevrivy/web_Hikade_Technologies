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
          ? "bg-[#18261D]/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 xl:px-8 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/assets/logo/hikade-logo-transparent.png"
            alt="Hikade Technologies"
            width={360}
            height={140}
            className="h-[84px] w-auto"
            style={{ filter: "invert(1)" }}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded border text-sm whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? "text-[#63C3B5] font-semibold border-[#63C3B5]/40 bg-[#63C3B5]/5"
                    : "text-white/70 font-medium border-transparent hover:text-white hover:font-semibold hover:border-white/25 hover:bg-white/5"
                }`}
              >
                {link[lang]}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en" ? "text-[#63C3B5] font-semibold" : "text-white/40 hover:text-white/70"}`}
            >
              EN
            </button>
            <span className="text-white/30">/</span>
            <button
              onClick={() => setLang("cs")}
              className={`transition-colors ${lang === "cs" ? "text-[#63C3B5] font-semibold" : "text-white/40 hover:text-white/70"}`}
            >
              CS
            </button>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-[#63C3B5] text-black text-sm font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors"
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
                    ? "text-[#63C3B5] font-semibold border-[#63C3B5]/30 bg-[#63C3B5]/5"
                    : "text-white/70 font-medium border-transparent"
                }`}
              >
                {link[lang]}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 px-4 py-3 bg-[#63C3B5] text-black text-sm font-semibold rounded text-center"
          >
            {lang === "en" ? "Contact" : "Kontakt"}
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono py-2">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-[#63C3B5] font-semibold" : "text-white/40"}
            >EN</button>
            <span className="text-white/30">/</span>
            <button
              onClick={() => setLang("cs")}
              className={lang === "cs" ? "text-[#63C3B5] font-semibold" : "text-white/40"}
            >CS</button>
          </div>
        </div>
      </div>
    </header>
  );
}
