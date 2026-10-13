import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  Hero Section  */}
<section className="relative w-full overflow-hidden bg-primary text-on-primary">
<div className="relative w-full min-h-[870px] lg:min-h-[942px] flex items-end">
{/*  Background Image with Scrim  */}
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" data-alt="An atmospheric, cinematic chiaroscuro photograph of elderly spice masters hand-grinding black cardamom pods and wild mountain cumin inside an ancient brick workshop in the Walled City of Lahore. Shafts of warm morning sunlight cut through smoky terracotta air, illuminating floating spice dust, hand-beaten brass mortars, and weathered hands seasoned with decades of culinary craft. Warm charcoal and antique gold aesthetic." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsHxdv36Z8OM2ayP3NutFYIe8XtBrmPpcDIvaguUJa_BApe1gUZGDveHTKXcKScETpo2kaHz_nmWlOAow__iEAT4IGOoCVG2iV0FUOkP3wxjU9rty1yV5jnjpkktC7efGT-DbijGZhWOJY1x-OgaulEEO-Nk6wEN4QwvMmnELgnC12JpKWrGDE5sYL6eokPocEyiNjauSOzeyxTtmdArg9Edrl1KUs-CMfY4_tYP4')" }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/40"></div>
{/*  Narrative Overlay  */}
<div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl pt-space-xl flex flex-col justify-end">
<div className="max-w-4xl space-y-space-md">
<div className="flex items-center gap-space-sm">
<span className="inline-block w-8 h-[1px] bg-secondary-fixed"></span>
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Chronicle &amp; Manifesto</span>
<span className="text-secondary-fixed/60 text-[10px] tracking-widest">•</span>
<span className="font-caption-folio text-caption-folio text-outline-variant uppercase tracking-[0.28em]">Lahore, Punjab</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-primary tracking-tight leading-[0.95] uppercase">
            Rooted in <br/>
<span className="italic font-normal text-secondary-fixed font-title-editorial">Pakistan.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-space-sm items-baseline">
<p className="md:col-span-7 font-headline-sm text-headline-sm text-surface-container-low font-normal leading-relaxed">
              Tradition on the plate. <br className="hidden sm:inline"/>
<span className="text-secondary-fixed-dim">Junoon</span> in the experience.
            </p>
<p className="md:col-span-5 font-body-md text-body-md text-outline-variant font-light">
              An unyielding refusal to let four centuries of Mughal fire craft, caravan caravan spices, and grandmothers’ quiet genius fade into culinary footnotes.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Atmospheric Prelude Strip  */}
<section className="w-full bg-surface-container-low py-space-lg text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-2 md:grid-cols-4 gap-gutter text-center md:text-left">
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Provenance</span>
<p className="font-headline-sm text-headline-sm text-primary">1584 — 2025</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Caravan routes to Gulberg</p>
</div>
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Fuel Source</span>
<p className="font-headline-sm text-headline-sm text-primary">Babool Wood</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Wild desert embers &amp; clay</p>
</div>
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Territory</span>
<p className="font-headline-sm text-headline-sm text-primary">Khyber to Sindh</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">5 provincial kitchen archives</p>
</div>
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Philosophy</span>
<p className="font-headline-sm text-headline-sm text-primary">Dastarkhwan</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sacred kinship at the hearth</p>
</div>
</div>
</section>
{/*  CHAPTER I: THE ROOTS  */}
<section className="w-full bg-surface py-space-xl text-on-surface overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Left: Image Composition  */}
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-xl">
<img alt="Archival heritage of Mughal culinary routes" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Archival aesthetic sepia-toned fine art photograph capturing raw textural fragments of hand-spun raw silk tapestries, antique brass spice measuring cups, and ancient handwritten Urdu calligraphy recipes on crumbling cotton paper. Warm diffused museum lighting casting gentle shadows, rich tones of sand, antique brass, and burnt umber." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERajsDJ2KfanwPeRvswvPbQfmMkKx4-tpVZyPo9c_QiCxSfmlMRX5B4E_NGBvTevXkK6kLmFQOv_3rgQ9PwSYTYvvoFvPEqTGwKpxQUlbBdBE6IUeqNGSuKbXbAdH3PCgIRUHfcf5O1XWKl3OhmByv6ALqUlt4j5mDbZfAsLlzy0meOT4LfqD4n9-FqEF0xqXs6lNTffwKgAu0kFWHsOOF5ghJIEk7n6WnB1ypAU"/>
</div>
{/*  Overlapping Micro Stamp  */}
<div className="hidden sm:block absolute -bottom-6 -right-6 bg-surface-container-high p-space-md shadow-lg max-w-[240px]">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Folio 01 / Archive</span>
<p className="font-title-editorial text-title-editorial text-primary leading-tight">The Imperial Kitchens of the Badshahi era.</p>
</div>
</div>
{/*  Right: Story Chapter  */}
<div className="lg:col-span-6 lg:pl-space-md space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-uppercase text-label-uppercase tracking-[0.25em]">Chapter I</span>
<span className="h-px w-12 bg-secondary/40"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The Roots</h2>
</div>
<p className="font-title-editorial text-title-editorial text-secondary leading-relaxed">
            From Mughal banqueting halls to the dust-blown caravan tracks winding through the Khyber Pass.
          </p>
