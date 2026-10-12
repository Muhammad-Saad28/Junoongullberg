"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.png`;

// How many frames to preload ahead of current
const PRELOAD_RADIUS = 8;
// Mobile: use every 3rd frame to cut memory
const MOBILE_STEP = 3;

export default function HeroFrameSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const loadedRef = useRef<Set<number>>(new Set());
  const isMobileRef = useRef(false);

  // Draw a specific frame index onto canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Try the requested frame, fall back to nearest loaded
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // search backwards for nearest loaded frame
      for (let i = frameIndex - 1; i >= 0; i--) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          img = candidate;
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const { width: cw, height: ch } = canvas;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover-fit
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // Load a single frame image
  const loadImage = useCallback(
    (index: number): Promise<void> => {
      if (loadedRef.current.has(index)) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          imagesRef.current[index] = img;
          loadedRef.current.add(index);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = FRAME_PATH(index + 1);
        imagesRef.current[index] = img;
      });
    },
    []
  );

  // Preload a window around a given frame
  const preloadAround = useCallback(
    (center: number) => {
      const step = isMobileRef.current ? MOBILE_STEP : 1;
      for (let d = 0; d <= PRELOAD_RADIUS; d++) {
        const candidates = [center + d * step, center - d * step];
        for (const idx of candidates) {
          if (idx >= 0 && idx < TOTAL_FRAMES) {
            loadImage(idx);
          }
        }
      }
    },
    [loadImage]
  );

  // Resize canvas to match display
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // The canvas is absolute inside a sticky h-screen div, so we should size it to window inner dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;

    // Immediately load frame 0 and draw it
    loadImage(0).then(() => {
      drawFrame(0);
    });

    // Load the first N frames quickly
    const step = isMobileRef.current ? MOBILE_STEP : 1;
    for (let i = 0; i < Math.min(30, TOTAL_FRAMES); i += step) {
      loadImage(i);
    }

    // Load the rest progressively after a delay
    setTimeout(() => {
      const loadRest = async () => {
        for (let i = 0; i < TOTAL_FRAMES; i += step) {
          if (!loadedRef.current.has(i)) {
            await loadImage(i);
            // Small yield to avoid blocking
            await new Promise((r) => setTimeout(r, 4));
          }
        }
      };
      loadRest();
    }, 800);

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loadImage, drawFrame, resizeCanvas]);

  useEffect(() => {
    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      const obj = { frame: 0 };

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        pin: false,
        onUpdate: (self) => {
          const rawFrame = Math.round(self.progress * (TOTAL_FRAMES - 1));
          const frameIdx = Math.min(Math.max(rawFrame, 0), TOTAL_FRAMES - 1);

          if (frameIdx !== currentFrameRef.current) {
            currentFrameRef.current = frameIdx;
            preloadAround(frameIdx);

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
              drawFrame(frameIdx);
            });
          }
        },
      });

      // Hero text entrance
      const heroContent = container.querySelector(".hero-content");
      if (heroContent) {
        gsap.fromTo(
          heroContent,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.3,
          }
        );

        // Hero text exit on scroll
        gsap.to(heroContent, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "20% top", // Fades out in the first 20% of the scroll
            scrub: true,
          }
        });
      }
    };

    init();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === containerRef.current) {
          t.kill();
        }
      });
    };
  }, [drawFrame, preloadAround]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "600vh" }}
      id="hero-sequence"
    >
      {/* Sticky viewport that holds hero while scrolling through the sequence */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Canvas — cinematic frame output */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
          aria-hidden="true"
        />

        {/* Dark gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130b07]/90 via-[#130b07]/30 to-[#130b07]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,138,74,0.10)_0%,transparent_70%)] pointer-events-none" />

        {/* Hero content overlay — real HTML, not baked into frames */}
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
          <div className="flex items-center gap-4 mb-6 opacity-90">
            <span className="w-8 h-px bg-[#ffddaf]" />
            <span
              className="text-[10px] font-semibold tracking-[0.32em] uppercase text-[#ffddaf]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Gulberg, Lahore &bull; Flagship Gastronomy
            </span>
            <span className="w-8 h-px bg-[#ffddaf]" />
          </div>

          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-[#f0dfd5] mb-6 drop-shadow-2xl tracking-widest uppercase">
            JUNOON
          </h1>

          <p
            className="italic text-[#f0dfd5] max-w-xl mb-8 leading-relaxed text-[18px] md:text-[20px]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            A celebration of Pakistan&apos;s sacred communal table, slow-fired
            over wild charcoal and steeped in Mughal grandeur.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/reservations"
              className="h-[52px] px-8 bg-[#2a211b] text-[#ffddaf] hover:bg-[#311f11] transition-all duration-300 text-[11px] font-semibold tracking-[0.24em] uppercase flex items-center justify-center border border-[#b38a4a]/40 shadow-xl"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Reserve a Table
            </Link>
            <a
              href="#flavours"
              className="h-[52px] px-8 bg-transparent text-[#f0dfd5] hover:bg-white/10 transition-all duration-300 text-[11px] font-semibold tracking-[0.24em] uppercase flex items-center justify-center gap-2 border border-[#ffddaf]/30"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <span>Explore The Menu</span>
              <span className="material-symbols-outlined text-[16px] text-[#ffddaf]">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Scroll cue — fades out as user scrolls */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-70">
            <span
              className="text-[10px] tracking-[0.30em] uppercase text-[#edbf79]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Scroll to Begin
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#edbf79] to-transparent animate-pulse" />
          </div>
        </div>

        {/* Frame counter (dev aid — hidden in production) */}
        {process.env.NODE_ENV === "development" && (
          <div className="absolute top-24 right-4 text-[10px] text-white/40 z-50" id="frame-counter" />
        )}
      </div>
    </div>
  );
}
