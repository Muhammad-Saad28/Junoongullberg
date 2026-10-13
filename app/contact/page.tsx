import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  Subtle Architectural Atmospheric Backdrop Elements  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 -left-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
{/*  1. EDITORIAL HEADER & PROLOGUE  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
<div className="lg:col-span-8 space-y-space-sm">
<div className="flex items-center gap-space-xs text-secondary">
<span className="font-caption-folio text-caption-folio uppercase tracking-[0.28em]">Sanctuary Coordinates · Gulberg II</span>
<span className="w-8 h-[1px] bg-secondary/40"></span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.22em]">31.5204° N, 74.3587° E</span>
</div>
<h1 className="font-display-xl text-headline-lg lg:text-display-xl text-primary tracking-tight leading-[1.05]">
            COME FIND US
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
            Your table is waiting in the heart of Gulberg, Lahore. A secluded courtyard framed in hand-chiseled brick, warm babool charcoal embers, and unhurried hospitality.
          </p>
</div>
<div className="lg:col-span-4 flex lg:justify-end pb-2">
<div className="bg-surface-container-low p-space-md shadow-sm max-w-xs w-full">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Evening Communion</span>
<p className="font-title-editorial text-title-editorial text-primary mb-2">Service Commences at 7:00 PM</p>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>Sanctuary currently welcoming advance seatings</span>
</div>
</div>
</div>
</div>
</section>
{/*  2. LOCATION & ARCHITECTURAL MAP PRESENTATION  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
{/*  Left: Cartographic Narrative & Custom Styled Architectural Map  */}
<div className="lg:col-span-7 flex flex-col justify-between">
<div className="relative w-full h-[460px] lg:h-[540px] bg-primary rounded-none overflow-hidden shadow-xl group">
{/*  Google Maps Static Rendering Container via system pipeline  */}
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-location="Gulberg II, Main Boulevard, Lahore, Pakistan" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrf3ei_hqCmUdxpqcEhMKTgvZKbQILc4zJ0V0OrptOKHePO3zz0swYaLNIOKlAv7G5XuAEgTnKSHH-6gKlS_GeGoZ58gJd-GIohPXOfPSyk1s6mqP3oua2P1InTpfX-mRuSEZ4wWrXCiRMO-7WPFNpTLXM0pNYWiAaG_oP7zVdb9FlH01M7dupLsE0hldUV4jTKV4W17Vhdvo03t_5mFAmZAmxwQCyMQ_wXaJbvgk')" }}></div>
{/*  Atmospheric Dark Editorial Scrim  */}
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent pointer-events-none"></div>
{/*  Cartographic Spatial Accents Overlay  */}
<div className="absolute inset-0 p-space-md flex flex-col justify-between pointer-events-none">
<div className="flex items-center justify-between">
<div className="bg-primary/85 backdrop-blur-md px-3 py-1.5 text-secondary-fixed font-caption-folio text-caption-folio uppercase tracking-[0.25em]">
                  District: Gulberg II / Central Arterial
                </div>
<div className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-secondary-fixed">
<span className="material-symbols-outlined text-[18px]">explore</span>
</div>
</div>
{/*  Spatial Key Landmarks Overlay  */}
<div className="space-y-space-xs max-w-sm">
<div className="bg-primary/90 backdrop-blur-md p-space-sm shadow-md">
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed tracking-[0.2em] uppercase">Junoon Entrance Portico</span>
</div>
<p className="font-body-sm text-body-sm text-outline-variant">Main Boulevard carriage drive, 200m south of Liberty Roundabout intersection.</p>
</div>
<div className="grid grid-cols-2 gap-2 text-primary-fixed-dim font-caption-folio text-caption-folio uppercase tracking-[0.18em]">
<div className="bg-primary-container/80 backdrop-blur-sm px-2.5 py-1.5">
                    → Gaddafi Stadium (4 min)
                  </div>
<div className="bg-primary-container/80 backdrop-blur-sm px-2.5 py-1.5">
                    → MM Alam Fashion Strip (2 min)
                  </div>
</div>
</div>
</div>
</div>
{/*  Micro Location Footnote  */}
<div className="pt-space-sm flex items-center justify-between text-on-surface-variant font-caption-folio text-caption-folio uppercase tracking-[0.22em]">
<span>Geo Index: Punjab Cultural Enclave</span>
<span>Private Entrance · Portico 1</span>
</div>
</div>
{/*  Right: Address Dossier & Valet Sanctuary  */}
<div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low p-space-md lg:p-space-lg shadow-sm">
<div className="space-y-space-md">
<div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-2">The Sanctuary Enclave</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">JUNOON GULBERG</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
                Main Boulevard, Gulberg II<br/>
                Lahore, Punjab 54660<br/>
                Islamic Republic of Pakistan
              </p>
