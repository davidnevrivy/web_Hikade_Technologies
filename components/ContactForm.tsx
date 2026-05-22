"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectTypes = {
  en: ["HAPS / stratospheric payload","Gimbal / precision positioning","AVPS / clean processing","CryoLyze / lyophilization","Custom mechatronic system","Industrial test equipment","Material testing fixture","Embedded control","Other"],
  cs: ["HAPS / stratosferický payload","Gimbal / přesné polohování","AVPS / čisté zpracování","CryoLyze / lyofilizace","Zakázková mechatronická soustava","Průmyslové testovací zařízení","Přípravek pro zkoušení materiálů","Vestavěné řídicí systémy","Jiné"],
};

export default function ContactForm() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    projectType: "", applicationArea: "", description: "",
    environment: "", constraints: "", timeline: "", notes: "",
  });

  const t = {
    en: {
      receivedTitle: "Message received",
      receivedDesc: "Thank you for your inquiry. We will review your requirements and respond with a technically informed reply within a few business days.",
      sendAnother: "Send another inquiry",
      nameLbl: "Name *", companyLbl: "Company", emailLbl: "E-mail *", phoneLbl: "Phone",
      projectTypeLbl: "Project Type", selectType: "Select project type",
      appAreaLbl: "Application Area", appAreaPh: "e.g. HAPS, aerospace, industrial R&D",
      descLbl: "Payload / Component / System Description *",
      descPh: "Describe your payload, component or system — type, mass, dimensions, function...",
      envLbl: "Target Environment", envPh: "e.g. stratosphere, cleanroom, industrial",
      timelineLbl: "Required Timeline", timelinePh: "e.g. Q3 2025, 12 months",
      constraintsLbl: "Key Constraints", constraintsPh: "Mass, power, pointing accuracy, cleanliness level, budget...",
      notesLbl: "Additional Notes", notesPh: "Any other relevant context, existing documentation or preferred approach...",
      required: "Fields marked * are required. We treat all technical information as confidential.",
      submit: "Send Technical Requirements",
    },
    cs: {
      receivedTitle: "Zpráva přijata",
      receivedDesc: "Děkujeme za váš dotaz. Prostudujeme vaše požadavky a odpovíme technicky fundovanou odpovědí v průběhu několika pracovních dní.",
      sendAnother: "Odeslat další dotaz",
      nameLbl: "Jméno *", companyLbl: "Společnost", emailLbl: "E-mail *", phoneLbl: "Telefon",
      projectTypeLbl: "Typ projektu", selectType: "Vyberte typ projektu",
      appAreaLbl: "Oblast aplikace", appAreaPh: "např. HAPS, letectví, průmyslový výzkum",
      descLbl: "Popis payloadu / komponenty / systému *",
      descPh: "Popište váš payload, komponentu nebo systém — typ, hmotnost, rozměry, funkce...",
      envLbl: "Cílové prostředí", envPh: "např. stratosféra, čistý sál, průmysl",
      timelineLbl: "Požadovaný harmonogram", timelinePh: "např. Q3 2025, 12 měsíců",
      constraintsLbl: "Klíčová omezení", constraintsPh: "Hmotnost, příkon, přesnost polohování, třída čistoty, rozpočet...",
      notesLbl: "Doplňující poznámky", notesPh: "Další relevantní kontext, existující dokumentace nebo preferovaný přístup...",
      required: "Pole označená * jsou povinná. Veškeré technické informace považujeme za důvěrné.",
      submit: "Odeslat technické požadavky",
    },
  }[lang];

  if (submitted) {
    return (
      <div className="p-8 border border-[#63C3B5]/30 rounded-lg bg-[#63C3B5]/5 text-center">
        <div className="text-[#63C3B5] text-3xl mb-4">◎</div>
        <h3 className="text-xl font-bold mb-3">{t.receivedTitle}</h3>
        <p className="text-white/60 mb-6">{t.receivedDesc}</p>
        <button onClick={() => setSubmitted(false)} className="text-sm text-[#63C3B5] hover:underline">
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "name",    label: t.nameLbl,    required: true,  type: "text" },
          { name: "company", label: t.companyLbl, required: false, type: "text" },
          { name: "email",   label: t.emailLbl,   required: true,  type: "email" },
          { name: "phone",   label: t.phoneLbl,   required: false, type: "tel" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{field.label}</label>
            <input
              type={field.type}
              required={field.required}
              value={form[field.name as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
              placeholder={field.label.replace(" *", "")}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.projectTypeLbl}</label>
          <select
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white transition-colors"
          >
            <option value="">{t.selectType}</option>
            {projectTypes[lang].map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.appAreaLbl}</label>
          <input
            type="text"
            value={form.applicationArea}
            onChange={(e) => setForm({ ...form, applicationArea: e.target.value })}
            className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
            placeholder={t.appAreaPh}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.descLbl}</label>
        <textarea required rows={4} value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors resize-none"
          placeholder={t.descPh}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.envLbl}</label>
          <input type="text" value={form.environment}
            onChange={(e) => setForm({ ...form, environment: e.target.value })}
            className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
            placeholder={t.envPh}
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.timelineLbl}</label>
          <input type="text" value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
            placeholder={t.timelinePh}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.constraintsLbl}</label>
        <input type="text" value={form.constraints}
          onChange={(e) => setForm({ ...form, constraints: e.target.value })}
          className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
          placeholder={t.constraintsPh}
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-[#63C3B5] mb-2 tracking-wider uppercase">{t.notesLbl}</label>
        <textarea rows={3} value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full px-4 py-3 bg-[#1F2019] border border-white/15 rounded focus:border-[#63C3B5]/50 focus:outline-none text-sm text-white placeholder-white/25 transition-colors resize-none"
          placeholder={t.notesPh}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-xs text-white/30">{t.required}</p>
        <button type="submit" className="px-8 py-3 bg-[#63C3B5] text-black font-semibold rounded hover:bg-[#63C3B5]/90 transition-colors whitespace-nowrap">
          {t.submit}
        </button>
      </div>
    </form>
  );
}
