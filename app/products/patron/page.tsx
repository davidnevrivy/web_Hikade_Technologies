import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PATRON Gimbal — High-Precision HAPS Payload Platform",
  description: "PATRON is a configurable two-axis gimbal platform for demanding HAPS and stratospheric payloads requiring precise pointing, robust mechanical design and customer-specific integration.",
};

const specs = [
  { param: "Platform type", value: "Two-axis gimbal", note: "Configurable" },
  { param: "Application", value: "HAPS / stratospheric payloads", note: "Customer-specific" },
  { param: "Payload capacity", value: "up to approx. 15 kg", note: "Depending on configuration" },
  { param: "System mass", value: "approx. 6.5 kg", note: "Depending on configuration" },
  { param: "Power", value: "approx. 200–400 W", note: "Mission-profile dependent" },
  { param: "Pointing accuracy", value: "arcminute / hundredths of degree class", note: "Target, configuration-dependent" },
  { param: "Number of axes", value: "2", note: "Azimuth + elevation" },
  { param: "Control", value: "Embedded control", note: "Interface-specific" },
  { param: "Environment", value: "Low pressure / low temperature relevant design", note: "Validation scope dependent" },
  { param: "Status", value: "Development platform / TRL ~5", note: "Not flight-proven" },
];

const applications = [
  "HAPS payloads",
  "Stratospheric platforms",
  "EO / imaging systems",
  "Optical payloads",
  "Antenna and communication payloads",
  "Scientific payloads",
  "Long-duration monitoring applications",
];

const techFocus = [
  "Precision positioning and two-axis stabilization",
  "Robust mechanical structure designed for demanding environments",
  "Payload integration and customer-specific interface",
  "Embedded control with communication interfaces",
  "Low-pressure and low-temperature design considerations",
  "Modular and configurable architecture",
  "Mass and power optimization",
  "Cable routing without restriction of motion",
];

const galleryImages = [
  { src: "/assets/products/patron/patron-dark-1.png", alt: "PATRON Gimbal — front view" },
  { src: "/assets/products/patron/patron-dark-2.png", alt: "PATRON Gimbal — side view" },
  { src: "/assets/products/patron/patron-dark-3.png", alt: "PATRON Gimbal — 3/4 view" },
  { src: "/assets/products/patron/patron-dark-4.png", alt: "PATRON Gimbal — detail" },
  { src: "/assets/products/patron/patron-real-1.png", alt: "PATRON Gimbal — real background" },
  { src: "/assets/products/patron/patron-real-2.png", alt: "PATRON Gimbal — atmosphere" },
  { src: "/assets/products/patron/patron-prototype.jpg", alt: "PATRON prototype demo" },
  { src: "/assets/products/patron/patron-bearing.jpg", alt: "PATRON bearing housing" },
  { src: "/assets/products/patron/patron-frame.jpg", alt: "PATRON prototype frame" },
  { src: "/assets/products/patron/patron-motor.jpg", alt: "PATRON drive detail" },
  { src: "/assets/products/patron/patron-drawing.jpg", alt: "PATRON technical drawing" },
  { src: "/assets/products/patron/patron-atmosphere.jpg", alt: "PATRON in atmosphere" },
];

export default function PatronPage() {
  return (
    <div className="text-white pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#1F2019] tech-grid">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/hero/patron-atmosphere.jpg" alt="PATRON in stratosphere" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2019] via-[#1F2019]/60 to-transparent" />
        </div>

        {/* Floating product render */}
        <div className="absolute right-0 lg:right-8 xl:right-16 top-8 bottom-0 w-1/2 lg:w-2/5 z-10 hidden lg:block">
          <Image src="/assets/products/patron/patron-transparent-2.png" alt="PATRON Gimbal" fill className="object-contain object-bottom" priority />
        </div>

        {/* Telemetry overlays */}
        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "PAYLOAD", val: "≤ 15 kg" },
            { label: "SYSTEM MASS", val: "6.5 kg" },
            { label: "AXES", val: "2-axis" },
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
              <span className="text-white">PATRON Gimbal</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">High-precision HAPS gimbal platform</span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">PATRON</h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              Configurable two-axis gimbal platform for demanding HAPS and stratospheric payloads requiring precise pointing, robust mechanical design and customer-specific integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                Discuss Your Payload
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Designed for Demanding Payloads</h2>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  PATRON is a high-precision two-axis gimbal platform developed for payload stabilization and pointing in HAPS, stratospheric and aerospace-relevant environments. The design focuses on accurate two-axis control, mechanical stiffness and reliable operation where payload mass, power and pointing constraints define the engineering challenge.
                </p>
                <p>
                  The platform is designed with low-pressure and low-temperature operation considerations from the beginning. Mass budget, cable management without restriction of motion and compatibility with customer-specific payload interfaces are integral parts of the architecture.
                </p>
                <p>
                  PATRON is developed as a configurable system rather than a fixed catalog product. The payload interface, control architecture, cable routing and integration approach are adapted according to the specific platform and mission profile.
                </p>
                <p>
                  Embedded control, encoder feedback, actuator integration and communication interfaces are developed as part of the complete system — not as separate components added at the end.
                </p>
              </div>

              <div className="mt-8 p-4 border border-[#82D5CA]/20 rounded bg-[#82D5CA]/5">
                <p className="text-xs text-white leading-relaxed">
                  <span className="text-white font-mono">NOTE:</span> PATRON is a development platform approximately at TRL 5. Parameters may vary depending on configuration, customer requirements and validation scope. The system is not presented as flight-proven.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Focus</h2>
              <ul className="space-y-3">
                {techFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <span className="text-[#82D5CA] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Target Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="text-white font-mono text-sm">RENDERS & PROTOTYPES</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square bg-[#3C271E]/30 rounded-lg overflow-hidden group border border-white/5 hover:border-[#82D5CA]/30 transition-colors">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-400"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="telemetry-badge mb-4 inline-block">Technical Data</span>
            <h2 className="text-2xl font-bold mb-8">PATRON — Technical Specifications</h2>

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
            <p className="text-xs text-white mt-3 font-mono">
              Parameters may vary depending on configuration, customer requirements and validation scope.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Discuss your payload requirements</h2>
            <p className="text-white leading-relaxed mb-8">
              Discuss your payload requirements with us and define a gimbal configuration around your platform, mass, power and pointing constraints. We will help identify a technically realistic development path from requirements to prototype.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                Start Technical Discussion
              </Link>
              <Link href="/products/beetle" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">
                Also see: BEETLE Gimbal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
