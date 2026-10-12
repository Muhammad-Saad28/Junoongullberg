import Link from 'next/link';

export default function MenuPage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-primary text-on-primary">
            <div className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFcgAfpR9HeWJBCsx7SVg_RGVeZjSRW1Hxsr7EJwe1ut22cADmV3ACF3Nz6L9o_iZWrKfM-zZQEgSzvYdBCeRn38C8I3kCSpAoIK5GKDaShx_6tsqP1TZGErM6ZxfQ2LUMRWtb6b6R_CGaWGXZPl04J_CB1u0t-WynNfn3SlNeg6BvzfrPuY2sb5dyMNts4SSKqKWQwlAnFZLV0khaLgJZT0JfNrHPBt40CDt3k1w')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
              
              <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-space-sm mb-space-md">
                  <span className="w-8 h-[1px] bg-secondary-fixed"></span>
                  <span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">
                    The Culinary Archive
                  </span>
                  <span className="w-8 h-[1px] bg-secondary-fixed"></span>
                </div>
                <h1 className="font-display-xl text-display-xl max-w-4xl text-on-primary tracking-tight leading-none mb-space-md uppercase drop-shadow-sm">
                  Tasting The <br/>
                  <span className="italic font-normal text-secondary-fixed font-title-editorial">Heritage</span>
                </h1>
                <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl font-light">
                  A curation of ancient recipes salvaged from the royal courts of the Mughals and the rustic hearths of the Punjab, slow-cooked over wild babool wood.
                </p>
              </div>
            </div>
          </section>

          {/* Menu Navigation / Filter Strip */}
          <section className="w-full bg-surface-container-low border-b border-outline-variant/30 sticky top-20 z-40 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-sm">
              <div className="flex items-center gap-space-md overflow-x-auto no-scrollbar">
                {['Appetizers & Soups', 'The Charcoal Hearth', 'Slow-Braised Curries', 'Tandoori Breads', 'Desserts', 'Botanical Elixirs'].map((cat, i) => (
                  <a key={cat} href={`#cat-${i}`} className={`shrink-0 font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase transition-colors ${i === 0 ? 'text-primary border-b border-secondary pb-1' : 'text-outline-variant hover:text-primary'}`}>
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Menu Sections */}
          <section className="w-full bg-surface py-space-xl text-on-surface">
            <div className="max-w-[1024px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
              
              {/* Category 1 */}
              <div id="cat-0" className="scroll-mt-32">
                <div className="flex items-center gap-space-sm mb-space-lg">
                  <span className="font-headline-md text-headline-md text-secondary">I.</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight uppercase">Appetizers & Soups</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Murgh Yakhni Shorba</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 1,200</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Slow-simmered free-range chicken broth infused with saffron, mace, and roasted garlic. Served with crispy naan croutons.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Peshawari Chapli Kabab</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 1,800</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Hand-minced beef patties spiced with crushed coriander, pomegranate seeds, and green chilies, pan-fried in beef tallow.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Lahori Fried Fish</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 2,400</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">River sole marinated in ajwain, cumin, and gram flour, flash-fried to a crisp golden perfection. Served with apricot chutney.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Gol Gappa Platter (V)</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 950</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Crispy semolina shells with spiced chickpeas, tamarind drizzle, and chilled mint-coriander water.</p>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div id="cat-1" className="scroll-mt-32">
                <div className="flex items-center gap-space-sm mb-space-lg">
                  <span className="font-headline-md text-headline-md text-secondary">II.</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight uppercase">The Charcoal Hearth</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Sikandari Raan</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 7,500</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Whole leg of spring lamb marinated for 48 hours in raw papaya, dark rum, and aromatic spices, slow-roasted over embers.</p>
                    <span className="inline-block px-2 py-0.5 bg-surface-container-high text-[10px] uppercase tracking-wider text-outline">Signature</span>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Malai Boti</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 2,100</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Boneless chicken morsels steeped in fresh cream, green cardamom, and white pepper, char-grilled to a melting tenderness.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Mutton Seekh Kabab</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 2,600</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Prime mutton mince laced with roasted cumin, fresh mint, and smoked over wild babool wood skewers.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Paneer Tikka (V)</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 1,600</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Cubes of fresh cottage cheese marinated in hung curd and yellow chili powder, roasted with bell peppers.</p>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div id="cat-2" className="scroll-mt-32">
                <div className="flex items-center gap-space-sm mb-space-lg">
                  <span className="font-headline-md text-headline-md text-secondary">III.</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight uppercase">Slow-Braised Curries</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Chinioti Kunna Gosht</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 3,400</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Baby goat shank sealed inside an earthenware clay pot, slow-braised underground for 8 hours with pure desi ghee.</p>
                    <span className="inline-block px-2 py-0.5 bg-surface-container-high text-[10px] uppercase tracking-wider text-outline">Heritage</span>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Nihari Khaas</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 2,800</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Overnight simmered beef shank stew enriched with bone marrow and an array of 18 secret spices. Served with julienned ginger and lemon.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Murgh Makhani</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 2,200</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Tandoor-roasted chicken tikka simmered in a velvety tomato and fenugreek gravy, finished with churned butter.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Dal Makhani (V)</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 1,400</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Whole black lentils cooked overnight on fading tandoor embers, enriched with fresh cream and butter.</p>
                  </div>
                </div>
              </div>

              {/* Category 4 */}
              <div id="cat-3" className="scroll-mt-32">
                <div className="flex items-center gap-space-sm mb-space-lg">
                  <span className="font-headline-md text-headline-md text-secondary">IV.</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight uppercase">Tandoori Breads</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Roghani Naan</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 250</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Soft, fluffy leavened bread brushed with milk and sesame seeds.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Garlic Naan</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 300</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Topped with crushed garlic and fresh coriander leaves.</p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="flex items-baseline justify-between gap-4 border-b border-outline-variant/20 pb-2 border-dashed">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Lachha Paratha</h3>
                      <span className="font-body-md text-body-md text-secondary">PKR 350</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-light">Multi-layered whole wheat bread cooked in desi ghee.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Call to action */}
          <section className="w-full bg-primary-container text-on-primary py-space-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFDeEZs9pgGx02hSJYFUShZ375ymRfrVZsTa6WYN9jm9q3lDjkf7QN3BryyNhAmuxVCQ0VMxZi0hSWA-EEVAPW1fQAkZ2y0tW58z0mUlSetrlLpkWxpibag1CoSCGJzwgR4O6FkueWmsud4J2vK3vX_Fr74T5JVCLjN8FI_YN77xJ9TQlmxl1UFJElqhaGYibCGTQV2WkJrVgTl7oxPU3YICEf8Uf992SXa9QedK0')" }}></div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center space-y-space-md">
              <span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">The Feast Awaits</span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight uppercase">Reserve Your Table</h2>
              <div className="pt-space-sm flex justify-center">
                <a href="/reservations" className="inline-flex h-[52px] px-space-lg bg-secondary text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase items-center justify-center transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed shadow-md">
                  Book Now
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
