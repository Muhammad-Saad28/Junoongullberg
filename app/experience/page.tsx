import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  1. HERO SECTION (Cinematic dusk atmosphere)  */}
<section className="relative w-full overflow-hidden bg-primary text-on-primary">
<div className="relative w-full h-[870px] min-h-[600px] max-h-[880px] flex items-center justify-center">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" data-alt="Cinematic interior dusk view of Junoon restaurant in Gulberg Lahore, towering terracotta vaulted brick arches, glowing amber beeswax candles casting chiaroscuro reflections over beaten brass dining vessels, intimate linen-dressed tables, hazy aromatic charcoal smoke drifting gently, deep umber and saffron shadows, architectural luxury minimalism." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABvA_mXicHALS8dsPkJeT8uUJIoaXQx_4QUhqgFN8AafQ7CWNL2NsSpvU0jlvhPYioJ3C9Y269huH3_gFYWGE5UvAq76BgoaX4DKhBKlqUmQ41nCEj-7j4MCfEnsK5K-WVjYJFsp1DdJU0EKsPrbOgAOn0ITj65MNrxDlPfFgkTv_Pdw3Izj7hOGMztzlqY6QjWfgZ7BQVrfOby6e44U7RUEJNvX_cAXI-AGWr2Xo')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-primary/70"></div>
{/*  Micro ambient sparks SVG overlay  */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<circle cx="15%" cy="30%" fill="#ffd089" opacity="0.6" r="1.5">
<animate attributeName="cy" dur="7s" repeatCount="indefinite" values="30%;26%;30%"></animate>
<animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0.2;0.7;0.2"></animate>
</circle>
<circle cx="78%" cy="65%" fill="#ffd089" opacity="0.5" r="2">
<animate attributeName="cy" dur="9s" repeatCount="indefinite" values="65%;60%;65%"></animate>
<animate attributeName="opacity" dur="9s" repeatCount="indefinite" values="0.1;0.6;0.1"></animate>
</circle>
<circle cx="45%" cy="80%" fill="#edbf79" opacity="0.4" r="1">
<animate attributeName="cy" dur="6s" repeatCount="indefinite" values="80%;75%;80%"></animate>
</circle>
</svg>
</div>
{/*  Hero Typography Spread  */}
<div className="relative z-10 max-w-[1440px] w-full mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center">
<div className="inline-flex items-center gap-space-sm mb-space-md">
<span className="w-8 h-[1px] bg-secondary-fixed"></span>
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">
            Gulberg Sanctuary • Act of Communion
          </span>
<span className="w-8 h-[1px] bg-secondary-fixed"></span>
</div>
<h1 className="font-display-xl text-display-xl max-w-4xl text-on-primary tracking-tight leading-none mb-space-md">
          MORE THAN A MEAL
        </h1>
<p className="font-body-lg text-body-lg text-surface-dim max-w-2xl text-center font-light leading-relaxed mb-space-lg">
          An evening choreographed through light, smoke, sound, and communal reverence in Gulberg, Lahore.
        </p>
{/*  Downward Cadence Accent  */}
<a className="inline-flex flex-col items-center text-secondary-fixed hover:text-surface-bright transition-colors group" href="#sanctuary">
<span className="font-caption-folio text-caption-folio uppercase tracking-[0.28em] mb-2 text-outline-variant group-hover:text-secondary-fixed transition-colors">Enter The Realm</span>
<span className="material-symbols-outlined text-[22px] transition-transform group-hover:translate-y-1">south</span>
</a>
</div>
</div>
</section>
{/*  SENSORY OVERTURE / QUOTE STRIP  */}
<section className="w-full bg-surface-container py-space-xl overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-baseline">
<div className="lg:col-span-3 flex flex-col">
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.22em] uppercase">The Philosophy</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em] mt-1">Dastarkhwan as Ritual</span>
</div>
<div className="lg:col-span-9">
<blockquote className="font-headline-md text-headline-md text-on-surface leading-snug">
            “To step across our threshold is to surrender the clock. We do not set tables; we lay down sanctuaries for lingering minds, where Lahore’s ancient warmth encounters architectural discipline.”
          </blockquote>
