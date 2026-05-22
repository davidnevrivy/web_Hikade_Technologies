"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  en: {
    heroBadge: "Company Story",
    h1: "Company History",
    heroP: "From the first custom mechatronic projects in Brno to stratospheric positioning platforms, clean processing systems and ESA-backed aerospace development — the engineering story of Hikade Technologies.",
    overviewP1: "Hikade Technologies is a Czech engineering company founded in Brno. The company was built around a single conviction: that there is a real market for engineering firms that can take a difficult technical problem and deliver a working solution — not a study, not a concept, but hardware that functions as specified and is documented well enough to be used, maintained and further developed.",
    overviewP2: "The shift toward aerospace and HAPS was not a sudden pivot. It was the result of a gradual, technically motivated progression: the engineering capabilities developed for demanding industrial customers — lightweight structures, embedded control in constrained environments, tribology without standard lubrication, rapid prototyping cycles, system integration under tight mass and power budgets — turned out to be precisely the capabilities needed for stratospheric payload engineering.",
    overviewP3: "Today, Hikade Technologies develops proprietary stratospheric gimbal platforms, clean and vacuum processing systems, laboratory technology and custom mechatronic systems for customers across the European industrial and aerospace R&D sector.",
    overviewStats: [
      { val: "Brno", label: "Czech Republic" },
      { val: "HAPS", label: "Primary application" },
      { val: "ESA BIC", label: "Prague program" },
      { val: "TRL ~5", label: "PATRON status" },
      { val: "2-axis", label: "Gimbal configuration" },
      { val: "18–25 km", label: "Target altitude" },
    ],
    timelineBadge: "Development Phases",
    timelineH2: "Engineering Timeline",
    labBadge: "Engineering Lab · Purkyňova, Brno",
    labH2: "Built in Brno",
    labP: "Brno University of Technology, Masaryk University, a dense cluster of industrial engineering companies and R&D organisations — Brno provides the right environment for the kind of engineering Hikade does.",
    esaBadge: "ESA BIC Czech Republic",
    esaH2: "ESA Business Incubation Centre",
    esaP1: "Hikade Technologies is a participant in the ESA Business Incubation Centre Czech Republic (ESA BIC Prague) — part of the pan-European ESA BIC network that supports companies developing technologies with space relevance.",
    esaP2: "Acceptance into ESA BIC reflects an independent assessment that Hikade's stratospheric positioning technology is technically credible and commercially relevant within the European space and HAPS ecosystem. It provides access to expertise, connections and ecosystem resources that support the development of the PATRON and BEETLE platforms toward flight-ready status.",
    esaItems: [
      { title: "Program", val: "ESA Business Incubation Centre Czech Republic (ESA BIC Prague)" },
      { title: "Network", val: "Part of the pan-European ESA BIC incubation network" },
      { title: "Relevance", val: "Stratospheric positioning systems and precision aerospace engineering" },
      { title: "Benefit", val: "External validation, ecosystem access, technical connections" },
      { title: "Status", val: "Active participant" },
    ],
    ctaBadge: "Where We Are Now",
    ctaH2: "Developing the next generation of precision aerospace and mechatronic systems",
    ctaP: "From stratospheric gimbal platforms to clean processing systems and custom industrial engineering — Hikade Technologies continues to build technical solutions for problems that standard products cannot solve.",
    ctaBtn1: "Explore Positioning Systems",
    ctaBtn2: "About the Company",
    ctaBtn3: "Contact Us",
    timeline: [
      {
        phase: "01",
        title: "Foundation",
        period: "Company established",
        summary: "Hikade Technologies s.r.o. founded in Brno",
        desc: "Hikade Technologies s.r.o. was founded in Brno, Czech Republic, with a clear engineering direction from the start: to design and develop complete mechatronic systems for customers whose requirements exceed what standard catalog solutions can offer. The founding team brought together expertise in mechanical engineering, embedded control systems and rapid prototyping — the combination that defines what Hikade Technologies does today.",
        details: ["Registered in Brno, Czech Republic", "Engineering focus from day one — not a consultancy", "Core team: mechanical engineering + embedded systems", "First engineering discussions with industrial customers"],
      },
      {
        phase: "02",
        title: "First Engineering Projects",
        period: "Early operations",
        summary: "Custom mechatronic systems for demanding industrial customers",
        desc: "The first projects established the company's core approach: take a customer requirement that no catalog product can satisfy, define the system architecture, design it, build it, test it and deliver it with documentation. Early projects included custom test equipment, industrial fixturing, precision mechanical assemblies and embedded control systems — problems where the customer knew what the system had to do, but not what it would be.",
        details: ["Custom test benches and measurement rigs", "Industrial mechanical assemblies and fixtures", "Embedded control for single-purpose machines", "Full delivery: hardware + documentation"],
      },
      {
        phase: "03",
        title: "Mechatronic Capability Development",
        period: "Systematic growth",
        summary: "Full engineering stack built: CAD · analysis · prototyping · firmware · integration",
        desc: "The early project experience revealed that the most demanding customers needed not just mechanical design, not just electronics, not just firmware — but all three integrated. Hikade Technologies systematically developed the full engineering stack: parametric CAD design, structural and thermal computational analysis, rapid prototyping infrastructure, embedded firmware and real-time control development, and complete mechatronic system integration. This is the capability stack that now covers every Hikade project from concept to validated prototype.",
        details: ["Parametric 3D CAD and assembly management", "Structural, thermal and modal analysis capability", "Rapid prototyping: 3D print + CNC + assembly + test", "Embedded firmware: real-time control, RS-485, Ethernet", "Full mechatronic integration: mechanics + electronics + firmware", "Technical documentation as a standard deliverable"],
      },
      {
        phase: "04",
        title: "Pivot to Aerospace and HAPS",
        period: "Strategic direction change",
        summary: "Identified stratospheric gimbal development as primary direction",
        desc: "As the capability base matured, a clear strategic opportunity emerged in the HAPS and stratospheric payload sector. The emerging market for High-Altitude Pseudo-Satellite platforms — operating at 18–25 km altitude for weeks or months at a time — created a specific unmet need for precision payload stabilization and pointing systems purpose-built for the stratospheric environment. The engineering challenges of this environment aligned precisely with Hikade's accumulated expertise. The decision was made to redirect engineering capacity toward this application as the primary development direction.",
        details: ["Analysed the HAPS and stratospheric payload sector", "Identified the gap: no purpose-built stratospheric gimbal for mid-range payloads", "Confirmed technical fit: our expertise matched the problem", "Began redirecting development resources to aerospace applications"],
      },
      {
        phase: "05",
        title: "PATRON Gimbal Development",
        period: "Platform development — active",
        summary: "Primary HAPS gimbal platform — TRL ~5",
        desc: "PATRON is Hikade's primary engineering platform — a configurable two-axis gimbal system designed for demanding HAPS payloads up to approximately 18 kg. The design addresses the full set of stratospheric engineering challenges: low-pressure tribology, thermal management without convection, mass-optimised structure, cable management through rotating joints, modular payload interface and embedded real-time control. PATRON is currently in active development and represents the company's most technically intensive platform at approximately TRL 5.",
        details: ["Payload capacity: up to ~18 kg", "Configuration: two-axis (azimuth and elevation)", "System mass: approximately 8 kg", "Nominal power: 200–400 W depending on configuration", "Purpose-built for 18–25 km altitude operation", "Status: development platform, TRL approximately 5"],
      },
      {
        phase: "06",
        title: "BEETLE Gimbal Development",
        period: "Platform development — active",
        summary: "Lightweight HAPS gimbal for smaller payload classes",
        desc: "BEETLE was developed in parallel with PATRON to address a different segment of the stratospheric gimbal market: smaller payloads, lower-cost platforms, technology demonstration flights and customers with tighter mass budgets. BEETLE carries payloads up to approximately 4.5 kg at a system mass of approximately 2.5 kg — making it suitable for a wide range of stratospheric drone, HAPS and balloon applications. The platform shares the same engineering approach and environmental design philosophy as PATRON, compressed into a lighter and more compact form factor.",
        details: ["Payload capacity: up to ~4.5 kg", "System mass: approximately 2.5 kg", "Nominal power: approximately 30 W", "Target: cost-sensitive and lighter-class applications", "Shares PATRON design philosophy and environmental design rules", "Status: development platform"],
      },
      {
        phase: "07",
        title: "AVPS and CryoLyze Development",
        period: "Technology diversification",
        summary: "Clean processing and freeze-drying systems added to portfolio",
        desc: "The development of the AVPS (AeroVac Precision System) and CryoLyze represented an expansion of Hikade's technical portfolio into clean and vacuum-compatible processing technology. AVPS is a modular technological workstation for controlled cleaning, rinsing, drying, assembly, lubrication, inspection and packaging of precision components. CryoLyze extended this into freeze-drying and lyophilization technology, enabling controlled processing of sensitive biological and technical samples under low-pressure and low-temperature conditions.",
        details: ["AVPS: modular clean workstation, ISO 14644-1 zone classification", "AVPS zones: from ISO 8 (ambient) to ISO 5 (AVPS-A active zone)", "CryoLyze: freeze-drying platform, AISI 316L chamber, LN2 cooling", "CryoLyze vacuum: below 3.5 kPa operating pressure", "Both platforms designed for aerospace component processing", "Integration: CryoLyze output can connect to AVPS clean zones"],
      },
      {
        phase: "08",
        title: "TAČR — Commercial Strategy",
        period: "Technology Agency of the Czech Republic",
        summary: "Commercial Strategy for Implementing Gimbal in Multisensor Communication",
        desc: "Hikade Technologies received TAČR (Technology Agency of the Czech Republic) funding for a project focused on developing a commercial strategy for deploying PATRON gimbal technology in multisensor communication platforms. This project validated the market approach and commercialisation roadmap for the stratospheric positioning technology in the context of HAPS and multisensor systems.",
        details: ["TAČR applied research and innovation funding", "Project: Commercial Strategy for Implementing Gimbal in Multisensor Communication", "Market analysis and commercialisation roadmap for PATRON", "Multisensor communication platform deployment strategy", "Strengthened industry and market positioning"],
      },
      {
        phase: "09",
        title: "ESA SPARK — CryoLyze",
        period: "ESA Technology Broker Czech Republic",
        summary: "CryoLyze supported by ESA Spark Funding initiative",
        desc: "CryoLyze executed by Hikade Technologies s.r.o. was supported by the ESA Technology Broker Czech Republic through the ESA Spark Funding initiative. ESA SPARK accelerates early-stage commercialisation of space-related technologies. The CryoLyze cryo-vacuum chamber and freeze-drying system received this support as a technology with direct relevance to space applications — including sample processing for aerospace and research missions.",
        details: ["ESA Technology Broker Czech Republic — ESA Spark Funding", "CryoLyze: cryo-vacuum chamber and freeze-drying system", "Space-relevant technology: sample processing for aerospace applications", "Accelerates early-stage commercialisation of CryoLyze platform", "Strengthened connection to ESA technology ecosystem"],
      },
      {
        phase: "10",
        title: "ESA BIC + Technology Incubation",
        period: "External validation & incubation",
        summary: "ESA BIC Prague participant + Technology Incubation programme for PATRON",
        desc: "Hikade Technologies became a participant in the ESA Business Incubation Centre Czech Republic (ESA BIC Prague) — an external validation of the technical relevance and commercial potential of the stratospheric positioning development. Simultaneously, the PATRON gimbal platform was supported through the Technology Incubation programme, which supported the maturation of the platform from early prototype toward a validated, commercially deployable system.",
        details: ["ESA BIC Czech Republic — pan-European ESA BIC network", "Validates technical relevance of stratospheric positioning work", "Access to European aerospace ecosystem and ESA connections", "Technology Incubation: PATRON from prototype toward validated system", "Technology Incubation: supports maturation to commercial readiness", "Combined: ESA BIC + Technology Incubation = ESA BIC+"],
      },
      {
        phase: "11",
        title: "Current Direction",
        period: "2025 and forward",
        summary: "Platform maturation, flight validation partnerships, portfolio expansion",
        desc: "The current focus of Hikade Technologies is on advancing both the PATRON and BEETLE platforms toward higher TRL levels and identifying the right HAPS platform partnership for the first stratospheric flight validation campaign. In parallel, the AVPS system continues to be refined for customer-specific configurations, the CryoLyze platform is in active engineering development, and the custom engineering services portfolio continues to grow with industrial R&D and aerospace-adjacent customers.",
        details: ["PATRON: advancing toward TRL 6, seeking HAPS platform partnership for flight", "BEETLE: active development, targeting lighter-class HAPS and balloon platforms", "AVPS: ongoing configuration and customer-specific adaptation", "CryoLyze: engineering development, laboratory integration", "Custom engineering: growing portfolio of industrial R&D clients", "Geographic focus: European HAPS, aerospace and industrial R&D market"],
      },
    ],
  },
  cs: {
    heroBadge: "Příběh společnosti",
    h1: "Historie společnosti",
    heroP: "Od prvních zakázkových mechatronických projektů v Brně po stratosferické polohovací platformy, systémy čistého zpracování a ESA-podpořený vývoj v letectví — inženýrský příběh Hikade Technologies.",
    overviewP1: "Hikade Technologies je česká inženýrská společnost založená v Brně. Společnost byla postavena na jediném přesvědčení: že existuje reálný trh pro inženýrské firmy, které dokáží vzít obtížný technický problém a dodat funkční řešení — ne studii, ne koncept, ale hardware, který funguje dle specifikace a je dostatečně zdokumentován, aby mohl být provozován, udržován a dále rozvíjen.",
    overviewP2: "Přesun směrem k letectví a HAPS nebyl náhlým obratem. Byl výsledkem postupné, technicky motivované progrese: inženýrské schopnosti vyvinuté pro náročné průmyslové zákazníky — lehké konstrukce, vestavěné řízení v omezených prostředích, tribologie bez standardního mazání, rychlé prototypovací cykly, systémová integrace při přísných hmotnostních a výkonových rozpočtech — se ukázaly být přesně těmi schopnostmi potřebnými pro stratosferické inženýrství payloadu.",
    overviewP3: "Dnes Hikade Technologies vyvíjí vlastní stratosferické gimbalové platformy, čisté a vakuové zpracovatelské systémy, laboratorní technologie a zakázkové mechatronické systémy pro zákazníky napříč evropským průmyslovým a leteckým R&D sektorem.",
    overviewStats: [
      { val: "Brno", label: "Česká republika" },
      { val: "HAPS", label: "Primární aplikace" },
      { val: "ESA BIC", label: "Pražský program" },
      { val: "TRL ~5", label: "Status PATRON" },
      { val: "2-osý", label: "Konfigurace gimbalu" },
      { val: "18–25 km", label: "Cílová výška" },
    ],
    timelineBadge: "Vývojové fáze",
    timelineH2: "Inženýrský přehled",
    labBadge: "Inženýrská laboratoř · Purkyňova, Brno",
    labH2: "Postaveno v Brně",
    labP: "Vysoké učení technické, Masarykova univerzita, hustý cluster průmyslových inženýrských společností a R&D organizací — Brno poskytuje správné prostředí pro typ inženýrství, který Hikade dělá.",
    esaBadge: "ESA BIC Czech Republic",
    esaH2: "ESA Business Incubation Centre",
    esaP1: "Hikade Technologies je účastníkem programu ESA Business Incubation Centre Czech Republic (ESA BIC Prague) — součásti celoevropské sítě ESA BIC podporující společnosti vyvíjející technologie s kosmickou relevancí.",
    esaP2: "Přijetí do ESA BIC odráží nezávislé posouzení, že stratosferická polohovací technologie Hikade je technicky věrohodná a komerčně relevantní v rámci evropského kosmického a HAPS ekosystému. Poskytuje přístup k odbornosti, kontaktům a ekosystémovým zdrojům podporujícím vývoj platforem PATRON a BEETLE směrem k letovému statusu.",
    esaItems: [
      { title: "Program", val: "ESA Business Incubation Centre Czech Republic (ESA BIC Prague)" },
      { title: "Síť", val: "Součást celoevropské inkubační sítě ESA BIC" },
      { title: "Relevance", val: "Stratosferické polohovací systémy a přesné letecké inženýrství" },
      { title: "Přínos", val: "Externí validace, přístup k ekosystému, technické kontakty" },
      { title: "Status", val: "Aktivní účastník" },
    ],
    ctaBadge: "Kde jsme nyní",
    ctaH2: "Vývoj nové generace přesných leteckých a mechatronických systémů",
    ctaP: "Od stratosferických gimbalových platforem po systémy čistého zpracování a zakázkové průmyslové inženýrství — Hikade Technologies nadále buduje technická řešení pro problémy, které standardní produkty nemohou vyřešit.",
    ctaBtn1: "Prozkoumat polohovací systémy",
    ctaBtn2: "O společnosti",
    ctaBtn3: "Kontaktujte nás",
    timeline: [
      {
        phase: "01",
        title: "Založení",
        period: "Vznik společnosti",
        summary: "Hikade Technologies s.r.o. založena v Brně",
        desc: "Hikade Technologies s.r.o. byla založena v Brně, Česká republika, s jasným inženýrským zaměřením od samého začátku: navrhovat a vyvíjet kompletní mechatronické systémy pro zákazníky, jejichž požadavky přesahují možnosti standardních katalogových řešení. Zakládající tým sdružil odbornost v oblasti strojního inženýrství, vestavěných řídicích systémů a rychlého prototypování — kombinaci, která definuje to, co Hikade Technologies dělá dnes.",
        details: ["Registrovaná v Brně, Česká republika", "Inženýrské zaměření od prvního dne — ne konzultantská firma", "Základní tým: strojní inženýrství + vestavěné systémy", "První inženýrské diskuze s průmyslovými zákazníky"],
      },
      {
        phase: "02",
        title: "První inženýrské projekty",
        period: "Raný provoz",
        summary: "Zakázkové mechatronické systémy pro náročné průmyslové zákazníky",
        desc: "První projekty etablovaly základní přístup společnosti: vzít zákaznický požadavek, který žádný katalogový produkt nemůže splnit, definovat systémovou architekturu, navrhnout ji, postavit, otestovat a dodat s dokumentací. Rané projekty zahrnovaly zakázkové zkušební zařízení, průmyslové přípravky, přesné mechanické sestavy a vestavěné řídicí systémy — problémy, kde zákazník věděl, co systém musí dělat, ale ne jak bude vypadat.",
        details: ["Zakázkové zkušební stolice a měřicí přípravky", "Průmyslové mechanické sestavy a přípravky", "Vestavěné řízení pro jednoúčelové stroje", "Kompletní dodávka: hardware + dokumentace"],
      },
      {
        phase: "03",
        title: "Rozvoj mechatronických schopností",
        period: "Systematický růst",
        summary: "Vybudován kompletní inženýrský stack: CAD · analýzy · prototypování · firmware · integrace",
        desc: "Raná projektová zkušenost odhalila, že nejnáročnější zákazníci nepotřebují jen konstrukční návrh, jen elektroniku nebo jen firmware — ale vše tři integrované dohromady. Hikade Technologies systematicky vybudovala kompletní inženýrský stack: parametrický CAD design, strukturální a tepelné výpočtové analýzy, infrastrukturu pro rychlé prototypování, vývoj vestavěného firmware a řízení v reálném čase, a kompletní mechatronickou systémovou integraci. Tento stack schopností nyní pokrývá každý projekt Hikade od konceptu po validovaný prototyp.",
        details: ["Parametrické 3D CAD a správa sestav", "Schopnost strukturální, tepelné a modální analýzy", "Rychlé prototypování: 3D tisk + CNC + montáž + test", "Vestavěný firmware: řízení v reálném čase, RS-485, Ethernet", "Kompletní mechatronická integrace: mechanika + elektronika + firmware", "Technická dokumentace jako standardní součást dodávky"],
      },
      {
        phase: "04",
        title: "Pivotování do letectví a HAPS",
        period: "Změna strategického zaměření",
        summary: "Identifikace vývoje stratosferického gimbalu jako primárního směru",
        desc: "Jak se základ schopností zralel, v sektoru HAPS a stratosferického payloadu se ukázala jasná strategická příležitost. Rozvíjející se trh pro platformy High-Altitude Pseudo-Satellite — operující ve výšce 18–25 km po týdny nebo měsíce — vytvořil specifickou nenaplněnou potřebu přesných systémů stabilizace a polohování payloadu účelově navržených pro stratosferické prostředí. Inženýrské výzvy tohoto prostředí se přesně shodovaly s nashromážděnou odborností Hikade. Bylo rozhodnuto přesměrovat inženýrské kapacity na tuto aplikaci jako primární vývojový směr.",
        details: ["Analýza sektoru HAPS a stratosferického payloadu", "Identifikace mezery: žádný účelový stratosferický gimbal pro středně velké payloady", "Potvrzení technické shody: naše odbornost odpovídala problému", "Zahájení přesměrování vývojových zdrojů na letecké aplikace"],
      },
      {
        phase: "05",
        title: "Vývoj gimbalu PATRON",
        period: "Vývoj platformy — aktivní",
        summary: "Primární HAPS gimbalová platforma — TRL ~5",
        desc: "PATRON je primární inženýrská platforma Hikade — konfigurovatelný dvouosý gimbalový systém navržený pro náročné HAPS payloady až do přibližně 18 kg. Design řeší kompletní sadu stratosferických inženýrských výzev: tribologii při nízkém tlaku, tepelný management bez konvekce, hmotnostně optimalizovanou konstrukci, management kabelů přes otočné spoje, modulární rozhraní payloadu a vestavěné řízení v reálném čase. PATRON je aktuálně v aktivním vývoji na přibližně TRL 5.",
        details: ["Nosnost payloadu: až ~18 kg", "Konfigurace: dvouosý (azimut a elevace)", "Hmotnost systému: přibližně 8 kg", "Jmenovitý příkon: 200–400 W dle konfigurace", "Účelově navržen pro provoz ve výšce 18–25 km", "Status: vývojová platforma, TRL přibližně 5"],
      },
      {
        phase: "06",
        title: "Vývoj gimbalu BEETLE",
        period: "Vývoj platformy — aktivní",
        summary: "Lehký HAPS gimbal pro menší třídy payloadu",
        desc: "BEETLE byl vyvíjen paralelně s PATRONem pro oslovení jiného segmentu trhu stratosferických gimbalů: menší payloady, méně nákladné platformy, demonstrační lety technologie a zákazníci s přísnějšími hmotnostními rozpočty. BEETLE nese payloady až přibližně 4,5 kg při hmotnosti systému přibližně 2,5 kg — díky čemuž je vhodný pro širokou škálu stratosferických dronových, HAPS a balonových aplikací. Platforma sdílí stejný inženýrský přístup a filozofii environmentálního návrhu jako PATRON, komprimovanou do lehčího a kompaktnějšího provedení.",
        details: ["Nosnost payloadu: až ~4,5 kg", "Hmotnost systému: přibližně 2,5 kg", "Jmenovitý příkon: přibližně 30 W", "Cíl: aplikace citlivé na cenu a lehčí třídy", "Sdílí návrhovou filozofii PATRON a pravidla environmentálního návrhu", "Status: vývojová platforma"],
      },
      {
        phase: "07",
        title: "Vývoj AVPS a CryoLyze",
        period: "Technologická diverzifikace",
        summary: "Systémy čistého zpracování a lyofilizace přidány do portfolia",
        desc: "Vývoj AVPS (AeroVac Precision System) a CryoLyze představoval rozšíření technického portfolia Hikade do oblasti technologií čistého a vakuového zpracování. AVPS je modulární technologické pracoviště pro řízené čištění, oplach, sušení, montáž, mazání, inspekci a balení přesných komponent. CryoLyze toto rozšířilo do oblasti lyofilizace, umožňující řízené zpracování citlivých biologických a technických vzorků za podmínek nízkého tlaku a nízkých teplot.",
        details: ["AVPS: modulární čisté pracoviště, klasifikace zón dle ISO 14644-1", "Zóny AVPS: od ISO 8 (okolní prostředí) po ISO 5 (aktivní zóna AVPS-A)", "CryoLyze: lyofilizační platforma, komora AISI 316L, chlazení LN2", "Vakuum CryoLyze: provozní tlak pod 3,5 kPa", "Obě platformy navrženy pro zpracování leteckých komponent", "Integrace: výstup CryoLyze lze připojit k čistým zónám AVPS"],
      },
      {
        phase: "08",
        title: "TAČR — Komerční strategie",
        period: "Technologická agentura České republiky",
        summary: "Komerční strategie pro implementaci gimbalu v multisenzorové komunikaci",
        desc: "Hikade Technologies získala financování od TAČR (Technologická agentura České republiky) pro projekt zaměřený na vývoj komerční strategie pro nasazení gimbalové technologie PATRON na multisenzorových komunikačních platformách. Tento projekt validoval tržní přístup a komercionalizační plán pro stratosferickou polohovací technologii v kontextu HAPS a multisenzorových systémů.",
        details: ["Financování aplikovaného výzkumu a inovací TAČR", "Projekt: Komerční strategie pro implementaci gimbalu v multisenzorové komunikaci", "Analýza trhu a komercionalizační plán pro PATRON", "Strategie nasazení na multisenzorové komunikační platformy", "Posílení průmyslového a tržního postavení"],
      },
      {
        phase: "09",
        title: "ESA SPARK — CryoLyze",
        period: "ESA Technology Broker Česká republika",
        summary: "CryoLyze podpořen iniciativou ESA Spark Funding",
        desc: "CryoLyze realizovaný Hikade Technologies s.r.o. byl podpořen ESA Technology Broker Česká republika prostřednictvím iniciativy ESA Spark Funding. ESA SPARK urychluje ranou komercializaci technologií souvisejících s kosmickým sektorem. Kryovakuová komora a lyofilizační systém CryoLyze získaly tuto podporu jako technologie s přímou relevancí pro kosmické aplikace — včetně zpracování vzorků pro letecké a výzkumné mise.",
        details: ["ESA Technology Broker Česká republika — ESA Spark Funding", "CryoLyze: kryovakuová komora a lyofilizační systém", "Technologie relevantní pro kosmický sektor: zpracování vzorků pro letecké aplikace", "Urychluje ranou komercializaci platformy CryoLyze", "Posílení vazby na ekosystém ESA technologií"],
      },
      {
        phase: "10",
        title: "ESA BIC + Technologická inkubace",
        period: "Externí validace a inkubace",
        summary: "Účastník ESA BIC Prague + program technologické inkubace pro PATRON",
        desc: "Hikade Technologies se stala účastníkem programu ESA Business Incubation Centre Czech Republic (ESA BIC Prague) — externího potvrzení technické relevance a komerčního potenciálu vývojového směru stratosferického polohování. Paralelně byla gimbalová platforma PATRON podpořena programem technologické inkubace, který podpořil zrání platformy od raného prototypu směrem k validovanému, komerčně nasaditelnému systému.",
        details: ["ESA BIC Czech Republic — součást celoevropské sítě ESA BIC", "Validuje technickou relevanci práce v oblasti stratosferického polohování", "Přístup k evropskému leteckému ekosystému a kontaktům ESA", "Technologická inkubace: PATRON od prototypu směrem k validovanému systému", "Technologická inkubace: podpora zrání k připravenosti pro komerční nasazení", "Kombinace: ESA BIC + Technologická inkubace = ESA BIC+"],
      },
      {
        phase: "11",
        title: "Současný směr",
        period: "2025 a dál",
        summary: "Zrání platforem, partnerství pro letovou validaci, rozšíření portfolia",
        desc: "Současné zaměření Hikade Technologies spočívá v posunování platforem PATRON a BEETLE na vyšší TRL úrovně a v hledání správného partnerství s HAPS platformou pro první kampaň letové validace ve stratosféře. Paralelně je systém AVPS průběžně upřesňován pro zákaznicky specifické konfigurace, platforma CryoLyze je v aktivním inženýrském vývoji a portfolio zakázkových inženýrských služeb nadále roste s průmyslovými R&D a letectví-příbuznými zákazníky.",
        details: ["PATRON: postup směrem k TRL 6, hledání partnerství s HAPS platformou pro let", "BEETLE: aktivní vývoj, cílení na lehčí třídy HAPS a balonových platforem", "AVPS: průběžná konfigurace a zákaznická adaptace", "CryoLyze: inženýrský vývoj, laboratorní integrace", "Zakázkové inženýrství: rostoucí portfolio průmyslových R&D klientů", "Geografické zaměření: evropský HAPS, letecký a průmyslový R&D trh"],
      },
    ],
  },
} as const;

