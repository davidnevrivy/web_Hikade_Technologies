"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  en: {
    heroBadge: "Engineering Company · Brno",
    h1: "Engineering company for advanced mechatronic systems and extreme-environment applications.",
    heroSub: "Hikade Technologies s.r.o. — Brno, Czech Republic",
    whoH2: "Who We Are",
    whoP1: "Hikade Technologies is a Czech engineering company based in Brno, focused on advanced engineering, rapid prototyping and development of complete mechatronic systems for demanding industrial, aerospace, HAPS, laboratory and research applications.",
    whoP2: "We develop complete technical systems combining mechanical engineering, electronics, embedded firmware, sensor integration, actuators and drives, control logic, testing, validation and technical documentation. The output is not a model or a report — it is a working, documented system.",
    whoP3: "The company was founded with a clear technical direction: to develop engineering hardware for environments where mass, precision, pressure, temperature, cleanliness, reliability and integration constraints define the challenge — and where standard catalog solutions are not sufficient.",
    whoImgBadge: "Purkyňova, Brno · Czech Republic",
    skillsBadge: "What We Are Good At",
    skillsH2: "Skills & Expertise",
    skillsP: "Specific engineering areas where Hikade Technologies has built focused expertise through the development of demanding real-world systems.",
    whatH2: "What We Develop",
    philH2: "Engineering Philosophy",
    philP1: "Hikade Technologies approaches engineering from a systems perspective. A mechanical design is not just a 3D model — it is a set of decisions that affect precision, stiffness, thermal behavior, cable routing, assembly sequence, testability and maintenance access simultaneously.",
    philP2: "We develop systems where validation and testability are considered from the concept phase — not added as an afterthought. For aerospace-relevant, HAPS, vacuum and clean-environment systems, this approach reduces risk and accelerates development cycles.",
    philP3: "The company operates as a development partner — not as a traditional manufacturing subcontractor. Customers work with us on requirement definition, system architecture and validation scope.",
    philPillars: [
      { val: "Systems thinking", desc: "Every design decision affects multiple subsystems" },
      { val: "Validation first", desc: "Testability is designed in, not added later" },
      { val: "Full delivery", desc: "Working system + documentation, not just drawings" },
      { val: "Partnership", desc: "We define requirements together with the customer" },
    ],
    galleryLabel: "Hardware & Development",
    eventsBadge: "Presentations & Trade Fairs",
    eventsH2: "Events & Trade Fairs",
    eventsP: "Hikade Technologies presents its engineering platforms and capabilities at aerospace conferences, international trade fairs and innovation showcases across Europe.",
    brnoH2: "Brno Engineering Ecosystem",
    brnoP1: "Brno is home to Brno University of Technology (VUT), Masaryk University and a dense ecosystem of industrial and R&D companies — one of the strongest technical environments in Central Europe.",
    brnoP2: "Hikade Technologies is based at Purkyňova 2836/79A in Brno, in close proximity to university and innovation infrastructure that enables access to technical expertise, machining, testing and collaboration with research institutions.",
    brnoAddrLabel: "ADDRESS",
    esaH2: "ESA Business Incubation Centre",
    esaP1: "Hikade Technologies is a participant in the ESA Business Incubation Centre Czech Republic program — one of Europe's leading space incubation networks supporting companies developing technologies relevant to space and HAPS applications.",
    esaP2: "Participation reflects the technical relevance of our stratospheric positioning and precision engineering work within the European aerospace and space ecosystem.",
    esaNote: "ESA BIC Prague — ESA Business Incubation Centre Czech Republic. Selected development activities may additionally be supported by Czech national innovation programs.",
    ctaH2: "Work with us on your engineering challenge",
    ctaP: "Whether you have a payload, a process or an engineering problem that does not fit a catalog solution — start a technical discussion.",
    ctaBtn1: "Contact Hikade Technologies",
    ctaBtn2: "Explore Positioning Systems",
    skills: [
      { title: "Precision Mechanics for Extreme Environments", desc: "Material selection, lubrication, tribology and structural design for low-pressure, low-temperature and high-vibration conditions. Our designs account for the actual operating environment — not just room-temperature performance.", icon: "⊕" },
      { title: "Full-Stack Mechatronics", desc: "Mechanical design, electronics, firmware, cable routing, control logic and system integration handled as one interconnected engineering problem. We do not hand off at discipline boundaries.", icon: "◈" },
      { title: "HAPS & Stratospheric Engineering", desc: "Direct experience designing for stratospheric conditions: low atmospheric pressure, extreme cold, tight mass and power budgets, payload interface requirements and validation without access to a real flight environment.", icon: "◎" },
      { title: "Rapid Concept-to-Prototype Delivery", desc: "Short development cycles from initial requirements to functional hardware. We prioritize working prototypes over paper studies — design, manufacture, assemble, test, iterate.", icon: "◫" },
      { title: "Custom Test & Measurement Systems", desc: "Design and manufacture of purpose-built test benches, measurement rigs and validation hardware for R&D, quality control and product development environments.", icon: "◇" },
      { title: "Clean & Vacuum-Compatible Design", desc: "Experience with precision cleaning processes, contamination control, vacuum-compatible materials and assembly procedures for precision bearings, optical components and aerospace-grade parts.", icon: "⊞" },
      { title: "Embedded Real-Time Control", desc: "Custom firmware, real-time state machines, motor control, sensor interfaces and safety logic integrated with the mechanical system from the architecture phase — not added at the end.", icon: "⊟" },
      { title: "Technical Documentation & Validation", desc: "Complete documentation packages that enable customers to operate, maintain and certify their systems. Risk analysis, test reports, acceptance criteria and validation strategies are standard deliverables.", icon: "≡" },
    ],
    whatItems: [
      { title: "Stratospheric Positioning Systems", desc: "Precision gimbal platforms, payload integration and pointing systems for HAPS platforms and high-altitude balloon carriers.", icon: "⊕", href: "/positioning-systems" },
      { title: "Precision Gimbal Platforms", desc: "Two-axis gimbal platforms (PATRON, BEETLE) for EO, optical, antenna and sensor payloads in HAPS and demanding applications.", icon: "◎", href: "/products/patron" },
      { title: "Clean & Vacuum Processing", desc: "Modular workstations (AVPS) for contamination-controlled processing of precision components, optics and electronics.", icon: "◈", href: "/products/avps" },
      { title: "Laboratory Technology", desc: "Freeze-drying and lyophilization technology (CryoLyze) for controlled processing of sensitive samples.", icon: "◇", href: "/products/cryolyze" },
      { title: "Industrial R&D Equipment", desc: "Custom test benches, motor stands, material testing fixtures and measurement systems for demanding R&D environments.", icon: "⊞", href: "/products/testing-fixtures" },
      { title: "Custom Mechatronic Systems", desc: "Complete engineering from concept to prototype — mechanics, electronics, firmware, documentation — for customers with non-standard requirements.", icon: "≡", href: "/products#custom-engineering" },
    ],
    events: [
      { name: "MSV Brno — International Engineering Fair", date: "October 2024", location: "Brno, Czech Republic", type: "Trade Fair", desc: "Presentation of precision gimbal platforms and custom mechatronic development capabilities to industrial and aerospace visitors at Central Europe's largest engineering exhibition.", technologies: ["PATRON Gimbal", "Custom Engineering"], image: "/assets/lab/lab-electronics.jpg" },
      { name: "SpaceTech Expo Europe", date: "November 2024", location: "Bremen, Germany", type: "Aerospace Exhibition", desc: "HAPS-focused gimbal development program and stratospheric payload integration capabilities presented to European aerospace industry partners.", technologies: ["PATRON", "BEETLE", "HAPS Positioning"], image: "/assets/hero/patron-atmosphere.jpg" },
      { name: "ESA BIC Czech Republic — Technology Showcase", date: "2024", location: "Czech Republic", type: "Innovation Program", desc: "Stratospheric positioning technology and AVPS clean processing system presented as part of the ESA Business Incubation Centre Czech Republic program.", technologies: ["PATRON", "AVPS", "Stratospheric Applications"], image: "/assets/products/patron/patron-dark-2.png" },
    ],
  },
  cs: {
    heroBadge: "Inženýrská společnost · Brno",
    h1: "Inženýrská společnost pro pokročilé mechatronické systémy a aplikace v extrémním prostředí.",
    heroSub: "Hikade Technologies s.r.o. — Brno, Česká republika",
    whoH2: "Kdo jsme",
    whoP1: "Hikade Technologies je česká inženýrská společnost se sídlem v Brně, zaměřená na pokročilé inženýrství, rychlé prototypování a vývoj kompletních mechatronických systémů pro náročné průmyslové, letecké, HAPS, laboratorní a výzkumné aplikace.",
    whoP2: "Vyvíjíme kompletní technické systémy kombinující strojní inženýrství, elektroniku, vestavěný firmware, integraci senzorů, pohony, řídicí logiku, testování, validaci a technickou dokumentaci. Výstupem není model nebo zpráva — je to funkční, zdokumentovaný systém.",
    whoP3: "Společnost byla založena s jasným technickým zaměřením: vyvíjet inženýrský hardware pro prostředí, kde výzvu definují omezení hmotnosti, přesnosti, tlaku, teploty, čistoty, spolehlivosti a integrace — a kde standardní katalogová řešení nestačí.",
    whoImgBadge: "Purkyňova, Brno · Česká republika",
    skillsBadge: "V čem jsme dobří",
    skillsH2: "Dovednosti a odbornost",
    skillsP: "Konkrétní inženýrské oblasti, ve kterých Hikade Technologies vybudovala cílenou odbornost prostřednictvím vývoje náročných reálných systémů.",
    whatH2: "Co vyvíjíme",
    philH2: "Inženýrská filozofie",
    philP1: "Hikade Technologies přistupuje k inženýrství ze systémové perspektivy. Konstrukční návrh není pouhý 3D model — je to soubor rozhodnutí, která současně ovlivňují přesnost, tuhost, tepelné chování, vedení kabelů, montážní postup, testovatelnost a přístup pro údržbu.",
    philP2: "Vyvíjíme systémy, kde jsou validace a testovatelnost zohledňovány od fáze konceptu — nikoli přidávány jako dodatek. U systémů relevantních pro letectví, HAPS, vakuum a čistá prostředí tento přístup snižuje rizika a urychluje vývojové cykly.",
    philP3: "Společnost funguje jako vývojový partner — nikoli jako tradiční výrobní subdodavatel. Zákazníci s námi spolupracují na definici požadavků, systémové architektuře a rozsahu validace.",
    philPillars: [
      { val: "Systémové myšlení", desc: "Každé konstrukční rozhodnutí ovlivňuje více subsystémů" },
      { val: "Validace na prvním místě", desc: "Testovatelnost je navrhována od začátku, nikoli přidávána později" },
      { val: "Kompletní dodávka", desc: "Funkční systém + dokumentace, nejen výkresy" },
      { val: "Partnerství", desc: "Požadavky definujeme společně se zákazníkem" },
    ],
    galleryLabel: "Hardware a vývoj",
    eventsBadge: "Prezentace a veletrhy",
    eventsH2: "Události a veletrhy",
    eventsP: "Hikade Technologies prezentuje své inženýrské platformy a schopnosti na leteckých konferencích, mezinárodních veletrzích a inovačních přehlídkách po celé Evropě.",
    brnoH2: "Brněský inženýrský ekosystém",
    brnoP1: "Brno je domovem Vysokého učení technického (VUT), Masarykovy univerzity a hustého ekosystému průmyslových a R&D společností — jedno z nejsilnějších technických prostředí ve střední Evropě.",
    brnoP2: "Hikade Technologies sídlí na Purkyňově 2836/79A v Brně, v těsné blízkosti univerzitní a inovační infrastruktury umožňující přístup k technické odbornosti, obrábění, testování a spolupráci s výzkumnými institucemi.",
    brnoAddrLabel: "ADRESA",
    esaH2: "ESA Business Incubation Centre",
    esaP1: "Hikade Technologies je účastníkem programu ESA Business Incubation Centre Czech Republic — jedné z předních evropských sítí pro inkubaci vesmírných technologií podporující společnosti vyvíjející technologie relevantní pro vesmír a HAPS aplikace.",
    esaP2: "Účast odráží technickou relevanci naší práce v oblasti stratosferického polohování a přesného inženýrství v rámci evropského leteckého a kosmického ekosystému.",
    esaNote: "ESA BIC Prague — ESA Business Incubation Centre Czech Republic. Vybrané vývojové aktivity mohou být dodatečně podpořeny českými národními inovačními programy.",
    ctaH2: "Spolupracujte s námi na vašem inženýrském problému",
    ctaP: "Ať máte payload, proces nebo inženýrský problém, který nevyřeší katalogové řešení — zahajte technickou diskuzi.",
    ctaBtn1: "Kontaktovat Hikade Technologies",
    ctaBtn2: "Prozkoumat polohovací systémy",
    skills: [
      { title: "Přesná mechanika pro extrémní prostředí", desc: "Volba materiálů, mazání, tribologie a konstrukční návrh pro podmínky nízkého tlaku, nízkých teplot a vysokých vibrací. Naše návrhy zohledňují skutečné provozní prostředí — nikoli pouze výkon při pokojové teplotě.", icon: "⊕" },
      { title: "Full-Stack mechatronika", desc: "Konstrukční návrh, elektronika, firmware, vedení kabelů, řídicí logika a systémová integrace řešené jako jeden propojený inženýrský problém. Nepředáváme si práci na hranicích oborů.", icon: "◈" },
      { title: "HAPS a stratosferické inženýrství", desc: "Přímé zkušenosti s návrhem pro stratosferické podmínky: nízký atmosferický tlak, extrémní chlad, přísné hmotnostní a výkonové rozpočty, požadavky na rozhraní payloadu a validace bez přístupu k reálnému letovému prostředí.", icon: "◎" },
      { title: "Rychlé dodání od konceptu k prototypu", desc: "Krátké vývojové cykly od počátečních požadavků po funkční hardware. Upřednostňujeme pracující prototypy před papírovými studiemi — navrhujeme, vyrábíme, montujeme, testujeme, iterujeme.", icon: "◫" },
      { title: "Zakázkové zkušební a měřicí systémy", desc: "Návrh a výroba účelových zkušebních stolic, měřicích přípravků a validačního hardwaru pro R&D, řízení kvality a vývoj produktů.", icon: "◇" },
      { title: "Design kompatibilní s čistým prostředím a vakuem", desc: "Zkušenosti s procesy přesného čištění, kontrolou kontaminace, materiály kompatibilními s vakuem a montážními postupy pro přesná ložiska, optické komponenty a díly leteckého standardu.", icon: "⊞" },
      { title: "Vestavěné řídicí systémy v reálném čase", desc: "Zakázkový firmware, stavové automaty v reálném čase, řízení motorů, senzorová rozhraní a bezpečnostní logika integrované s mechanickým systémem od fáze architektury — nikoli přidávané na konci.", icon: "⊟" },
      { title: "Technická dokumentace a validace", desc: "Kompletní dokumentační balíčky umožňující zákazníkům provozovat, udržovat a certifikovat jejich systémy. Analýza rizik, protokoly o zkouškách, přejímací kritéria a validační strategie jsou standardní součástí dodávky.", icon: "≡" },
    ],
    whatItems: [
      { title: "Stratosferické polohovací systémy", desc: "Přesné gimbalové platformy, integrace payloadu a polohovací systémy pro HAPS platformy a vysokoaltitudní balonové nosiče.", icon: "⊕", href: "/positioning-systems" },
      { title: "Přesné gimbalové platformy", desc: "Dvouosé gimbalové platformy (PATRON, BEETLE) pro EO, optické, anténní a senzorové payloady v HAPS a náročných aplikacích.", icon: "◎", href: "/products/patron" },
      { title: "Čisté a vakuové zpracování", desc: "Modulární pracoviště (AVPS) pro zpracování přesných komponent, optiky a elektroniky s kontrolou kontaminace.", icon: "◈", href: "/products/avps" },
      { title: "Laboratorní technologie", desc: "Technologie lyofilizace a sušení za studena (CryoLyze) pro řízené zpracování citlivých vzorků.", icon: "◇", href: "/products/cryolyze" },
      { title: "Průmyslové R&D zařízení", desc: "Zakázkové zkušební stolice, motorové zkušební stolice, přípravky pro zkoušení materiálů a měřicí systémy pro náročná R&D prostředí.", icon: "⊞", href: "/products/testing-fixtures" },
      { title: "Zakázkové mechatronické systémy", desc: "Kompletní inženýrství od konceptu po prototyp — mechanika, elektronika, firmware, dokumentace — pro zákazníky s nestandardními požadavky.", icon: "≡", href: "/products#custom-engineering" },
    ],
    events: [
      { name: "MSV Brno — Mezinárodní strojírenský veletrh", date: "Říjen 2024", location: "Brno, Česká republika", type: "Veletrh", desc: "Prezentace přesných gimbalových platforem a schopností zakázkového mechatronického vývoje průmyslovým a leteckým návštěvníkům na největší strojírenské výstavě ve střední Evropě.", technologies: ["PATRON Gimbal", "Zakázkové inženýrství"], image: "/assets/lab/lab-electronics.jpg" },
      { name: "SpaceTech Expo Europe", date: "Listopad 2024", location: "Brémy, Německo", type: "Letecká výstava", desc: "Program vývoje gimbalů zaměřený na HAPS a schopnosti integrace stratosferického payloadu prezentované partnerům z evropského leteckého průmyslu.", technologies: ["PATRON", "BEETLE", "HAPS polohování"], image: "/assets/hero/patron-atmosphere.jpg" },
      { name: "ESA BIC Czech Republic — Technology Showcase", date: "2024", location: "Česká republika", type: "Inovační program", desc: "Stratosferická polohovací technologie a systém AVPS pro čisté zpracování prezentované v rámci programu ESA Business Incubation Centre Czech Republic.", technologies: ["PATRON", "AVPS", "Stratosferické aplikace"], image: "/assets/products/patron/patron-dark-2.png" },
    ],
  },
} as const;