<div className="mt-space-md flex items-center gap-space-sm">
<span className="h-[1px] w-12 bg-secondary"></span>
<span className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.22em]">Ustad Farooq &amp; The Architecture Guild of Lahore</span>
</div>
</div>
</div>
</div>
</section>
{/*  2. IMMERSIVE EXPERIENCE PILLARS (Asymmetric Editorial Rhythm)  */}
{/*  PILLAR I: THE SANCTUARY & ARCHITECTURE  */}
<section className="w-full py-space-xl bg-surface" id="sanctuary">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Visual Column (Asymmetric offset)  */}
<div className="lg:col-span-7 relative">
<div className="relative w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-surface-container-high shadow-lg">
<img alt="Vaulted Brick Arches and Jaali Screens" className="w-full h-full object-cover" data-alt="Mughal-inspired vaulted terracotta brick hallway inside Junoon restaurant with natural filtered light, hand-hammered perforated brass jaali screen casting geometric lattice shadows, shallow carved marble fountain basin with floating jasmine blossoms in Gulberg Lahore." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAstxlLb57M8rxBVCxVaznPsoVHymA4vkdOR2Qewh9BXaNcnggBkA-nK5Q1mY0ONnEKxsixDXPsVOHiW3IYU8YQMU75opL_VbZVZcDBRSe3etlw5I3r19y2gWEelXP5crflXNWoC3AeokVhIx-pPmDeaPTMogeUEf4b1kilSkvILLq5w-d0-qdzwvFEFSWbOhuW5TqxkyDNwzGOx5kCbHhRTGjnQDvCqHdAoiyoSnE"/>
</div>
{/*  Floating Accent Inset Card  */}
<div className="absolute -bottom-8 -right-4 sm:right-6 lg:-right-8 bg-surface-container-lowest p-space-md max-w-xs shadow-md hidden sm:block">
<div className="flex items-center gap-space-xs mb-1">
<span className="material-symbols-outlined text-secondary text-[18px]">water_drop</span>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Sensory Detail</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Carved Sang-e-Marmar marble basin softly rippling with fresh rosewater and jasmine.</p>
</div>
</div>
{/*  Narrative Column  */}
<div className="lg:col-span-5 lg:pl-space-md flex flex-col justify-center">
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="font-headline-sm text-headline-sm text-secondary">01</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">/ Spatial Sanctum</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
            THE SANCTUARY &amp; ARCHITECTURE
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light mb-space-md leading-relaxed">
            Vaulted Lahore brick arches frame a space where time decelerates. Hand-hammered brass jaali screens gently shatter direct lantern light into hypnotic patterns, casting quiet golden geometry along raw mortar walls.
          </p>
<p className="font-body-md text-body-md text-outline font-light mb-space-lg">
            Water trickles rhythmically in low-slung marble fountains, cleansing the soundscape of Gulberg’s bustling boulevards and instilling an atmosphere of monastic calmness before the first vessel arrives.
          </p>
<div className="grid grid-cols-2 gap-space-md pt-space-xs bg-surface-container-low p-space-md">
<div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Materiality</span>
<span className="font-body-sm text-body-sm text-on-surface">Sun-baked Pakpattan terracotta &amp; hand-beaten brass</span>
</div>
<div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Illumination</span>
<span className="font-body-sm text-body-sm text-on-surface">Natural filtered dusk &amp; pure raw beeswax candle taper</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  PILLAR II: THE SACRED TABLE (THE DASTARKHWAN)  */}
<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Narrative Column (Left Side this time)  */}
<div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="font-headline-sm text-headline-sm text-secondary">02</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">/ Communal Feast</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
            THE SACRED TABLE: THE DASTARKHWAN
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light mb-space-md leading-relaxed">
            The Dastarkhwan is not mere furniture—it is an ancient covenant of communal abundance. Thick, tactile hand-woven khaddar runners spun on wooden looms in Multan anchor the table.
          </p>
