import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Engineering — Mechatronic Systems & Custom Development",
  description: "Hikade Technologies develops custom mechatronic systems, single-purpose machines, test equipment and engineering prototypes for customers with non-standard technical requirements.",
};

export default function CustomEngineeringPage() {
  return (
    <div className="text-white pt-20">
      <section className="relative py-32 bg-[#1F2019] tech-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-white/40 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#63C3B5] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#63C3B5]">Custom Engineering</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Custom mechatronic systems & projects</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Custom Industrial Engineering</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Customers come to Hikade when a standard catalog device is not enough and the solution requires integrated engineering across mechanics, electronics, software and validation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                Send Technical Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">When Standard Solutions Are Not Enough</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Hikade Technologies develops custom mechatronic systems, single-purpose machines, test equipment, measurement systems and engineering prototypes for customers with non-standard technical requirements.
                </p>
                <p>
                  The scope ranges from concept studies and CAD models to full mechanical-electrical-software integration, testing and technical documentation. We apply the same engineering discipline used in our own product development to customer-specific projects.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Typical Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {["Custom test benches", "Measurement systems", "Industrial prototypes", "Mechatronic assemblies", "Automated workstations", "Control systems", "Special fixtures", "Rapid prototyping", "R&D support", "Small-series technical devices", "Validation equipment"].map((u) => (
                    <span key={u} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white/60">{u}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Typical Deliverables</h3>
              <ul className="space-y-3 mb-8">
                {["Concept study", "CAD model", "Manufacturing documentation", "Prototype", "Functional device", "Electronics / control integration", "Firmware / software support", "Test reports", "User manual", "Maintenance instructions"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[#63C3B5] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image src="/assets/lab/lab-electronics.jpg" alt="Engineering lab" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18261D]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="telemetry-badge">Concept → prototype → validated system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Send us the technical challenge</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Send us the technical challenge. We will help define a feasible path from concept to prototype — including mechanical design, embedded systems, integration and documentation.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
            Start Engineering Discussion
          </Link>
        </div>
      </section>
    </div>
  );
}
