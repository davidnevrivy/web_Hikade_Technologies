import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";

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

export default function BeetlePage() {
  return (
    <div className="text-white pt-20">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-[#1F2019] tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/beetle-hero.png" alt="BEETLE Gimbal hero" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019] via-[#1F2019]/70 to-transparent" />
        </div>

        <div className="absolute right-0 xl:right-4 top-0 bottom-0 w-3/5 z-10 hidden lg:block">
          <Image src="/assets/products/beetle/beetle-render-transparent.png" alt="BEETLE Gimbal" fill className="object-contain object-center" priority />
        </div>

        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "PAYLOAD", val: "≤ 4.5 kg" },
            { label: "SYSTEM MASS", val: "~2.5 kg" },
            { label: "NOMINAL POWER", val: "~30 W" },
          ].map((b) => (
            <div key={b.label} className="telemetry-badge flex items-center gap-2">
              <span className="text-white">{b.label}</span>
              <span>{b.val}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-[#82D5CA]/70 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#82D5CA] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">BEETLE Gimbal</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Lightweight two-axis gimbal platform</span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">BEETLE</h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              Lightweight and cost-sensitive two-axis gimbal platform for smaller payloads, test platforms and early stratospheric mission development.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                Define Your Configuration
              </Link>
              <Link href="#specs" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">
                Technical Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Compact, Cost-Sensitive, Configurable</h2>
            <div className="space-y-4 text-white leading-relaxed">
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
              <p className="text-xs text-white leading-relaxed">
                <span className="text-yellow-400 font-mono">STATUS:</span> BEETLE is a development / demonstration platform. Parameters may vary depending on configuration and validation scope. The system is not presented as flight-proven unless explicitly validated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Hardware */}
      <section className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-8">
            <span className="text-white font-mono text-sm">PROTOTYPE HARDWARE</span>
          </h2>
          <PhotoGallery
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            photos={[
              { src: "/assets/products/beetle/beetle-prototype-studio.jpg", alt: "BEETLE prototype — studio shot" },
              { src: "/assets/products/beetle/beetle-prototype-front.jpg", alt: "BEETLE prototype — front view" },
              { src: "/assets/products/beetle/beetle-prototype-rear.jpg", alt: "BEETLE prototype — rear view" },
            ]}
          />
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">Technical Data</span>
            <h2 className="text-2xl font-bold mb-8">BEETLE — Technical Specifications</h2>

            <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Target Applications</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {applications.map((a) => (
                <span key={a} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white">{a}</span>
              ))}
            </div>

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
            <p className="text-xs text-white mt-3 font-mono">Parameters may vary depending on configuration, customer requirements and validation scope.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Use BEETLE as a configurable starting point</h2>
          <p className="text-white leading-relaxed mb-8">
            Use BEETLE as a configurable starting point for lightweight payload stabilization and early stratospheric mission development. Define your payload envelope, platform interface and pointing requirements with us.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
              Start Technical Discussion
            </Link>
            <Link href="/products/patron" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">
              Also see: PATRON Gimbal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