<p className="font-body-md text-body-md text-outline font-light mb-space-lg">
            Heavy cast bronze degchis and unglazed Multani clay vessels rest side-by-side, carefully engineered to hold the lingering heat of hardwood embers through unhurried hours of conversation and shared marrow.
          </p>
{/*  Editorial Specs list with subtle styling  */}
<div className="space-y-space-sm">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">diamond</span>
<div>
<h3 className="font-body-md text-body-md font-semibold text-on-surface">Artisanal Khaddar Linens</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Unbleached natural cotton weave that softens acoustics and embraces every warm vessel.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">diamond</span>
<div>
<h3 className="font-body-md text-body-md font-semibold text-on-surface">Thermal Bronze &amp; Terracotta</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Custom cast hand-hammered kansa metal keeps slow-braised salans steaming until the final morsel.</p>
</div>
</div>
</div>
</div>
{/*  Image Spread Right Side  */}
<div className="lg:col-span-7 order-1 lg:order-2">
<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-surface-container shadow-lg">
<img alt="The Sacred Table at Junoon" className="w-full h-full object-cover" data-alt="Rich editorial overhead angle of an opulent rustic Pakistani Dastarkhwan at Junoon, hand-woven textured khaddar runner, heavy antique cast bronze bowls containing deep mahogany lamb shank nihari, smoldering clay pots, saffron rice garnished with gold leaf and slivered almonds, raw unpolished brass cutlery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcgAfpR9HeWJBCsx7SVg_RGVeZjSRW1Hxsr7EJwe1ut22cADmV3ACF3Nz6L9o_iZWrKfM-zZQEgSzvYdBCeRn38C8I3kCSpAoIK5GKDaShx_6tsqP1TZGErM6ZxfQ2LUMRWtb6b6R_CGaWGXZPl04J_CB1u0t-WynNfn3SlNeg6BvzfrPuY2sb5dyMNts4SSKqKWQwlAnFZLV0khaLgJZT0JfNrHPBt40CDt3k1w"/>
</div>
</div>
</div>
</div>
</section>
{/*  PILLAR III: THE LIVING FLAME THEATRE (Full Dark Immersive Interlude)  */}
<section className="w-full py-space-xl bg-tertiary text-on-tertiary relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-lg">
<div className="max-w-2xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="font-headline-sm text-headline-sm text-secondary-fixed">03</span>
<span className="font-caption-folio text-caption-folio text-outline-variant uppercase tracking-[0.28em]">/ The Culinary Forge</span>
</div>
<h2 className="font-display-xl text-headline-lg lg:text-display-xl text-on-tertiary tracking-tight leading-none">
            THE LIVING FLAME THEATRE
          </h2>
</div>
<p className="font-body-md text-body-md text-outline-variant max-w-md mt-4 lg:mt-0 font-light">
          No stainless steel barriers. Guests dine with direct sightlines into our blazing hearth where babool timber collapses into white-hot ember beds.
        </p>
