"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsPage() {
  const { lang } = useLanguage();
  const en = lang === "en";

  return (
    <div className="text-white pt-20">

      {/* ── HEADER ── */}
      <section className="py-20 bg-[#1F2019] tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="telemetry-badge mb-4 inline-block">
            {en ? "Portfolio & Projects" : "Portfolio & Projekty"}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {en ? "Products & Projects" : "Produkty & Projekty"}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            {en
              ? "Proprietary platforms, validated engineering systems and custom technology solutions for HAPS, aerospace, clean processing and industrial R&D applications."
              : "Vlastní platformy, validované inženýrské systémy a zakázková technologická řešení pro HAPS, letectví, čisté zpracování a průmyslové R&D aplikace."}
          </p>
        </div>
      </section>

      {/* ── STRATOSPHERIC GIMBALS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="telemetry-badge">{en ? "Stratospheric Gimbals" : "Stratosférické gimbaly"}</span>
            <h2 className="text-3xl font-bold mt-3 mb-2">
              {en ? "HAPS Gimbal Platforms" : "HAPS Gimbalové platformy"}
            </h2>
            <p className="text-white/50 max-w-xl text-sm">
              {en
                ? "Purpose-built two-axis gimbal systems for high-altitude platform stations operating at 18–25 km altitude."
                : "Dvouosé gimbalové systémy navržené pro platformy HAPS operující ve výšce 18–25 km."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* PATRON */}
            <Link href="/products/patron" className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/60 product-card hover:border-[#63C3B5]/40">
              <div className="relative h-64 bg-[#efefed] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/products/patron/patron-slide-3.png"
                  alt="PATRON Gimbal"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-[#63C3B5] transition-colors">PATRON</h3>
                    <p className="text-xs text-white/40">{en ? "High-Precision HAPS Gimbal" : "Vysoce přesný HAPS gimbal"}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-[#63C3B5] flex-shrink-0" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                  {en
                    ? "Configurable two-axis gimbal for HAPS payloads up to 18 kg. Purpose-built for 18–25 km altitude with low-pressure tribology and embedded real-time control."
                    : "Konfigurovatelný dvouosý gimbal pro HAPS payloady až 18 kg. Navržen pro výšku 18–25 km s tribologií při nízkém tlaku a vestavěným řízením v reálném čase."}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { l: "Payload", v: "≤ 18 kg" },
                    { l: en ? "Mass" : "Hmotnost", v: "~8 kg" },
                    { l: en ? "Axes" : "Osy", v: "2-axis" },
                    { l: en ? "Power" : "Příkon", v: "200–400 W" },
                  ].map(s => (
                    <div key={s.l} className="bg-[#63C3B5]/5 border border-[#63C3B5]/10 rounded p-2">
                      <div className="text-[9px] font-mono text-[#63C3B5] uppercase mb-0.5">{s.l}</div>
                      <div className="text-xs font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-[#63C3B5] group-hover:translate-x-1 transition-transform inline-block">{en ? "Learn more →" : "Více →"}</span>
              </div>
            </Link>

            {/* BEETLE */}
            <Link href="/products/beetle" className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/60 product-card hover:border-[#63C3B5]/40">
              <div className="relative h-64 bg-[#efefed] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/products/beetle/beetle-transparent-1.png"
                  alt="BEETLE Gimbal"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-[#63C3B5] transition-colors">BEETLE</h3>
                    <p className="text-xs text-white/40">{en ? "Lightweight HAPS Gimbal" : "Lehký HAPS gimbal"}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-yellow-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                  {en
                    ? "Compact two-axis gimbal for smaller payloads, test flights and cost-sensitive stratospheric applications. Shares core PATRON technology."
                    : "Kompaktní dvouosý gimbal pro menší payloady, zkušební lety a cenově citlivé stratosferické aplikace. Sdílí technologii jádra PATRON."}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { l: "Payload", v: "≤ 4.5 kg" },
                    { l: en ? "Mass" : "Hmotnost", v: "~2.5 kg" },
                    { l: en ? "Axes" : "Osy", v: "2-axis" },
                    { l: en ? "Power" : "Příkon", v: "~30 W" },
                  ].map(s => (
                    <div key={s.l} className="bg-[#63C3B5]/5 border border-[#63C3B5]/10 rounded p-2">
                      <div className="text-[9px] font-mono text-[#63C3B5] uppercase mb-0.5">{s.l}</div>
                      <div className="text-xs font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-[#63C3B5] group-hover:translate-x-1 transition-transform inline-block">{en ? "Learn more →" : "Více →"}</span>
              </div>
            </Link>

            {/* MICRO BEETLE */}
            <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/60 border-dashed">
              <div className="relative h-64 bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
                <div className="text-center text-white/20">
                  <div className="text-4xl mb-3">◈</div>
                  <div className="text-xs font-mono uppercase tracking-widest">{en ? "In Development" : "Ve vývoji"}</div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white/40">Micro BEETLE</h3>
                    <p className="text-xs text-white/30">{en ? "Ultra-Lightweight Concept" : "Ultra-lehký koncept"}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-white/20 flex-shrink-0" />
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">
                  {en
                    ? "Early-stage development direction for ultra-lightweight two-axis pointing for very small payloads and micro-balloon platforms."
                    : "Raně vývojový směr pro ultra-lehké dvouosé polohování pro velmi malé payloady a mikrobalonové platformy."}
                </p>
                <div className="text-xs text-white/25 font-mono uppercase tracking-wider border border-white/10 rounded px-3 py-2 text-center">
                  {en ? "In Development — Details on Request" : "Ve vývoji — Podrobnosti na vyžádání"}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CLEAN & VACUUM SYSTEMS ── */}
      <section className="py-16 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="telemetry-badge">{en ? "Clean & Vacuum Systems" : "Čisté a vakuové systémy"}</span>
            <h2 className="text-3xl font-bold mt-3 mb-2">
              {en ? "Precision Processing Technology" : "Precizní zpracovatelská technologie"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CryoLyze */}
            <Link href="/products/cryolyze" className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#18261D]/40 product-card hover:border-[#63C3B5]/40">
              <div className="relative h-56 overflow-hidden bg-white">
                <Image
                  src="/assets/products/cryolyze/cryolyze-2.png"
                  alt="CryoLyze"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-[#63C3B5] transition-colors">CryoLyze</h3>
                    <p className="text-xs text-white/40">CRYO-LYO25 — {en ? "Laboratory Freeze-Drying" : "Laboratorní lyofilizace"}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-yellow-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                  {en
                    ? "Combined cryo-vacuum chamber and freeze-drying system for controlled processing of sensitive biological, research and technical samples. Developed with ESA SPARK support."
                    : "Kombinovaná kryovakuová komora a lyofilizační systém pro řízené zpracování citlivých biologických, výzkumných a technických vzorků. Vyvinuto s podporou ESA SPARK."}
                </p>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { l: en ? "Vacuum" : "Vakuum", v: "< 3.5 kPa" },
                    { l: en ? "Cooling" : "Chlazení", v: "LN2" },
                    { l: en ? "Chamber" : "Komora", v: "AISI 316L" },
                    { l: en ? "Process" : "Proces", v: "3-phase" },
                  ].map(s => (
                    <div key={s.l} className="bg-[#63C3B5]/5 border border-[#63C3B5]/10 rounded p-2">
                      <div className="text-[9px] font-mono text-[#63C3B5] uppercase mb-0.5">{s.l}</div>
                      <div className="text-xs font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-[#63C3B5] group-hover:translate-x-1 transition-transform inline-block">{en ? "Learn more →" : "Více →"}</span>
              </div>
            </Link>

            {/* AVPS */}
            <Link href="/products/avps" className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#18261D]/40 product-card hover:border-[#63C3B5]/40">
              <div className="relative h-56 overflow-hidden bg-[#3C271E]/20">
                <Image
                  src="/assets/hero/svetlomet-side.jpg"
                  alt="AVPS"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18261D]/60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-[#63C3B5] transition-colors">AVPS</h3>
                    <p className="text-xs text-white/40">{en ? "AeroVac Precision System" : "Precizní aerovakuový systém"}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-1.5 bg-[#63C3B5] flex-shrink-0" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                  {en
                    ? "Modular clean and vacuum-compatible workstation for precision bearing processing, optics handling and contamination-controlled assembly."
                    : "Modulární čisté a vakuově kompatibilní pracoviště pro zpracování přesných ložisek, práci s optikou a montáž v řízeném prostředí."}
                </p>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { l: "Zone C", v: "ISO 7–6" },
                    { l: "AVPS-A", v: "ISO 6–5" },
                    { l: en ? "Modules" : "Moduly", v: en ? "Modular" : "Modulární" },
                    { l: en ? "Standard" : "Norma", v: "ISO 14644" },
                  ].map(s => (
                    <div key={s.l} className="bg-[#63C3B5]/5 border border-[#63C3B5]/10 rounded p-2">
                      <div className="text-[9px] font-mono text-[#63C3B5] uppercase mb-0.5">{s.l}</div>
                      <div className="text-xs font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-[#63C3B5] group-hover:translate-x-1 transition-transform inline-block">{en ? "Learn more →" : "Více →"}</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL PROJECTS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="telemetry-badge">{en ? "Industrial Projects" : "Průmyslové projekty"}</span>
            <h2 className="text-3xl font-bold mt-3 mb-2">
              {en ? "Custom Engineering & Industrial Systems" : "Zakázkové inženýrství a průmyslové systémy"}
            </h2>
            <p className="text-white/50 max-w-xl text-sm">
              {en
                ? "Custom-developed mechatronic systems, test equipment and engineering solutions for industrial customers."
                : "Zakázkové mechatronické systémy, testovací zařízení a inženýrská řešení pro průmyslové zákazníky."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Motor Stand */}
            <Link href="/products/motor-stand" className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/60 product-card hover:border-[#63C3B5]/40">
              <div className="relative h-44 overflow-hidden bg-white">
                <Image
                  src="/assets/products/industrial/motor-stand.png"
                  alt="Motor Stand"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 group-hover:text-[#63C3B5] transition-colors">
                  {en ? "Motor Test Stand" : "Motorová zkušební stolice"}
                </h3>
                <p className="text-xs text-white/40 mb-3">
                  {en ? "High-Power Motor Test Bench" : "Výkonová zkušební stolice pro motory"}
                </p>
                <p className="text-sm text-white/55 leading-relaxed mb-3">
                  {en
                    ? "Back-to-back motor-generator test system for development and validation of motors, drives and powertrain components. Up to 400 Nm, 2×80 kW."
                    : "Back-to-back systém motor-generátor pro vývoj a validaci motorů, měničů a komponent pohonného ústrojí. Až 400 Nm, 2×80 kW."}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["~400 Nm", "2×80 kW", "2 800 RPM", "BLDC"].map(v => (
                    <span key={v} className="text-[10px] font-mono border border-white/10 rounded px-2 py-0.5 text-white/40">{v}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Gimbal Odysseus */}
            <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/60 product-card">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/assets/products/industrial/odysseus-side.jpg"
                  alt="Gimbal Odysseus"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F2019]/60" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">Gimbal Odysseus</h3>
                <p className="text-xs text-white/40 mb-3">
                  {en ? "Automotive Adaptive Lighting Gimbal" : "Gimbal pro adaptivní automobilové osvětlení"}
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  {en
                    ? "Custom gimbal platform for precise directional control of high-power automotive lighting systems. Developed for industrial automotive R&D application."
                    : "Zakázková gimbalová platforma pro přesné směrové řízení vysokovýkonných automobilových osvětlovacích systémů."}
                </p>
              </div>
            </div>

            {/* Custom Engineering */}
            <div className="flex flex-col border border-white/10 rounded-lg bg-[#1F2019]/60 product-card" id="custom-engineering">
              <div className="h-44 bg-[#18261D]/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl text-[#63C3B5]/30 mb-2">◈</div>
                  <div className="text-xs font-mono text-[#63C3B5]/40 uppercase tracking-widest">
                    {en ? "Custom Projects" : "Zakázkové projekty"}
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1">
                  {en ? "Industrial Custom Engineering" : "Průmyslové zakázkové inženýrství"}
                </h3>
                <p className="text-xs text-white/40 mb-3">
                  {en ? "Single-purpose machines · Test benches · Mechatronic systems" : "Jednoúčelové stroje · Zkušební stolice · Mechatronické systémy"}
                </p>
                <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">
                  {en
                    ? "End-to-end development of custom mechatronic systems, single-purpose machines and industrial prototypes where catalog solutions are not sufficient."
                    : "Kompletní vývoj zakázkových mechatronických systémů, jednoúčelových strojů a průmyslových prototypů, kde katalogová řešení nestačí."}
                </p>
                <Link href="/contact" className="text-xs text-[#63C3B5] hover:text-white transition-colors">
                  {en ? "Discuss your project →" : "Diskutovat projekt →"}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FUNDED & GRANT PROJECTS ── */}
      <section className="py-16 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="telemetry-badge">{en ? "Funded Research" : "Financovaný výzkum"}</span>
            <h2 className="text-3xl font-bold mt-3 mb-2">
              {en ? "Grant & Incubation Projects" : "Grantové a inkubační projekty"}
            </h2>
            <p className="text-white/50 max-w-xl text-sm">
              {en
                ? "Research and development projects supported by TAČR, ESA and European Union funding instruments."
                : "Výzkumné a vývojové projekty podpořené nástroji financování TAČR, ESA a Evropské unie."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* TAČR */}
            <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/40 hover:border-[#63C3B5]/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 px-2.5 py-1 bg-[#63C3B5]/10 border border-[#63C3B5]/20 rounded text-[10px] font-mono text-[#63C3B5] uppercase tracking-wider">TAČR</div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">
                    {en ? "Commercial Strategy for Implementing Gimbal in Multisensor Communication" : "Komerční strategie pro implementaci gimbalu v multisenzorové komunikaci"}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {en
                  ? "Technology Agency of the Czech Republic funded project focused on developing a commercial strategy for deploying PATRON gimbal technology in multisensor communication platforms."
                  : "Projekt financovaný Technologickou agenturou ČR zaměřený na vypracování komerční strategie pro nasazení technologie gimbalu PATRON v multisenzorových komunikačních platformách."}
              </p>
            </div>

            {/* ESA SPARK */}
            <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/40 hover:border-[#63C3B5]/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 px-2.5 py-1 bg-[#63C3B5]/10 border border-[#63C3B5]/20 rounded text-[10px] font-mono text-[#63C3B5] uppercase tracking-wider">ESA SPARK</div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">CryoLyze</h3>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {en
                  ? "European Space Agency SPARK programme supported development of the CryoLyze cryo-vacuum chamber and freeze-drying system. ESA SPARK accelerates early-stage space-related technology commercialisation."
                  : "Program ESA SPARK podpořil vývoj kryovakuové komory a lyofilizačního systému CryoLyze. ESA SPARK urychluje komercionalizaci technologií v raném stádiu vývoje."}
              </p>
            </div>

            {/* ESA BIC */}
            <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/40 hover:border-[#63C3B5]/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 px-2.5 py-1 bg-[#63C3B5]/10 border border-[#63C3B5]/20 rounded text-[10px] font-mono text-[#63C3B5] uppercase tracking-wider">ESA BIC</div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">{en ? "Gimbal PATRON" : "Gimbál PATRON"}</h3>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {en
                  ? "ESA Business Incubation Centre Prague supported the development and commercialisation of PATRON — a precision stratospheric gimbal platform for HAPS payloads."
                  : "Podnikatelské inkubační centrum ESA Praha podpořilo vývoj a komercionalizaci PATRONu — precizní stratosferické gimbalové platformy pro HAPS payloady."}
              </p>
            </div>

            {/* Technology Incubation */}
            <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/40 hover:border-[#63C3B5]/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 px-2.5 py-1 bg-[#63C3B5]/10 border border-[#63C3B5]/20 rounded text-[10px] font-mono text-[#63C3B5] uppercase tracking-wider">
                  {en ? "TECH INCUB." : "TECH INKUB."}
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">{en ? "Gimbal PATRON — Technology Incubation" : "Gimbál PATRON — Technologická inkubace"}</h3>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {en
                  ? "Technology incubation programme supporting the maturation of the PATRON gimbal platform from prototype to validated system ready for commercial deployment."
                  : "Program technologické inkubace podporující zrání gimbalové platformy PATRON od prototypu po validovaný systém připravený k nasazení."}
              </p>
            </div>

          </div>

          {/* EU Bending Fixture — full description */}
          <div className="border border-[#63C3B5]/20 rounded-lg bg-[#18261D]/60 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 px-2.5 py-1 bg-[#63C3B5]/10 border border-[#63C3B5]/20 rounded text-[10px] font-mono text-[#63C3B5] uppercase tracking-wider">EU</div>
                <div>
                  <h3 className="font-semibold text-white text-lg leading-tight">
                    {en ? "Bending Fixture for Material Testing" : "Přípravek pro zkoušení materiálů v ohybu"}
                  </h3>
                  <p className="text-xs text-white/40 mt-1">
                    {en ? "National Recovery Plan · European Union" : "Národní plán obnovy · Evropská unie"}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                {en
                  ? "This project is implemented with the financial support of the European Union within the framework of the National Recovery Plan."
                  : "Tento projekt je realizován s finanční podporou Evropské unie v rámci Národního plánu obnovy."}
              </p>
              <div className="bg-[#63C3B5]/5 border border-[#63C3B5]/10 rounded p-4 mb-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="font-semibold text-[#63C3B5]">
                    {en ? "Main objective: " : "Hlavní cíl: "}
                  </span>
                  {en
                    ? "Preparation for foreign expansion through the development of an innovative device for precise measurement of material deflection according to ISO 178. The project contributes to increasing the competitiveness of Hikade Technologies s.r.o. on international markets, thereby supporting the development of innovation and internationalisation of Czech companies."
                    : "Příprava na zahraniční expanzi prostřednictvím vývoje inovativního přístroje pro přesné měření průhybu materiálu dle ISO 178. Projekt přispívá ke zvyšování konkurenceschopnosti Hikade Technologies s.r.o. na mezinárodních trzích."}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/40">
                <div>
                  <div className="text-[#63C3B5] font-mono uppercase tracking-wider mb-1">{en ? "Project name" : "Název projektu"}</div>
                  <div>{en ? "Bending fixture for material testing (according to ISO 178) with very precise deflection measurement" : "Přípravek pro zkoušení materiálů v ohybu (dle ISO 178) s velmi přesným měřením průhybu"}</div>
                </div>
                <div>
                  <div className="text-[#63C3B5] font-mono uppercase tracking-wider mb-1">{en ? "Registration No." : "Reg. číslo"}</div>
                  <div>2425000008</div>
                </div>
                <div>
                  <div className="text-[#63C3B5] font-mono uppercase tracking-wider mb-1">{en ? "Purpose" : "Účel dotace"}</div>
                  <div>{en ? "Preparation for foreign expansion and related activities" : "Příprava na zahraniční expanzi a související aktivity"}</div>
                </div>
              </div>
              <p className="text-xs text-white/30 mt-4 italic">
                {en ? "This project is co-financed by the European Union." : "Tento projekt je spolufinancován Evropskou unií."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CUSTOM ENGINEERING ── */}
      <section className="py-20 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="telemetry-badge mb-4 inline-block">
                {en ? "Non-Catalog Projects" : "Nekatalogové projekty"}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {en ? "Custom Engineering" : "Zakázkové inženýrství"}
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                {en
                  ? "Not all engineering challenges fit a catalog product. When the application is too specific, the performance requirement too demanding or the operating environment too extreme — Hikade Technologies develops the system from scratch."
                  : "Ne každá inženýrská výzva se vejde do katalogového produktu. Když je aplikace příliš specifická nebo prostředí příliš extrémní — Hikade Technologies vyvíjí systém od základu."}
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                {en
                  ? "We cover the complete development cycle: requirements, architecture, mechanical design, electronics, embedded firmware, integration, testing, validation and documentation."
                  : "Pokrýváme kompletní vývojový cyklus: požadavky, architektura, konstrukční návrh, elektronika, firmware, integrace, testování, validace a dokumentace."}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {(en
                  ? ["Single-purpose machines","Test benches & rigs","Measurement systems","Mechatronic assemblies","Embedded control systems","Industrial prototypes","Validation hardware","Clean & vacuum systems"]
                  : ["Jednoúčelové stroje","Zkušební stolice","Měřicí systémy","Mechatronické sestavy","Vestavěné řídicí systémy","Průmyslové prototypy","Validační hardware","Čisté a vakuové systémy"]
                ).map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="text-[#63C3B5] flex-shrink-0 text-xs">→</span>{item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                {en ? "Discuss Your Project" : "Diskutovat váš projekt"}
              </Link>
            </div>
            <div className="space-y-4">
              <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/60">
                <h3 className="text-sm font-semibold text-[#63C3B5] mb-3">
                  {en ? "Engineering workflow" : "Inženýrský postup"}
                </h3>
                <div className="space-y-3">
                  {(en
                    ? [["01","Discover","Define requirements, environment, constraints"],["02","Define","Architecture, interfaces, validation scope"],["03","Design","Mechanical, electrical, firmware design"],["04","Develop","Manufacture, assemble, integrate, bring up"],["05","Validate","Test, verify, document"],["06","Deliver","System + documentation + integration support"]]
                    : [["01","Zjistit","Definice požadavků, prostředí, omezení"],["02","Definovat","Architektura, rozhraní, rozsah validace"],["03","Navrhnout","Konstrukční, elektrický a firmware návrh"],["04","Vyvinout","Výroba, montáž, integrace, oživení"],["05","Validovat","Testování, ověřování, dokumentace"],["06","Dodat","Systém + dokumentace + podpora integrace"]]
                  ).map(([step, label, val]) => (
                    <div key={step} className="flex items-start gap-3 text-xs">
                      <span className="font-mono text-[#63C3B5]/40 flex-shrink-0 w-5">{step}</span>
                      <span className="font-semibold text-white/70 flex-shrink-0 w-16">{label}</span>
                      <span className="text-white/40">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 border border-[#63C3B5]/15 rounded-lg bg-[#63C3B5]/5 text-xs text-white/50 leading-relaxed">
                <span className="text-[#63C3B5] font-semibold block mb-1">
                  {en ? "Standard deliverables" : "Standardní dodávka"}
                </span>
                {en
                  ? "Functional system · CAD + drawings · Electrical schematics · Firmware source · Test report · Installation manual · Risk analysis"
                  : "Funkční systém · CAD + výkresy · Elektrická schémata · Zdrojový kód firmware · Protokol o zkouškách · Návod k montáži · Analýza rizik"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {en ? "Need a system that is not in this portfolio?" : "Potřebujete systém, který není v tomto portfoliu?"}
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            {en
              ? "Customers come to Hikade when a standard catalog device is not enough and the solution requires integrated engineering across mechanics, electronics, software and validation."
              : "Zákazníci přicházejí k Hikade, když standardní katalogové zařízení nestačí a řešení vyžaduje integrované inženýrství napříč mechanikou, elektronikou, softwarem a validací."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              {en ? "Start a Custom Engineering Project" : "Zahájit zakázkový inženýrský projekt"}
            </Link>
            <Link href="/technologies" className="inline-block px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
              {en ? "View Technologies & Capabilities" : "Zobrazit technologie a schopnosti"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