<div className="space-y-space-sm font-body-lg text-body-lg text-on-surface-variant font-light">
<p>
              Lahore did not invent flavor; it inherited the crosswinds of empires. Centuries before modern borders were drawn, Persian chefs, Central Asian horsemen, and Punjabi grain masters broke salt together on unbleached linens along the Grand Trunk Road.
            </p>
<p>
              At Junoon, our culinary lineage begins where the caravan halted. We study the culinary journals of Emperor Akbar’s court—the <span className="italic text-primary font-normal">Ain-i-Akbari</span>—not as museum dust, but as active instructions: how wild saffron must be tempered with chilled mountain goat milk; how slow dum cooking preserves the soul of marrow.
            </p>
</div>
<div className="pt-space-sm">
<div className="bg-surface-container-low p-space-md flex items-center justify-between">
<div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block">Archival Principle</span>
<span className="font-body-md text-body-md text-primary font-medium">Reclaiming the lost Mughal deg</span>
</div>
<span className="material-symbols-outlined text-secondary text-2xl">history_edu</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CHAPTER II: THE RECIPES  */}
<section className="w-full bg-surface-container-low py-space-xl text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Text Column  */}
<div className="lg:col-span-6 lg:order-1 space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-uppercase text-label-uppercase tracking-[0.25em]">Chapter II</span>
<span className="h-px w-12 bg-secondary/40"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The Recipes</h2>
</div>
<p className="font-title-editorial text-title-editorial text-secondary leading-relaxed">
            Gathered quietly from grandmother kitchens across Multan, Bahawalpur, and Peshawar.
          </p>
<div className="space-y-space-sm font-body-lg text-body-lg text-on-surface-variant font-light">
<p>
              The most consequential food in Pakistan was never cataloged in leather-bound volumes. It lived exclusively in the intuition of matriarchs who understood that cumin roasted thirty seconds too long loses its sweetness, and that real Dum Pukht requires wet river dough seals, never pressure valves.
            </p>
<p>
              Over seven years, our brigade sat inside sunlit courtyards across the five provinces. We watched mothers grind stone-mortar green chilies in Mirpur, recorded Peshawari charcoal salting rituals, and brought home ancestral techniques uncorrupted by commercial speed.
            </p>
