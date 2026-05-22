"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  en: {
    heroBadge: "HAPS / Stratospheric / Balloon Platforms",
    h1a: "Stratospheric",
    h1b: "Positioning Systems",
    heroP1: "Two-axis gimbal platforms and payload integration systems for HAPS, high-altitude balloon platforms, optical payloads and directional antenna systems operating in the stratosphere.",
    heroP2: "Low pressure, extreme temperature, mass and power constraints define every engineering decision at 18–25 km altitude. Our gimbal platforms are designed from the ground up for these conditions.",
    cta1: "Explore PATRON",
    cta2: "Explore BEETLE",
    cta3: "Request Consultation",
    stats: [
      { val: "18–25 km", label: "Operating altitude" },
      { val: "−60 °C", label: "Min. temperature" },
      { val: "< 1 kPa", label: "Atmospheric pressure" },
      { val: "2-axis", label: "Gimbal configuration" },
    ],
    whyBadge: "The Engineering Problem",
    whyH2: "Why Positioning Matters at Altitude",
    whyP1: "At 18–25 km altitude, payloads on HAPS platforms and stratospheric balloons face an environment fundamentally different from ground or low-orbit applications. The platform moves. The payload must not — or must follow a precise trajectory.",
    whyP2: "Cameras, optical sensors, antennas and communication systems all require stable, accurate pointing to deliver mission value. Without active two-axis stabilization and attitude control, platform attitude disturbances translate directly into payload performance degradation.",
    whyP3: "The engineering challenge is to provide this pointing performance within severe constraints on mass, power, volume, temperature and pressure — constraints that eliminate most conventional solutions and require purpose-designed systems.",
    whyImgBadge: "PATRON — Stratospheric Environment",
    useBadge: "Application Areas",
    useH2: "HAPS, Balloon and Payload Use Cases",
    useP: "Stratospheric positioning systems support a broad range of payload types and mission profiles. The specific requirements vary — the engineering constraints do not.",
    useCases: [
      { title: "HAPS Platforms", desc: "Payload pointing and stabilization for High-Altitude Pseudo-Satellite platforms operating at 18–25 km altitude. Camera systems, optical sensors, antennas and communication payloads.", icon: "⊕" },
      { title: "High-Altitude Balloon Platforms", desc: "Scientific and technology demonstration payloads on stratospheric balloon platforms. Short and long-duration missions with precise attitude control requirements.", icon: "◎" },
      { title: "Optical Payload Pointing", desc: "Stabilization of imaging systems, telescopes, LIDAR sensors and electro-optical payloads requiring precision pointing and isolation from platform motion.", icon: "◈" },
      { title: "Antenna & Communication Systems", desc: "Directional antenna pointing for ground-to-air, satellite and inter-platform communication links. Continuous tracking and attitude-compensated beam steering.", icon: "◇" },
    ],
    gimbalBadge: "Platform Family",
    gimbalH2: "Gimbal Platform Overview",
    gimbalP: "Three gimbal platforms covering a range of payload classes, mission profiles and budget levels — from demanding precision HAPS payloads to ultra-lightweight micro-balloon applications.",
    learnMore: "Learn more →",
    gimbals: [
      {
        name: "PATRON",
        subtitle: "High-Precision HAPS Gimbal",
        desc: "Configurable two-axis gimbal platform for demanding HAPS and stratospheric payloads. Designed for optical, antenna and sensor payloads requiring precise pointing, robust mechanical design and customer-specific integration.",
        status: "Development / TRL ~5",
        statusColor: "text-[#63C3B5]",
        specs: [
          { label: "Payload capacity", val: "up to ~18 kg" },
          { label: "System mass", val: "~8 kg" },
          { label: "Axes", val: "2-axis (AZ/EL)" },
          { label: "Nominal power", val: "200–400 W" },
        ],
      },
      {
        name: "BEETLE",
        subtitle: "Lightweight HAPS Gimbal",
        desc: "Compact two-axis gimbal for smaller payloads, test flights and technology demonstrations. Optimised for cost-sensitive stratospheric applications, drone platforms and development test campaigns.",
        status: "Development platform",
        statusColor: "text-yellow-400",
        specs: [
          { label: "Payload capacity", val: "up to ~4.5 kg" },
          { label: "System mass", val: "~2.5 kg" },
          { label: "Axes", val: "2-axis (AZ/EL)" },
          { label: "Nominal power", val: "~30 W" },
        ],
      },
      {
        name: "Micro BEETLE",
        subtitle: "Ultra-Lightweight Concept",
        desc: "Early-stage development direction targeting ultra-lightweight two-axis pointing for very small payloads, micro-balloon platforms and applications with single-digit watt power budgets.",
        status: "Concept / early development",
        statusColor: "text-white/40",
        specs: [
          { label: "Target system mass", val: "~400 g" },
          { label: "Supply voltage", val: "28 V (concept)" },
          { label: "Power budget", val: "single-digit W" },
          { label: "Status", val: "Concept stage" },
        ],
      },
    ],
    challengesBadge: "Engineering Constraints",
    challengesH2: "Technical Challenges",
    challengesP: "Stratospheric operation imposes constraints that cannot be addressed with off-the-shelf components or conventional design approaches. Every challenge below drives specific engineering decisions.",
    challenges: [
      { title: "Low Atmospheric Pressure", desc: "Below 10% of sea-level pressure at operational altitude. Tribology, sealing, outgassing and thermal management all change fundamentally." },
      { title: "Low Temperature", desc: "Down to −60 °C and below. Material selection, lubrication type, bearing preload, actuator characteristics and electronics behaviour are all temperature-dependent." },
      { title: "Limited Convection", desc: "Negligible convective heat transfer at low pressure. Thermal management must rely on conduction and radiation — driving structural and electronics design." },
      { title: "Mass Constraints", desc: "Strict payload mass budgets on stratospheric platforms. Every structural element, motor, encoder, cable and connector must be justified by the mass it adds." },
      { title: "Limited Power Budget", desc: "Solar or battery-limited platforms impose hard power caps. Efficient actuator selection, drive electronics and control logic are not optional." },
      { title: "Vibration & Structural Stiffness", desc: "Platform dynamics, wind loads and actuator excitation all require sufficient structural rigidity to maintain pointing accuracy under dynamic conditions." },
      { title: "Cable & Harness Management", desc: "Flexible cable runs through rotating joints without restricting motion, introducing friction, or degrading over thermal cycles — a critical mechanical design problem." },
      { title: "Embedded Real-Time Control", desc: "Closed-loop attitude control, rate compensation, trajectory following and payload interface management — all integrated in a mass- and power-constrained system." },
      { title: "Payload Integration", desc: "Customer-specific mechanical interfaces, electrical connectors, data protocols and timing requirements must be accommodated without compromising gimbal performance." },
      { title: "Serviceability", desc: "Ground integration, adjustment and maintenance must be practical given launch constraints, limited access and the need to verify system state before each mission." },
      { title: "Validation Strategy", desc: "Full stratospheric environmental testing is expensive. Validation must be planned carefully — ground testing, altitude chamber, and incremental flight testing — to reduce risk." },
    ],
    reqBadge: "What We Need From You",
    reqH2: "Typical Customer Requirements",
    reqP: "A technical consultation starts with a defined set of requirements. The more precisely the operating envelope, payload characteristics and mission profile are described, the faster we can assess feasibility and propose a realistic engineering path.",
    requirements: [
      "Defined payload mass and envelope with mechanical interface specification",
      "Power supply voltage, current limits and supply topology at the gimbal interface",
      "Required pointing accuracy and slew rate for the specific payload mission",
      "Operating altitude and expected temperature range at deployment",
      "Platform vibration spectrum and angular rate environment",
      "Communication and data interface requirements (RS-485, Ethernet, custom)",
      "Integration timeline, access constraints and launch vehicle requirements",
      "Validation approach and acceptance test criteria",
      "Serviceability and maintenance requirements after mission",
    ],
    notSureH3: "Not sure about your requirements yet?",
    notSureP: "Early-stage projects often start with an application concept rather than a precise specification. We can help translate mission objectives into a preliminary technical requirement set and identify the key design drivers.",
    notSureCta: "Start a Technical Discussion",
    startingH3: "Typical engagement starting points",
    startingItems: [
      "HAPS platform with defined payload envelope and mass budget",
      "Balloon-borne science mission with attitude control requirement",
      "Technology demonstration flight with camera or sensor payload",
      "Antenna-pointing system for stratospheric communication link",
    ],
    ctaBadge: "Get In Touch",
    ctaH2: "Ready to discuss a stratospheric positioning application?",
    ctaP: "Send us your operating environment, payload mass and the mission profile. We will help define a realistic engineering path from concept to a validated gimbal system.",
    ctaBtn1: "Request Technical Consultation",
    ctaBtn2: "View All Projects & Products",
  },
  cs: {
    heroBadge: "HAPS / Stratosferické / Balonové platformy",
    h1a: "Stratosferické",
    h1b: "Polohovací systémy",
    heroP1: "Dvouosé gimbalové platformy a systémy integrace payloadu pro HAPS, vysokoaltitudní balonové platformy, optické payloady a směrové anténní systémy operující ve stratosféře.",
    heroP2: "Nízký tlak, extrémní teploty, hmotnostní a výkonová omezení definují každé inženýrské rozhodnutí ve výšce 18–25 km. Naše gimbalové platformy jsou navrženy od základu pro tyto podmínky.",
    cta1: "Prozkoumat PATRON",
    cta2: "Prozkoumat BEETLE",
    cta3: "Požádat o konzultaci",
    stats: [
      { val: "18–25 km", label: "Provozní výška" },
      { val: "−60 °C", label: "Min. teplota" },
      { val: "< 1 kPa", label: "Atmosferický tlak" },
      { val: "2-osý", label: "Konfigurace gimbalu" },
    ],
    whyBadge: "Inženýrský problém",
    whyH2: "Proč je polohování klíčové ve výšce",
    whyP1: "Ve výšce 18–25 km čelí payloady na HAPS platformách a stratosferických balonech prostředí zásadně odlišnému od pozemních nebo nízkoorbitalních aplikací. Platforma se pohybuje. Payload se nesmí — nebo musí sledovat přesnou trajektorii.",
    whyP2: "Kamery, optické senzory, antény a komunikační systémy vyžadují stabilní, přesné polohování pro plnění mise. Bez aktivní dvouosé stabilizace a řízení polohy se poruchy polohy platformy přímo přenášejí do degradace výkonu payloadu.",
    whyP3: "Inženýrskou výzvou je zajistit tento výkon v rámci přísných omezení na hmotnost, příkon, objem, teplotu a tlak — omezení, která eliminují většinu konvenčních řešení a vyžadují účelově navržené systémy.",
    whyImgBadge: "PATRON — Stratosferické prostředí",
    useBadge: "Oblasti aplikace",
    useH2: "Případy použití HAPS, balonů a payloadu",
    useP: "Stratosferické polohovací systémy podporují širokou škálu typů payloadu a profilů misí. Konkrétní požadavky se liší — inženýrská omezení nikoliv.",
    useCases: [
      { title: "HAPS platformy", desc: "Polohování a stabilizace payloadu pro platformy HAPS operující ve výšce 18–25 km. Kamerové systémy, optické senzory, antény a komunikační payloady.", icon: "⊕" },
      { title: "Vysokoaltitudní balonové platformy", desc: "Vědecké a technologické demonstrační payloady na stratosferických balonových platformách. Mise krátké i dlouhé délky s požadavky na přesné řízení polohy.", icon: "◎" },
      { title: "Polohování optického payloadu", desc: "Stabilizace zobrazovacích systémů, teleskopů, LIDAR senzorů a elektro-optických payloadů vyžadujících přesné polohování a izolaci od pohybu platformy.", icon: "◈" },
      { title: "Anténní a komunikační systémy", desc: "Polohování směrové antény pro komunikační linky zem-vzduch, satelit a mezi platformami. Průběžné sledování a řízení paprsku s kompenzací polohy.", icon: "◇" },
    ],
    gimbalBadge: "Rodina platforem",
    gimbalH2: "Přehled gimbalových platforem",
    gimbalP: "Tři gimbalové platformy pokrývající rozsah tříd payloadu, profilů misí a cenových úrovní — od náročných přesných HAPS payloadů po ultra-lehké aplikace na mikrobalonech.",
    learnMore: "Více →",
    gimbals: [
      {
        name: "PATRON",
        subtitle: "Vysoce přesný HAPS Gimbal",
        desc: "Konfigurovatelná dvouosá gimbalová platforma pro náročné HAPS a stratosferické payloady. Navržena pro optické, anténní a senzorové payloady vyžadující přesné polohování, robustní mechanickou konstrukci a zákaznicky specifickou integraci.",
        status: "Vývoj / TRL ~5",
        statusColor: "text-[#63C3B5]",
        specs: [
          { label: "Nosnost payloadu", val: "až ~18 kg" },
          { label: "Hmotnost systému", val: "~8 kg" },
          { label: "Osy", val: "2-osý (AZ/EL)" },
          { label: "Jm. příkon", val: "200–400 W" },
        ],
      },
      {
        name: "BEETLE",
        subtitle: "Lehký HAPS Gimbal",
        desc: "Kompaktní dvouosý gimbal pro menší payloady, zkušební lety a technologické demonstrace. Optimalizovaný pro aplikace citlivé na cenu ve stratosféře, dronové platformy a vývojové zkušební kampaně.",
        status: "Vývojová platforma",
        statusColor: "text-yellow-400",
        specs: [
          { label: "Nosnost payloadu", val: "až ~4,5 kg" },
          { label: "Hmotnost systému", val: "~2,5 kg" },
          { label: "Osy", val: "2-osý (AZ/EL)" },
          { label: "Jm. příkon", val: "~30 W" },
        ],
      },
      {
        name: "Micro BEETLE",
        subtitle: "Ultra-lehký koncept",
        desc: "Raně vývojový směr zaměřený na ultra-lehké dvouosé polohování pro velmi malé payloady, mikrobalonové platformy a aplikace s výkonovým rozpočtem v jednotkách wattů.",
        status: "Koncept / raný vývoj",
        statusColor: "text-white/40",
        specs: [
          { label: "Cíl. hmotnost syst.", val: "~400 g" },
          { label: "Napájecí napětí", val: "28 V (koncept)" },
          { label: "Výkonový rozpočet", val: "jednotky W" },
          { label: "Status", val: "Fáze konceptu" },
        ],
      },
    ],
    challengesBadge: "Inženýrská omezení",
    challengesH2: "Technické výzvy",
    challengesP: "Stratosferické operace implikují omezení, která nelze řešit pomocí komerčních komponent nebo konvenčních návrhových přístupů. Každá níže uvedená výzva vede ke konkrétním inženýrským rozhodnutím.",
    challenges: [
      { title: "Nízký atmosferický tlak", desc: "Pod 10 % tlaku na hladině moře v provozní výšce. Tribologie, těsnění, odplynování a tepelný management se fundamentálně mění." },
      { title: "Nízká teplota", desc: "Až −60 °C a níže. Volba materiálů, typ mazání, předpětí ložisek, charakteristiky pohonů a chování elektroniky jsou závislé na teplotě." },
      { title: "Omezená konvekce", desc: "Zanedbatelný konvektivní přenos tepla při nízkém tlaku. Tepelný management musí spoléhat na vedení a záření — to ovlivňuje design konstrukce i elektroniky." },
      { title: "Hmotnostní omezení", desc: "Přísné hmotnostní rozpočty payloadu na stratosferických platformách. Každý konstrukční prvek, motor, enkodér, kabel a konektor musí být hmotnostně odůvodněn." },
      { title: "Omezený výkonový rozpočet", desc: "Solárně nebo bateriově omezené platformy stanoví pevné limity příkonu. Efektivní výběr pohonů, silové elektroniky a řídicí logiky není volitelný." },
      { title: "Vibrace a tuhnost konstrukce", desc: "Dynamika platformy, větrné zatížení a buzení od pohonů vyžadují dostatečnou tuhost konstrukce pro udržení přesnosti polohování za dynamických podmínek." },
      { title: "Management kabeláže", desc: "Flexibilní kabely procházející otočnými spoji bez omezení pohybu, vnášení tření nebo degradace přes tepelné cykly — kritický mechanický designový problém." },
      { title: "Vestavěné řízení v reálném čase", desc: "Uzavřená smyčka řízení polohy, kompenzace rychlosti, sledování trajektorie a správa rozhraní payloadu — vše integrované v systému s omezenou hmotností a příkonem." },
      { title: "Integrace payloadu", desc: "Zákaznická mechanická rozhraní, elektrické konektory, datové protokoly a časové požadavky musí být splněny bez kompromitace výkonu gimbalu." },
      { title: "Servisovatelnost", desc: "Pozemní integrace, nastavení a údržba musí být praktické s ohledem na omezení při startu, omezený přístup a potřebu ověřit stav systému před každou misí." },
      { title: "Validační strategie", desc: "Plnohodnotné stratosferické zkoušení prostředí je nákladné. Validace musí být pečlivě naplánována — pozemní zkoušení, altitudní komora a postupné letové zkoušení." },
    ],
    reqBadge: "Co od vás potřebujeme",
    reqH2: "Typické požadavky zákazníka",
    reqP: "Technická konzultace začíná definovanou sadou požadavků. Čím přesněji jsou popsány provozní parametry, vlastnosti payloadu a profil mise, tím rychleji lze posoudit proveditelnost a navrhnout realistickou inženýrskou cestu.",
    requirements: [
      "Definovaná hmotnost a obal payloadu se specifikací mechanického rozhraní",
      "Napájecí napětí, proudová omezení a topologie napájení na rozhraní gimbalu",
      "Požadovaná přesnost polohování a rychlost otočení pro konkrétní misi payloadu",
      "Provozní výška a očekávaný teplotní rozsah při nasazení",
      "Spektrum vibrací platformy a prostředí úhlové rychlosti",
      "Požadavky na komunikaci a datové rozhraní (RS-485, Ethernet, zakázkové)",
      "Harmonogram integrace, omezení přístupu a požadavky na nosič",
      "Přístup k validaci a kritéria přejímacích zkoušek",
      "Požadavky na servisovatelnost a údržbu po misi",
    ],
    notSureH3: "Nejste si jistí svými požadavky?",
    notSureP: "Raně vývojové projekty často začínají konceptem aplikace spíše než přesnou specifikací. Pomůžeme přeložit cíle mise do předběžné sady technických požadavků a identifikovat klíčové hnací faktory návrhu.",
    notSureCta: "Zahájit technickou diskuzi",
    startingH3: "Typické výchozí body spolupráce",
    startingItems: [
      "HAPS platforma s definovaným obalem payloadu a hmotnostním rozpočtem",
      "Vědecká mise na balonu s požadavkem na řízení polohy",
      "Demonstrační let technologie s kamerovým nebo senzorovým payloadem",
      "Anténní polohovací systém pro stratosferickou komunikační linku",
    ],
    ctaBadge: "Kontaktujte nás",
    ctaH2: "Chcete diskutovat stratosferickou polohovací aplikaci?",
    ctaP: "Pošlete nám provozní prostředí, hmotnost payloadu a profil mise. Pomůžeme definovat realistickou inženýrskou cestu od konceptu po validovaný gimbalový systém.",
    ctaBtn1: "Požádat o technickou konzultaci",
    ctaBtn2: "Zobrazit všechny projekty a produkty",
  },
} as const;

