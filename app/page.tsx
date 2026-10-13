import Link from 'next/link';
import {
  AnimatedHeading,
  ImageReveal,
  FadeIn,
  StaggerReveal,
} from '@/components/AnimationPrimitives';
import HomePageReservationForm from '@/components/HomePageReservationForm';
import HorizontalStoryScroll from '@/components/HorizontalStoryScroll';
import SignatureDishesCarousel from '@/components/SignatureDishesCarousel';
import SplashScreen from '@/components/SplashScreen';

export default function HomePage() {
  return (
    <main className="w-full bg-surface min-h-screen">
      {/* Luxury Cinematic Entry Splash Screen */}
      <SplashScreen />

      <div className="flex flex-col w-full">

        {/* ─── PHASE 2: HERO SECTION ─── */}
        <section className="relative w-full pb-10 sm:pb-14 bg-surface overflow-hidden flex flex-col justify-center">
          
          {/* Vertical Category Strip on Desktop (Far Left) */}
          <div className="hidden lg:flex absolute top-[24%] left-6 xl:left-8 w-[60px] flex-col items-center justify-center gap-20 xl:gap-24 z-20">
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">Tandoor</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">Karahi</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-secondary tracking-[0.25em] text-[10px] uppercase font-bold relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-secondary after:rounded-full py-1">Signatures</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">BBQ</span>
          </div>

          {/* ─── HERO UPPER STAGE: Arch (Left) & Brand Content (Right) ─── */}
          <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-28">

            {/* ─── ARCH SHAPE: Starts at top-0 (Navbar) and extends downwards to line up flush with Reserve Table button ─── */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-6 lg:left-[140px] xl:left-[160px] w-[140px] sm:w-[220px] lg:w-[340px] xl:w-[360px] bg-gradient-to-b from-[#26180e] via-[#1f130b] to-[#160d08] border-x border-b border-[#7b581d]/35 z-0 flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 px-2 sm:px-3 lg:px-4 rounded-b-full shadow-2xl pointer-events-none">
              <FadeIn delay={0.1}>
                <div className="w-[105px] h-[105px] sm:w-[170px] sm:h-[170px] lg:w-[265px] lg:h-[265px] xl:w-[285px] xl:h-[285px] relative pointer-events-auto shrink-0 rounded-full overflow-hidden shadow-2xl border sm:border-2 border-secondary/40 ring-2 sm:ring-4 ring-[#160d08] bg-[#160d08]/90 flex items-center justify-center p-2 sm:p-4 group">
                  <img 
                    src="/logo.png" 
                    alt="Junoon Pakistani Restaurant Royal Crest" 
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </FadeIn>
              <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.25em] text-[#ffd089] mt-2 sm:mt-3 font-semibold text-center leading-tight">
                Royal Gastronomy
              </span>
              <span className="hidden sm:block text-[8px] sm:text-[9px] text-[#a89d91] tracking-wider uppercase font-light text-center">
                Gulberg &bull; Lahore
              </span>
            </div>

            {/* ─── HERO CONTENT: Alongside the Arch ─── */}
            <div className="relative z-10 flex flex-row items-center lg:items-start min-h-[220px] sm:min-h-[260px] lg:min-h-[360px]">

              {/* Spacer on mobile/tablet to give room for the absolute top-0 arch */}
              <div className="shrink-0 w-[140px] sm:w-[220px] lg:hidden pointer-events-none" aria-hidden="true" />

              {/* Main Hero Brand Block */}
              <div className="flex-1 flex flex-col items-start text-left pl-3 sm:pl-6 lg:pl-[520px] xl:pl-[560px] justify-center pb-1 sm:pb-0">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="w-4 sm:w-6 h-[1px] bg-secondary" />
                    <span className="font-caption-folio text-secondary uppercase tracking-[0.25em] text-[9px] sm:text-[11px] font-semibold">
                      Gulberg &bull; Lahore
                    </span>
                    <span className="w-4 sm:w-6 h-[1px] bg-secondary hidden sm:inline-block" />
                  </div>
                  <AnimatedHeading tag="h1" className="font-display-xl text-[34px] sm:text-[48px] lg:text-[62px] xl:text-[70px] text-primary leading-[1.02] tracking-tight mb-2 sm:mb-4 uppercase font-normal" delay={0.1}>
                    Junoon
                  </AnimatedHeading>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-title-editorial italic text-on-surface-variant max-w-[480px] leading-snug sm:leading-relaxed mb-3.5 sm:mb-6 text-[13px] sm:text-[17px] lg:text-[20px] font-normal">
                    A celebration of Pakistan&apos;s sacred communal table, slow-fired over wild charcoal and steeped in Mughal grandeur.
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5 w-full sm:w-auto">
                    <Link href="/menu" className="h-[38px] sm:h-[46px] px-4 sm:px-7 bg-transparent border border-secondary/50 text-primary hover:border-secondary hover:bg-secondary/5 transition-all font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.18em] uppercase flex items-center justify-center font-semibold shadow-xs whitespace-nowrap">
                      Explore Menu
                    </Link>
                    <Link href="/reservations" className="h-[38px] sm:h-[46px] px-4 sm:px-7 bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-on-tertiary transition-all font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.18em] uppercase flex items-center justify-center font-semibold shadow-md whitespace-nowrap">
                      Reserve Table
                    </Link>
                  </div>
                </FadeIn>
              </div>

            </div>

          </div>

          {/* ─── FOUR SIGNATURE-DISH CARDS (Responsive Carousel & Grid) ─── */}
          <SignatureDishesCarousel />
        </section>

        {/* ─── PHASE 5: HISTORY / OUR STORY (BROWN SECTION #2) ─── */}
        <section className="pt-20 bg-[#160d08] text-[#ede5dc] border-t border-[#7b581d]/25">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-10">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="w-6 h-[1px] bg-[#d5a046]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#d5a046] font-semibold">
                  Heritage • Craftsmanship
                </span>
                <span className="w-6 h-[1px] bg-[#d5a046]" />
              </div>
            </FadeIn>
            <AnimatedHeading
              className="font-display text-4xl lg:text-5xl uppercase text-white mt-2 font-normal tracking-tight"
              delay={0.1}
            >
              Rooted in Pakistan’s Sacred Table
            </AnimatedHeading>
            <FadeIn delay={0.2} className="max-w-2xl mx-auto mt-3">
              <p className="font-title-editorial text-lg lg:text-xl italic text-[#ffd089] font-light">
                Scroll through our living chronicle — four centuries of Mughal fire craft, caravan routes, and grandmother kitchens.
              </p>
            </FadeIn>
          </div>

          {/* Interactive Horizontal Scroll Journey */}
          <HorizontalStoryScroll />
        </section>

        {/* ─── PHASE 6: MENU SHOWCASE / THE COLLECTION (WHITE SECTION #3) ─── */}
        <section className="py-16 sm:py-24 bg-surface text-on-surface relative overflow-hidden border-t border-secondary/20" id="collection">
          {/* Subtle Warm Backdrop */}
          <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-2">
                  <span className="w-6 h-[1px] bg-secondary" />
                  <span className="font-caption-folio text-secondary uppercase tracking-[0.3em] text-[11px] font-semibold">
                    The Collection
                  </span>
                  <span className="w-6 h-[1px] bg-secondary" />
                </div>
              </FadeIn>
              <AnimatedHeading className="font-display-xl text-[32px] sm:text-[38px] lg:text-[50px] uppercase text-primary tracking-tight leading-[1.1] font-normal" delay={0.1}>
                A Journey Through Flavours
              </AnimatedHeading>
              <FadeIn delay={0.2} className="mt-3">
                <p className="font-title-editorial italic text-secondary text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                  Three distinct culinary pillars slow-fired over babool coals and cast-iron flames.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Row 1: Earth & Fire Tandoor */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-[#fdf8f0] border border-secondary/25 p-5 sm:p-6 lg:p-10 rounded-[24px] sm:rounded-[32px] shadow-lg group hover:border-secondary/60 hover:shadow-xl transition-all duration-500">
                <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-secondary/20 group-hover:border-secondary/50 transition-all duration-700 bg-[#eadecc] aspect-[4/3]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSNdQr7h3lRmxgOeBD9ep-PFz_NMsMf8ke1iYnznj6zrSU0sFeX5CSqHSi-KYZl9VdlLQJ6AAQVdbz9swk3no-qVjRohN8P6AglwsRP8MJCrmwbVoq1mfN8143LxB27V6jWJ8UUB66oslLH3RTYcntQFvPoU4xXzQdk-eiB4h90Pffdi-iPcwtv5cW4IjPqrmgd7Kwhneia_Y1kM_0QHPP5OzxeUjw-LQ0Urg0LM" 
                    alt="Earth & Fire Tandoor" 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-primary/80 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-secondary/30 text-secondary-fixed font-caption-folio text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
                    Pillar 01 • Sunken Pit
                  </div>
                </div>
                <div className="md:col-span-6 md:pl-4 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-caption-folio text-secondary uppercase tracking-[0.28em] text-[10px] sm:text-[11px] font-semibold">Earth &amp; Fire</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                    <span className="font-caption-folio text-outline text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">Multani Clay</span>
                  </div>
                  <h3 className="font-display-xl text-[24px] sm:text-[28px] lg:text-[36px] uppercase text-primary tracking-tight leading-tight font-normal">
                    The Tandoor Hearth
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed font-light">
                    Wood-fired terracotta pits reaching 800°C. Hand-pulled Roghani naans with kalonji seeds, flaky sheermaal, and whole spiced flatbreads blistered over embers with clarified butter.
                  </p>
                  <div className="pt-1 sm:pt-2">
                    <Link href="/menu" className="h-[42px] sm:h-[44px] px-5 sm:px-6 bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-white font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-2 transition-all rounded-none font-semibold shadow-sm">
                      <span>Explore Tandoor Menu</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 2: Cast-Iron Karahis */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-[#fdf8f0] border border-secondary/25 p-5 sm:p-6 lg:p-10 rounded-[24px] sm:rounded-[32px] shadow-lg group hover:border-secondary/60 hover:shadow-xl transition-all duration-500">
                <div className="md:col-span-6 md:order-2 relative rounded-2xl overflow-hidden shadow-xl border border-secondary/20 group-hover:border-secondary/50 transition-all duration-700 bg-[#eadecc] aspect-[4/3]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjYzWPGikCMRfNvCWXkIQtyaD_bnSXEmcuw-tTuudfbF_uVLc0i6rA7qHF3UOiHsSVCo5Fed1Y1L3PsY-u-KdLhhJ78oKrYbw6k0wgbxhhPnwhS1aRwFyFUqc0MYWUXxIfHiM00YiKRpo9Yrqu0ohEuxrFPFcNb3xE2dIKizqfXWGDKjdDvBjR1IJX7WnhTds9N1Q9O_-s1ooflKDNfUttWkRaxzJjHCi4rgR_qRE" 
                    alt="Cast-Iron Karahis" 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-primary/80 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-secondary/30 text-secondary-fixed font-caption-folio text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
                    Pillar 02 • Wok Heart
                  </div>
                </div>
                <div className="md:col-span-6 md:order-1 md:pr-4 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-caption-folio text-secondary uppercase tracking-[0.28em] text-[10px] sm:text-[11px] font-semibold">The Wok Heart</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                    <span className="font-caption-folio text-outline text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">Khewra Rock Salt</span>
                  </div>
                  <h3 className="font-display-xl text-[24px] sm:text-[28px] lg:text-[36px] uppercase text-primary tracking-tight leading-tight font-normal">
                    Cast-Iron Karahis
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed font-light">
                    Cooked in heavy cast-iron woks over roaring flames. Pure mountain sheep fat, pink rock salt from Khewra mines, ripe river tomatoes, and ginger slivers reduced to unctuous, crackling perfection.
                  </p>
                  <div className="pt-1 sm:pt-2">
                    <Link href="/menu" className="h-[42px] sm:h-[44px] px-5 sm:px-6 bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-white font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-2 transition-all rounded-none font-semibold shadow-sm">
                      <span>Explore Karahi Selection</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 3: Angaar BBQ */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-[#fdf8f0] border border-secondary/25 p-5 sm:p-6 lg:p-10 rounded-[24px] sm:rounded-[32px] shadow-lg group hover:border-secondary/60 hover:shadow-xl transition-all duration-500">
                <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-secondary/20 group-hover:border-secondary/50 transition-all duration-700 bg-[#eadecc] aspect-[4/3]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRBlYEQU0BHIogdJLjxSG31SguwhAspeh5fDMs2ODJjWRodg953XVNFelS8rkNNbZRNt2WJonAUdPLZb6rMJSTg5xbQ7N5dx3KOt2dlGVL2PKFg3BDAlTAj0wJGlsJ8PH3wYRSoVmCg-sb-uYDsK_sTnYVX9pFvGuOjZQBotqCZmNLYl9EjN7kZZnzYN2H6rOEslWcwrAYsd6kXhWH1boHXausqTKMHIAsNoeoDL8" 
                    alt="Angaar BBQ" 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-primary/80 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-secondary/30 text-secondary-fixed font-caption-folio text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
                    Pillar 03 • Angaar Embers
                  </div>
                </div>
                <div className="md:col-span-6 md:pl-4 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-caption-folio text-secondary uppercase tracking-[0.28em] text-[10px] sm:text-[11px] font-semibold">Charcoal Smoked</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                    <span className="font-caption-folio text-outline text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">Kikar Timber</span>
                  </div>
                  <h3 className="font-display-xl text-[24px] sm:text-[28px] lg:text-[36px] uppercase text-primary tracking-tight leading-tight font-normal">
                    Angaar BBQ Skewers
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed font-light">
                    Thirty-six hour marinades featuring green raw papaya, crushed mace, mountain cumin, and curd. Finished over babool charcoal on thick hand-forged brass skewers.
                  </p>
                  <div className="pt-1 sm:pt-2">
                    <Link href="/menu" className="h-[42px] sm:h-[44px] px-5 sm:px-6 bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-white font-label-uppercase text-[10px] sm:text-[11px] tracking-[0.22em] uppercase inline-flex items-center gap-2 transition-all rounded-none font-semibold shadow-sm">
                      <span>Explore BBQ Collection</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PHASE 8: THE ARCHITECTURAL SANCTUARY (BROWN SECTION #4) ─── */}
        <section className="w-full py-16 sm:py-24 bg-[#180e08] text-[#ede5dc] border-t border-[#7b581d]/25">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-2">
                  <span className="w-6 h-[1px] bg-[#d5a046]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#d5a046] font-semibold">
                    The Architectural Sanctuary
                  </span>
                  <span className="w-6 h-[1px] bg-[#d5a046]" />
                </div>
              </FadeIn>
              <AnimatedHeading
                className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-white mt-2 font-normal tracking-tight"
                delay={0.1}
              >
                Built for Reverence &amp; Quietude
              </AnimatedHeading>
              <p className="font-title-editorial italic text-[#ffd089] text-[16px] sm:text-[18px] lg:text-[20px] mt-2 font-light">
                Hand-carved terracotta, perforated brass jaali screens, and contemplative luxury in Gulberg III.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
              <div className="md:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#7b581d]/30 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKdzZAyf12H7dm9tcKSMfR7O1YlMjqGclziRzCykAaf4p6P_bJOZEPMR2KHPDdX2MiWHr99u-xy_c8nw7D523l3xECSIoX1yycb5u0qEd2shzCcfAUGJO4knLT9TdkCkX9mW5ercJF76bc5sEeL_y3wQlM_FXVMkbKw5elm2hOI6NVjx53e4MGM27joVEBtbZry2JQ4Yqw4WbLv3B3eOvWnk3Fo8q7JdRhT1nFDUU"
                  alt="Junoon Grand Dining Hall"
                  className="w-full h-full object-cover min-h-[300px] sm:min-h-[360px] lg:min-h-[460px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <span className="text-[9px] sm:text-[10px] uppercase text-[#d5a046] tracking-[0.25em] font-semibold block mb-1">Sanctuary I</span>
                  <h4 className="font-display text-xl sm:text-2xl lg:text-3xl text-white uppercase font-normal">The Grand Dining Hall</h4>
                  <p className="text-[#cfbeae] text-[12px] sm:text-[13px] max-w-lg mt-1 font-light">Warm candlelight bouncing across vaulted arches and hand-beaten brassware.</p>
                </div>
              </div>

              <div className="md:col-span-4 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#7b581d]/30 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwHT7oxV2s3LNfTsTJ5zE8zOw8LY3u41SUoK2Uit_mXteDsaIJgSp0E4494iFEoCi4-7ZAXIPfMXleSRjqMzIQS8SFCdn0ZzlCbIyFR46q0_mkeAfnhNw4bBTGUWmCqX9-KrqAXIz6Hl5IqZBeqWRUJSRs9kHo7eA_2hsvKGCpyFbUVaffRwntaJBrqPPOADl-n-Pk1rbX4xuWNVksjvBaUyGt-tCkx5VogtYjpxs"
                  alt="Brass Jali Screen"
                  className="w-full h-full object-cover min-h-[300px] sm:min-h-[360px] lg:min-h-[460px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <span className="text-[9px] sm:text-[10px] uppercase text-[#d5a046] tracking-[0.25em] font-semibold block mb-1">Craftsmanship</span>
                  <h4 className="font-display text-xl sm:text-2xl lg:text-3xl text-white uppercase font-normal">Intricate Brass Jaali</h4>
                  <p className="text-[#cfbeae] text-[12px] sm:text-[13px] mt-1 font-light">Perforated screens modulating sunlight into meditative geometry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PHASE 7: RESERVATION SECTION (WHITE SECTION #5) ─── */}
        <section className="w-full py-16 sm:py-24 bg-surface text-on-surface relative overflow-hidden border-t border-secondary/20" id="reservation">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(179,138,74,0.12)_0%,transparent_60%)] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="bg-[#fcf7ee] border border-secondary/35 rounded-[24px] sm:rounded-[36px] shadow-2xl p-5 sm:p-8 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
                
                {/* Text Column */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
                  <FadeIn>
                    <div className="inline-flex items-center gap-3">
                      <span className="w-6 h-[1px] bg-secondary" />
                      <span className="font-caption-folio text-caption-folio uppercase tracking-[0.32em] text-secondary text-[10px] sm:text-[11px] font-semibold">
                        Communal Table
                      </span>
                    </div>
                  </FadeIn>
                  <AnimatedHeading
                    className="font-display-xl text-[30px] sm:text-[38px] lg:text-[50px] uppercase text-primary tracking-tight leading-[1.08] font-normal"
                    delay={0.1}
                  >
                    Your Table Awaits
                  </AnimatedHeading>
                  <FadeIn delay={0.2} className="space-y-3 sm:space-y-4">
                    <p className="font-title-editorial text-[18px] sm:text-[20px] lg:text-[22px] italic text-secondary leading-relaxed">
                      “Come hungry. Leave with a story.”
                    </p>
                    <p className="font-body-md text-on-surface-variant text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed font-light">
                      We accept reservations up to 30 days in advance. For special commemorations, private dining chambers, or curated tasting menus, our hospitality concierge remains at your service.
                    </p>
                    <div className="p-4 sm:p-5 border border-secondary/30 bg-surface-container-low rounded-xl sm:rounded-2xl inline-block mt-2 shadow-sm">
                      <span className="font-caption-folio uppercase text-secondary tracking-[0.22em] text-[9px] sm:text-[10px] block mb-1 font-semibold">
                        Gulberg Concierge Desk
                      </span>
                      <p className="font-display-xl text-primary text-[18px] sm:text-[20px] font-normal tracking-wider">+92 42 3578 9200</p>
                    </div>
                  </FadeIn>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-7 bg-[#1c120a] border border-[#7b581d]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-on-surface shadow-2xl">
                  <FadeIn delay={0.3}>
                    <HomePageReservationForm />
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
