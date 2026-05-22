import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Material Testing & Bending Fixtures — Custom R&D Test Equipment",
  description: "Hikade Technologies designs and manufactures precision testing fixtures for material testing, bending tests, R&D validation and quality control.",
};

const specs = [
  { param: "Fixture type", value: "Bending / material testing fixture", note: "Custom" },
  { param: "Standard reference", value: "ISO 178-related testing", note: "Depending on method" },
  { param: "Sample type", value: "Plastics, composites, technical materials", note: "Customer-specific" },
  { param: "Measurement", value: "Deflection / load compatibility", note: "Depends on test machine" },
  { param: "Deliverables", value: "CAD, manufacturing drawings, fixture, documentation", note: "Scope-dependent" },
  { param: "Use", value: "R&D / QC / validation", note: "Customer-specific" },
];

const galleryImages = [
  { src: "/assets/products/testing/3b-bend.png", alt: "3-point bending fixture" },
  { src: "/assets/products/testing/3b4b-bend-1.png", alt: "3b/4b bending fixture variant 1" },
  { src: "/assets/products/testing/3b4b-bend-2.png", alt: "3b/4b bending fixture variant 2" },
  { src: "/assets/products/testing/3b4b-bend-3.png", alt: "3b/4b bending fixture variant 3" },
  { src: "/assets/products/testing/bend-fixture.png", alt: "Bending fixture assembly" },
  { src: "/assets/products/testing/bend-chamber.png", alt: "Bending fixture in chamber" },
  { src: "/assets/products/testing/ball-joint.png", alt: "Ball joint fixture" },
  { src: "/assets/products/testing/ball-joint-full.png", alt: "Ball joint fixture full" },
  { src: "/assets/products/testing/m18-fixture.png", alt: "M18 test fixture" },
  { src: "/assets/products/testing/m12-16-fixture.png", alt: "M12/16 test fixture" },
  { src: "/assets/products/testing/m12-female-fixture.png", alt: "M12 female fixture" },
  { src: "/assets/products/testing/klec-fixture.png", alt: "Cage test fixture" },
  { src: "/assets/products/testing/en863-fixture.png", alt: "EN863 test fixture" },
  { src: "/assets/products/testing/pressure-fixture.png", alt: "Pressure test fixture" },
  { src: "/assets/products/testing/shear-fixture.png", alt: "Shear test fixture" },
  { src: "/assets/products/testing/food-fixture-1.png", alt: "Food/polymer fixture 1" },
  { src: "/assets/products/testing/food-fixture-2.png", alt: "Food/polymer fixture 2" },
];

export default function TestingFixturesPage() {
  return (
    <div className="text-white pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-[#1F2019] tech-grid overflow-hidden">
        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "TYPE", val: "Custom fixtures" },
            { label: "STANDARD", val: "ISO 178" },
            { label: "MATERIALS", val: "Plastics / composites" },
          ].map((b) => (
            <div key={b.label} className="telemetry-badge flex items-center gap-2">
              <span className="text-white/50">{b.label}</span>
              <span>{b.val}</span>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-white/40 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#63C3B5] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#63C3B5]">Testing Fixtures</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Custom R&D test equipment</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Material Testing & Bending Fixtures</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Precision testing fixtures for material testing, bending tests, R&D validation and quality control — designed for compatibility with standard test machines and customer-specific measurement requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                Send Your Requirements
              </Link>
              <Link href="#gallery" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
                View Fixture Portfolio
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
              <h2 className="text-2xl font-bold mb-6">Precision Test Hardware for R&D and QC</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Hikade Technologies designs and manufactures precision testing fixtures for material testing, bending tests, R&D validation and quality control. Our fixture portfolio covers standard bending configurations (3-point, 4-point), connector and component testing, food and polymer material testing, and customer-specific test setups.
                </p>
                <p>
                  Each fixture is designed with precise mechanical geometry, reliable load paths, repeatability and compatibility with standard test machines in mind. Manufacturing documentation, test reports and optional assembly instructions are available as part of the delivery scope.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Typical Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {["Bending tests (3-point, 4-point)", "ISO 178-related testing", "Connector testing", "Component pull-out tests", "Polymer / food material testing", "Shear tests", "Pressure tests", "Cage / housing testing", "R&D laboratories", "Quality control", "Industrial testing", "Prototype validation"].map((a) => (
                    <span key={a} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white/60">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Technical Focus</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Precise mechanical geometry and load paths",
                  "Repeatability across test runs",
                  "Compatibility with standard test machines",
                  "Custom fixture geometry and clamping",
                  "Deflection and load measurement compatibility",
                  "Manufacturing documentation included",
                  "Optional test reports",
                  "Simple operation and serviceability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[#63C3B5] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
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
              <p className="text-xs text-white/35 mt-3 font-mono">Parameters may vary depending on configuration and customer requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-8">
            <span className="text-[#63C3B5] font-mono text-sm">FIXTURE PORTFOLIO</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square bg-white rounded-lg overflow-hidden group border border-white/10 hover:border-[#63C3B5]/30 transition-colors">
                <Image src={img.src} alt={img.alt} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Send us your testing method and requirements</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Send us your testing method, sample geometry and measurement requirements. We will design a fixture compatible with your test machine and measurement setup.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
              Start a Fixture Project
            </Link>
            <Link href="/products/motor-stand" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">
              Also see: Motor Stand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
