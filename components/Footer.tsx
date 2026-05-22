"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const productLinks = [
  { href: "/products/patron",          en: "PATRON Gimbal",            cs: "PATRON Gimbal" },
  { href: "/products/beetle",          en: "BEETLE Gimbal",            cs: "BEETLE Gimbal" },
  { href: "/products/micro-beetle",    en: "Micro BEETLE",             cs: "Micro BEETLE" },
  { href: "/products/avps",            en: "AeroVac Precision System", cs: "AeroVac Precision System" },
  { href: "/products/cryolyze",        en: "CryoLyze",                 cs: "CryoLyze" },
  { href: "/products/testing-fixtures",en: "Testing Fixtures",         cs: "Testovací přípravky" },
  { href: "/products/motor-stand",     en: "Motor Stand",              cs: "Motorová zkušební stolice" },
];

const companyLinks = [
  { href: "/technologies", en: "Technologies", cs: "Technologie" },
  { href: "/about",        en: "About",        cs: "O nás" },
  { href: "/history",      en: "History",      cs: "Historie" },
  { href: "/contact",      en: "Contact",      cs: "Kontakt" },
];

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#1F2019] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo/hikade-logo-transparent.png"
              alt="Hikade Technologies"
              width={200}
              height={78}
              className="h-10 w-auto mb-6"
              style={{ filter: "invert(1)" }}
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {lang === "en"
                ? "Engineering for Extreme Environments. Advanced mechatronic systems for HAPS, aerospace, industrial R&D and demanding applications."
                : "Engineering pro extrémní prostředí. Pokročilé mechatronické systémy pro HAPS, letectví, průmyslový výzkum a náročné aplikace."}
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <p>
                <span className="text-[#63C3B5] font-mono text-xs">{lang === "en" ? "ADDR" : "ADRESA"}</span>
                <br />
                Purkyňova 2836/79A<br />
                612 00 Brno, Czech Republic
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#63C3B5] tracking-widest uppercase mb-5">
              {lang === "en" ? "Products" : "Produkty"}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#63C3B5] tracking-widest uppercase mb-5">
              {lang === "en" ? "Company" : "Společnost"}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#63C3B5] tracking-widest uppercase mb-5">
              {lang === "en" ? "Contact" : "Kontakt"}
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-[#63C3B5] font-mono text-xs block mb-1">EMAIL</span>
                <a href="mailto:info@hikade.cz" className="text-white/60 hover:text-[#63C3B5] transition-colors">info@hikade.cz</a>
              </div>
              <div>
                <span className="text-[#63C3B5] font-mono text-xs block mb-1">{lang === "en" ? "PHONE" : "TELEFON"}</span>
                <a href="tel:+420704145088" className="text-white/60 hover:text-white transition-colors">+420 704 145 088</a>
              </div>
              <div>
                <span className="text-[#63C3B5] font-mono text-xs block mb-1">WEB</span>
                <a href="https://hikade.cz" className="text-white/60 hover:text-[#63C3B5] transition-colors">hikade.cz</a>
              </div>
            </div>
            <div className="mt-8 p-4 border border-[#63C3B5]/20 rounded bg-[#63C3B5]/5">
              <p className="text-xs text-white/40 leading-relaxed">
                {lang === "en"
                  ? "Supported by ESA BIC Prague and Czech innovation programs."
                  : "Podporováno programem ESA BIC Prague a českými inovačními programy."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-mono">
            © {new Date().getFullYear()} Hikade Technologies s.r.o. — Brno, Czech Republic
          </p>
          <div className="flex items-center gap-1 text-xs font-mono text-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63C3B5] inline-block pulse-mint" />
            <span>{lang === "en" ? "Engineering for Extreme Environments" : "Engineering pro extrémní prostředí"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
