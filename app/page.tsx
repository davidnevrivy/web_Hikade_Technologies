"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  en: {
    heroEyebrow: "PATRON · BEETLE · ESA BIC Prague",
    heroTitle1: "Stratospheric Gimbals",
    heroTitle2: "for HAPS & Stratospheric Applications",
    heroTagline: "Precision two-axis gimbal platforms for the stratosphere",
    heroSub1: "Precision two-axis gimbal platforms built for the stratosphere. PATRON handles payloads up to 15 kg at 18–25 km altitude. BEETLE delivers the same core technology for lighter, more compact missions — both designed for HAPS.",
    heroSub2: "",
    cta1: "Explore Portfolio", cta2: "About Us", cta3: "Request Consultation",
    stat1: "Altitude", stat2: "Temperature", stat3: "Pressure",
    scroll: "SCROLL",
    whatBadge: "Engineering Portfolio", whatTitle: "What We Build",
    whatDesc: "Hikade Technologies focuses on complete technical systems for demanding applications where standard catalog solutions are not sufficient.",
    w1t: "Stratospheric Positioning Systems", w1d: "Two-axis gimbal platforms for HAPS, balloon platforms, optical payloads, antennas and customer-specific stratospheric payload integration.",
    w2t: "Clean & Vacuum Processing Systems", w2d: "AVPS and related systems for controlled cleaning, drying, assembly, lubrication, inspection and packaging of precision components.",
    w3t: "Custom Engineering", w3d: "Complete engineering systems combining mechanics, electronics, firmware, control logic and documentation. From concept to validated prototype.",
    w4t: "Industrial Testing Equipment", w4d: "Motor stands, material testing fixtures, measurement rigs, single-purpose machines and development hardware for demanding applications.",
    explore: "Explore",
    platformBadge: "Portfolio & Projects", platformTitle: "Our Products & Projects",
    platformDesc: "Proprietary technology platforms and custom engineering projects — from validated systems to early-stage concepts.",
    learnMore: "Learn more →", viewAll: "View full portfolio →",
    pDev: "In development", pDev2: "Development platform", pCfg: "Configurable system",
    patronDesc: "Configurable two-axis gimbal platform for demanding HAPS and stratospheric payloads requiring precise pointing and robust mechanical design.",
    beetleDesc: "Compact two-axis gimbal for smaller payloads, test flights, technology demonstrations and cost-sensitive stratospheric applications.",
    avpsDesc: "Modular clean and vacuum-compatible workstation for precision bearing processing, optics handling and contamination-controlled assembly.",
    cryoDesc: "Laboratory freeze-drying / lyophilization technology for controlled processing of sensitive biological, research and technical samples.",
    motorDesc: "Custom back-to-back motor-generator test system for development and validation of motors, drives and powertrain-related components.",
    ceLbl: "Non-Standard Projects", ceTitle: "Custom Engineering",
    ceP1: "Hikade Technologies also develops customer-specific engineering projects where standard catalog solutions are not sufficient. We cover the complete development cycle — from requirements and design through manufacturing, integration and validation to documentation.",
    ceItems: ["Custom test systems and measurement rigs","Mechatronic assemblies and single-purpose machines","Industrial prototypes and pre-series hardware","Embedded control systems and firmware","Mechanical-electrical-software integration","Technical documentation and validation packages"],
    ceCta: "Start a Custom Engineering Project",
    labLabel: "Engineering Lab · Brno",
    capBadge: "Engineering Depth", capTitle: "Core Capabilities",
    capDesc: "Hikade Technologies combines mechanical engineering, embedded systems, prototyping, testing and documentation as a single integrated team.",
    cap1t: "CAD Design & Mechanical Engineering", cap1d: "Parametric modelling, tolerance-aware design, DFM, DFA, payload integration and precise mechanical packaging.",
    cap2t: "Computational Analysis", cap2d: "Structural, thermal, modal and buckling analysis. Topology optimization. Risk reduction through simulation.",
    cap3t: "Rapid Prototyping", cap3d: "Full cycle: design → manufacture → assembly → bring-up → test → iterate. Fast development for functional prototypes.",
    cap4t: "Embedded Control", cap4d: "Real-time firmware, state machines, RS-485, Ethernet, actuator and sensor communication for complete system control.",
    cap5t: "Mechatronics & Integration", cap5d: "Mechanics, electronics, drives, sensors, cable routing, safety logic and system commissioning as one integrated system.",
    cap6t: "Technical Documentation", cap6d: "Test reports, installation and maintenance manuals, manufacturing documentation, risk analysis and validation packages.",
    techLink: "View full technology stack →",
    procBadge: "How We Work", procTitle: "Development Process",
    procDesc: "Structured but flexible — our six-step process scales from rapid prototyping to full engineering system development.",
    s1t: "Discover", s1d: "Technical constraints, operating environment, payload requirements, integration limitations and customer objectives.",
    s2t: "Define", s2d: "System requirements, architecture, success criteria, interface definitions, validation scope and risk areas.",
    s3t: "Design", s3d: "Mechanical design, control architecture, electronics, firmware, cable routing, DFM and validation strategy.",
    s4t: "Develop", s4d: "Rapid prototyping, manufacturing, assembly, firmware implementation, system integration and functional bring-up.",
    s5t: "Validate", s5d: "Functional tests, mechanical verification, environmental checks, documentation, customer review and performance verification.",
    s6t: "Deliver", s6d: "Final prototype or system, technical documentation, manuals, integration support and roadmap for next development phase.",
    evBadge: "Presentations & Trade Fairs", evTitle: "Where We Present Our Technologies",
    evDesc: "Hikade Technologies participates in aerospace and engineering trade fairs, technology events, HAPS conferences and startup showcases. Follow our presence at key industry events across Europe.",
    evItems: ["Aerospace and HAPS technology conferences","International engineering trade fairs","ESA-related events and showcases","Startup and deep-tech presentations","Industry-specific technology days"],
    evLink: "View Events & Trade Fairs →",
    ev1t: "Aerospace Events", ev1d: "HAPS, stratospheric and space technology showcases",
    ev2t: "Engineering Fairs", ev2d: "Industrial and mechatronics trade exhibitions",
    ev3t: "ESA Programs", ev3d: "Innovation and incubation program events",
    ev4t: "Tech Conferences", ev4d: "Deep-tech and startup ecosystem presentations",
    labCity: "Brno, Czech Republic",
    labTitle: "Engineering in the heart of the Czech technical ecosystem",
    labDesc: "Based in Brno — a city with strong technical universities, R&D organizations and engineering companies — Hikade Technologies combines local manufacturing with aerospace-relevant development capabilities.",
    ctaBadge: "Start a Technical Discussion",
    ctaTitle: "Have a payload, process or engineering challenge that does not fit a standard solution?",
    ctaDesc: "Send us your requirements, constraints and intended operating environment. We will help define a technically realistic path from concept to prototype or validated system.",
    ctaBtn1: "Request Technical Consultation", ctaBtn2: "Contact Hikade Technologies",
  },
  cs: {
    heroEyebrow: "PATRON · BEETLE · ESA BIC Prague",
    heroTitle1: "Stratosférické gimbaly",
    heroTitle2: "pro HAPS a stratosferické aplikace",
    heroTagline: "Přesné dvouosé gimbalové platformy pro stratosféru",
    heroSub1: "Přesné dvouosé gimbalové platformy konstruované pro stratosféru. PATRON nese payloady až 15 kg ve výšce 18–25 km. BEETLE přináší stejnou technologii pro lehčí a kompaktnější mise — obě platformy navrženy pro HAPS.",
    heroSub2: "",
    cta1: "Prozkoumat portfolio", cta2: "O nás", cta3: "Technická konzultace",
    stat1: "Výška", stat2: "Teplota", stat3: "Tlak",
    scroll: "SCROLL",
    whatBadge: "Hlavní oblasti engineeringu", whatTitle: "Co vyvíjíme",
    whatDesc: "Hikade Technologies se zaměřuje na kompletní technické systémy pro náročné aplikace, kde standardní katalogová řešení nestačí.",
    w1t: "Stratosferické polohovací systémy", w1d: "Dvouosé gimbalové platformy pro HAPS, balonové platformy, optické payloady, antény a zákaznicky specifické integrace stratosferických payloadů.",
    w2t: "Čisté a vakuové zpracovatelské systémy", w2d: "AVPS a příbuzné systémy pro řízené čištění, sušení, montáž, mazání, kontrolu a balení přesných součástek.",
    w3t: "Zakázkový vývoj", w3d: "Kompletní inženýrské systémy kombinující mechaniku, elektroniku, firmware, řídicí logiku a dokumentaci. Od konceptu k validovanému prototypu.",
    w4t: "Průmyslové testovací zařízení", w4d: "Motorové zkušební stolice, přípravky pro zkoušení materiálů, měřicí přípravky, jednoúčelové stroje a vývojový hardware pro náročné aplikace.",
    explore: "Prozkoumat",
    platformBadge: "Portfolio & projekty", platformTitle: "Naše produkty & projekty",
    platformDesc: "Proprietární technologické platformy a zakázkové inženýrské projekty — od validovaných systémů po raná stádia vývoje.",
    learnMore: "Více informací →", viewAll: "Zobrazit celé portfolio →",
    pDev: "Ve vývoji", pDev2: "Vývojová platforma", pCfg: "Konfigurovatelný systém",
    patronDesc: "Konfigurovatelná dvouosá gimbalová platforma pro náročné HAPS a stratosferické payloady vyžadující přesné natáčení a robustní mechanickou konstrukci.",
    beetleDesc: "Kompaktní dvouosý gimbal pro menší payloady, zkušební lety, technologické demonstrace a cenově citlivé stratosferické aplikace.",
    avpsDesc: "Modulární čisté a vakuově kompatibilní pracoviště pro zpracování přesných ložisek, práci s optikou a montáž v řízeném prostředí.",
    cryoDesc: "Laboratorní technologie mrazové sušení / lyofilizace pro řízené zpracování citlivých biologických, výzkumných a technických vzorků.",
    motorDesc: "Zakázková testovací stolice back-to-back motor-generátor pro vývoj a validaci motorů, pohonů a komponent pohonného ústrojí.",
    ceLbl: "Nestandardní projekty", ceTitle: "Zakázkový vývoj",
    ceP1: "Hikade Technologies vyvíjí rovněž zákaznicky specifické inženýrské projekty, kde standardní katalogová řešení nestačí. Pokrýváme kompletní vývojový cyklus — od požadavků a návrhu přes výrobu, integraci a validaci až po dokumentaci.",
    ceItems: ["Zakázková testovací zařízení a měřicí přípravky","Mechatronické sestavy a jednoúčelové stroje","Průmyslové prototypy a předsériový hardware","Vestavěné řídicí systémy a firmware","Integrace mechaniky, elektroniky a softwaru","Technická dokumentace a validační balíčky"],
    ceCta: "Zahájit zakázkový projekt",
    labLabel: "Vývojová laboratoř · Brno",
    capBadge: "Technická hloubka", capTitle: "Klíčové schopnosti",
    capDesc: "Hikade Technologies kombinuje strojní engineering, vestavěné systémy, prototypování, testování a dokumentaci jako jeden integrovaný tým.",
    cap1t: "CAD design a strojní engineering", cap1d: "Parametrické modelování, tolerance, DFM, DFA, integrace payloadu a přesné mechanické balení.",
    cap2t: "Výpočetní analýza", cap2d: "Strukturální, tepelná, modální a vzpěrnostní analýza. Topologická optimalizace. Snižování rizik pomocí simulace.",
    cap3t: "Rychlé prototypování", cap3d: "Celý cyklus: návrh → výroba → montáž → oživení → test → iterace. Rychlý vývoj funkčních prototypů.",
    cap4t: "Vestavěné řídicí systémy", cap4d: "Firmware v reálném čase, stavové automaty, RS-485, Ethernet, komunikace s aktuátory a senzory.",
    cap5t: "Mechatronika a integrace", cap5d: "Mechanika, elektronika, pohony, senzory, vedení kabelů, bezpečnostní logika a zprovoznění systému jako celek.",
    cap6t: "Technická dokumentace", cap6d: "Testovací zprávy, instalační a servisní manuály, výrobní dokumentace, analýza rizik a validační balíčky.",
    techLink: "Zobrazit kompletní technologický stack →",
    procBadge: "Jak pracujeme", procTitle: "Proces vývoje",
    procDesc: "Strukturovaný, ale flexibilní — náš šestikrokový proces se přizpůsobí od rychlého prototypování až po vývoj komplexního inženýrského systému.",
    s1t: "Zjistit", s1d: "Technická omezení, provozní prostředí, požadavky na payload, integrační omezení a cíle zákazníka.",
    s2t: "Definovat", s2d: "Systémové požadavky, architektura, kritéria úspěchu, definice rozhraní, rozsah validace a rizikové oblasti.",
    s3t: "Navrhnout", s3d: "Mechanický návrh, řídicí architektura, elektronika, firmware, vedení kabelů, DFM a strategie validace.",
    s4t: "Vyvinout", s4d: "Rychlé prototypování, výroba, montáž, implementace firmwaru, systémová integrace a funkční oživení.",
    s5t: "Validovat", s5d: "Funkční testy, mechanická verifikace, environmentální zkoušky, dokumentace, zákaznická revize a ověření výkonu.",
    s6t: "Dodat", s6d: "Finální prototyp nebo systém, technická dokumentace, manuály, podpora integrace a plán pro další vývojovou fázi.",
    evBadge: "Prezentace a veletrhy", evTitle: "Kde prezentujeme naše technologie",
    evDesc: "Hikade Technologies se účastní leteckých a inženýrských veletrhů, technologických akcí, HAPS konferencí a startupových akcí. Sledujte naši přítomnost na klíčových průmyslových akcích v Evropě.",
    evItems: ["Konference zaměřené na letectví a HAPS technologie","Mezinárodní inženýrské veletrhy","Akce a prezentace v rámci ESA","Startupové a deep-tech prezentace","Oborové technologické dny"],
    evLink: "Veletrhy a akce →",
    ev1t: "Aerospace akce", ev1d: "HAPS, stratosferické a kosmické technologické akce",
    ev2t: "Inženýrské veletrhy", ev2d: "Průmyslové výstavy a mechatronické veletrhy",
    ev3t: "ESA programy", ev3d: "Inovační a inkubační programy ESA",
    ev4t: "Tech konference", ev4d: "Deep-tech a startupové ekosystémové prezentace",
    labCity: "Brno, Česká republika",
    labTitle: "Engineering v srdci českého technického ekosystému",
    labDesc: "Se sídlem v Brně — městě se silnými technickými univerzitami, výzkumnými organizacemi a inženýrskými společnostmi — Hikade Technologies kombinuje lokální výrobu s aerospace-relevantními vývojovými kapacitami.",
    ctaBadge: "Zahájit technickou diskusi",
    ctaTitle: "Máte payload, proces nebo technický problém, který se nehodí do standardního řešení?",
    ctaDesc: "Zašlete nám vaše požadavky, omezení a zamýšlené provozní prostředí. Pomůžeme vám definovat technicky realistickou cestu od konceptu k prototypu nebo validovanému systému.",
    ctaBtn1: "Technická konzultace", ctaBtn2: "Kontaktujte Hikade Technologies",
  },
} as const;

