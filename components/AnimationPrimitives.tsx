"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3";
  delay?: number;
}

export function AnimatedHeading({
  children,
  className = "",
  tag: Tag = "h2",
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.0,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {children}
    </Tag>
  );
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  direction?: "left" | "right" | "bottom";
  delay?: number;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  direction = "bottom",
  delay = 0,
}: ImageRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const clipFrom =
      direction === "left"
        ? "inset(0 100% 0 0)"
        : direction === "right"
        ? "inset(0 0 0 100%)"
        : "inset(100% 0 0 0)";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 82%",
          once: true,
        },
        delay,
      });

      tl.fromTo(
        wrap,
        { clipPath: clipFrom },
        { clipPath: "inset(0 0 0 0)", duration: 1.0, ease: "power3.inOut" }
      ).fromTo(
        img,
        { scale: 1.12 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        "<"
      );
    }, wrap);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.12,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StatCounterProps {
  value: string;
  label: string;
  sublabel: string;
  delay?: number;
}

export function StatCounter({ value, label, sublabel, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-1">
      <span className="font-display-xl text-[44px] lg:text-[56px] leading-none text-secondary-fixed block font-normal">
        {value}
      </span>
      <span className="font-label-uppercase text-label-uppercase uppercase text-primary-fixed tracking-wider block">
        {label}
      </span>
      <span className="font-body-sm text-[12px] text-outline-variant">{sublabel}</span>
    </div>
  );
}
