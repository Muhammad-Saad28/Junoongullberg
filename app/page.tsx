import Link from 'next/link';
import {
  AnimatedHeading,
  ImageReveal,
  FadeIn,
  StaggerReveal,
} from '@/components/AnimationPrimitives';
import HomePageReservationForm from '@/components/HomePageReservationForm';
import HorizontalStoryScroll from '@/components/HorizontalStoryScroll';

export default function HomePage() {
  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ─── PHASE 2: HERO SECTION (YumRush Inspired) ─── */}
        <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] pt-24 sm:pt-28 pb-14 sm:pb-16 bg-surface overflow-hidden flex flex-col justify-center">
          
          {/* Arch Shape: Rich Warm Brown Architectural Alcove + Image (Desktop) */}
          <div className="hidden lg:flex absolute top-0 left-[140px] xl:left-[160px] w-[340px] xl:w-[360px] bg-gradient-to-b from-[#26180e] via-[#1f130b] to-[#160d08] border-x border-b border-[#7b581d]/30 z-0 flex-col items-center justify-end pt-[105px] pb-4 px-3 rounded-b-full shadow-2xl pointer-events-none">
            <FadeIn delay={0.1}>
              <div className="w-[265px] h-[265px] xl:w-[285px] xl:h-[285px] relative pointer-events-auto shrink-0 rounded-full overflow-hidden shadow-2xl ring-2 ring-secondary/35 ring-offset-2 ring-offset-[#160d08]">
                <img 
                  src="/images/desi_classics.png" 
                  alt="Junoon Culinary Heritage" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" 
                />
              </div>
            </FadeIn>
          </div>

          {/* Vertical Nav Layer (Left Strip - Desktop) */}
          <div className="hidden lg:flex absolute top-[24%] left-6 xl:left-8 w-[60px] flex-col items-center justify-center gap-20 xl:gap-24 z-20">
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">Tandoor</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">Karahi</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-secondary tracking-[0.25em] text-[10px] uppercase font-bold relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-secondary after:rounded-full py-1">Signatures</span>
            <span className="-rotate-90 whitespace-nowrap font-label-uppercase text-outline-variant tracking-[0.25em] text-[10px] uppercase font-bold hover:text-primary transition-colors cursor-pointer py-1">BBQ</span>
          </div>

          {/* Mobile Arch Alcove & Plate (Faithfully mirrors desktop architectural alcove) */}
          <div className="lg:hidden w-full flex flex-col items-center justify-center mt-2 mb-4 z-20 relative px-4">
            {/* Category Pills Bar on Mobile */}
            <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-surface-container-high border border-secondary/20 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-outline">Tandoor</span>
              <span className="px-3 py-1 bg-surface-container-high border border-secondary/20 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-outline">Karahi</span>
              <span className="px-3.5 py-1 bg-primary text-secondary-fixed border border-secondary/40 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">Signatures</span>
              <span className="px-3 py-1 bg-surface-container-high border border-secondary/20 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-outline">BBQ</span>
            </div>

            {/* Architectural Arch Alcove Container */}
            <div className="w-[250px] sm:w-[300px] h-[270px] sm:h-[320px] bg-gradient-to-b from-[#24170e] via-[#1c110a] to-[#140b07] border border-[#7b581d]/35 rounded-t-[120px] rounded-b-[40px] shadow-2xl flex flex-col items-center justify-center p-3 relative">
              <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden shadow-2xl border-2 border-secondary/40 ring-4 ring-[#140b07]/80">
                <img 
                  src="/images/desi_classics.png" 
                  alt="Signature Slow-Cooked Kunna Gosht" 
                  className="w-full h-full object-cover scale-105" 
                />
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#ffd089] mt-2 font-semibold">
                Slow-Fired Kunna Gosht
              </span>
            </div>
          </div>
            
          {/* Main Hero Text Block */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full px-5 sm:px-8 lg:px-0 lg:pl-[570px] xl:pl-[610px] lg:pr-12 z-10 mt-4 lg:mt-0 max-w-[1440px]">
            <FadeIn>
              <AnimatedHeading tag="h1" className="font-display-xl text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] text-primary leading-[1.05] tracking-tight mb-3 sm:mb-4 uppercase font-normal" delay={0.1}>
                Junoon
              </AnimatedHeading>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-title-editorial italic text-on-surface-variant max-w-[480px] leading-relaxed mb-6 sm:mb-7 text-[17px] sm:text-[19px] lg:text-[20px] font-normal mx-auto lg:mx-0">
                A celebration of Pakistan&apos;s sacred communal table, slow-fired over wild charcoal and steeped in Mughal grandeur.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-4 sm:mb-6 w-full sm:w-auto">
                <Link href="/menu" className="h-[46px] px-7 bg-transparent border border-secondary/50 text-primary hover:border-secondary hover:bg-secondary/5 transition-all font-label-uppercase text-[11px] tracking-[0.2em] uppercase flex items-center justify-center font-semibold w-full sm:w-auto shadow-sm">
                  Explore Menu
                </Link>
                <Link href="/reservations" className="h-[46px] px-7 bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-on-tertiary transition-all font-label-uppercase text-[11px] tracking-[0.2em] uppercase flex items-center justify-center font-semibold shadow-md w-full sm:w-auto">
                  Reserve A Table
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ─── FOUR SIGNATURE-DISH CARDS (Integrated into Hero Section) ─── */}
          <div className="w-full max-w-[1440px] mx-auto lg:pl-[120px] xl:pl-[140px] lg:pr-12 px-4 sm:px-6 relative z-20 mt-8 sm:mt-10 lg:mt-12">
            {/* Scroll indicator for mobile swipe */}
            <div className="flex sm:hidden items-center justify-between mb-3 px-1 text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
              <span>Signature Highlights</span>
              <span className="text-outline text-[9px] font-normal">Swipe →</span>
            </div>

            {/* Horizontal Swipe Carousel on Mobile, Responsive Grid on Desktop */}
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar pt-6">
              {[
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-cb0fl1hzwv_mtclUKFH_qGHRbXN5NLL3zZjGHlYRN5SLaUwPESp-rMXxI-5QdGP1oQRIk8EktwXB1LkEsxFUNge0t3u8LeZeAwhM6LXIgXYncUbq-U2DblmY6yvxpDW4ryfGwZOokjybVnzklu45QjWqmlysx5bMCnr3MoUQjeJV4s5AuoMTVbCaa50KyGitK3znhCCvOY8IceiiTmV8tdRpSq701tXgebi9qE', name: 'Shinwari Karahi', desc: 'Young mountain sheep', price: '3,850' },
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsEOORMF4ZapO1F5qgiLRFl93mJsnvtP3YIuhErsauJiITzG5jaP205pFxQifoJTLnl00d6FPn0tcH8rX7ucA_n0y9UxRB3GiyE4ymIXYIKo3tH03kt1SLhJof8-2DxVu9P4gCKfCxrLhL0T_PjtMjMwhQUU3zNy632vvg96KdlZKWRwGeeXJj3FVLx0OiBRSdLkXTam1wJgV8iXNhOT4JL5q_CAU_0WWvfObqfI0', name: 'Murgh Malai Boti', desc: 'Charred over babool', price: '2,450' },
                { img: '/images/desi_classics.png', name: 'Kunna Gosht', desc: 'Subterranean braise', price: '3,400' },
                { img: '/images/peshawar.png', name: 'Peshawari Chapli', desc: 'Pressed on broad tawas', price: '2,100' },
              ].map((dish, i) => (
                <article 
                  key={i} 
                  className="w-[260px] sm:w-auto shrink-0 sm:shrink snap-center bg-gradient-to-b from-[#221c17] to-[#181310] border border-[#7b581d]/25 hover:border-secondary/60 text-white rounded-[24px] p-4 sm:p-5 pt-[52px] sm:pt-[58px] relative flex flex-col hover:-translate-y-1.5 transition-all duration-300 group shadow-xl hover:shadow-2xl"
                >
                  {/* Floating Circular Image Top-Left */}
                  <div className="absolute -top-7 sm:-top-8 left-3 sm:-left-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-2 border-secondary/40 ring-4 ring-[#221c17] group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
                    <img src={dish.img} alt={dish.name} className="w-full h-full object-cover scale-110" />
                  </div>
                  {/* Price Top-Right */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="font-headline-sm text-[#ffd089] text-[15px] sm:text-[16px] font-medium tracking-wide">PKR {dish.price}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-2 flex flex-col h-full justify-between z-10">
                    <div>
                      <h3 className="font-headline-sm text-white mb-1 text-[16px] sm:text-[17px] text-center group-hover:text-secondary-fixed transition-colors tracking-wide">{dish.name}</h3>
                      <p className="font-body-sm text-[#a89d91] text-center leading-snug text-[11px] sm:text-[12px]">{dish.desc}</p>
                    </div>
                    <div className="flex items-end justify-between mt-3.5 sm:mt-4 pt-2 border-t border-white/5">
                      <p className="font-caption-folio text-secondary/80 uppercase tracking-widest text-[9px] font-semibold">Signature</p>
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-[#ffd089] border-b-[5px] border-b-transparent group-hover:translate-x-1 transition-transform cursor-pointer"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B38A4A] ring-2 ring-[#B38A4A]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/30 hover:bg-secondary transition-colors cursor-pointer"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/30 hover:bg-secondary transition-colors cursor-pointer"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/30 hover:bg-secondary transition-colors cursor-pointer"></div>
            </div>
          </div>
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