</div>
{/*  Recipe Field Notes Mosaic List  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm bg-surface">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">01 / Multan</span>
<p className="font-body-md text-body-md text-primary font-medium">Sohan Halwa Reduction</p>
<p className="font-body-sm text-body-sm text-outline">Simmered 14 hours in pure milk distillate</p>
</div>
<div className="p-space-sm bg-surface">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">02 / Peshawar</span>
<p className="font-body-md text-body-md text-primary font-medium">Shinwari Salt-Fire Lamb</p>
<p className="font-body-sm text-body-sm text-outline">Nothing but fatback, rock crystal, and heat</p>
</div>
</div>
</div>
{/*  Visual Column  */}
<div className="lg:col-span-6 lg:order-2">
<div className="relative w-full aspect-[4/5] bg-surface overflow-hidden shadow-xl">
<img alt="Ancestral grandmother culinary traditions" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="An intimate fine art editorial portrait of an elderly Pakistani woman's lined hands delicately kneading stone-ground heirloom whole wheat dough on a heavy round brass plate inside a rustic mud-brick kitchen. Diffused sunbeam illuminates flour dust settling like velvet mist; copper deg pots sit faintly in the soft bokeh background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwtUTRz8jw3UaCSHl44IBrShgdc9jsuDDW-gJlJ7YlMP7mizayPx_KuIfKcP1FJVx6nn9CwEYIWEjuvTbI-uH4C59gP0Og_2lnum8h174KEZMbDaihtaJAKdoHUm1ZaeiH9Ud0R2MiEALX7dlkqVEGNUxJut_BU4Co-zjtogpd-B31tKQTQTmdXacyHWmnUC5QpDYV6kToWbHkwnUd4r8040NRWS4b7UA0TqF-wo"/>
</div>
</div>
</div>
</div>
</section>
{/*  CHAPTER III: THE FIRE (Atmospheric Dark Breakout)  */}
<section className="w-full bg-primary text-on-primary py-space-xl overflow-hidden relative">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Visual: Charcoal & Hearth Fire  */}
<div className="lg:col-span-6">
<div className="relative w-full aspect-[4/5] bg-tertiary overflow-hidden shadow-2xl">
<img alt="Living Babool woodsmoke and 800-degree embers" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Macro chiaroscuro photography of smoldering indigenous babool wood embers glowing intensely red-orange and gold inside an ancient deep clay tandoor pit. Glowing embers pulse with 800-degree heat, emitting fine wisps of aromatic cedar woodsmoke and dancing fire sparks caught mid-flight against deep velvet black darkness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfG8R_xMzdrF8hac8zg6J-ut4tHdIO8Vn4ggZzF8wAopH2WkczqsIqU0Y-foTxAjgMAEE5l-yPGB4183rmdREwIpQZu362etHe2KkDxpA52Lf-7LUcxy8EbVTtp1uj7vQEVm-woh2eszJS99aa114qObpGTkr79pOC3j1hZZ_7GBKNQbqG23D-hDy5no08jQ1cLndBFfy9rsu-pTV_NcJxn96Km_OgTKm707HsiM"/>
</div>
</div>
{/*  Story Chapter  */}
<div className="lg:col-span-6 lg:pl-space-md space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary-fixed">
<span className="font-label-uppercase text-label-uppercase tracking-[0.25em]">Chapter III</span>
<span className="h-px w-12 bg-secondary-fixed/40"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">The Living Fire</h2>
</div>
<p className="font-title-editorial text-title-editorial text-secondary-fixed leading-relaxed">
            Woodsmoke from wild babool trees. Charcoal pits reaching 800°C. The sacred geometry of hand-patted clay.
          </p>
<div className="space-y-space-sm font-body-lg text-body-lg text-outline-variant font-light">
<p>
              Gas flame is sterile; it heats without breathing. At Junoon, heat is an active ingredient possessing temperament, scent, and memory.
            </p>
<p>
              Every skewer, tandoori roti, and deg of lamb biryani is forged over sustainably harvested Punjab <span className="italic text-on-primary font-normal">Kikar</span> (babool) timber. Dried for nine months until bone-dry, its embers burn white-hot with zero bitterness, leaving an indelible whisper of wild sweet cedar in every shred of meat.
            </p>
</div>
{/*  Heat Metrics  */}
<div className="grid grid-cols-2 gap-space-md pt-space-xs">
<div className="bg-primary-container p-space-md">
<span className="font-display-xl text-headline-lg text-secondary-fixed block leading-none mb-1">800°</span>
<span className="font-caption-folio text-caption-folio text-outline-variant uppercase tracking-[0.28em]">Core Pit Temperature</span>
</div>
<div className="bg-primary-container p-space-md">
<span className="font-display-xl text-headline-lg text-secondary-fixed block leading-none mb-1">16 hrs</span>
<span className="font-caption-folio text-caption-folio text-outline-variant uppercase tracking-[0.28em]">Slow Babool Dum Braise</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CHAPTER IV: THE TABLE  */}
<section className="w-full bg-surface py-space-xl text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Story Chapter  */}
<div className="lg:col-span-6 lg:order-1 space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-uppercase text-label-uppercase tracking-[0.25em]">Chapter IV</span>
<span className="h-px w-12 bg-secondary/40"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The Dastarkhwan</h2>
</div>
<p className="font-title-editorial text-title-editorial text-secondary leading-relaxed">
            A sanctuary of kinship, where stranger becomes guest and guest becomes sacred family.
          </p>
