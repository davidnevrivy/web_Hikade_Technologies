import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motor Stand — High-Power Motor & Drive Test Bench",
  description: "Custom back-to-back motor-generator test system for development and validation of motors, drives and powertrain-related components.",
};

const specs = [
  { param: "System type", value: "Back-to-back motor-generator testbench", note: "Custom" },
  { param: "Motor type", value: "BLDC motors", note: "Project-specific" },
  { param: "Power", value: "approx. 2 × 80 kW", note: "Known reference" },
  { param: "Max torque", value: "approx. 400 Nm", note: "Known reference" },
  { param: "Max speed", value: "approx. 2,800 RPM", note: "Known reference" },
  { param: "Scope", value: "Design, FEM, manufacturing, installation, commissioning", note: "Project-specific" },
  { param: "Documentation", value: "Operation manual and technical documentation", note: "Included by scope" },
];

export default function MotorStandPage() {
  return (
    <div className="text-white pt-20">
      <section className="relative py-32 bg-[#1F2019] tech-grid overflow-hidden">
        <div className="absolute top-16 left-6 lg:left-8 z-20 space-y-2">
          {[
            { label: "POWER", val: "2×80 kW" },
            { label: "MAX TORQUE", val: "~400 Nm" },
            { label: "MAX SPEED", val: "2,800 RPM" },
          ].map((b) => (
            <div key={b.label} className="telemetry-badge flex items-center gap-2">
              <span className="text-white">{b.label}</span>
              <span>{b.val}</span>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <nav className="text-xs font-mono text-[#82D5CA]/70 mb-6 flex items-center gap-2">
              <Link href="/products" className="hover:text-[#82D5CA] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">Motor Stand</span>
            </nav>
            <span className="telemetry-badge mb-4 inline-block">High-power motor & drive test bench</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Motor Stand</h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              Custom test system for development and validation of motors, drives and powertrain-related components. Back-to-back motor-generator configuration. Full engineering scope from concept to commissioning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">
                Define Your Test System
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Full Engineering Scope for Motor Testing</h2>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Motor Stand is a custom test system for development and validation of motors, drives and powertrain-related components. A reference system with two BLDC motors in back-to-back motor-generator configuration, rated at 2 × 80 kW class power, was developed for testing a new generation of frequency converters.
                </p>
                <p>
                  The full engineering scope includes concept design, feasibility study, component research and selection, FEM and modal verification, manufacturing drawings, manufacturing, installation, commissioning and technical documentation.
                </p>
                <p>
                  Each Motor Stand is developed as a custom system. The mechanical configuration, motor type, measurement setup, safety interlocks, control architecture and commissioning scope are defined according to the specific customer requirements.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Delivery Scope</h3>
                <ul className="space-y-2">
                  {["Concept design", "Feasibility study", "Component research and selection", "FEM and modal verification", "Manufacturing drawings", "Manufacturing", "Installation", "Commissioning", "Technical documentation", "Operation manual"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                      <span className="text-white text-xs">◎</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-6">
                <Image src="/assets/products/testing/ball-joint-full.png" alt="Motor stand reference" fill className="object-contain p-4 bg-white/95" />
              </div>

              <h3 className="text-sm font-mono text-white mb-4 tracking-widest uppercase">Reference Specifications</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Known / Target Value</th>
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
              <p className="text-xs text-white mt-3 font-mono">Reference values from completed project. Custom systems are defined per customer requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2019]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Define a test stand around your motor and load profile</h2>
          <p className="text-white leading-relaxed mb-8">
            Define a test stand around your motor, load profile, measurement requirements and safety constraints. We handle the full engineering scope from concept to commissioning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#82D5CA] text-black font-semibold rounded hover:bg-[#82D5CA]/90 transition-colors">Start a Project</Link>
            <Link href="/products/testing-fixtures" className="px-6 py-3 border border-white/30 text-white font-semibold rounded hover:border-[#82D5CA]/50 transition-colors">Also see: Testing Fixtures</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
