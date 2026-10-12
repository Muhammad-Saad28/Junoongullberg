"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface StoryCard {
  chapter: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  alt: string;
  statNumber?: string;
  statLabel?: string;
  tag?: string;
}

const storyCards: StoryCard[] = [
  {
    chapter: "Introduction",
    badge: "1584 — Present",
    title: "Rooted in Pakistan",
    subtitle: "Tradition on the plate. Junoon in the experience.",
    desc: "An unyielding refusal to let four centuries of Mughal fire craft, caravan caravan spices, and grandmothers' quiet genius fade into culinary footnotes. Born in the leafy enclave of Gulberg, Lahore.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsHxdv36Z8OM2ayP3NutFYIe8XtBrmPpcDIvaguUJa_BApe1gUZGDveHTKXcKScETpo2kaHz_nmWlOAow__iEAT4IGOoCVG2iV0FUOkP3wxjU9rty1yV5jnjpkktC7efGT-DbijGZhWOJY1x-OgaulEEO-Nk6wEN4QwvMmnELgnC12JpKWrGDE5sYL6eokPocEyiNjauSOzeyxTtmdArg9Edrl1KUs-CMfY4_tYP4",
    alt: "Lahore Spice Masters and Heritage Craft",
    statNumber: "400+",
    statLabel: "Years of Mughal Heritage",
    tag: "Lahore, Punjab"
  },
  {
    chapter: "Chapter I",
    badge: "Imperial Archives",
    title: "The Roots",
    subtitle: "From Mughal banqueting halls to the dust-blown Khyber Pass.",
    desc: "Centuries before modern borders, Persian chefs, Central Asian horsemen, and Punjabi grain masters broke salt together along the Grand Trunk Road. We study the Ain-i-Akbari not as museum dust, but as living kitchen instructions.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCERajsDJ2KfanwPeRvswvPbQfmMkKx4-tpVZyPo9c_QiCxSfmlMRX5B4E_NGBvTevXkK6kLmFQOv_3rgQ9PwSYTYvvoFvPEqTGwKpxQUlbBdBE6IUeqNGSuKbXbAdH3PCgIRUHfcf5O1XWKl3OhmByv6ALqUlt4j5mDbZfAsLlzy0meOT4LfqD4n9-FqEF0xqXs6lNTffwKgAu0kFWHsOOF5ghJIEk7n6WnB1ypAU",
    alt: "Archival heritage of Mughal culinary routes",
    statNumber: "Ain-i-Akbari",
    statLabel: "Reclaiming the Lost Deg",
    tag: "Badshahi Era"
  },
  {
    chapter: "Chapter II",
    badge: "Matriarchs & Courtyards",
    title: "The Recipes",
    subtitle: "Gathered quietly from grandmother kitchens across five provinces.",
    desc: "The most consequential food in Pakistan lived exclusively in the intuition of matriarchs who understood that cumin roasted thirty seconds too long loses sweetness, and authentic Dum Pukht requires wet river dough seals.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCwtUTRz8jw3UaCSHl44IBrShgdc9jsuDDW-gJlJ7YlMP7mizayPx_KuIfKcP1FJVx6nn9CwEYIWEjuvTbI-uH4C59gP0Og_2lnum8h174KEZMbDaihtaJAKdoHUm1ZaeiH9Ud0R2MiEALX7dlkqVEGNUxJut_BU4Co-zjtogpd-B31tKQTQTmdXacyHWmnUC5QpDYV6kToWbHkwnUd4r8040NRWS4b7UA0TqF-wo",
    alt: "Ancestral grandmother culinary traditions",
    statNumber: "7 Years",
    statLabel: "Documenting Matriarch Recipes",
    tag: "Multan • Peshawar • Mirpur"
  },
  {
    chapter: "Chapter III",
    badge: "Indigenous Babool",
    title: "The Living Fire",
    subtitle: "Woodsmoke from babool trees & charcoal pits reaching 800°C.",
    desc: "Gas flame is sterile; it heats without breathing. Every skewer, tandoori roti, and deg of lamb biryani is forged over Punjab Kikar wood, dried nine months until bone-dry. Its white-hot embers leave an indelible whisper of wild sweet cedar.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcfG8R_xMzdrF8hac8zg6J-ut4tHdIO8Vn4ggZzF8wAopH2WkczqsIqU0Y-foTxAjgMAEE5l-yPGB4183rmdREwIpQZu362etHe2KkDxpA52Lf-7LUcxy8EbVTtp1uj7vQEVm-woh2eszJS99aa114qObpGTkr79pOC3j1hZZ_7GBKNQbqG23D-hDy5no08jQ1cLndBFfy9rsu-pTV_NcJxn96Km_OgTKm707HsiM",
    alt: "Living Babool woodsmoke and 800-degree embers",
    statNumber: "800°C",
    statLabel: "Charcoal Hearth Temperature",
    tag: "Wild Fire Craft"
  },
  {
    chapter: "Chapter IV",
    badge: "Sacred Kinship",
    title: "The Dastarkhwan",
    subtitle: "Where stranger becomes guest, and guest becomes sacred family.",
    desc: "Eating was never an isolated individual transaction. The Dastarkhwan is an ancient spiritual canvas laid across the table—a declaration that all who sit within its perimeter share identical dignity, warmth, and abundance.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbqkOnCDLL16G3a9UcHeKCUzMUmpC_mkGknEpI-Qd6525-RPtSGFFuSMQ45mQM4ANkYChjN-xA2OdV7a2FOYqRtFunPsI_RCEDFMdl1PA7RLKSxfgtJiLNm3hpoHfeoy_gvvge0G4bQsyPKqR_a7tbZ_e30yzvBz9BBHMvFBjILA4ZW5iQpNs_nOvsH6sTq7F2pdGkwFqXVmtuh9h6Pnv0LjGOce-56j8F9D986GI",
    alt: "Communal Dastarkhwan banquet feast at Junoon",
    statNumber: "Mehman-Nawazi",
    statLabel: "Unconditional Hospitality",
    tag: "Communal Table"
  },
  {
    chapter: "Chapter V",
    badge: "Gulberg II, Lahore",
    title: "The Sanctuary",
    subtitle: "Hand-carved terracotta, perforated brass jaali screens & serenity.",
    desc: "Designed with master artisans from Lahore's old walled city, every architectural detail echoes Mughal court geometry without nostalgia or pastiche. Perforated brass jaalis modulate daylight into meditative geometric shadowscapes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKxGiYu7lc0vBs2DOypjl-undmimNwwKckUIRnuBKYRvA_O2zlz-8v8yD1rBFzngyVRGgf0cftLlJaEh1C-dU9K1oD_wQ1qCpj6OETLfHm5b1aKUUCqx0xvinCWumddcGAK0IafdsGORLZHhpINK08F19yQhKxRFQd_pQ_HkQd73aEiJCEAllgJM5F7iyWSKT5WgUw478zOEcY8BYD1WK_xWnkzRsaP0Z-S04ZlDo",
    alt: "Architectural sanctuary in Gulberg Lahore",
    statNumber: "Gulberg III",
    statLabel: "Refined Dining Sanctuary",
    tag: "Brass & Terracotta"
  },
  {
    chapter: "Manifesto & Custodian",
    badge: "Founder's Covenant",
    title: "What Junoon Means",
    subtitle: "“Junoon is not merely passion — it is an obsession with doing justice to our ancestors' table.”",
    desc: "“For too long, the world looked at South Asian cooking through diluted commercial curry powder. That is not our cuisine. Our cuisine is aristocratic in its subtleties. We made a pact: never translate ourselves downward.” — Tariq Al-Hashmi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRWWiPzVTfNg2yn7uI68tKmj5nYFND6Bwu3RTXfIRUKpWjTUsGQIr1b_Hh1t2fX-i4mLCETk9swvR31pdYD849JMvwcHES8p4aoB6QiY_BUTZgybfuDI1in2vpRVmdkChfycMtE-xV3sX-8JsY-DsB7d6hYoFAUqM8kO4OYPmZzIHV3bLeOsQou5ScEq9g8MSsoUZZjM8PgGdqFgBiX8cRbr9C7jElFGVlz3OKrTU",
    alt: "Executive Chef and Founder of Junoon",
    statNumber: "42 Artisans",
    statLabel: "Guardians of the Hearth",
    tag: "Tariq Al-Hashmi • Executive Chef"
  }
];