<div className="space-y-space-sm font-body-lg text-body-lg text-on-surface-variant font-light">
<p>
              In our homeland, eating was never an isolated individual transaction. The Dastarkhwan is an ancient spiritual canvas laid across the carpet or table—a declaration that all who sit within its perimeter share equal warmth, honor, and sustenance.
            </p>
<p>
              Courses at Junoon arrive not in hurried plate-by-plate isolation, but in orchestrated symphonies meant to be passed from palm to palm. Bread is broken by hand. Rice is crowned with saffron jus in full view of tablemates. Eating here is communion.
            </p>
</div>
<div className="pt-space-sm space-y-space-xs">
<div className="flex items-center gap-space-sm text-primary font-medium">
<span className="material-symbols-outlined text-secondary">flare</span>
<span className="font-body-md text-body-md">Mehman-Nawazi: The ancient art of unconditional hospitality</span>
</div>
<div className="flex items-center gap-space-sm text-primary font-medium">
<span className="material-symbols-outlined text-secondary">soup_kitchen</span>
<span className="font-body-md text-body-md">Shared vessels handcrafted in Gujrat pottery kilns</span>
</div>
</div>
</div>
{/*  Visual: The Dastarkhwan Communal Feast  */}
<div className="lg:col-span-6 lg:order-2">
<div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-xl">
<img alt="Communal Dastarkhwan banquet feast at Junoon" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="An expansive, high-fashion editorial overhead banquet shot of an opulent Pakistani communal Dastarkhwan dining table. Unbleached heavy linen tablecloth, hand-hammered antique brass bowls brimming with saffron rice, copper deg pots of slow-cooked mutton, pomegranate seeds, whole scorched clay naans, and dried roses scattered with intentional minimalist refinement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbqkOnCDLL16G3a9UcHeKCUzMUmpC_mkGknEpI-Qd6525-RPtSGFFuSMQ45mQM4ANkYChjN-xA2OdV7a2FOYqRtFunPsI_RCEDFMdl1PA7RLKSxfgtJiLNm3hpoHfeoy_gvvge0G4bQsyPKqR_a7tbZ_e30yzvBz9BBHMvFBjILA4ZW5iQpNs_nOvsH6sTq7F2pdGkwFqXVmtuh9h6Pnv0LjGOce-56j8F9D986GI"/>
</div>
</div>
</div>
</div>
</section>
{/*  CHAPTER V: THE EXPERIENCE (Architectural Sanctuary)  */}
<section className="w-full bg-surface-container py-space-xl text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Visual: Gulberg Architecture  */}
<div className="lg:col-span-6">
<div className="relative w-full aspect-[4/5] bg-surface-container-high overflow-hidden shadow-xl">
<img alt="Architectural sanctuary in Gulberg Lahore" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="An architectural interior photograph of Junoon dining sanctuary in Gulberg, Lahore. Dramatic geometric brass jaali screen walls casting intricate lacy shadows onto raw textured terracotta brick columns. High ceilings, low amber-glowing atmospheric lantern lights, velvet banquet seating in deep umber, and polished terrazzo flooring reflecting soft warm candlelight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKxGiYu7lc0vBs2DOypjl-undmimNwwKckUIRnuBKYRvA_O2zlz-8v8yD1rBFzngyVRGgf0cftLlJaEh1C-dU9K1oD_wQ1qCpj6OETLfHm5b1aKUUCqx0xvinCWumddcGAK0IafdsGORLZHhpINK08F19yQhKxRFQd_pQ_HkQd73aEiJCEAllgJM5F7iyWSKT5WgUw478zOEcY8BYD1WK_xWnkzRsaP0Z-S04ZlDo"/>
</div>
</div>
{/*  Story Chapter  */}
<div className="lg:col-span-6 lg:pl-space-md space-y-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-uppercase text-label-uppercase tracking-[0.25em]">Chapter V</span>
<span className="h-px w-12 bg-secondary/40"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The Gulberg Sanctuary</h2>
</div>
<p className="font-title-editorial text-title-editorial text-secondary leading-relaxed">
            Hand-carved terracotta, perforated brass jaali screens, and contemplative modernism.
          </p>