export default function HomePage() {
  const { lang } = useLanguage();
  const t = T[lang];

  const platforms = [
    { name: "BEETLE",   category: lang === "en" ? "Lightweight HAPS gimbal" : "Lehký HAPS gimbal",          desc: t.beetleDesc, status: t.pDev,  statusColor: "text-[#82D5CA]",   href: "/products/beetle",   image: "/assets/products/beetle/beetle-ai-3.png",            payload: "~4.5 kg",  mass: "~2.5 kg",                              axes: "2-axis" },
    { name: "PATRON",   category: lang === "en" ? "High-precision HAPS gimbal" : "Vysoce přesný HAPS gimbal", desc: t.patronDesc, status: t.pDev,  statusColor: "text-[#82D5CA]",    href: "/products/patron",   image: "/assets/products/patron/patron-real-bg.png",          payload: "15 kg",   mass: "6.5 kg",                                axes: "2-axis" },
    { name: "AVPS",     category: lang === "en" ? "Clean processing workstation" : "Čisté zpracovatelské pracoviště", desc: t.avpsDesc, status: t.pDev, statusColor: "text-[#82D5CA]", href: "/products/avps",   image: "/assets/products/avps/avps-1.png",                   payload: "ISO 8→5",  mass: lang === "en" ? "Modular" : "Modulární", axes: lang === "en" ? "Multi-zone" : "Více zón" },
    { name: "CryoLyze", category: lang === "en" ? "Laboratory freeze-drying" : "Laboratorní mrazové sušení",    desc: t.cryoDesc, status: t.pDev2, statusColor: "text-yellow-400",    href: "/products/cryolyze", image: "/assets/products/cryolyze/cryolyze-1.png",            payload: "< 3.5 kPa", mass: "LN2",                                 axes: "AISI 316L" },
  ];

  const caps = [
    { title: t.cap1t, desc: t.cap1d, icon: "◈" },
    { title: t.cap2t, desc: t.cap2d, icon: "⊞" },
    { title: t.cap3t, desc: t.cap3d, icon: "◫" },
    { title: t.cap4t, desc: t.cap4d, icon: "⊟" },
    { title: t.cap5t, desc: t.cap5d, icon: "⊕" },
    { title: t.cap6t, desc: t.cap6d, icon: "≡" },
  ];

  const steps = [
    { step: "01", title: t.s1t, desc: t.s1d },
    { step: "02", title: t.s2t, desc: t.s2d },
    { step: "03", title: t.s3t, desc: t.s3d },
    { step: "04", title: t.s4t, desc: t.s4d },
    { step: "05", title: t.s5t, desc: t.s5d },
    { step: "06", title: t.s6t, desc: t.s6d },
  ];

  const whatWeBuild = [
    { label: "01", title: t.w1t, desc: t.w1d, href: "/products", icon: "⊕" },
    { label: "02", title: t.w2t, desc: t.w2d, href: "/products/avps", icon: "◎" },
    { label: "03", title: t.w3t, desc: t.w3d, href: "/products#industrial-systems", icon: "◈" },
    { label: "04", title: t.w4t, desc: t.w4d, href: "/products/testing-fixtures", icon: "◇" },
  ];

  return (
    <div className="text-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/stratosphere-real.jpg" alt="" aria-hidden fill className="object-cover object-center opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18261D] via-[#18261D]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18261D]/20 via-transparent to-[#18261D]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 items-center">

            {/* ── LEFT: text ── */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight mb-5 drop-shadow-lg">
                <span className="text-white">{t.heroTitle1}</span><br />
                <span className="text-[#82D5CA]">{t.heroTitle2}</span>
              </h1>
              <p className="text-sm lg:text-base text-white leading-relaxed mb-8">{t.heroSub1}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="px-5 py-2.5 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors text-sm">{t.cta1}</Link>
                <Link href="/about" className="px-5 py-2.5 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/60 hover:text-[#82D5CA] transition-colors text-sm">{t.cta2}</Link>
                <Link href="/contact" className="px-5 py-2.5 border border-white/15 text-white font-semibold rounded hover:border-white/35 hover:text-white transition-colors text-sm">{t.cta3}</Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
                {[
                  { val: "18–25 km",     label: t.stat1 },
                  { val: "−60 / +80 °C", label: t.stat2 },
                  { val: "2.5–7.5 kPa",  label: t.stat3 },
                ].map((s) => (
                  <div key={s.val}>
                    <div className="text-base font-bold font-mono text-[#82D5CA]">{s.val}</div>
                    <div className="text-[10px] text-white mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: gimbal slideshow ── */}
            <div className="relative mt-6 lg:mt-0 px-4 lg:px-6">
              {/* Mint ambient glow behind card */}
              <div className="absolute -inset-4 bg-[#82D5CA]/8 rounded-2xl blur-2xl pointer-events-none" />

              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/assets/products/patron/patron-slide-1.png"
                  alt="PATRON Gimbal"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white">
          <span className="text-xs font-mono tracking-widest">{t.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-24 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.whatBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.whatTitle}</h2>
            <p className="text-white max-w-xl">{t.whatDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeBuild.map((item) => (
              <Link key={item.label} href={item.href} className="group block p-8 border border-white/10 rounded-lg bg-[#18261D]/60 product-card hover:border-[#82D5CA]/40">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#82D5CA]/30 rounded flex items-center justify-center text-white text-lg">{item.icon}</div>
                  <div>
                    <div className="text-xs font-mono text-[#82D5CA] mb-2">{item.label}</div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-[#82D5CA] transition-colors">{item.title}</h3>
                    <p className="text-sm text-white leading-relaxed">{item.desc}</p>
                    <div className="mt-4 text-xs text-[#82D5CA] flex items-center gap-1"><span>{t.explore}</span><span>→</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PLATFORMS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.platformBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.platformTitle}</h2>
            <p className="text-white max-w-xl">{t.platformDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((p) => (
              <Link key={p.name} href={p.href} className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#18261D]/70 product-card hover:border-[#82D5CA]/40">
                <div className="relative h-48 overflow-hidden bg-[#3C271E]/30">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18261D]/60" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#82D5CA] transition-colors">{p.name}</h3>
                      <span className="text-xs text-white">{p.category}</span>
                    </div>
                    <span className={`text-xs font-mono ${p.statusColor}`}>●</span>
                  </div>
                  <p className="text-sm text-white leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[{ label: lang === "en" ? "PAYLOAD" : "PAYLOAD", val: p.payload }, { label: lang === "en" ? "MASS" : "HMOTNOST", val: p.mass }, { label: lang === "en" ? "AXES" : "OSY", val: p.axes }].map((spec) => (
                      <div key={spec.label} className="bg-[#82D5CA]/5 border border-[#82D5CA]/10 rounded p-2 text-center">
                        <div className="text-[9px] font-mono text-white mb-0.5">{spec.label}</div>
                        <div className="text-xs font-semibold">{spec.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-white flex items-center justify-between">
                    <span className={`font-mono ${p.statusColor}`}>{p.status}</span>
                    <span className="text-white">{t.learnMore}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 border border-white/20 text-white hover:text-white hover:border-white/40 px-6 py-3 rounded text-sm transition-colors">
              {t.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CUSTOM ENGINEERING ── */}
      <section className="py-24 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="telemetry-badge mb-4 inline-block">{t.ceLbl}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.ceTitle}</h2>
              <p className="text-white leading-relaxed mb-6">{t.ceP1}</p>
              <ul className="grid grid-cols-1 gap-2 mb-8">
                {t.ceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <span className="text-[#82D5CA] mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/products#industrial-systems" className="inline-block px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                {t.ceCta}
              </Link>
            </div>
            <div className="relative h-72 lg:h-96 rounded-lg overflow-hidden border border-white/10">
              <Image src="/assets/products/industrial/custom-engineering-johny-512.png" alt="Custom Engineering" fill className="object-cover object-center opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#18261D]/80 to-transparent" />
              <div className="absolute bottom-4 left-4"><span className="telemetry-badge">{t.labLabel}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.capBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.capTitle}</h2>
            <p className="text-white max-w-xl">{t.capDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caps.map((cap) => (
              <div key={cap.title} className="p-6 border border-white/10 rounded-lg bg-[#1F2019]/50 hover:border-[#82D5CA]/30 transition-colors">
                <div className="text-2xl text-[#82D5CA] mb-4">{cap.icon}</div>
                <h3 className="text-base font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-white leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/technologies" className="text-sm text-white hover:text-white transition-colors">{t.techLink}</Link>
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT PROCESS ── */}
      <section className="py-24 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.procBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.procTitle}</h2>
            <p className="text-white max-w-xl">{t.procDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="p-6 border border-white/10 rounded-lg">
                <div className="text-4xl font-mono font-bold text-white mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-[#82D5CA] mb-2">{s.title}</h3>
                <p className="text-sm text-white leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS TEASER ── */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="telemetry-badge mb-4 inline-block">{t.evBadge}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.evTitle}</h2>
              <p className="text-white leading-relaxed mb-6">{t.evDesc}</p>
              <ul className="grid grid-cols-1 gap-2 mb-8">
                {t.evItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <span className="text-[#82D5CA] mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/about#events" className="inline-flex items-center gap-2 text-sm text-white hover:text-white transition-colors font-medium">{t.evLink}</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: t.ev1t, desc: t.ev1d }, { title: t.ev2t, desc: t.ev2d },
                { title: t.ev3t, desc: t.ev3d }, { title: t.ev4t, desc: t.ev4d },
              ].map((card) => (
                <div key={card.title} className="p-5 border border-white/10 rounded-lg bg-[#1F2019]/50 hover:border-[#82D5CA]/30 transition-colors">
                  <h4 className="text-sm font-semibold mb-2 text-[#82D5CA]">{card.title}</h4>
                  <p className="text-xs text-white leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LAB PHOTO ── */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <Image src="/assets/team/czech-space-stand.jpg" alt="Hikade Technologies Lab" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18261D] via-[#18261D]/70 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-lg">
            <span className="telemetry-badge mb-4 block w-fit">{t.labCity}</span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">{t.labTitle}</h2>
            <p className="text-white text-sm leading-relaxed">{t.labDesc}</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#1F2019]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="telemetry-badge mb-6 inline-block">{t.ctaBadge}</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-white leading-relaxed mb-10">{t.ctaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">{t.ctaBtn1}</Link>
            <Link href="/contact" className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/60 hover:text-[#82D5CA] transition-colors">{t.ctaBtn2}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
