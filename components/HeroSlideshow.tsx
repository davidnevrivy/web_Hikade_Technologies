"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES = [
  "/assets/products/patron/patron-slide-1.png",
  "/assets/products/patron/patron-slide-2.png",
  "/assets/products/patron/patron-slide-3.png",
  "/assets/products/patron/patron-slide-4.png",
  "/assets/products/patron/patron-slide-5.png",
];

const HOLD_MS = 4000;
const FADE_MS = 700;

export default function HeroSlideshow({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        key={index}
        src={SLIDES[index]}
        alt="PATRON Gimbal"
        fill
        className="object-contain"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
          willChange: "opacity",
        }}
        sizes="(max-width: 768px) 100vw, 55vw"
      />
    </div>
  );
}
