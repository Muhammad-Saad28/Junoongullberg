"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [stage, setStage] = useState<"enter" | "active" | "exit" | "done">("enter");

  useEffect(() => {
    // Stage 1: enter immediately on mount
    const timer1 = setTimeout(() => {
      setStage("active");
    }, 100);

    // Stage 2: begin smooth cinematic exit
    const timer2 = setTimeout(() => {
      setStage("exit");
    }, 1600);

    // Stage 3: unmount completely
    const timer3 = setTimeout(() => {
      setStage("done");
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0704] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        stage === "exit"
          ? "opacity-0 -translate-y-6 scale-[1.03] pointer-events-none"
          : "opacity-100 translate-y-0 scale-100 pointer-events-auto"
      }`}
      aria-hidden={stage === "exit"}
    >
      {/* Ambient warm golden glow behind royal crest */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,160,70,0.18)_0%,transparent_65%)] pointer-events-none" />

      {/* Decorative Palace Arch Outline (Subtle watermark background) */}
      <div className="absolute w-[320px] h-[400px] border border-[#7b581d]/20 rounded-t-full pointer-events-none opacity-40 animate-pulse" />

      {/* Center Crest & Brand Block */}
      <div className="relative z-10 flex flex-col items-center px-6">
        
        {/* Animated Medallion with pulsing glow */}
        <div
          className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2.5 flex items-center justify-center bg-gradient-to-b from-[#2a1a0f] to-[#120a06] border border-[#ffd089]/40 ring-4 ring-[#7b581d]/20 shadow-[0_0_40px_rgba(213,160,70,0.35)] transition-all duration-1000 ease-out ${
            stage === "enter"
              ? "scale-75 opacity-0 blur-sm"
              : "scale-100 opacity-100 blur-0"
          }`}
        >
          <img
            src="/logo.png"
            alt="Junoon Royal Crest"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,208,137,0.4)] animate-pulse"
          />
        </div>

        {/* Brand Name */}
        <div
          className={`mt-6 text-center transition-all duration-700 delay-150 ease-out ${
            stage === "enter"
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="font-display text-2xl sm:text-3xl text-[#ffd089] uppercase tracking-[0.35em] font-light">
            Junoon
          </h1>
        </div>

        {/* Expanding Golden Hairline */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#ffd089] to-transparent my-3 transition-all duration-1000 delay-300 ease-out ${
            stage === "enter" ? "w-0 opacity-0" : "w-36 sm:w-48 opacity-100"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#cfbeae] font-medium transition-all duration-700 delay-300 ease-out ${
            stage === "enter"
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          Royal Gastronomy &bull; Lahore
        </p>

        {/* Elegant Minimal Loading Bar */}
        <div className="w-28 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7b581d] via-[#ffd089] to-[#d5a046] w-full rounded-full animate-splash-bar" />
        </div>

      </div>
    </div>
  );
}
