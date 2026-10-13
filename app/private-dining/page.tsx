import Link from 'next/link';

export default function PrivateDiningPage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  1. HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-primary text-on-primary">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-45 scale-105 transform duration-1000 ease-out" data-alt="An opulent private communal dastarkhwan dining banquet inside a grand Lahore heritage room. Guests in refined attire are seated around a low ceremonial feast adorned with hammered brass platters, saffron rice, and slow-roasted meats, bathed in dramatic amber chandelier glow, chiaroscuro candlelight, and fragrant rose petal garlands." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtuoXZDvG6xeNc-5HV-ermT0MTer_XFWEphKVSxD3BzdrpT3_CM-tmJYK8-URfhT_PssywHZsgiPD9nTVljqshPluH6sLlpgb5Sy2aMG5zcCnSRdUIr62Da9JogSEM-GX9vhIaz60VrcyNbfSE20cdinpOSxx5WAE3YDPy39wthDQTgzS51cjBsGHLLSyhimornlwQvYA2oIZddWV3XgaVzyzZKUtkwvWkC1XvT5o')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30"></div>
</div>
<div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl lg:pt-32 lg:pb-36 flex flex-col justify-end min-h-[768px]">
<div className="flex items-center gap-space-sm mb-space-sm">
<span className="inline-block w-8 h-[1px] bg-secondary-fixed"></span>
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed tracking-[0.3em] uppercase">Private Banquets &amp; Communes</span>
</div>
<div className="max-w-4xl space-y-space-md">
<h1 className="font-display-xl text-display-xl text-on-primary tracking-tight leading-none uppercase drop-shadow-sm">
          Make It A <br/>
<span className="italic font-normal text-secondary-fixed">Junoon</span> Moment
        </h1>
<p className="font-body-lg text-body-lg text-outline-variant max-w-2xl leading-relaxed">
          Intimate chambers, bespoke menus, and dedicated culinary hospitality for occasions that deserve grandeur. Step beyond the veil into Lahore’s most sensory sanctum.
        </p>
</div>
<div className="pt-space-lg flex flex-wrap items-center gap-space-md">
<a className="h-[52px] px-space-lg bg-secondary text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed shadow-md" href="#enquiry-form">
          Plan Your Gathering
        </a>
<a className="h-[52px] px-space-md bg-transparent text-secondary-fixed font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase flex items-center gap-space-xs transition-colors hover:text-on-primary" href="#sanctuaries">
<span>Explore Chambers</span>
<span className="material-symbols-outlined text-[18px]">south</span>
</a>
</div>
</div>
</section>
{/*  STATS / TACTILE MARQUEE STRIP  */}
<section className="w-full bg-tertiary text-secondary-fixed py-space-md">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center lg:text-left">
<div className="space-y-1">
<p className="font-headline-sm text-headline-sm text-secondary-fixed">04</p>
<p className="font-caption-folio text-caption-folio text-outline-variant uppercase">Distinct Private Chambers</p>
</div>
<div className="space-y-1">
<p className="font-headline-sm text-headline-sm text-secondary-fixed">12 to 120</p>
<p className="font-caption-folio text-caption-folio text-outline-variant uppercase">Seated Feast Capacity</p>
</div>
<div className="space-y-1">
<p className="font-headline-sm text-headline-sm text-secondary-fixed">100% Halal</p>
<p className="font-caption-folio text-caption-folio text-outline-variant uppercase">Heritage Mughal Sourcing</p>
</div>
<div className="space-y-1">
<p className="font-headline-sm text-headline-sm text-secondary-fixed">Dedicated</p>
<p className="font-caption-folio text-caption-folio text-outline-variant uppercase">Sommelier &amp; Butler Team</p>
</div>
</div>
</section>
{/*  2. PRIVATE DINING SPACES & SANCTUARIES  */}
<section className="w-full bg-surface py-space-xl" id="sanctuaries">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div className="max-w-xl space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.3em]">Architectural Havens</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight uppercase">
            Private Sanctuaries
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Each enclave is tailored to honor the time-honored rituals of hospitality, framed by reclaimed brickwork, hand-beaten brass screens, and acoustic serenity.
        </p>
