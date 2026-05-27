import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AeroVac Precision System (AVPS) — Modular Clean Processing Workstation",
  description: "AVPS is a modular clean and vacuum-compatible workstation for precision bearing processing, optics handling and contamination-controlled assembly.",
};

const specs = [
  { param: "System type", value: "Modular clean and vacuum-compatible workstation", note: "Process-dependent" },
  { param: "Primary components", value: "Precision bearings and mechanical parts", note: "Aerospace / vacuum relevant" },
  { param: "Secondary components", value: "Optics and selected electronics", note: "Configuration-dependent" },
  { param: "Cleanliness concept", value: "ISO 8 to ISO 5 local zones", note: "Validation-dependent" },
  { param: "Zone A", value: "Undefined / ISO 9 at-rest", note: "Input / less clean zone" },
  { param: "Zone B", value: "ISO 8 at-rest", note: "Intermediate zone" },
  { param: "Zone C", value: "ISO 7–6 operational", note: "Clean process zone" },
  { param: "AVPS-A optional", value: "ISO 6–5 local operational / as-built", note: "Optional validation pack" },
  { param: "Process modules", value: "Cleaning, rinsing, drying, assembly, lubrication, inspection, packaging", note: "Modular" },
  { param: "Validation", value: "ISO 14644 where applicable", note: "According to configuration" },
];

const processModules = [
  "Input / pre-cleaning zone",
  "Ultrasonic cleaning",
  "Rinsing",
  "Controlled drying",
  "Vacuum drying (where relevant)",
  "Clean transfer",
  "Assembly",
  "Lubrication",
  "Inspection",
  "Clean packaging",
  "Airlock",
  "Optional validation pack",
];

const isoClasses = [
  { cls: "ISO 5", c01: "100,000", c02: "23,700", c03: "10,200", c05: "3,520", c10: "832", c50: "29" },
  { cls: "ISO 6", c01: "1,000,000", c02: "237,000", c03: "102,000", c05: "35,200", c10: "8,320", c50: "293" },
  { cls: "ISO 7", c01: "10,000,000", c02: "2,370,000", c03: "1,020,000", c05: "352,000", c10: "83,200", c50: "2,930" },
  { cls: "ISO 8", c01: "100,000,000", c02: "23,700,000", c03: "10,200,000", c05: "3,520,000", c10: "832,000", c50: "29,300" },
  { cls: "ISO 9", c01: "—", c02: "—", c03: "—", c05: "—", c10: "—", c50: "—" },
];