</div>
{/*  Get Directions Action  */}
<div className="pt-space-xs">
<a className="group inline-flex items-center justify-between w-full h-[54px] px-space-md bg-primary-container text-secondary-fixed hover:bg-tertiary-container hover:text-on-primary transition-all duration-300" href="https://maps.google.com/?q=Gulberg+II+Lahore" rel="noopener noreferrer" target="_blank">
<span className="font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase">Get Directions via Google Maps</span>
<span className="material-symbols-outlined text-secondary-fixed group-hover:translate-x-1 transition-transform text-[18px]">arrow_outward</span>
</a>
</div>
{/*  Complimentary Valet Privilege  */}
<div className="bg-surface-container p-space-md space-y-space-xs">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[20px]">local_parking</span>
<span className="font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase">Complimentary Valet Service</span>
</div>
<h3 className="font-headline-sm text-title-editorial text-primary">Private Portico Attendant</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Secure dedicated parking bays staffed with private white-glove valet concierge stationed directly at our brass-trimmed entryway porte-cochère. Step seamlessly from your vehicle into our scented foyer.
              </p>
</div>
</div>
{/*  Direct Line Strip  */}
<div className="pt-space-md mt-space-md bg-surface-container-high/50 p-space-sm flex items-center justify-between">
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Sanctuary Reception Desk</span>
<a className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors" href="tel:+924235789200">+92 42 3578 9200</a>
</div>
</div>
</div>
</section>
{/*  Visual Gastronomic Intermission  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md items-center">
<div className="h-64 overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" data-alt="Intimate dining atmosphere at Junoon Gulberg Lahore featuring hand-hammered antique brass bowls, low-lit warm candlelight, and architectural terracotta brick accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Mfu5ovrKMXeJYi0ioV3_54CF4m2o2zcJjfVVuQplRCILRTBych2rz-t6x6CKGMXtKRvP4L35gX0UMtXSyOq7JAxznyk4SGxciiwqv5tiZ5JfPVFQwzLeM0Ch6H22WFf2jJX5Jzx8yM2u69-Ny0a3ZK92pdWl11qJS-xS4XfWdoezB4DSdIsMpl1pcl7iyAADnI5eAnoNc0bfNXKG3cNl1KUMJgqdi1Fg0K-II0A"/>
<div className="absolute inset-0 bg-primary/20"></div>
<div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm px-2.5 py-1 text-on-primary font-caption-folio text-caption-folio uppercase tracking-[0.2em]">The Courtyard Foyer</div>
</div>
<div className="h-64 overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" data-alt="Traditional Pakistani spice presentation with hand-ground wild mountain cumin, organic saffron threads, and stone pestles on unbleached linen fabric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc4ssOfL2Abw3-oTr7PRl9HVPCVodbHpoxang96Z0k-wYEQm_BSF8jDaPJKdKe0e-9gM6VIn475_oSu3HlQ8w7_gjmfTXEPxTTz1abrwgfdhqg8n4MN6CLOm3UzMEsvV-ofnifFvzwwWWi5riCJr85Ye_rz0RhdxC2ol6cnBFB3Ud8RoCAnKN4mcIaew2jXuRdfoqTNJYr747VnAddNBNkiocQZAEoVoyI0PHkwug"/>
<div className="absolute inset-0 bg-primary/20"></div>
<div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm px-2.5 py-1 text-on-primary font-caption-folio text-caption-folio uppercase tracking-[0.2em]">Spice Apothecary Vault</div>
</div>
<div className="h-64 overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" data-alt="Private dining hall in Lahore with long polished dark teak Dastarkhwan communion table set with brass cutlery and raw silk napkins." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDULpgV4wgoBfYQvPBEQ7EnvcTAJDGw8uD2_0fjIe66Pd_Pykwco-MV1kIsXlu9Gw4SXmBarGCdmiBNvq9w9STrrM-T-57o5iqMOCOAq-YL6XKPUrgetzTJ4CQ-Tu5zQdL2kWIuVFPaj4ddgGIlBRmudLYzBZCjF2fM3MTRijLRQ_4vyE2WDQo1OJxbGPKV5DLXkDkRCSMZGVVZI35RYu2H1cNDQ1LWfCmQO83mDPQ"/>
<div className="absolute inset-0 bg-primary/20"></div>
<div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm px-2.5 py-1 text-on-primary font-caption-folio text-caption-folio uppercase tracking-[0.2em]">Private Chamber Portico</div>
</div>
</div>
</section>
{/*  3. CONCIERGE & VISITING INFORMATION  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
<div className="mb-space-md">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-1">Rituals &amp; Protocols</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">HOSPITALITY CONCIERGE</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Hours Card  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.24em] uppercase">Folio 01</span>
<span className="material-symbols-outlined text-outline text-[20px]">schedule</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Dinner Sanctuary Hours</h3>
<div className="space-y-space-sm">
<div className="bg-surface-container p-space-sm space-y-1">
<p className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-[0.2em]">Monday — Thursday</p>
<p className="font-title-editorial text-title-editorial text-secondary">7:00 PM – 12:30 AM</p>
<p className="font-caption-folio text-caption-folio text-on-surface-variant">Last kitchen service: 11:45 PM</p>
</div>
<div className="bg-surface-container p-space-sm space-y-1">
<p className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-[0.2em]">Friday — Sunday</p>
<p className="font-title-editorial text-title-editorial text-secondary">7:00 PM – 1:30 AM</p>
<p className="font-caption-folio text-caption-folio text-on-surface-variant">Last kitchen service: 12:45 AM</p>
</div>
</div>
</div>
<div className="pt-space-md text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.2em]">
            Curated seating increments of 2 hours per communion
          </div>
</div>
{/*  Direct Channels Card  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.24em] uppercase">Folio 02</span>
<span className="material-symbols-outlined text-outline text-[20px]">contact_support</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Direct Inquiries</h3>
<div className="space-y-space-sm">
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.24em] block">Reservations Desk</span>
<a className="font-body-lg text-body-lg text-primary hover:text-secondary block font-medium" href="tel:+924235789200">+92 42 3578 9200</a>
<span className="font-caption-folio text-caption-folio text-outline">Available daily 11:00 AM – Midnight</span>
</div>
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.24em] block">WhatsApp Concierge</span>
<a className="font-body-lg text-body-lg text-primary hover:text-secondary block font-medium" href="https://wa.me/923008447171">+92 300 844 7171</a>
<span className="font-caption-folio text-caption-folio text-outline">Instant table coordination &amp; directions</span>
</div>
<div className="space-y-1">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.24em] block">Private Dining &amp; Press</span>
<a className="font-body-sm text-body-sm text-primary hover:text-secondary block font-medium" href="mailto:reservations@junoon-lahore.com">reservations@junoon-lahore.com</a>
<a className="font-body-sm text-body-sm text-primary hover:text-secondary block font-medium" href="mailto:press@junoon-lahore.com">press@junoon-lahore.com</a>
</div>
</div>
</div>
<div className="pt-space-md text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.2em]">
            Dedicated Host team replies within 60 minutes
          </div>
</div>
{/*  Visitor Etiquette & FAQ Card  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.24em] uppercase">Folio 03</span>
<span className="material-symbols-outlined text-outline text-[20px]">menu_book</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Visitor Etiquette &amp; FAQ</h3>
<div className="space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="space-y-1">
<p className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-[0.16em]">Walk-in Hospitality</p>
<p>We reserve limited courtyard high-tables for spontaneous patrons; advance booking remains highly recommended for the main dining hall.</p>
</div>
<div className="space-y-1">
<p className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-[0.16em]">Provenance &amp; Halal Guarantee</p>
<p>All provisions are 100% verified Halal, single-origin grass-fed meats, and unadulterated spices harvested from northern mountain valleys.</p>
</div>
<div className="space-y-1">
<p className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-[0.16em]">Dietary Considerations</p>
<p>Vegetarian, dairy-conscious, and gluten-sensitive degustation courses are thoughtfully orchestrated with prior notification.</p>
</div>
</div>
</div>
<div className="pt-space-md text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.2em]">
            Smart casual attire recommended
          </div>
</div>
</div>
</section>
{/*  4. DIRECT CONTACT FORM & ENGAGEMENT ENCLAVE  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
<div className="bg-primary text-on-primary p-space-md lg:p-space-xl shadow-xl relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
{/*  Narrative Left Column  */}
<div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Communion &amp; Dialogue</span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">TRANSMIT AN ENQUIRY</h2>
<p className="font-body-md text-body-md text-outline-variant leading-relaxed">
                Whether you seek to orchestrate an intimate private family milestone, clarify dietary requirements, or share reflections from a previous gathering, our culinary stewards welcome your message.
              </p>
