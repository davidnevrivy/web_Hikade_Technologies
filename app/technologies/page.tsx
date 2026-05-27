"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const capabilityIcons = ["◈", "⊞", "◫", "⊟", "⊕", "≡"];
const capabilityIds = ["cad", "analysis", "prototyping", "embedded", "mechatronics", "documentation"];

const T = {
  en: {
    headerBadge: "Engineering Depth",
    h1: "Technologies & Core Capabilities",
    headerDesc: "Hikade Technologies is not a design-only office. We combine mechanical engineering, embedded systems, prototyping, testing and documentation as a single engineering team — applied to each project from concept to delivered system.",
    labQuoteBadge: "ENGINEERING PHILOSOPHY",
    labQuote: "From rapid prototyping to validated systems — the full engineering cycle in one team.",
    validationBadge: "Validation-Oriented Engineering",
    validationH2: "Validation is part of the design logic, not the final step",
    validationP1: "Hikade Technologies designs systems with testing and validation in mind from the beginning. For aerospace-relevant, HAPS, vacuum, clean-environment and industrial R&D systems, validation is not a final formality but part of the design logic.",
    validationP2: "This means testability, access to critical measurement points, sensor placement, calibration strategy, documentation and process repeatability are considered during the design phase — not after the prototype is assembled.",
    validationItems: ["Testability", "Calibration strategy", "Sensor placement", "Process repeatability", "Access to critical points", "Environmental considerations", "Documentation traceability", "Validation scope planning"],
    ctaH2: "Apply these capabilities to your project",
    ctaP: "Whether you need a complete system from concept to prototype or a specific engineering capability for your project — start a technical discussion with us.",
    ctaBtn1: "Request Technical Consultation",
    ctaBtn2: "Explore Solutions",
    capabilities: [
      {
        title: "CAD Design & Mechanical Engineering",
        desc: "Mechanical design at Hikade Technologies is not isolated 3D modelling. It is a system-level decision that affects precision, stiffness, mass, assembly, serviceability, cable routing, thermal behavior and testability from the first concept.",
        items: ["Conceptual modelling and product design", "Parametric modelling and assembly management", "Tolerance-aware engineering and interface design", "Design for manufacturing (DFM) and design for assembly (DFA)", "Payload integration and mechanical packaging", "Serviceability and maintainability design", "3D rendering and manufacturing documentation", "Precision mechanical assemblies"],
      },
      {
        title: "Computational Analysis",
        desc: "Simulation and computational analysis reduce design risk, speed up development cycles and help verify structural decisions before the first prototype. Analysis is used to optimize mass, verify stiffness, find critical load paths and identify failure modes.",
        items: ["Static structural and stress analysis", "Strain, displacement and buckling analysis", "Contact and dynamic analysis", "Modal and harmonic analysis", "Thermal analysis and thermal management", "Topology optimization", "Kinematics and mechanism analysis", "Mechanical system optimization"],
      },
      {
        title: "Rapid Prototyping",
        desc: "Rapid prototyping at Hikade Technologies means the complete development cycle — not just printing a part. It includes design, manufacturing, assembly, bring-up, functional testing, iteration and next prototype. The goal is a working functional system in the shortest possible time.",
        items: ["Fast development cycles and iterative design", "3D printing for functional and structural models", "CNC machining and precision milling", "Surface treatment and finishing", "Laboratory assembly and integration", "Functional bring-up and integration testing", "Prototype refinement and iteration", "Early customer validation"],
      },
      {
        title: "Embedded Control & Firmware",
        desc: "Embedded control is developed as part of the complete mechanical-electrical system, not as a separate software task. Control architecture, communication interfaces, safety logic and actuator integration are designed together with the mechanical structure from the start.",
        items: ["Embedded firmware development", "Real-time control and state machines", "RS-485, Ethernet and other communication interfaces", "Watchdog logic and safety / fault-state handling", "Data acquisition and signal processing", "Communication with drives and sensors", "Control interfaces and bootloader concepts", "Hardware-software integration and commissioning"],
      },
      {
        title: "Mechatronics & System Integration",
        desc: "Mechatronic integration means bringing mechanics, electronics, firmware, software, sensors, actuators and cable routing together into a single working system. This is where isolated engineering decisions become real products.",
        items: ["Custom test stands and measurement devices", "Single-purpose machines and automated workstations", "Actuator and sensor integration", "Motor control and drive integration", "Control cabinet design and wiring", "Harness and cable routing integration", "Safety logic implementation", "System commissioning and functional testing"],
      },
      {
        title: "Technical Documentation",
        desc: "Complete technical documentation is part of every project deliverable. We produce documentation that enables the customer to operate, maintain, understand and further develop the delivered system.",
        items: ["Analytical reports and risk analysis", "Test reports and validation documentation", "Installation and user manuals", "Maintenance and service instructions", "Manufacturing and assembly documentation", "Customer handover documentation", "Validation packages (where applicable)"],
      },
    ],
  },
  cs: {
    headerBadge: "Technická hloubka",
    h1: "Technologie a klíčové schopnosti",
    headerDesc: "Hikade Technologies není pouze projekční kancelář. Kombinujeme strojní inženýrství, vestavěné systémy, prototypování, testování a dokumentaci jako jeden inženýrský tým — aplikovaný na každý projekt od konceptu po dodaný systém.",
    labQuoteBadge: "INŽENÝRSKÁ FILOZOFIE",
    labQuote: "Od rychlého prototypování po validované systémy — kompletní vývojový cyklus v jednom týmu.",
    validationBadge: "Validačně orientované inženýrství",
    validationH2: "Validace je součástí návrhové logiky, nikoli posledním krokem",
    validationP1: "Hikade Technologies navrhuje systémy s ohledem na testování a validaci od samého začátku. U systémů relevantních pro letectví, HAPS, vakuum, čistá prostředí a průmyslový výzkum není validace pouhá formalita, ale součást návrhové logiky.",
    validationP2: "To znamená, že testovatelnost, přístup ke kritickým měřicím bodům, umístění senzorů, kalibrační strategie, dokumentace a opakovatelnost procesu jsou zohledňovány ve fázi návrhu — nikoli po sestavení prototypu.",
    validationItems: ["Testovatelnost", "Kalibrační strategie", "Umístění senzorů", "Opakovatelnost procesu", "Přístup ke kritickým bodům", "Environmentální aspekty", "Sledovatelnost dokumentace", "Plánování rozsahu validace"],
    ctaH2: "Aplikujte tyto schopnosti na váš projekt",
    ctaP: "Ať potřebujete kompletní systém od konceptu po prototyp nebo specifickou inženýrskou schopnost pro váš projekt — zahajte s námi technickou diskuzi.",
    ctaBtn1: "Požádat o technickou konzultaci",
    ctaBtn2: "Prozkoumat řešení",
    capabilities: [
      {
        title: "CAD Design & Mechanical Engineering",
        desc: "Konstrukční návrh v Hikade Technologies není izolované 3D modelování. Je to rozhodnutí na systémové úrovni, které od prvního konceptu ovlivňuje přesnost, tuhost, hmotnost, montáž, servisovatelnost, vedení kabelů, tepelné chování a testovatelnost.",
        items: ["Konceptuální modelování a produktový design", "Parametrické modelování a správa sestav", "Tolerančně vědomé inženýrství a návrh rozhraní", "Design pro výrobu (DFM) a design pro montáž (DFA)", "Integrace payloadu a mechanické uložení", "Návrh pro servisovatelnost a udržovatelnost", "3D vizualizace a výrobní dokumentace", "Přesné mechanické sestavy"],
      },
      {
        title: "Výpočtové analýzy",
        desc: "Simulace a výpočtové analýzy snižují riziko návrhu, urychlují vývojové cykly a pomáhají ověřovat konstrukční rozhodnutí před prvním prototypem. Analýzy slouží k optimalizaci hmotnosti, ověření tuhosti, nalezení kritických cest zatížení a identifikaci módů selhání.",
        items: ["Statická strukturální a napěťová analýza", "Analýza přetvoření, deformací a vzpěru", "Kontaktní a dynamická analýza", "Modální a harmonická analýza", "Tepelná analýza a tepelný management", "Topologická optimalizace", "Kinematická analýza mechanismů", "Optimalizace mechanického systému"],
      },
      {
        title: "Rychlé prototypování",
        desc: "Rychlé prototypování v Hikade Technologies znamená kompletní vývojový cyklus — nejen tisk součásti. Zahrnuje návrh, výrobu, montáž, oživení, funkční testování, iteraci a další prototyp. Cílem je funkční systém v co nejkratším čase.",
        items: ["Rychlé vývojové cykly a iterativní design", "3D tisk funkčních a strukturálních modelů", "CNC obrábění a přesné frézování", "Povrchová úprava a dokončování", "Laboratorní montáž a integrace", "Funkční oživení a integrační testování", "Zdokonalování a iterace prototypu", "Raná zákaznická validace"],
      },
      {
        title: "Vestavěné řídicí systémy a firmware",
        desc: "Vestavěné řízení je vyvíjeno jako součást kompletního mechanicko-elektrického systému, nikoli jako oddělený softwarový úkol. Řídicí architektura, komunikační rozhraní, bezpečnostní logika a integrace pohonů jsou navrhovány spolu s mechanickou konstrukcí od samého začátku.",
        items: ["Vývoj vestavěného firmware", "Řízení v reálném čase a stavové automaty", "RS-485, Ethernet a další komunikační rozhraní", "Watchdog logika a bezpečnostní / poruchové stavy", "Sběr dat a zpracování signálů", "Komunikace s pohony a senzory", "Řídicí rozhraní a koncepty bootloaderu", "Integrace hardware-software a uvádění do provozu"],
      },
      {
        title: "Mechatronika a systémová integrace",
        desc: "Mechatronická integrace znamená propojení mechaniky, elektroniky, firmware, softwaru, senzorů, pohonů a kabeláže do jediného funkčního systému. Zde se izolovaná inženýrská rozhodnutí mění v reálné produkty.",
        items: ["Zakázkové zkušební stolice a měřicí zařízení", "Jednoúčelové stroje a automatizované pracoviště", "Integrace pohonů a senzorů", "Řízení motorů a integrace měničů", "Návrh a zapojení rozvaděče", "Integrace kabelového svazku a vedení kabelů", "Implementace bezpečnostní logiky", "Uvádění systémů do provozu a funkční testování"],
      },
      {
        title: "Technická dokumentace",
        desc: "Kompletní technická dokumentace je součástí každého dodávaného projektu. Vytváříme dokumentaci, která zákazníkovi umožňuje provozovat, udržovat, rozumět a dále rozvíjet dodaný systém.",
        items: ["Analytické zprávy a analýza rizik", "Protokoly o zkouškách a validační dokumentace", "Návody k instalaci a uživatelské příručky", "Pokyny pro údržbu a servis", "Výrobní a montážní dokumentace", "Předávací dokumentace zákazníkovi", "Validační balíčky (dle rozsahu)"],
      },
    ],
  },
} as const;

