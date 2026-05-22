"use client";

import { useState, useEffect, useRef } from "react";

const COUNT = 72;
const FRAMES = Array.from({ length: COUNT }, (_, i) =>
  `/assets/products/patron/gimbal-spin/frame-${String(i).padStart(2, "0")}.webp`
);

// 72 frames × 130ms = ~9.4s loop. Fade of 110ms means frames always dissolving
// into the next — continuous motion, no hard cuts.
const FRAME_MS = 130;
const FADE_MS  = 110;

export default function GimbalSpinner({ className = "" }: { className?: string }) {
  const [ready, setReady]     = useState(false);
  const [current, setCurrent] = useState(0);
  const [fading, setFading]   = useState(false);
  const loaded = useRef(0);

  useEffect(() => {
    FRAMES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      const done = () => {
        loaded.current += 1;
        if (loaded.current >= FRAMES.length) setReady(true);
      };
      img.onload = done;
      img.onerror = done;
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    const tick = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % FRAMES.length);
        setFading(false);
      }, FADE_MS);
    }, FRAME_MS);
    return () => clearInterval(tick);
  }, [ready]);

  const next = (current + 1) % FRAMES.length;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Bottom: next frame at full opacity — shows through as top dissolves */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FRAMES[ready ? next : 0]}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-contain"
        style={{ zIndex: 1 }}
      />
      {/* Top: current frame fading out */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FRAMES[current]}
        alt="PATRON Gimbal"
        className="absolute inset-0 w-full h-full object-contain"
        style={{
          zIndex: 2,
          opacity: fading ? 0 : 1,
          transition: fading ? `opacity ${FADE_MS}ms ease-in-out` : "none",
          willChange: "opacity",
        }}
      />
    </div>
  );
}