<div className="space-y-space-sm font-body-lg text-body-lg text-on-surface-variant font-light">
<p>
              We built our home in Gulberg II not to escape Lahore, but to distill its essence away from the deafening city noise. Designed in collaboration with master artisans from the old bazaars, every architectural detail echoes Mughal court geometry without nostalgia or pastiche.
            </p>
<p>
              Hand-pressed terracotta tiles cool the air; perforated brass screens modulate daylight into meditative geometric patterns; and acoustic acoustics ensure conversation remains an intimate whisper.
            </p>
</div>
<div className="p-space-md bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Architecture Note</span>
<span className="font-headline-sm text-headline-sm text-primary">Terracotta &amp; Brass</span>
</div>
<span className="font-caption-folio text-caption-folio text-on-surface-variant uppercase tracking-widest">Gulberg II, Lahore</span>
</div>
</div>
</div>
</div>
</section>
{/*  PHILOSOPHICAL MANIFESTO — "WHAT JUNOON MEANS"  */}
<section className="w-full bg-primary text-on-primary py-space-xl overflow-hidden relative">
{/*  Subtle Ambient Glow  */}
<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary-fixed/5 blur-3xl pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10 text-center">
<div className="max-w-4xl mx-auto space-y-space-lg">
{/*  Label  */}
<div className="inline-flex items-center gap-space-sm">
<span className="w-6 h-px bg-secondary-fixed"></span>
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.3em]">The Philosophical Manifesto</span>
<span className="w-6 h-px bg-secondary-fixed"></span>
</div>
<h2 className="font-headline-md text-headline-md text-secondary-fixed uppercase tracking-wider">What Junoon Means</h2>
{/*  Oversized Editorial Quote  */}
<blockquote className="font-headline-lg text-headline-lg text-surface-bright leading-tight tracking-tight max-w-3xl mx-auto font-normal">
          “Junoon is not merely passion — it is an obsession with doing justice to our ancestors’ table. To reject compromise. To cook over living fire. To honor every grain of cumin and every tear of bone marrow.”
        </blockquote>
