"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenisInstance: { raf: (t: number) => void; destroy: () => void; on: (e: string, cb: () => void) => void } | null = null;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as unknown as typeof lenisInstance;

      // Sync with GSAP ticker
      gsap.ticker.add((time: number) => {
        lenisInstance?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      lenisInstance?.on("scroll", ScrollTrigger.update);
    };

    init();

    return () => {
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