</div>
{/*  Spaces Mosaic  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Sanctuary 1: Shahi Dastarkhwan (Full width visual feature)  */}
<div className="lg:col-span-7 bg-surface-container-low flex flex-col justify-between overflow-hidden group shadow-sm">
<div className="relative h-[340px] lg:h-[420px] w-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Exquisite Mughal low-seating chamber with hand-knotted crimson silk carpets, plush embroidered bolster pillows in deep saffron and olive, warm brass lantern reflections, and a long low dark-timber table set with antique gold water ewers and floral runners." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRR45CqGS5Rwi9Ry3cDkxBlJIjpJjidWiTDaI9n8OcyZDx-ZPqTH8BeP8fBxSPRGiNISdobV7n-E4r774xOSZ84pA9lZZRtmOHTvSbGdjHZIl3Q3_q9nns2XODJRN9eANEXkaGAYlYFQvgfj21y_UgHVstpYOiuyXdqrzDWeM1n3efgfpgkjQEpC88umLIflKuXtzUMHO6fWhU5jzI4m9dUWMjcGrQnp9qZT76Er4')" }}></div>
<div className="absolute top-space-md left-space-md bg-primary/85 backdrop-blur-md px-space-sm py-space-xs text-secondary-fixed font-caption-folio text-caption-folio uppercase tracking-[0.25em]">
              Sanctuary I
            </div>
</div>
<div className="p-space-lg space-y-space-md">
<div className="flex items-baseline justify-between flex-wrap gap-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">The Shahi Dastarkhwan Chamber</h3>
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">Up to 16 Guests</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Traditional low-seating with plush hand-stitched bolster cushions, genuine antique Lahore carpets, and ceremonial table service. Designed for profound conversation, celebratory family reunions, and deep gastronomic communion.
            </p>
<div className="pt-space-xs flex items-center gap-space-md text-caption-folio text-caption-folio uppercase text-outline tracking-[0.2em]">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">workspace_premium</span> Ceremonial Service</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">chair</span> Low Silk Seating</span>
</div>
</div>
</div>
{/*  Sanctuary 2: Vaulted Terrace  */}
<div className="lg:col-span-5 bg-surface-container flex flex-col justify-between overflow-hidden group shadow-sm">
<div className="relative h-[260px] lg:h-[320px] w-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A semi-private evening outdoor terrace with exposed terracotta arches, fragrant white jasmine vines climbing antique trellises, gentle open fire pits casting warm flickering light, and intimate dining tables under starry Lahore sky." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVqb20k9uWrOUaIsn-2tMCzo5t_ZigW6SU3u1uZLb4mvk7bPos9vDUp1WI2AvzZcdRgkHLvSlKT_EhN5kEVCQ-xj_uZ9VExx8ieiavPJqs3scpG-xCVpbZNrtpe6WWbJI7uoYpuvLCNzChHIhL6Xr1-8_a0zoQkGsUKUt3Cpr3mKkT78x3Fs5yZvvZ4wCBMGIEVDmxE0jeiglbY4lKhNMOShwuK-kvmL0vBbMtmQk')" }}></div>
<div className="absolute top-space-md left-space-md bg-primary/85 backdrop-blur-md px-space-sm py-space-xs text-secondary-fixed font-caption-folio text-caption-folio uppercase tracking-[0.25em]">
              Sanctuary II
            </div>
</div>
<div className="p-space-lg space-y-space-md">
<div className="flex items-baseline justify-between flex-wrap gap-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">The Vaulted Terrace</h3>
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">Up to 40 Guests</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A secluded al fresco alcove framed by vaulted terracotta arches, overlooking fragrant jasmine courtyards with ambient open fire pits and gentle night breezes.
            </p>
