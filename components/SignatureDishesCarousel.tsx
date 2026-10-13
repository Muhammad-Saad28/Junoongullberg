"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface Dish {
  img: string;
  name: string;
  desc: string;
  price: string;
}

const dishes: Dish[] = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy-cb0fl1hzwv_mtclUKFH_qGHRbXN5NLL3zZjGHlYRN5SLaUwPESp-rMXxI-5QdGP1oQRIk8EktwXB1LkEsxFUNge0t3u8LeZeAwhM6LXIgXYncUbq-U2DblmY6yvxpDW4ryfGwZOokjybVnzklu45QjWqmlysx5bMCnr3MoUQjeJV4s5AuoMTVbCaa50KyGitK3znhCCvOY8IceiiTmV8tdRpSq701tXgebi9qE",
    name: "Shinwari Karahi",
    desc: "Young mountain sheep, pink Khewra salt",
    price: "3,850",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsEOORMF4ZapO1F5qgiLRFl93mJsnvtP3YIuhErsauJiITzG5jaP205pFxQifoJTLnl00d6FPn0tcH8rX7ucA_n0y9UxRB3GiyE4ymIXYIKo3tH03kt1SLhJof8-2DxVu9P4gCKfCxrLhL0T_PjtMjMwhQUU3zNy632vvg96KdlZKWRwGeeXJj3FVLx0OiBRSdLkXTam1wJgV8iXNhOT4JL5q_CAU_0WWvfObqfI0",
    name: "Murgh Malai Boti",
    desc: "Charred over babool, mace & cream",
    price: "2,450",
  },
  {
    img: "/images/desi_classics.png",
    name: "Kunna Gosht",
    desc: "Subterranean braise in Multani clay",
    price: "3,400",
  },
  {
    img: "/images/peshawar.png",
    name: "Peshawari Chapli",
    desc: "Pressed on broad tawas with marrow fat",
    price: "2,100",
  },
];

export default function SignatureDishesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 280;
    const newIdx = Math.round(el.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(Math.max(newIdx, 0), dishes.length - 1));
  };

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 280;
    el.scrollTo({
      left: idx * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveIndex(idx);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto lg:pl-[120px] xl:pl-[140px] lg:pr-12 px-4 sm:px-6 relative z-20 mt-10 sm:mt-12 lg:mt-14">
      {/* Mobile Swipe Header Indicator with generous vertical clearance */}
      <div className="flex sm:hidden items-center justify-between mb-3 px-1">
        <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-bold">
          Signature Selection
        </span>
        <span className="text-outline text-[9px] tracking-wider uppercase font-medium">
          Swipe to view ({activeIndex + 1}/{dishes.length}) &rarr;
        </span>
      </div>

      {/* Dedicated spacing/break on mobile to ensure floating dish images never cut into header text */}
      <div className="block sm:hidden h-5" aria-hidden="true" />

      {/* Responsive Container: Smooth Swipe on Mobile, Grid on Tablet/Desktop with ample pt clearance for circular images */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar pt-10 sm:pt-6"
      >
        {dishes.map((dish, i) => (
          <article
            key={i}
            className="w-[80vw] max-w-[285px] sm:w-auto shrink-0 sm:shrink snap-center bg-gradient-to-b from-[#221c17] to-[#181310] border border-[#7b581d]/25 hover:border-secondary/60 text-white rounded-[24px] p-4 sm:p-5 pt-[52px] sm:pt-[58px] relative flex flex-col hover:-translate-y-1.5 transition-all duration-300 group shadow-xl hover:shadow-2xl"
          >
            {/* Floating Circular Image Top-Left */}
            <div className="absolute -top-7 sm:-top-8 left-3 sm:-left-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-2 border-secondary/40 ring-4 ring-[#221c17] group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Price Top-Right */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <span className="font-headline-sm text-[#ffd089] text-[15px] sm:text-[16px] font-medium tracking-wide">
                PKR {dish.price}
              </span>
            </div>

            {/* Card Content */}
            <div className="mt-2 flex flex-col h-full justify-between z-10">
              <div>
                <h3 className="font-headline-sm text-white mb-1 text-[16px] sm:text-[17px] text-center group-hover:text-secondary-fixed transition-colors tracking-wide">
                  {dish.name}
                </h3>
                <p className="font-body-sm text-[#a89d91] text-center leading-snug text-[11px] sm:text-[12px]">
                  {dish.desc}
                </p>
              </div>
              <div className="flex items-end justify-between mt-3.5 sm:mt-4 pt-2 border-t border-white/5">
                <p className="font-caption-folio text-secondary/80 uppercase tracking-widest text-[9px] font-semibold">
                  Heritage Signature
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1 text-[#ffd089] text-[10px] tracking-wider uppercase font-semibold hover:translate-x-0.5 transition-transform"
                >
                  <span>View</span>
                  <span className="text-[12px]">&rarr;</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Dots on Mobile */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-5">
        {dishes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to dish ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? "w-6 h-2 bg-[#ffd089] shadow-[0_0_8px_rgba(255,208,137,0.6)]"
                : "w-2 h-2 bg-secondary/30 hover:bg-secondary/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