</div>
{/*  Asymmetric Flame Collage Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
<div className="md:col-span-8 overflow-hidden relative min-h-[380px] lg:min-h-[500px]">
<img alt="Open Hearth Karahi Cooking" className="w-full h-full object-cover brightness-95" data-alt="Intense high contrast photography of Pakistani open hearth kitchen at Junoon, master chef tossing iron karahi over roaring orange and gold charcoal embers, sparks flying upward, smoke rising against dark terracotta tiles, dramatic chiaroscuro kitchen theater in Gulberg Lahore." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdYxz0a5_NRhFRzu04dk9ITFR8JyedWmVzzHa22-I3qPHfdaVYuE6b5a-nhn6a1aQj08EgHJ-SCq39hzIcF-bBAyHNS5JyDZE5XxFTVXIaa0lSWHKPbtTZjgNHwLeRVCEhjwZMiEgGhpqb3kEp6IVcU_dMJnKuD8AXWPSzHKljdeq6-oh6qh_zkKyj9HVMBlqlWbpNetXb0aw0rCTu06kqTBXEanjQJOKImEL9q4E"/>
<div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-primary/95 to-transparent flex flex-col justify-end">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">The Wok &amp; Hearth</span>
<p className="font-body-md text-body-md text-on-primary font-light">Iron Karahis forged by artisans in Gujranwala, tossed over wild babool charcoal fires reaching 800 degrees.</p>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-between gap-gutter">
<div className="overflow-hidden relative h-[240px] lg:h-[260px]">
<img alt="Clay Tandoor Pit" className="w-full h-full object-cover" data-alt="Extreme close-up of a subterranean clay tandoor pit, white heat radiating, master baker slapping fluffy sesame seed rogheni naan against scorching clay walls, billowing wood smoke, cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1odsmsEMAHEFW5leN5vu0dUoAeuhZ1grcT8dECdPXf8PeSDEe8gF1dZ8IO74fO9eNW0V0dUDYI0-DWit70b_PFIog2_o2Tomqj70P6Q34RxyLZm0ir6DIO_YQgWBKroxdMd5cSI8TCpt6PgA6ezhkyotbY95I1ic57axX5kYHH9DBzZ5tprySUa-7o1H6Pt8GjcZohWVHBaOs8UjEnn3ylltXnjkwLBaeP6d5_v4"/>
<div className="absolute bottom-0 inset-x-0 p-space-sm bg-gradient-to-t from-primary/90 to-transparent">
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.22em]">The Subterranean Tandoor</span>
</div>
</div>
<div className="p-space-md bg-primary-container text-on-primary flex flex-col justify-center">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] mb-1">Aroma Profile</span>
<h3 className="font-title-editorial text-title-editorial text-surface-bright mb-2">Wild Mountain Babool</h3>
<p className="font-body-sm text-body-sm text-outline-variant font-light">
              We exclusively burn cured Acacia Nilotica wood harvested sustainably from the Cholistan edge, imparting an unmistakable nutty incense into all skewered meats and breads.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  PILLAR IV: THE RITUAL OF SERVICE  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Visual Column  */}
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container shadow-lg">
<img alt="Pakistani Mehmaan-Nawazi Rosewater Hand-Washing Ritual" className="w-full h-full object-cover" data-alt="Intimate hospitality ritual at Junoon Lahore, elegant server dressed in raw beige silk kurta pouring warm rosewater scented infusion from an ornate tall antique copper surahi vessel over a guest's hands into an etched brass basin before dinner." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNc7VrkheZqR2Ja1Jr_LehOVDDurtpZiWhgngqIK5wVsCPXeIddP8ooDn8Y8PLs_sQPjBoqHIefw5yEoPMmz5xfLXxH0Y_ccHZ3WSbZpE2We5_5tB2iVtARzWgxBjfwakAiNiWmGYhmcS8jDeXNTIn-1kLYYD5N1GHqs5UEAJ7-NN3EfaouyUKzhGMQBH_ukk1NFk35IF9Ya6v7TCw-5qzjWLs7V9EsPjXQ1t6Ss"/>
</div>
{/*  Editorial Caption Foil  */}
<div className="mt-space-sm flex justify-between items-center text-outline font-caption-folio text-caption-folio uppercase tracking-[0.28em]">
<span>Ritual 01: Dast-Shui (Hand Ablution)</span>
<span>Gulberg Service Standard</span>
</div>
</div>
{/*  Narrative Column  */}
<div className="lg:col-span-6 lg:pl-space-md flex flex-col justify-center">
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="font-headline-sm text-headline-sm text-secondary">04</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">/ Mehmaan-Nawazi</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
            THE RITUAL OF SERVICE
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light mb-space-md leading-relaxed">
            In Pakistani tradition, the guest is an emissary of divine grace. At Junoon, hospitality is neither rigid European stiffness nor performative cheer; it is an intuitive, quiet choreographing of your comfort.
          </p>