<div className="pt-space-xs flex items-center gap-space-md text-caption-folio text-caption-folio uppercase text-outline tracking-[0.2em]">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">local_fire_department</span> Babool Fire Pits</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">yard</span> Jasmine Court</span>
</div>
</div>
</div>
{/*  Sanctuary 3: Royal Boardroom  */}
<div className="lg:col-span-5 bg-surface-container flex flex-col justify-between overflow-hidden group shadow-sm">
<div className="relative h-[260px] lg:h-[320px] w-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="An executive boardroom dining hall featuring a twenty-foot dark walnut banquet table with inlaid warm brass lines, upholstered leather high-back armchairs, subtle concealed AV displays, and warm overhead bronze dome pendant lamps." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-BpPjHIxAhNzINcHmxssHFYgXjBDxi344cg36oA-hpjocR-tnwOMjX9_NJJCTFB3aRv-Pi9uwaTjYQBOpbYuIC4vzB22dcmktW73dckoDa6rNUKkd39IcT7bS5w2G2Tj05ZKWk86z8uNHB34sXKmPyvEtmnIStZI01XeYNBvF8jZ-PT57gECKwga0Lu_iXxrQmEyuFS9XZFwXcqBVbXZWuxRC0p9ixIM5wBZsrUg')" }}></div>
<div className="absolute top-space-md left-space-md bg-primary/85 backdrop-blur-md px-space-sm py-space-xs text-secondary-fixed font-caption-folio text-caption-folio uppercase tracking-[0.25em]">
              Sanctuary III
            </div>
</div>
<div className="p-space-lg space-y-space-md">
<div className="flex items-baseline justify-between flex-wrap gap-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">The Royal Boardroom</h3>
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">Up to 24 Guests</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Monolithic dark timber table embellished with delicate brass inlays. Equipped with discreet acoustic insulation, hidden high-definition audiovisual capabilities, and tailored tasting flights.
            </p>
<div className="pt-space-xs flex items-center gap-space-md text-caption-folio text-caption-folio uppercase text-outline tracking-[0.2em]">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">tv</span> Concealed AV</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">lock</span> Private Attendant</span>
</div>
</div>
</div>
{/*  Sanctuary 4: Full Sanctuary Takeover  */}
<div className="lg:col-span-7 bg-surface-container-high flex flex-col justify-between overflow-hidden group shadow-sm">
<div className="relative h-[340px] lg:h-[420px] w-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Grand full interior view of JUNOON Lahore restaurant lit up for an exclusive gala dinner. Over 100 distinguished diners filling the expansive main hall under dramatic high ceilings, warm amber downlights, sculpted archways, and vibrant culinary theater." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBonTioah_pbiRwphFY2n6Le7R4xCcS-bDuwYnzrVk8uuxcTtNMrzBHhowc6TkyV1Cc6D6oHCzqT2PiOhud3WlKodFhERfCQAczZ27yZU_4tVy-PUCmw4NuuA-MdiYSl83jnoWrgixxTYhamKJlTePMTXQFXsqnSXyZbTOcqNbi-MGgFQ2k4i6GQaSQgihQ_Hg1mgIFT4nTDcsy2VR7LaHgz6bIyNqJNzwRbUaTaXQ')" }}></div>
<div className="absolute top-space-md left-space-md bg-primary/85 backdrop-blur-md px-space-sm py-space-xs text-secondary-fixed font-caption-folio text-caption-folio uppercase tracking-[0.25em]">
              Sanctuary IV • Exclusive
            </div>
</div>
<div className="p-space-lg space-y-space-md">
<div className="flex items-baseline justify-between flex-wrap gap-space-xs">
<h3 className="font-headline-md text-headline-md text-on-surface">Full Restaurant Sanctuary</h3>
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">Up to 120 Guests</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Complete exclusive hire of JUNOON Gulberg for bespoke wedding receptions, milestone anniversaries, and high-profile diplomatic summits. Unbridled access to all dining halls, courtyard patios, and theatrical open kitchens.
            </p>
<div className="pt-space-xs flex items-center gap-space-md text-caption-folio text-caption-folio uppercase text-outline tracking-[0.2em]">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">star</span> Private Valet</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">celebration</span> Full Venue Exclusivity</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  3. CURATED EVENT EXPERIENCES  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="text-center max-w-3xl mx-auto mb-space-xl space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.3em]">Theatrical Gastronomy</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight uppercase">
          Curated Culinary Experiences
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Immersive culinary rituals crafted exclusively for your private soiree, elevating each course into interactive performance art.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Experience 1  */}
<div className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm">
<div className="space-y-space-sm">
<div className="w-12 h-12 bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">restaurant_menu</span>
</div>
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary tracking-[0.2em] uppercase">Signature Degustation</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chef’s Dastarkhwan Tasting</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A bespoke seven-to-nine course procession of ancient recipes reimagined. Dishes arrive simultaneously on monumental antique copper platters, paired with cold-pressed botanical nectars and Kashmiri teas.
            </p>