export default function HorizontalStoryScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 300}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-[#140c08] text-on-primary overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(123,88,29,0.18),rgba(20,12,8,0.95))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Top Fixed Control Bar within Pinned Section (Offset by pt-28 to clear 96px header) */}
      <div className="relative z-30 max-w-[1536px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32 pb-4 flex items-center justify-between border-b border-[#7b581d]/30 bg-[#140c08]/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-secondary-fixed" />
          <span className="font-caption-folio text-secondary-fixed uppercase tracking-[0.28em] text-[11px] font-bold">
            Our Story &amp; Chronicle
          </span>
          <span className="text-secondary-fixed/50 text-[10px] tracking-widest hidden sm:inline">•</span>
          <span className="font-caption-folio text-outline-variant uppercase tracking-[0.22em] text-[10px] hidden sm:inline">
            Scroll to Journey Right →
          </span>
        </div>

        {/* Prominent High-Visibility Progress Bar */}
        <div className="flex items-center gap-3.5 bg-black/40 border border-[#7b581d]/30 px-4 py-1.5 rounded-full shadow-inner">
          <span className="text-[10px] tracking-[0.22em] font-label-uppercase text-secondary-fixed uppercase font-semibold">
            Progress
          </span>
          <div className="w-28 sm:w-44 h-2 bg-white/15 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-secondary to-secondary-fixed rounded-full shadow-[0_0_8px_rgba(255,208,137,0.6)] transition-all duration-75 w-0"
            />
          </div>
        </div>
      </div>

      {/* Main Horizontal Track Area */}
      <div className="relative w-full h-[calc(100vh-140px)] flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-5 sm:gap-8 pl-4 sm:pl-8 lg:pl-16 pr-8 lg:pr-16 select-none will-change-transform"
          style={{ width: "max-content" }}
        >
          {storyCards.map((card, idx) => (
            <article
              key={idx}
              className="w-[86vw] max-w-[350px] sm:max-w-none sm:w-[560px] lg:w-[680px] xl:w-[740px] shrink-0 h-[75vh] max-h-[620px] bg-gradient-to-b from-[#221710] to-[#170e08] border border-[#7b581d]/30 rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-secondary/60 transition-colors duration-500"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/15 transition-all duration-700" />

              {/* Card Top: Chapter & Badge */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-label-uppercase text-secondary-fixed text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold">
                    {card.chapter}
                  </span>
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary-fixed/40" />
                  <span className="font-caption-folio text-outline-variant text-[9px] sm:text-[10px] tracking-[0.18em] uppercase">
                    {card.tag || "Heritage"}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-secondary/20 border border-secondary/40 rounded-full text-secondary-fixed font-caption-folio text-[9px] sm:text-[10px] uppercase tracking-[0.18em]">
                  {card.badge}
                </span>
              </div>

              {/* Card Body: Split Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-center flex-1 py-2 sm:py-4 relative z-10">
                {/* Visual Column with Smooth Reveal */}
                <div className="md:col-span-5 h-[155px] sm:h-[220px] md:h-[340px] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-[#7b581d]/30 group-hover:border-secondary/50 transition-all duration-700 bg-black/40">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{
                      animation: "revealHorizontal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  {card.statNumber && (
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-black/70 backdrop-blur-md p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-white/10">
                      <span className="font-headline-sm text-secondary-fixed text-[15px] sm:text-[18px] block font-bold leading-none mb-0.5">
                        {card.statNumber}
                      </span>
                      <span className="font-caption-folio text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-white/80">
                        {card.statLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Narrative Column */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-1.5 sm:space-y-3.5 pr-1 sm:pr-2">
                  <h3 className="font-display-xl text-[20px] sm:text-[26px] lg:text-[36px] text-white tracking-tight leading-[1.12] uppercase font-normal">
                    {card.title}
                  </h3>

                  <p className="font-title-editorial text-[14px] sm:text-[16px] lg:text-[19px] text-secondary-fixed italic leading-snug">
                    {card.subtitle}
                  </p>

                  <p className="font-body-md text-outline-variant text-[11.5px] sm:text-[13px] lg:text-[14px] leading-relaxed font-light line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-[9px] sm:text-[10px] uppercase font-caption-folio tracking-[0.2em] text-outline-variant">
                  Junoon • Pakistani Gastronomy
                </span>
                <span className="text-secondary-fixed text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  Folio 0{idx + 1} →
                </span>
              </div>
            </article>
          ))}

          {/* Final Callout Slide */}
          <article className="w-[86vw] max-w-[350px] sm:max-w-none sm:w-[480px] shrink-0 h-[75vh] max-h-[620px] bg-gradient-to-b from-[#2a1d14] to-[#19100a] border border-secondary/50 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
            <span className="font-caption-folio text-secondary-fixed uppercase tracking-[0.24em] text-[10px] sm:text-[11px] mb-2 sm:mb-3">
              Communion Awaits
            </span>
            <h3 className="font-headline-lg text-white uppercase text-[26px] sm:text-[32px] lg:text-[40px] leading-tight mb-3 sm:mb-4">
              Experience Our Sacred Table
            </h3>
            <p className="font-body-md text-outline-variant text-[12px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Step out of the everyday and immerse yourself in an unhurried evening of living fire, poetry, and hospitality at Gulberg III.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <Link
                href="/reservations"
                className="h-[44px] sm:h-[48px] px-6 sm:px-8 bg-secondary-fixed text-primary font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.2em] uppercase flex items-center justify-center font-bold hover:bg-white transition-colors shadow-lg"
              >
                Reserve A Table
              </Link>
              <Link
                href="/menu"
                className="h-[44px] sm:h-[48px] px-6 sm:px-8 bg-transparent border border-secondary/50 text-white font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.2em] uppercase flex items-center justify-center font-bold hover:border-secondary hover:bg-white/5 transition-colors"
              >
                Explore Menu
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