const gimbalHrefs = ["/products/patron", "/products/beetle", "/products/micro-beetle"];
const gimbalImages = [
  "/assets/products/patron/patron-transparent-1.png",
  "/assets/products/beetle/beetle-ai-3.png",
  "/assets/hero/beetle-hero.png",
];

export default function PositioningSystemsPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="text-white pt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/patron-atmosphere.jpg" alt="Stratospheric Positioning" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18261D]/70 via-[#18261D]/50 to-[#18261D]" />
        </div>
        <div className="absolute top-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent to-[#63C3B5]/30 z-10" />
        <div className="absolute bottom-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent to-[#63C3B5]/20 z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#63C3B5] pulse-mint" />
              <span className="telemetry-badge">{t.heroBadge}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              {t.h1a}<br />
              <span className="text-[#63C3B5]">{t.h1b}</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-4">{t.heroP1}</p>
            <p className="text-base text-white/50 leading-relaxed mb-10">{t.heroP2}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/patron" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                {t.cta1}
              </Link>
              <Link href="/products/beetle" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/60 hover:text-[#63C3B5] transition-colors">
                {t.cta2}
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/60 font-semibold rounded hover:border-white/40 hover:text-white transition-colors">
                {t.cta3}
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-8 max-w-3xl">
            {t.stats.map((s) => (
              <div key={s.val}>
                <div className="text-xl font-bold font-mono text-[#63C3B5]">{s.val}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY POSITIONING MATTERS ── */}
      <section className="py-24 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="telemetry-badge mb-4 inline-block">{t.whyBadge}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.whyH2}</h2>
              <p className="text-white/60 leading-relaxed mb-4">{t.whyP1}</p>
              <p className="text-white/60 leading-relaxed mb-4">{t.whyP2}</p>
              <p className="text-white/60 leading-relaxed">{t.whyP3}</p>
            </div>
            <div className="relative h-72 lg:h-full min-h-64 rounded-lg overflow-hidden border border-white/10">
              <Image src="/assets/products/patron/patron-atmosphere.jpg" alt="PATRON in atmosphere" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#18261D]/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="telemetry-badge">{t.whyImgBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-24 tech-grid-fine">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.useBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.useH2}</h2>
            <p className="text-white/50 max-w-xl">{t.useP}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.useCases.map((uc) => (
              <div key={uc.title} className="p-8 border border-white/10 rounded-lg bg-[#1F2019]/50 hover:border-[#63C3B5]/30 transition-colors">
                <div className="w-10 h-10 border border-[#63C3B5]/30 rounded flex items-center justify-center text-[#63C3B5] text-lg mb-5">{uc.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{uc.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIMBAL FAMILY ── */}
      <section className="py-24 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.gimbalBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.gimbalH2}</h2>
            <p className="text-white/50 max-w-xl">{t.gimbalP}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.gimbals.map((g, i) => (
              <div key={g.name} className="group flex flex-col border border-white/10 rounded-lg overflow-hidden bg-[#18261D]/70 hover:border-[#63C3B5]/40 transition-colors">
                <div className="relative h-52 overflow-hidden bg-[#3C271E]/20">
                  <Image src={gimbalImages[i]} alt={g.name} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18261D]/60" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-[#63C3B5] transition-colors">{g.name}</h3>
                      <p className="text-xs text-white/40">{g.subtitle}</p>
                    </div>
                    <span className={`text-xs font-mono mt-1 ${g.statusColor}`}>●</span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">{g.desc}</p>
                  <div className="space-y-2 mb-5">
                    {g.specs.map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                        <span className="text-white/40 font-mono uppercase">{spec.label}</span>
                        <span className="font-semibold text-white/80">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-mono ${g.statusColor}`}>{g.status}</span>
                    <Link href={gimbalHrefs[i]} className="text-[#63C3B5] hover:text-white transition-colors">
                      {t.learnMore}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL CHALLENGES ── */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.challengesBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.challengesH2}</h2>
            <p className="text-white/50 max-w-xl">{t.challengesP}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.challenges.map((c, i) => (
              <div key={c.title} className="p-6 border border-white/10 rounded-lg bg-[#1F2019]/50 hover:border-[#63C3B5]/20 transition-colors">
                <div className="text-xs font-mono text-[#63C3B5]/50 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-sm font-semibold mb-2 text-white/90">{c.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPICAL REQUIREMENTS ── */}
      <section className="py-24 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="telemetry-badge mb-4 inline-block">{t.reqBadge}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.reqH2}</h2>
              <p className="text-white/60 leading-relaxed mb-8">{t.reqP}</p>
              <ul className="space-y-3">
                {t.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-[#63C3B5] mt-0.5 flex-shrink-0">→</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6 border border-[#63C3B5]/20 rounded-lg bg-[#63C3B5]/5">
                <h3 className="text-lg font-semibold text-[#63C3B5] mb-3">{t.notSureH3}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{t.notSureP}</p>
                <Link href="/contact" className="inline-block px-5 py-2.5 bg-[#63C3B5] text-black text-sm font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                  {t.notSureCta}
                </Link>
              </div>
              <div className="p-6 border border-white/10 rounded-lg bg-[#18261D]/50">
                <h3 className="text-sm font-semibold mb-2">{t.startingH3}</h3>
                <ul className="space-y-2">
                  {t.startingItems.map((item) => (
                    <li key={item} className="text-xs text-white/45 flex items-start gap-2">
                      <span className="text-[#63C3B5]/60 mt-0.5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 tech-grid-fine">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="telemetry-badge mb-6 inline-block">{t.ctaBadge}</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.ctaH2}</h2>
          <p className="text-white/60 leading-relaxed mb-10">{t.ctaP}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              {t.ctaBtn1}
            </Link>
            <Link href="/products" className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/60 hover:text-[#63C3B5] transition-colors">
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