<p className="font-body-md text-body-md text-outline font-light mb-space-lg">
            Before dining commences, warm rosewater is poured over patron hands from an antique copper <em className="font-serif">surahi</em> into a shallow brass chilamchi. Servers speak of spice regions like storytellers, unhurriedly navigating heat thresholds and vintage cordial pairings.
          </p>
<div className="space-y-space-sm">
<div className="p-space-sm bg-surface-container flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface font-medium">Anticipatory Presence</span>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Silent Grace</span>
</div>
<div className="p-space-sm bg-surface-container flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface font-medium">Spice Sommelier Consultation</span>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Bespoke Profiles</span>
</div>
<div className="p-space-sm bg-surface-container flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface font-medium">Post-Prandial Kahwa Cart</span>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Peshawari Green &amp; Saffron</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  PILLAR V: THE SOUND & ATMOSPHERE  */}
<section className="w-full py-space-xl bg-surface-container-high">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Text First  */}
<div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="font-headline-sm text-headline-sm text-secondary">05</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">/ The Acoustic Room</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-md">
            THE SOUND &amp; ATMOSPHERE
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light mb-space-md leading-relaxed">
            The acoustic climate of Junoon is calibrated like a musical instrument. The thick vaulted brick and heavy textiles swallow harsh resonance, leaving an intimate cocoon where whispers carry naturally.
          </p>
