import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BEETLE Gimbal — Lightweight HAPS & Balloon Payload Platform",
  description: "BEETLE is a lightweight and cost-sensitive two-axis gimbal platform for smaller payloads, test platforms and early stratospheric mission development.",
};

const specs = [
  { param: "Platform type", value: "Two-axis lightweight gimbal", note: "Configurable" },
  { param: "Application", value: "Smaller HAPS / balloon payloads", note: "Customer-specific" },
  { param: "Payload capacity", value: "up to approx. 4.5 kg", note: "Depending on configuration" },
  { param: "System mass", value: "approx. 2.5 kg", note: "Depending on configuration" },
  { param: "Nominal power", value: "approx. 30 W", note: "Mission-profile dependent" },
  { param: "Peak power", value: "approx. 150 W", note: "Movement-profile dependent" },
  { param: "Number of axes", value: "2", note: "Azimuth + elevation" },
  { param: "Target use", value: "Demonstration / R&D / early validation", note: "Not for series production" },
  { param: "Status", value: "Development / demonstration platform", note: "Not flight-proven unless validated" },
];

const applications = [
  "Smaller balloon platforms",
  "Lightweight HAPS payloads",
  "Compact optical systems",
  "University / R&D missions",
  "Demonstration payloads",
  "Early customer validation",
  "Low-cost stratospheric experiments",
];

const galleryImages = [
  { src: "/assets/products/beetle/beetle-ai-1.png", alt: "BEETLE Gimbal — AI render front" },
  { src: "/assets/products/beetle/beetle-ai-2.png", alt: "BEETLE Gimbal — AI render top" },
  { src: "/assets/products/beetle/beetle-ai-3.png", alt: "BEETLE Gimbal — AI render 3/4" },
  { src: "/assets/products/beetle/beetle-ai-4.png", alt: "BEETLE Gimbal — AI render side" },
  { src: "/assets/products/beetle/beetle-bg-1.png", alt: "BEETLE Gimbal — atmospheric" },
  { src: "/assets/products/beetle/beetle-bg-2.png", alt: "BEETLE Gimbal — render" },
  { src: "/assets/products/beetle/beetle-bg-3.png", alt: "BEETLE Gimbal — detail" },
  { src: "/assets/products/beetle/beetle-render-1.png", alt: "BEETLE — render 1" },
  { src: "/assets/products/beetle/beetle-render-2.png", alt: "BEETLE — render 2" },
  { src: "/assets/products/beetle/beetle-render-3.png", alt: "BEETLE — render 3" },
];

export default function BeetlePage() {
  return (
    <div className="text-white pt-20">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-[#1F2019] tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/beetle-hero.png" alt="BEETLE Gimbal hero" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019] via-[#1F2019]/70 to-transparent" />
        </div>

        <div className="absolute right-0 lg:right-8 xl:right-16 top-4 bottom-0 w-1/2 lg:w-2/5 z-10 hidden lg:block">
          <Image src="/assets/products/beetle/beetle-ai-1.png" alt="BEETLE Gimbal" fill className="object-contain object-center" priority />
        </div>

        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "PAYLOAD", val: "≤ 4.5 kg" },
            { label: "SYSTEM MASS", val: "~2.5 kg" },
            { label: "NOMINAL POWER", val: "~30 W" },
          ].map((b) => (
            <div key={b.label} className="telemetry-badge flex items-center gap-2">
              <span className="text-white/50">{b.label}</span>
              <span>{b.val}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-white/40 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#63C3B5] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#63C3B5]">BEETLE Gimbal</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Lightweight two-axis gimbal platform</span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">BEETLE</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Lightweight and cost-sensitive two-axis gimbal platform for smaller payloads, test platforms and early stratospheric mission development.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                Define Your Configuration
              </Link>
              <Link href="#specs" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
                Technical Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Compact, Cost-Sensitive, Configurable</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  BEETLE is a compact two-axis gimbal platform developed for smaller payload classes, test flights, technology demonstrations and cost-sensitive stratospheric or aerospace-adjacent applications. It shares the same development philosophy as PATRON — modular, configurable and designed with integration constraints in mind — but targets a different payload class and mission profile.
                </p>
                <p>
                  The platform is developed for customers who need two-axis pointing and stabilization without the full mass and power budget of a larger system. BEETLE is a valid starting point for early validation, R&D missions, university payloads and compact optical or sensor systems where mass, volume and cost are the primary constraints.
                </p>
                <p>
                  Like all Hikade Technologies platforms, BEETLE is not a fixed catalog product. The payload interface, control architecture and integration approach are adapted to the specific mission and platform requirements.
                </p>
              </div>

              <div className="mt-8 p-4 border border-yellow-400/20 rounded bg-yellow-400/5">
                <p className="text-xs text-white/50 leading-relaxed">
                  <span className="text-yellow-400 font-mono">STATUS:</span> BEETLE is a development / demonstration platform. Parameters may vary depending on configuration and validation scope. The system is not presented as flight-proven unless explicitly validated.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Target Applications</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {applications.map((app) => (
                  <span key={app} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white/60">{app}</span>
                ))}
              </div>

              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Key Differentiators vs. PATRON</h3>
              <ul className="space-y-3">
                {[
                  "Lower total system mass (~2.5 kg vs. ~8 kg)",
                  "Smaller payload envelope (up to ~4.5 kg)",
                  "Lower nominal power (~30 W vs. 200–400 W)",
                  "Cost-sensitive configuration for early validation",
                  "Faster integration for demonstration missions",
                  "Suitable for R&D, university and low-budget platforms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[#63C3B5] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 border border-[#63C3B5]/20 rounded bg-[#63C3B5]/5">
                <p className="text-xs text-[#63C3B5] font-mono mb-1">ALSO IN THE FAMILY</p>
                <p className="text-xs text-white/50">
                  PATRON is the larger and higher-precision variant for heavier payloads. Micro BEETLE is an early concept for ultra-lightweight pointing below 400 g system mass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-8">
            <span className="text-[#63C3B5] font-mono text-sm">RENDERS & VISUALS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square bg-[#3C271E]/30 rounded-lg overflow-hidden group border border-white/5 hover:border-[#63C3B5]/30 transition-colors">
                <Image src={img.src} alt={img.alt} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">Technical Data</span>
            <h2 className="text-2xl font-bold mb-8">BEETLE — Technical Specifications</h2>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Target / Typical Value</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((row) => (
                    <tr key={row.param}>
                      <td>{row.param}</td>
                      <td>{row.value}</td>
                      <td>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/35 mt-3 font-mono">Parameters may vary depending on configuration, customer requirements and validation scope.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Use BEETLE as a configurable starting point</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Use BEETLE as a configurable starting point for lightweight payload stabilization and early stratospheric mission development. Define your payload envelope, platform interface and pointing requirements with us.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              Start Technical Discussion
            </Link>
            <Link href="/products/patron" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
              Also see: PATRON Gimbal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
