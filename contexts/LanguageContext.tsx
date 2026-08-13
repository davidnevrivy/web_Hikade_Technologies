"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

export type Lang = "en" | "cs";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "en", setLang: () => {} });

const STORAGE_KEY = "hikade-lang";
const listeners = new Set<() => void>();

function getSnapshot(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "cs" || stored === "en" ? stored : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setLang(l: Lang) {
    localStorage.setItem(STORAGE_KEY, l);
    listeners.forEach((callback) => callback());
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
