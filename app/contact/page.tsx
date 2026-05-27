"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { lang } = useLanguage();

  const t = {
    en: {
      badge: "Start a Technical Discussion",
      h1: "Contact Hikade Technologies",
      subtitle: "Have a payload, process or engineering challenge that does not fit a standard solution? Send us the core requirements, constraints and intended operating environment.",
      directContact: "Direct Contact",
      phoneLabel: "PHONE",
      addressLabel: "ADDRESS",
      relevantLabel: "RELEVANT STARTING POINTS",
      links: [
        { label: "Have a HAPS or stratospheric payload?", href: "/products/patron" },
        { label: "Need clean component processing?", href: "/products/avps" },
        { label: "Custom engineering project?", href: "/products#custom-engineering" },
        { label: "Motor or material testing?", href: "/products/motor-stand" },
      ],
    },
    cs: {
      badge: "Zahájit technickou diskuzi",
      h1: "Kontaktujte Hikade Technologies",
      subtitle: "Máte payload, proces nebo technický problém, který nevyřeší standardní produkt? Pošlete nám klíčové požadavky, omezení a zamýšlené provozní prostředí.",
      directContact: "Přímý kontakt",
      phoneLabel: "TELEFON",
      addressLabel: "ADRESA",
      relevantLabel: "RELEVANTNÍ VÝCHOZÍ BODY",
      links: [
        { label: "Máte HAPS nebo stratosferický payload?", href: "/products/patron" },
        { label: "Potřebujete čisté zpracování komponent?", href: "/products/avps" },
        { label: "Zakázkový inženýrský projekt?", href: "/products#custom-engineering" },
        { label: "Testování motorů nebo materiálů?", href: "/products/motor-stand" },
      ],
    },
  }[lang];

  return (
    <div className="text-white pt-20">
      <section className="py-20 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="telemetry-badge mb-4 inline-block">{t.badge}</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.h1}</h1>
          <p className="text-lg text-white max-w-2xl">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-8">{t.directContact}</h2>
              <div className="space-y-6">
                {[
                  { label: "EMAIL", value: "info@hikade.cz", href: "mailto:info@hikade.cz" },
                  { label: t.phoneLabel, value: "+420 704 145 088", href: "tel:+420704145088" },
                  { label: "WEB", value: "hikade.cz", href: "https://hikade.cz" },
                ].map((c) => (
                  <div key={c.label}>
                    <p className="text-xs font-mono text-[#82D5CA] mb-1">{c.label}</p>
                    <a href={c.href} className="text-white hover:text-[#82D5CA] transition-colors">{c.value}</a>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs font-mono text-[#82D5CA] mb-3">{t.addressLabel}</p>
                <address className="not-italic text-white text-sm leading-relaxed">
                  Hikade Technologies s.r.o.<br />
                  Purkyňova 2836/79A<br />
                  612 00 Brno<br />
                  Czech Republic
                </address>
              </div>

              <div className="mt-10 space-y-3">
                <p className="text-xs font-mono text-[#82D5CA] mb-3">{t.relevantLabel}</p>
                {t.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-white hover:text-[#82D5CA] transition-colors">
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