const galleryImages = [
  { src: "/assets/products/patron/patron-dark-1.png", alt: "PATRON Gimbal", bg: "bg-[#3C271E]/30" },
  { src: "/assets/products/patron/patron-prototype.jpg", alt: "Patron prototype", bg: "bg-[#1F2019]" },
  { src: "/assets/products/beetle/beetle-ai-1.png", alt: "BEETLE Gimbal", bg: "bg-[#3C271E]/30" },
  { src: "/assets/products/patron/patron-drawing.jpg", alt: "Technical drawing", bg: "bg-[#1F2019]" },
  { src: "/assets/products/testing/3b-bend.png", alt: "Testing fixture", bg: "bg-white" },
  { src: "/assets/products/patron/patron-bearing.jpg", alt: "Bearing housing", bg: "bg-[#1F2019]" },
  { src: "/assets/products/testing/m18-fixture.png", alt: "M18 fixture", bg: "bg-white" },
  { src: "/assets/products/patron/patron-motor.jpg", alt: "Drive detail", bg: "bg-[#1F2019]" },
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="text-white pt-20">
      {/* ── HERO ── */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="telemetry-badge mb-4 inline-block">{t.heroBadge}</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">{t.h1}</h1>
          <p className="text-lg text-white/60 max-w-2xl">{t.heroSub}</p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.whoH2}</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>{t.whoP1}</p>
                <p>{t.whoP2}</p>
                <p>{t.whoP3}</p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                <Image src="/assets/lab/lab-electronics.jpg" alt="Hikade Technologies lab" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18261D]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="telemetry-badge">{t.whoImgBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-20 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.skillsBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.skillsH2}</h2>
            <p className="text-white/50 max-w-xl">{t.skillsP}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.skills.map((skill) => (
              <div key={skill.title} className="p-6 border border-white/10 rounded-lg bg-[#18261D]/60 hover:border-[#63C3B5]/25 transition-colors">
                <div className="text-xl text-[#63C3B5] mb-4">{skill.icon}</div>
                <h3 className="text-sm font-semibold mb-3 leading-snug">{skill.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DEVELOP ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10">{t.whatH2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whatItems.map((item) => (
              <Link key={item.href} href={item.href} className="group p-6 border border-white/10 rounded-lg hover:border-[#63C3B5]/30 transition-colors">
                <div className="text-2xl text-[#63C3B5] mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2 group-hover:text-[#63C3B5] transition-colors">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING PHILOSOPHY ── */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-6">{t.philH2}</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>{t.philP1}</p>
                <p>{t.philP2}</p>
                <p>{t.philP3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.philPillars.map((item) => (
                <div key={item.val} className="p-5 border border-white/10 rounded-lg">
                  <div className="text-sm font-semibold text-[#63C3B5] mb-2">{item.val}</div>
                  <div className="text-xs text-white/45 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HARDWARE GALLERY ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-mono text-[#63C3B5] mb-6 tracking-widest uppercase">{t.galleryLabel}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative aspect-square rounded-lg overflow-hidden border border-white/10 group ${img.bg}`}>
                <Image src={img.src} alt={img.alt} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-20 bg-[#1F2019] tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="telemetry-badge">{t.eventsBadge}</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-3">{t.eventsH2}</h2>
            <p className="text-white/50 text-sm max-w-xl">{t.eventsP}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {t.events.map((event) => (
              <div key={event.name} className="group border border-white/10 rounded-lg overflow-hidden bg-[#18261D]/60 hover:border-[#63C3B5]/25 transition-colors">
                <div className="relative h-36 overflow-hidden">
                  <Image src={event.image} alt={event.name} fill className="object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18261D]" />
                  <div className="absolute top-3 left-3">
                    <span className="telemetry-badge text-[10px]">{event.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold leading-snug mb-1">{event.name}</h3>
                  <div className="text-[11px] font-mono text-white/35 mb-3">{event.date} · {event.location}</div>
                  <p className="text-xs text-white/50 leading-relaxed mb-3">{event.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {event.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 border border-[#63C3B5]/20 text-[#63C3B5]/60 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRNO + ESA ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.brnoH2}</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>{t.brnoP1}</p>
                <p>{t.brnoP2}</p>
              </div>
              <div className="mt-8 space-y-1">
                <p className="text-xs font-mono text-[#63C3B5]">{t.brnoAddrLabel}</p>
                <p className="text-white/70 text-sm">Hikade Technologies s.r.o.</p>
                <p className="text-white/50 text-sm">Purkyňova 2836/79A<br />612 00 Brno, Czech Republic</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.esaH2}</h2>
              <p className="text-white/65 leading-relaxed mb-4">{t.esaP1}</p>
              <p className="text-white/65 leading-relaxed mb-6">{t.esaP2}</p>
              <div className="p-4 border border-[#63C3B5]/20 rounded bg-[#63C3B5]/5">
                <p className="text-xs text-white/50 leading-relaxed">
                  <span className="text-[#63C3B5] font-semibold">ESA BIC Prague</span> — {t.esaNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.ctaH2}</h2>
          <p className="text-white/60 leading-relaxed mb-8">{t.ctaP}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              {t.ctaBtn1}
            </Link>
            <Link href="/positioning-systems" className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
