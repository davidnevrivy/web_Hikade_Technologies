import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CryoLyze / CRYO-LYO25 — Laboratory Freeze-Drying Technology",
  description: "CryoLyze is a laboratory freeze-drying / lyophilization technology for controlled processing of sensitive biological, research and technical samples.",
};

const specs = [
  { param: "System type", value: "Laboratory freeze-drying / lyophilization technology", note: "Development platform" },
  { param: "Process phases", value: "Freezing, primary drying, secondary drying", note: "Configuration-dependent" },
  { param: "Cooling concept", value: "LN2-based concept", note: "According to design" },
  { param: "Vacuum target", value: "Below approx. 3.5 kPa", note: "Target / configuration-dependent" },
  { param: "Chamber material", value: "AISI 316L", note: "Where applicable" },
  { param: "Surface finish", value: "Suitable for clean laboratory processing", note: "Specification-dependent" },
  { param: "Post-process handling", value: "Possible AVPS connection", note: "Optional workflow" },
];

export default function CryolyzePage() {
  return (
    <div className="text-white pt-20">
      <section className="py-32 bg-[#1F2019] tech-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-white/40 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#63C3B5] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#63C3B5]">CryoLyze</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">Laboratory freeze-drying technology</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">CryoLyze</h1>
            <p className="text-xl font-mono text-[#63C3B5] mb-4">CRYO-LYO25</p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Laboratory freeze-drying / lyophilization technology designed to support controlled processing of sensitive biological, research and technical samples with preservation of sample quality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">
                Discuss Your Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Controlled Freeze-Drying for Sensitive Samples</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  CryoLyze is a laboratory freeze-drying / lyophilization technology developed for controlled processing of sensitive biological, research and technical samples. The system is intended to support preservation of sample quality and biological activity where relevant — depending on process validation.
                </p>
                <p>
                  The three-phase process — freezing, primary drying and secondary drying — is carried out under vacuum below approximately 3.5 kPa. Cooling is based on an LN2 concept. The AISI 316L chamber with clean laboratory surface finish is designed to support contamination-sensitive processing.
                </p>
                <p>
                  CryoLyze can be connected to the AeroVac Precision System (AVPS) for post-lyophilization clean handling, assembly and packaging — enabling a complete workflow from sample preparation to final packaging under controlled conditions.
                </p>
              </div>

              {/* Process phases diagram */}
              <div className="mt-8">
                <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Process Phases</h3>
                <div className="flex items-center gap-0">
                  {[
                    { phase: "01", title: "Freezing", desc: "LN2-based cooling" },
                    { phase: "02", title: "Primary Drying", desc: "Vacuum sublimation" },
                    { phase: "03", title: "Secondary Drying", desc: "Desorption phase" },
                  ].map((p, i) => (
                    <div key={p.phase} className="flex items-center flex-1">
                      <div className="flex-1 p-4 border border-[#63C3B5]/20 rounded-lg bg-[#63C3B5]/5">
                        <div className="text-xs font-mono text-[#63C3B5] mb-1">{p.phase}</div>
                        <div className="font-semibold text-sm">{p.title}</div>
                        <div className="text-xs text-white/40">{p.desc}</div>
                      </div>
                      {i < 2 && <div className="w-4 h-px bg-[#63C3B5]/30 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 border border-white/10 rounded bg-[#1F2019]">
                <p className="text-xs text-white/45 leading-relaxed">
                  <span className="text-white/60 font-mono">NOTE:</span> CryoLyze is a development platform. It is not presented as a medical device, GMP-certified system or pharmaceutical manufacturing equipment. Claims about sample preservation depend on process validation. Careful, process-specific validation is required for any regulated application.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Target Applications</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Biological samples", "Pharmaceutical R&D", "Laboratory development", "Sensitive material processing", "Research institutions", "Process development", "Lyophilization workflow development"].map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-[#1F2019] border border-white/10 rounded text-xs text-white/60">{a}</span>
                ))}
              </div>

              <h3 className="text-sm font-mono text-[#63C3B5] mb-4 tracking-widest uppercase">Technical Specifications</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Target / Known Value</th>
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
              <p className="text-xs text-white/35 mt-3 font-mono">Parameters may vary depending on configuration and validation scope.</p>

              {/* AVPS connection */}
              <div className="mt-6 p-4 border border-[#63C3B5]/20 rounded bg-[#63C3B5]/5">
                <p className="text-xs text-[#63C3B5] font-mono mb-1">AVPS INTEGRATION</p>
                <p className="text-xs text-white/50">
                  CryoLyze can be connected to the AeroVac Precision System (AVPS) to enable post-lyophilization clean handling, inspection and packaging in a controlled environment.
                </p>
                <Link href="/products/avps" className="text-xs text-[#63C3B5] mt-2 inline-block hover:underline">
                  Learn about AVPS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Discuss your sample type and process requirements</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Discuss your sample type, process requirements and post-lyophilization handling workflow. We will help define a freeze-drying process configuration and assess possible integration with AVPS.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors">Start Discussion</Link>
            <Link href="/products/avps" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#63C3B5]/50 transition-colors">Also see: AVPS</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