export default function TechnologiesPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="text-white pt-20">
      <section className="py-20 bg-[#1F2019] tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="telemetry-badge mb-4 inline-block">{t.headerBadge}</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.h1}</h1>
          <p className="text-lg text-white max-w-2xl">{t.headerDesc}</p>
        </div>
      </section>

      <section className="relative h-64 lg:h-72 overflow-hidden">
        <Image src="/assets/lab/lab-electronics.jpg" alt="Hikade Technologies engineering lab" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18261D] via-[#18261D]/60 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6 lg:px-8 max-w-7xl mx-auto">
          <div>
            <p className="text-[#82D5CA] font-mono text-xs mb-2">{t.labQuoteBadge}</p>
            <p className="text-xl lg:text-2xl font-semibold max-w-lg">{t.labQuote}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {t.capabilities.map((cap, i) => (
              <div key={capabilityIds[i]} className={`grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 ${i < t.capabilities.length - 1 ? "border-b border-white/10" : ""}`}>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl text-white">{capabilityIcons[i]}</span>
                    <h2 className="text-xl font-bold">{cap.title}</h2>
                  </div>
                  <p className="text-white leading-relaxed text-sm">{cap.desc}</p>
                </div>
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cap.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 p-3 border border-white/8 rounded bg-[#1F2019]/50 text-sm text-white">
                        <span className="text-white flex-shrink-0 mt-0.5 text-xs">→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">{t.validationBadge}</span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">{t.validationH2}</h2>
            <div className="space-y-4 text-white leading-relaxed mb-8">
              <p>{t.validationP1}</p>
              <p>{t.validationP2}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.validationItems.map((v) => (
                <div key={v} className="p-3 border border-[#82D5CA]/15 rounded bg-[#82D5CA]/5 text-xs text-white text-center">{v}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">{t.ctaH2}</h2>
          <p className="text-white leading-relaxed mb-8">{t.ctaP}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
              {t.ctaBtn1}
            </Link>
            <Link href="/positioning-systems" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