<p className="font-body-md text-body-md text-outline-variant max-w-xl mx-auto font-light">
          When speed is celebrated by modern kitchens, our counter-revolution is patient devotion. We cook slow because heritage cannot be accelerated.
        </p>
{/*  Five Core Pillars  */}
<div className="pt-space-md">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm text-center">
<div className="p-space-md bg-primary-container group hover:bg-tertiary-container transition-colors duration-300">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] block mb-2">01 / Pillar</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Food</h3>
<p className="font-body-sm text-body-sm text-outline-variant">Unadulterated ancestral spice ratios</p>
</div>
<div className="p-space-md bg-primary-container group hover:bg-tertiary-container transition-colors duration-300">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] block mb-2">02 / Pillar</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Culture</h3>
<p className="font-body-sm text-body-sm text-outline-variant">Living memory of the Mughal court</p>
</div>
<div className="p-space-md bg-primary-container group hover:bg-tertiary-container transition-colors duration-300">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] block mb-2">03 / Pillar</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Hospitality</h3>
<p className="font-body-sm text-body-sm text-outline-variant">Mehman-nawazi without precondition</p>
</div>
<div className="p-space-md bg-primary-container group hover:bg-tertiary-container transition-colors duration-300">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] block mb-2">04 / Pillar</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Craft</h3>
<p className="font-body-sm text-body-sm text-outline-variant">Hand-hammered brass &amp; babool flame</p>
</div>
<div className="p-space-md bg-primary-container group hover:bg-tertiary-container transition-colors duration-300 col-span-2 sm:col-span-1">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em] block mb-2">05 / Pillar</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Tradition</h3>
<p className="font-body-sm text-body-sm text-outline-variant">Guarding the hearth for generations</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  THE PATRON & BRIGADE  */}
<section className="w-full bg-surface py-space-xl text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Chef Portrait  */}
<div className="lg:col-span-5 relative">
<div className="relative w-full aspect-[3/4] bg-surface-container overflow-hidden shadow-2xl">
<img alt="Executive Chef and Founder of Junoon" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Editorial black-and-white tinted in warm sepia portrait of an authoritative Pakistani Executive Chef in an elegant dark charcoal mandarin-collar chef coat. Looking thoughtfully away from camera with composed dignity against an atmospheric dark stone wall with soft golden side rim-lighting illuminating his silhouette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWWiPzVTfNg2yn7uI68tKmj5nYFND6Bwu3RTXfIRUKpWjTUsGQIr1b_Hh1t2fX-i4mLCETk9swvR31pdYD849JMvwcHES8p4aoB6QiY_BUTZgybfuDI1in2vpRVmdkChfycMtE-xV3sX-8JsY-DsB7d6hYoFAUqM8kO4OYPmZzIHV3bLeOsQou5ScEq9g8MSsoUZZjM8PgGdqFgBiX8cRbr9C7jElFGVlz3OKrTU"/>
</div>
{/*  Provenance Stamp Badge  */}
<div className="absolute -top-4 -left-4 bg-primary text-secondary-fixed p-space-sm shadow-md">
<span className="font-caption-folio text-caption-folio uppercase tracking-[0.28em] block">Founder&apos;s Note</span>
<span className="font-label-uppercase text-label-uppercase text-on-primary">Est. Lahore 2021</span>
</div>
</div>
{/*  Reflection by Executive Chef & Founder  */}
<div className="lg:col-span-7 lg:pl-space-md space-y-space-md">
<div className="space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">The Patron &amp; Brigade</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Taking Pakistani Gastronomy to the World Stage
            </h2>
<p className="font-title-editorial text-title-editorial text-secondary italic">
              A Personal Reflection by Tariq Al-Hashmi, Executive Chef &amp; Co-Founder
            </p>
</div>
<div className="space-y-space-sm font-body-lg text-body-lg text-on-surface-variant font-light">
<p>
              “For too long, the world looked at South Asian cooking through the narrow, diluted lens of commercial curry powder and homogenized restaurant buffets. That is not our cuisine. Our cuisine is regional, nuanced, deeply regional, and aristocratic in its subtleties.”
            </p>
<p>
              “When we conceived Junoon, we made a pact: we would never translate ourselves downward. We would cook the slow nihari the way it was prepared for the Nawabs of Awadh and the Governor of Lahore in 1740. We would let charcoal be charcoal. We would invite our diners to experience the dignity of who we are.”
            </p>
</div>
{/*  Signature & Brigade Footnote  */}
<div className="pt-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low p-space-md">
<div>
<p className="font-headline-sm text-headline-sm text-primary tracking-wide">Tariq Al-Hashmi</p>
<p className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Executive Chef &amp; Custodian</p>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
<div>
<span className="text-primary font-medium block">42 Artisans</span>
<span>In the Junoon Brigade</span>
</div>
<div className="w-px h-8 bg-outline/30"></div>
<div>
<span className="text-primary font-medium block">100% Halal</span>
<span>Heritage Sourced</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  INTERACTIVE INVITATION STRIP  */}
<section className="w-full bg-surface-container-high py-space-xl text-on-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
<div className="max-w-2xl mx-auto space-y-space-md">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Communion Awaits</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Experience The Dastarkhwan</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light">
          We invite you to step out of the everyday and immerse yourself in an unhurried evening of living fire, poetry, and hospitality.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-space-sm pt-space-xs">
<a className="w-full sm:w-auto h-[52px] px-space-lg bg-primary-container text-on-primary font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase flex items-center justify-center hover:bg-tertiary-container transition-colors shadow-md" href="/reservations">
            Reserve Your Table
          </a>
<a className="w-full sm:w-auto h-[52px] px-space-lg bg-surface text-primary font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase flex items-center justify-center hover:bg-surface-container transition-colors shadow-sm" href="/menu">
            Explore The Tasting Menu
          </a>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}