export default function HistoryPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="text-white pt-20">
      {/* ── HERO ── */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">{t.heroBadge}</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.h1}</h1>
            <p className="text-lg text-white/60 leading-relaxed">{t.heroP}</p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4 text-white/60 leading-relaxed">
              <p>{t.overviewP1}</p>
              <p>{t.overviewP2}</p>
              <p>{t.overviewP3}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.overviewStats.map((s) => (
                <div key={s.val} className="p-4 border border-white/10 rounded-lg bg-[#1F2019]/50">
                  <div className="text-base font-bold font-mono text-[#63C3B5]">{s.val}</div>
                  <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="telemetry-badge">{t.timelineBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{t.timelineH2}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#63C3B5]/50 via-[#63C3B5]/20 to-transparent hidden lg:block" />

            <div className="space-y-6">
              {t.timeline.map((item) => (
                <div key={item.phase} className="relative lg:pl-20">
                  <div className="absolute left-6 top-7 w-4 h-4 rounded-full border-2 border-[#63C3B5] bg-[#18261D] hidden lg:flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#63C3B5]" />
                  </div>

                  <div className="border border-white/10 rounded-lg overflow-hidden bg-[#1F2019]/50 hover:border-[#63C3B5]/20 transition-colors">
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-mono font-bold text-[#63C3B5]/60">{item.phase}</span>
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <span className="text-xs font-mono text-white/30">{item.period}</span>
                          </div>
                        </div>
                        <div className="text-xs font-mono px-3 py-1.5 border border-[#63C3B5]/20 text-[#63C3B5]/60 rounded">
                          {item.summary}
                        </div>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed mb-5">{item.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {item.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2 text-xs text-white/40">
                            <span className="text-[#63C3B5]/40 mt-0.5 flex-shrink-0">→</span>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LAB ── */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <Image src="/assets/lab/lab-electronics.jpg" alt="Hikade Technologies Engineering Lab" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18261D] via-[#18261D]/70 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-lg">
            <span className="telemetry-badge mb-3 block w-fit">{t.labBadge}</span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">{t.labH2}</h2>
            <p className="text-white/55 text-sm leading-relaxed">{t.labP}</p>
          </div>
        </div>
      </section>

      {/* ── ESA BIC ── */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-[#63C3B5]/20 rounded-lg p-8 lg:p-12 bg-[#63C3B5]/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="telemetry-badge mb-4 inline-block">{t.esaBadge}</span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.esaH2}</h2>
                <p className="text-white/60 leading-relaxed mb-4">{t.esaP1}</p>
                <p className="text-white/60 leading-relaxed">{t.esaP2}</p>
              </div>
              <div className="space-y-3">
                {t.esaItems.map((item) => (
                  <div key={item.title} className="p-4 border border-white/10 rounded-lg bg-[#18261D]/50">
                    <div className="text-[10px] font-mono text-[#63C3B5] uppercase mb-1">{item.title}</div>
                    <div className="text-sm text-white/65">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 tech-grid-fine">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="telemetry-badge mb-6 inline-block">{t.ctaBadge}</span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.ctaH2}</h2>
          <p className="text-white/60 leading-relaxed mb-8">{t.ctaP}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/positioning-systems" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              {t.ctaBtn1}
            </Link>
            <Link href="/about" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/60 hover:text-[#63C3B5] transition-colors">
              {t.ctaBtn2}
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-white/20 text-white/60 font-semibold rounded hover:border-white/40 hover:text-white transition-colors">
              {t.ctaBtn3}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
