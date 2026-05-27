import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Micro BEETLE — Ultra-Lightweight Payload Pointing Concept",
  description: "Micro BEETLE is an early-stage development direction for ultra-lightweight two-axis pointing for very small payloads, micro-balloon platforms and low-SWaP applications.",
};

const specs = [
  { param: "Platform type", value: "Ultra-lightweight two-axis pointing concept", note: "Early-stage" },
  { param: "Target mass", value: "approx. 400 g", note: "Development target" },
  { param: "Supply", value: "28 V concept", note: "Platform-dependent" },
  { param: "Power", value: "Single-digit watt range", note: "Target" },
  { param: "Payload class", value: "Very small payloads", note: "To be defined with customer" },
  { param: "Status", value: "Concept / early development direction", note: "Not catalog product" },
];

export default function MicroBeetlePage() {
  return (
    <div className="text-white pt-20">
      <section className="py-32 bg-[#1F2019] tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-[#82D5CA]/70 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#82D5CA] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">Micro BEETLE</span>
            </nav>
            <span className="inline-flex items-center gap-2 telemetry-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Early-stage concept — not a catalog product
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Micro BEETLE</h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              Early-stage development direction for ultra-lightweight two-axis payload pointing where mass, power and integration volume are the primary constraints. Targeting applications below 400 g system mass.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                Co-Define This Concept
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Where Mass Is Everything</h2>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Micro BEETLE is an early-stage development direction, not a finished product. It is intended for customers operating micro-balloon platforms, lightweight imaging payloads and experimental HAPS systems where total pointing system mass below 400 g is the central constraint.
                </p>
                <p>
                  The 28 V supply concept and single-digit watt power target are early development parameters that will be refined with the platform owner. Micro BEETLE is developed as a co-design exercise — the final architecture depends on the specific payload, platform and integration requirements.
                </p>
                <p>
                  Suitable for educational missions, research demonstrations, compact imaging payloads and customers willing to co-develop an ultra-lightweight pointing system.
                </p>
              </div>
              <div className="mt-8 p-4 border border-white/15 rounded bg-[#1F2019]">
                <p className="text-xs text-white leading-relaxed">
                  <span className="text-white font-mono">STATUS:</span> Micro BEETLE is an early concept and first development direction — not a validated, serial or catalog product. All parameters are development targets subject to change. Co-development approach required.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Target Applications</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Micro-balloon systems", "Lightweight imaging payloads", "Small sensor payloads", "Experimental HAPS payloads", "Low-cost test platforms", "Educational demonstrations", "Research institutions"].map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white">{a}</span>
                ))}
              </div>

              <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Concept Specifications</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Target / Concept Value</th>
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
              <p className="text-xs text-white mt-3 font-mono">All values are concept targets. Final parameters to be defined with the platform owner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Co-define an ultra-lightweight gimbal concept</h2>
          <p className="text-white leading-relaxed mb-8">
            Co-define an ultra-lightweight gimbal concept around your payload and platform limits. We will help assess feasibility and define a development path.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">Start Discussion</Link>
            <Link href="/products/beetle" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">Also see: BEETLE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