</div>
{/*  Provenance Assurance Badge  */}
<div className="bg-primary-container p-space-md space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
<span className="font-label-uppercase text-label-uppercase text-secondary-fixed tracking-[0.22em] uppercase">The Junoon Guarantee</span>
</div>
<p className="font-body-sm text-body-sm text-outline-variant">
                Every inquiry is addressed directly by our Lead Sommelier of Sherbets or General Maître d’—never automated systems.
              </p>
</div>
<div className="space-y-1 text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.24em]">
<p>RESPONSE PROTOCOL: WITHIN 12 HOURS</p>
<p>DIRECT LINE: +92 42 3578 9200</p>
</div>
</div>
{/*  Minimalist Form Column  */}
<div className="lg:col-span-7 bg-primary-container/80 p-space-md lg:p-space-lg backdrop-blur-md">
<form className="space-y-space-md" id="contactForm" >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Name Input  */}
<div className="space-y-1">
<label className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.2em] block" htmlFor="guest_name">Guest Full Name *</label>
<input className="w-full bg-transparent text-on-primary font-body-md text-body-md pb-2 pt-1 border-b border-outline-variant/40 focus:border-secondary-fixed focus:outline-none transition-colors placeholder:text-outline-variant/40" id="guest_name" placeholder="Syed Ali Raza" required type="text"/>
</div>
{/*  Email Input  */}
<div className="space-y-1">
<label className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.2em] block" htmlFor="guest_email">Email Address *</label>
<input className="w-full bg-transparent text-on-primary font-body-md text-body-md pb-2 pt-1 border-b border-outline-variant/40 focus:border-secondary-fixed focus:outline-none transition-colors placeholder:text-outline-variant/40" id="guest_email" placeholder="patron@domain.com" required type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Phone Input  */}
<div className="space-y-1">
<label className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.2em] block" htmlFor="guest_phone">Contact Number *</label>
<input className="w-full bg-transparent text-on-primary font-body-md text-body-md pb-2 pt-1 border-b border-outline-variant/40 focus:border-secondary-fixed focus:outline-none transition-colors placeholder:text-outline-variant/40" id="guest_phone" placeholder="+92 300 000 0000" required type="tel"/>
</div>
{/*  Subject Selection  */}
<div className="space-y-1">
<label className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.2em] block" htmlFor="guest_subject">Nature of Request *</label>
<select className="w-full bg-primary-container text-on-primary font-body-md text-body-md pb-2 pt-1 border-b border-outline-variant/40 focus:border-secondary-fixed focus:outline-none transition-colors" id="guest_subject" required>
<option disabled  value="">Select communion type...</option>
<option value="reservation">Table Reservation Assistance</option>
<option value="private-dining">Private Dining &amp; Corporate Hall</option>
<option value="dietary">Dietary &amp; Halal Inquiries</option>
<option value="press">Press &amp; Gastronomic Collaborations</option>
<option value="feedback">Guest Experience Reflections</option>
</select>
</div>
</div>
{/*  Message Input  */}
<div className="space-y-1">
<label className="font-label-uppercase text-label-uppercase text-secondary-fixed uppercase tracking-[0.2em] block" htmlFor="guest_message">Your Detailed Message *</label>
<textarea className="w-full bg-transparent text-on-primary font-body-md text-body-md pb-2 pt-1 border-b border-outline-variant/40 focus:border-secondary-fixed focus:outline-none transition-colors placeholder:text-outline-variant/40 resize-none" id="guest_message" placeholder="Inform us of guest numbers, preferred dates, or tailored dietary preferences..." required rows={4}></textarea>
</div>
{/*  Consent & Privacy Check  */}
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 accent-secondary cursor-pointer" id="privacy_consent" required type="checkbox"/>
<label className="font-body-sm text-body-sm text-outline-variant leading-tight" htmlFor="privacy_consent">
                  I agree to receive communications regarding my reservation and dining inquiry. Junoon honors your sanctuary privacy and never shares contact credentials.
                </label>
</div>
{/*  Submission CTA  */}
<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<button className="w-full sm:w-auto h-[52px] px-space-xl bg-secondary text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center gap-space-xs shadow-md" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
<span className="font-caption-folio text-caption-folio text-outline-variant uppercase tracking-[0.2em]">Encrypted Transmission</span>
</div>
{/*  Success Notification Alert  */}
<div className="hidden bg-surface-container-low text-primary p-space-sm flex items-center gap-3 transition-opacity" id="formSuccess">
<span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
<div>
<p className="font-title-editorial text-title-editorial text-primary">Inquiry Delivered with Grace</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our Maître d&apos; will be in contact shortly via your preferred channel.</p>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
</div>
</div></main>
    </>
  );
}