export default function AVPSPage() {
  return (
    <div className="text-white pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#1F2019] tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/svetlomet-gimbal-front.jpg" alt="AVPS Clean Processing" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019] via-[#1F2019]/60 to-transparent" />
        </div>

        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "ZONE C", val: "ISO 7–6" },
            { label: "AVPS-A", val: "ISO 6–5" },
            { label: "PROCESS", val: "Modular" },
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
              <span className="text-white">AeroVac Precision System</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Modular clean & vacuum-compatible workstation</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">AeroVac Precision System</h1>
            <p className="text-xl font-mono text-white mb-4">AVPS</p>
            <p className="text-lg text-white leading-relaxed mb-8">
              Modular technological workstation designed for cleaning, rinsing, drying, assembly, lubrication, inspection and packaging of precision bearings and similar mechanical components with high cleanliness requirements.
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

      {/* Zone diagram + Photo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Cleanliness Zone Concept</h2>
              <p className="text-white leading-relaxed mb-8">
                AVPS is based on strict spatial and process separation of individual steps according to contamination level and process sensitivity. Progressive reduction of contamination between zones ensures controlled, repeatable and traceable processing.
              </p>

              {/* Zone diagram */}
              <div className="space-y-3">
                {[
                  { zone: "Zone A", iso: "Undefined / ISO 9", regime: "at-rest", desc: "Input and pre-processing area", color: "border-white/20 bg-white/5" },
                  { zone: "Zone B", iso: "ISO 8", regime: "at-rest", desc: "Intermediate processing zone", color: "border-[#82D5CA]/20 bg-[#82D5CA]/5" },
                  { zone: "Zone C", iso: "ISO 7–6", regime: "operational", desc: "Clean process zone — assembly, lubrication, inspection", color: "border-[#82D5CA]/40 bg-[#82D5CA]/10" },
                  { zone: "AVPS-A", iso: "ISO 6–5", regime: "operational / as-built", desc: "Optional local high-cleanliness zone (validation pack)", color: "border-[#82D5CA] bg-[#82D5CA]/15" },
                ].map((z) => (
                  <div key={z.zone} className={`p-4 border rounded-lg ${z.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-sm font-bold">{z.zone}</span>
                      <span className="telemetry-badge">{z.iso}</span>
                    </div>
                    <div className="text-xs text-white font-mono mb-2">{z.regime}</div>
                    <p className="text-sm text-white">{z.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 border border-white/10 rounded bg-[#1F2019]">
                <p className="text-xs text-white leading-relaxed">
                  Higher cleanliness levels such as ISO 7 to ISO 5 are achieved locally in laminar flow areas, not across the whole internal volume of the device. ISO classes must always be connected to measurement regime, system configuration, validation scope and operating mode.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden h-[420px] lg:h-[520px] relative">
              <Image
                src="/assets/products/avps/avps-1.png"
                alt="AeroVac Precision System"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Svetlomet photo */}
      <section className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
              <Image src="/assets/hero/svetlomet-gimbal-front.jpg" alt="AVPS workstation front" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019]/80 to-transparent" />
              <div className="absolute bottom-4 left-4"><span className="telemetry-badge">Clean zone view</span></div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
              <Image src="/assets/hero/svetlomet-gimbal-side.jpg" alt="AVPS workstation side" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019]/80 to-transparent" />
              <div className="absolute bottom-4 left-4"><span className="telemetry-badge">Side profile</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO particle table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold mb-2">ISO 14644-1 Particle Limits</h2>
            <p className="text-sm text-white mb-6">Maximum particle concentration per m³ of air — for reference only. Actual cleanliness depends on system configuration, validation scope and operating mode.</p>
            <div className="border border-white/10 rounded-lg overflow-x-auto">
              <table className="tech-table min-w-full">
                <thead>
                  <tr>
                    <th>ISO Class</th>
                    <th>≥ 0.1 µm</th>
                    <th>≥ 0.2 µm</th>
                    <th>≥ 0.3 µm</th>
                    <th>≥ 0.5 µm</th>
                    <th>≥ 1.0 µm</th>
                    <th>≥ 5.0 µm</th>
                  </tr>
                </thead>
                <tbody>
                  {isoClasses.map((row) => (
                    <tr key={row.cls}>
                      <td>{row.cls}</td>
                      <td className="text-white">{row.c01}</td>
                      <td className="text-white">{row.c02}</td>
                      <td className="text-white">{row.c03}</td>
                      <td className="text-white">{row.c05}</td>
                      <td className="text-white">{row.c10}</td>
                      <td className="text-white">{row.c50}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white mt-3 font-mono">ISO 9 ≈ normal indoor environment. Not used as a strict cleanroom target. Particle limits are stated as maximums per m³.</p>
          </div>
        </div>
      </section>

      {/* System specs */}
      <section id="specs" className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">Technical Data</span>
            <h2 className="text-2xl font-bold mb-8">AVPS — System Specifications</h2>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Configuration / Target</th>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Define an AVPS configuration for your process</h2>
          <p className="text-white leading-relaxed mb-8">
            Define an AVPS configuration around your cleanliness class, process flow, component type and validation requirements. We will help design a workstation that fits your specific contamination limits and operational workflow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
              Discuss Your Process
            </Link>
            <Link href="/products/cryolyze" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">
              Also see: CryoLyze
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