<p className="font-body-md text-body-md text-outline font-light mb-space-lg">
            Through the air drifts the soft cadence of live classical sitar and ambient North Indian ragas composed specifically for dinner hours—subtle, hypnotic, punctuated only by the occasional crackle of dry hardwood and the soft clink of brass spoons.
          </p>
{/*  Audio Mood Visualizer Graphic Component  */}
<div className="bg-surface p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.22em]">Evening Soundscape</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">Raag Yaman • 72 BPM</span>
</div>
{/*  Minimalist audio waves SVG  */}
<div className="flex items-center gap-1.5 h-12 py-2">
<div className="w-1 bg-secondary h-4 animate-pulse"></div>
<div className="w-1 bg-secondary h-8 animate-pulse" style={{ "animationDelay": "150ms" }}></div>
<div className="w-1 bg-secondary h-6 animate-pulse" style={{ "animationDelay": "300ms" }}></div>
<div className="w-1 bg-secondary h-10 animate-pulse" style={{ "animationDelay": "450ms" }}></div>
<div className="w-1 bg-secondary h-7 animate-pulse" style={{ "animationDelay": "200ms" }}></div>
<div className="w-1 bg-secondary h-3 animate-pulse" style={{ "animationDelay": "600ms" }}></div>
<div className="w-1 bg-secondary h-9 animate-pulse" style={{ "animationDelay": "350ms" }}></div>
<div className="w-1 bg-secondary h-5 animate-pulse" style={{ "animationDelay": "500ms" }}></div>
<div className="w-1 bg-secondary h-8 animate-pulse" style={{ "animationDelay": "100ms" }}></div>
<div className="w-1 bg-secondary h-4 animate-pulse" style={{ "animationDelay": "400ms" }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1">
              &ldquo;Music that does not demand listening, yet wraps around the mind like cool silk.&rdquo;
            </p>
</div>
</div>
{/*  Image Right  */}
<div className="lg:col-span-7 order-1 lg:order-2">
<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-surface shadow-lg">
<img alt="Live Ambient Classical Music at Junoon" className="w-full h-full object-cover" data-alt="Acoustic live sitar and tabla maestro performing softly in a shadowy arch niche of Junoon restaurant, warm amber side lighting illuminating instrument polished wood and mother-of-pearl inlay, diners sitting in soft focus in the foreground enjoying dinner." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOIi9WEf646Ql-usHjcPc-plqKOtM1K_46fAK9h0LkP86qFk9VTcSL4FTRLLznhcDwfMr-s6V54HgIgQMXGYb4Q8gSPdBWfnW8GtuQFZ9W7DVmMApK-tdFkVfyQpHg-IKST9jAWqTBiAUZCxkpDv0pFotWcLXMS8WBcNMg0rMmj9pE4X-icOPmC6MnTN_gvj57-RBjrwAsy8-xx_eZIohL53tLb6k2pfm6GM_8JYM"/>
</div>
</div>
</div>
</div>
</section>
{/*  3. THE ATMOSPHERE SPREAD (Asymmetric Collage of Sanctuaries)  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
{/*  Section Header  */}
<div className="text-center max-w-3xl mx-auto mb-space-xl">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-space-xs">
          Visual Cartography
        </span>
<h2 className="font-display-xl text-headline-lg lg:text-display-xl text-on-surface tracking-tight mb-space-sm">
          ROOMS OF CONTEMPLATION
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
          From open-air brick courtyards sheltered under centuries-old jacarandas to cloistered private dining chambers carved with walnut woodwork.
        </p>
</div>
{/*  Editorial Mosaic Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
{/*  Large Left Feature  */}
<div className="md:col-span-7 flex flex-col space-y-space-md">
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container shadow-md group">
<img alt="Private Alcove Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Intimate dining alcove at Junoon with high ceilings, private booth enclosed by intricately carved dark Sheesham wood screens, candle flames flickering in amber glass jars, plush hand-loomed cushions in deep rust and turmeric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk2bgYHC5M8qo5rTrSwHrtVwRxXYCr1-0xESImktLRp4oKyIfrmQM-NEMKyH4xh2nv_-iKjA_8Ks7y_zW2k-O77DePyk4w4Yw25BfVdg6_C7dZjzGWrDhdTa6MoJlS0u83t3K1Q_qX_n9Jap3MUjEYWreG15G43FT5Q_KfjcNAaV6y50lpyNYKeK-08WunO_PsgpQYs-MYItadwmzrCZtyPafzflJgyM7zTiRtnkM"/>
<div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.22em]">The Khas Pavilion</span>
<p className="font-body-sm text-body-sm text-surface-dim">Private sequestered alcove for up to ten patrons, attended by dedicated butler service.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="relative overflow-hidden aspect-square bg-surface-container shadow-md group">
<img alt="Brass Goblets and Botanical Elixirs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up shot of antique beaten brass goblets filled with freshly poured saffron rooh afza cooler, garnished with edible silver vark and rose petals on dark polished stone table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjq8nhVZ8McIdDgP1fYNgisNCEwMUK01XP0KFxw1P_mTRRaC5mdnPxIY11J2IdnggciykBFJDTs6ZX48DWw1piU8CpgJ4RokMizRN4PFpmJfFwSNYuQIDm-gGNqJGXuGq7Ty2M4DC2t5_IAfejq1q7B4pL8uzvWYB_rPfpUb3hmFeKR0ZKLEUhrpaCkY-xHJ81qzktGr_uG5T8M4uVl4wqaESwh9QGTvam1qIpRF4"/>
<div className="absolute bottom-0 inset-x-0 p-space-sm bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Botanical Elixirs</span>
</div>
</div>
<div className="relative overflow-hidden aspect-square bg-surface-container shadow-md group">
<img alt="Table-side Sigri Embers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Charcoal embers glowing in a hand-crafted earthen sigri burner at table side, gentle blue and orange heat, soft focus background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMKbfK3Zkq08CtgFhmt2EKyM6neC6PFESWhdomJ9tcNdM8_SH91WRgJsN272ejib2JiiQ92AmZXYAy1NRyz7qgLDIi1yjgk4XiZMP8M02hJel-1XbdyBmFzpJaodVaLqni9BZodS0FsC7OqVOB_7LRLavZ0uwz5bHhrsjco_q3B5cFlUC7GtwDRycjjlns0vfc_tTUW-deruMoTwv6pj8nPehT0I66cDBmH8g6QuQ"/>
<div className="absolute bottom-0 inset-x-0 p-space-sm bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Table-side Sigri</span>
</div>
</div>
</div>
</div>
{/*  Asymmetric Right Feature (Taller offset)  */}
<div className="md:col-span-5 flex flex-col space-y-space-md md:-mt-8">
<div className="relative overflow-hidden aspect-[3/4] bg-surface-container shadow-md group">
<img alt="The Courtyard Under Lahore Stars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Open air courtyard dining at Junoon at twilight under Lahore night sky, ancient jacaranda trees hung with soft filament glass globes, hand-troweled terracotta tiled floor, couples conversing at quiet candlelit tables, luxurious serene mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7zZQl4BM3r6pU1f2BQpWV2eIAgyivzSc3XeacIa6HJw2oqw8D5sDCImKTWtw9Or9ofmfYhlspzM9BHOepsCXS0nT16aCDkCFAA9zwxnfys857uQA5RxnyGfx6j-WjsTGfCc7YpibZdlzs4AMppKy5NwBl3wLMGKRdxmZSkZ6p96x1OJ8q4-Z89qKTOa4VXHyWkIk4r6f4vGPDOAENmKZGmfjwhuXqS_YNJlJCWs"/>
<div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-primary/85 to-transparent text-on-primary">
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.22em]">The Sahn Courtyard</span>
<p className="font-body-sm text-body-sm text-surface-dim">Open-air communion beneath Gulberg’s jacaranda canopy and nocturnal breeze.</p>
</div>
</div>
{/*  Editorial Micro Story Card  */}
<div className="p-space-md bg-surface-container-low">
<div className="flex items-center gap-space-xs text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]">bedtime</span>
<span className="font-caption-folio text-caption-folio uppercase tracking-[0.28em]">Twilight Transformation</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">The Nightfall Shift</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Precisely at 7:45 PM, electrical overhead lighting dim entirely across all chambers, yielding to over three hundred hand-poured candle tapers that burn until midnight.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  4. DRAMATIC TRANSITION & CALL TO ACTION (#17120F container)  */}
<section className="w-full bg-[#17120F] text-on-primary py-space-xl relative overflow-hidden">
{/*  Subtle architectural arched silhouette SVG background  */}
<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<svg className="w-full max-w-4xl h-full" fill="none" stroke="currentColor" viewBox="0 0 800 600">
<path d="M 200,600 V 300 C 200,190 290,100 400,100 C 510,100 600,190 600,300 V 600" stroke-dasharray="4 6" strokeWidth="1.5"></path>
<path d="M 280,600 V 320 C 280,250 334,190 400,190 C 466,190 520,250 520,320 V 600" strokeWidth="1"></path>
</svg>
</div>
<div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center">
<div className="inline-flex items-center gap-space-xs mb-space-sm">
<span className="w-6 h-[1px] bg-secondary-fixed"></span>
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">
          An Invitation to Gulberg
        </span>
<span className="w-6 h-[1px] bg-secondary-fixed"></span>
</div>
<h2 className="font-display-xl text-headline-lg lg:text-display-xl text-on-primary tracking-tight leading-tight mb-space-md">
        COME EXPERIENCE JUNOON
      </h2>
<p className="font-headline-sm text-title-editorial text-secondary-fixed max-w-2xl font-light mb-space-lg">
        Your table in Gulberg awaits. Come hungry, leave transformed.
      </p>
{/*  Action Cluster  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-md">
<a className="w-full sm:w-auto h-[54px] px-space-xl bg-secondary-container text-on-secondary-container font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed shadow-md" href="/reservations">
          Reserve Your Table
        </a>
<a className="w-full sm:w-auto h-[54px] px-space-md bg-transparent text-secondary-fixed hover:text-surface-bright font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase flex items-center justify-center transition-colors group" href="/private-dining">
<span>Explore Private Dining</span>
<span className="material-symbols-outlined text-[18px] ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
{/*  Ancillary Booking Guidance  */}
<div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-center gap-space-md text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.28em]">
<span>Seating by Prior Engagement</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Valet Service on Main Boulevard</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Dress Code: Modest Elegance</span>
</div>
</div>
</section>
</div></main>
    </>
  );
}