</div>
<div className="pt-space-sm">
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Custom Menu Creation Included</span>
</div>
</div>
{/*  Experience 2  */}
<div className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm">
<div className="space-y-space-sm">
<div className="w-12 h-12 bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">outdoor_grill</span>
</div>
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary tracking-[0.2em] uppercase">Sensory Theater</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Live Tandoor &amp; Karahi Theatre</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Master ustaads flame-sear marinated ribeye kababs and braise wild quails in smoking black iron karahis right at the edge of your dining salon. An intoxicating aroma of babool wood and whole spice.
            </p>
</div>
<div className="pt-space-sm">
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Interactive Chef Interaction</span>
</div>
</div>
{/*  Experience 3  */}
<div className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm">
<div className="space-y-space-sm">
<div className="w-12 h-12 bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">local_florist</span>
</div>
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary tracking-[0.2em] uppercase">Bespoke Curation</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Floral &amp; Calligraphy Styling</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Hand-lettered Persian Nastaliq calligraphy place-markers on handmade deckle-edge paper, paired with fresh tuberoses, jasmine buds, and heirloom brass candlestick installations.
            </p>
</div>
<div className="pt-space-sm">
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Artisanal Table Decor</span>
</div>
</div>
</div>
</div>
</section>
{/*  4. LUXURY EVENT ENQUIRY FORM & 5. CONCIERGE DIRECT CONTACT  */}
<section className="w-full bg-surface-container py-space-xl" id="enquiry-form">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left: Concierge Direct Contact & Editorial Context  */}
<div className="lg:col-span-5 space-y-space-lg">
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.3em]">Consultation</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight uppercase">
              Curate Your Gathering
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
              Every gathering at JUNOON is treated as an original culinary commission. Please share your vision, and our Director of Private Banqueting will curate an uncompromising experience.
            </p>
</div>
{/*  Concierge Card (No borders, pure background stepping)  */}
<div className="bg-surface p-space-lg space-y-space-md shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">support_agent</span>
</div>
<div>
<h4 className="font-title-editorial text-title-editorial text-on-surface">Malik Junaid Qureshi</h4>
<p className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em]">Director of Private Dining &amp; Protocol</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              &ldquo;We take joy in crafting menus that honor your family or institutional legacy. For urgent banquet engagements within 48 hours, please reach me directly.&rdquo;
            </p>
<div className="space-y-space-xs pt-space-xs">
<div className="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]">phone_in_talk</span>
<span className="font-medium">+92 42 3578 9205</span>
<span className="text-caption-folio text-caption-folio text-outline uppercase">(Direct Line)</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
<span className="font-medium">banquets@junoon-lahore.com</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
<span className="text-on-surface-variant">Concierge Desk: Daily 11:00 AM – 10:00 PM</span>
</div>
</div>
</div>
{/*  Editorial Quote  */}
<div className="p-space-md bg-surface-container-high space-y-2">
<p className="font-title-editorial text-title-editorial italic text-on-surface">
              “The true spirit of a Dastarkhwan is not mere eating; it is an unhurried surrender to kinship and fragrance.”
            </p>
