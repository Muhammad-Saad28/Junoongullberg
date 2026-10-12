"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Text 1 comes from right, fades out to left
      tl.fromTo(
        text1Ref.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      .to(text1Ref.current, { x: -100, opacity: 0, duration: 1 }, "+=0.5")
      
      // Text 2 comes from right, fades in
      .fromTo(
        text2Ref.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );

      // Image parallax reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "center 40%",
            scrub: true,
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-surface-dim py-[20vh] relative overflow-hidden flex items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="relative h-[200px] flex items-center">
          <div ref={text1Ref} className="absolute w-full">
            <h2 className="font-headline-lg text-primary leading-tight">
              A Legacy of Fire <br/> and Spice.
            </h2>
          </div>
          <div ref={text2Ref} className="absolute w-full opacity-0">
            <h2 className="font-headline-lg text-primary leading-tight">
              Honoring the Ancient <br/> Dastarkhwan.
            </h2>
          </div>
        </div>
        <div className="hidden lg:block">
          <div ref={imageRef} className="w-full aspect-[4/3] bg-primary-container overflow-hidden relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzUzi91DLvzgQNoBohuvbYL3PORSqaZ97LFBXPq9vXKtoWOpk0sViEby-4Nh5unWjW60B7W_OF9HL6kvj6K94xff3eobwG5pHbOd9PCRTzWCLL2kYpTqeG1Y3kdApfdw0a52mW0mRA-EEUzaqprggefkqnVhXi3MaTxuw5S2b6bqm6Xh89zYc9FubcW9wFaRba4jW9HLHZw3_9SrYVbdo3L9WVU7Palyaa4SZxgs" 
              alt="Craftsmanship" 
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