<p className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.25em]">JUNOON Gastronomic Manifesto</p>
</div>
</div>
{/*  Right: Luxury Minimalist Form  */}
<div className="lg:col-span-7 bg-surface p-space-lg lg:p-space-xl shadow-md">
<form className="space-y-space-lg" id="privateEventForm" >
{/*  Row 1: Name & Organization  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="fullName">Guest Name *</label>
<input className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="fullName" placeholder="e.g. Begum Shireen Tariq" required type="text"/>
</div>
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="orgName">Organization / Family Office (Optional)</label>
<input className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="orgName" placeholder="e.g. Packages Group / Tariq Family" type="text"/>
</div>
</div>
{/*  Row 2: Phone & Email  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="phone">Phone Number *</label>
<input className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="phone" placeholder="+92 300 0000000" required type="tel"/>
</div>
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="email">Email Address *</label>
<input className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="email" placeholder="patron@domain.com" required type="email"/>
</div>
</div>
{/*  Row 3: Event Type & Guest Count  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="eventType">Event Classification *</label>
<select className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors appearance-none cursor-pointer" id="eventType" required>
<option disabled  value="">Select event category</option>
<option value="family">Family Celebration &amp; Feast</option>
<option value="corporate">Corporate Gala &amp; Executive Dinner</option>
<option value="birthday">Milestone Birthday / Anniversary</option>
<option value="wedding">Wedding Reception / Valima</option>
<option value="diplomatic">Diplomatic Gathering / State Dinner</option>
</select>
</div>
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="guestCount">Estimated Guests *</label>
<select className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors appearance-none cursor-pointer" id="guestCount" required>
<option disabled  value="">Select party size</option>
<option value="8-16">8 to 16 Guests (Shahi Chamber)</option>
<option value="17-24">17 to 24 Guests (Royal Boardroom)</option>
<option value="25-40">25 to 40 Guests (The Vaulted Terrace)</option>
<option value="41-120">41 to 120 Guests (Full Sanctuary Takeover)</option>
</select>
</div>
</div>
{/*  Row 4: Preferred Date & Time  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="eventDate">Preferred Date *</label>
<input className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="eventDate" required type="date"/>
</div>
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="eventTime">Service Slot *</label>
<select className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors appearance-none cursor-pointer" id="eventTime" required>
<option disabled  value="">Select seating window</option>
<option value="lunch">Lunch Banquet (1:00 PM – 4:00 PM)</option>
<option value="dinner-early">Early Evening Dinner (7:00 PM – 9:30 PM)</option>
<option value="dinner-late">Imperial Late Night (10:00 PM – 1:00 AM)</option>
<option value="full-night">Full Evening Buyout</option>
</select>
</div>
</div>
{/*  Preferred Space  */}
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="preferredSpace">Preferred Sanctuary Format</label>
<select className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors appearance-none cursor-pointer" id="preferredSpace">
<option value="open">Chef’s Recommendation based on guest count</option>
<option value="shahi">The Shahi Dastarkhwan Chamber (Low seating)</option>
<option value="terrace">The Vaulted Terrace (Open-air jasmine alcove)</option>
<option value="boardroom">The Royal Boardroom (Timber &amp; brass long table)</option>
<option value="full">Full Restaurant Sanctuary Exclusive</option>
</select>
</div>
{/*  Dietary & Bespoke Notes  */}
<div className="relative flex flex-col space-y-1">
<label className="font-label-uppercase text-label-uppercase text-on-surface-variant uppercase tracking-[0.2em]" htmlFor="notes">Bespoke Requests &amp; Dietary Preferences</label>
<textarea className="w-full bg-surface-container-low px-space-sm py-3 text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors resize-none" id="notes" placeholder="Mention guest dietary needs, celebratory milestones, musical/calligraphy styling requests, or specialized menu highlights..." rows={4}></textarea>
</div>
{/*  Submit Button  */}
<div className="pt-space-sm">
<button className="w-full h-[54px] bg-primary-container text-on-primary hover:bg-tertiary-container hover:text-secondary-fixed transition-colors font-label-uppercase text-label-uppercase tracking-[0.25em] uppercase flex items-center justify-center gap-space-sm shadow-md" type="submit">
<span>Plan Your Private Event</span>
<span className="material-symbols-outlined text-[18px]">east</span>
</button>
<p className="font-caption-folio text-caption-folio text-outline text-center mt-space-sm tracking-[0.2em] uppercase">
                Our Banqueting Concierge responds within 24 hours of submission
              </p>
</div>
</form>
</div>
</div>
</div>
</section>
{/*  CONFIRMATION MODAL  */}
<div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-md flex items-center justify-center p-space-md hidden" id="formSuccessModal">
<div className="bg-surface max-w-lg w-full p-space-xl space-y-space-md shadow-2xl relative text-center">
<div className="w-16 h-16 mx-auto bg-secondary-fixed/40 text-secondary flex items-center justify-center rounded-full">
<span className="material-symbols-outlined text-[32px]">done_all</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface uppercase">Honored By Your Trust</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
        Your enquiry has been hand-delivered to Malik Junaid Qureshi, Director of Private Dining. We will reach out via telephone and email to curate your personalized tasting blueprint.
      </p>
<button className="h-[46px] px-space-lg bg-primary-container text-on-primary font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase hover:bg-secondary transition-colors"  type="button">
        Return to Experience
      </button>
</div>
</div>
</div></main>
    </>
  );
}
