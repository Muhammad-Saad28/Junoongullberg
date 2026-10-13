"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function ReservationsPage() {
  useEffect(() => {
    const guestBtns = document.querySelectorAll('.guest-btn');
    const guestInput = document.getElementById('guest-count-input') as HTMLInputElement;

    guestBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const count = btn.textContent;
        if (guestInput) guestInput.value = count || '1';
        
        guestBtns.forEach(b => {
          b.classList.remove('bg-primary-container', 'text-on-primary');
          b.classList.add('text-primary');
        });
        
        btn.classList.add('bg-primary-container', 'text-on-primary');
        btn.classList.remove('text-primary');
      });
    });

    const form = document.querySelector('form');
    const modal = document.getElementById('confirmation-modal');
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (modal) {
          modal.classList.remove('hidden');
        }
      });
    }

    const closeBtns = modal?.querySelectorAll('button');
    closeBtns?.forEach(btn => {
      btn.addEventListener('click', () => {
        modal?.classList.add('hidden');
      });
    });
  }, []);

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
<section className="relative w-full bg-surface pt-space-lg pb-space-md overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-space-sm">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.3em]">Sanctuary &amp; Communion</span>
<h1 className="font-display-xl text-headline-lg lg:text-display-xl text-primary tracking-tight">YOUR TABLE AWAITS</h1>
<p className="font-title-editorial text-title-editorial text-secondary italic">Join us for an evening shaped by food, fire and hospitality.</p>
<div className="w-16 h-px bg-secondary/40 my-space-xs"></div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-low py-space-lg">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-8 bg-surface-bright shadow-[0_24px_64px_-12px_rgba(42,33,27,0.06)] p-space-md sm:p-space-lg relative">
<form className="space-y-space-lg" id="reservation-form" >
<div>
<div className="flex items-baseline justify-between mb-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-display-xl text-headline-sm text-secondary">01</span>
<span className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-[0.22em]">Select Dining Atmosphere</span>
</div>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Curated Spaces</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm" id="atmosphere-selector">
<label className="cursor-pointer group">
<input defaultChecked className="sr-only peer" name="atmosphere" type="radio" defaultValue="Grand Dining Hall"/>
<div className="h-full bg-surface-container-low peer-checked:bg-surface-container peer-checked:shadow-sm p-space-sm flex flex-col justify-between transition-all duration-300">
<div>
<div className="w-full h-32 mb-space-sm overflow-hidden bg-surface-dim">
<img alt="Grand Dining Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Grand architectural dining hall with vaulted terracotta brick arches, warm glowing embers, copper lanterns, and dressed linen tables in Lahore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIHcq0RdpC2RcBRmy8GRt2bWD5k8HKT40gUSy1ZDQE9Cha9yfL0dsH67dnq-yWSVOFB8KDiLqXyiEniLSXqQO6UTWKJhD6rY0rKZsm_PhEXBfDLi5iDaTmb7kccoCIyVeQdd8f_1HtVipUbxvWMgCnAvyzXFNsPtIqmfpq6R_GPiey7FCw2NdXFg65B3JwXYNjJopiRvzvHbvL7RnEh-aDjicroWBQTMcq3axrEQ0"/>
</div>
<div className="flex items-center justify-between mb-space-xs">
<h4 className="font-headline-sm text-[18px] text-primary">Grand Dining Hall</h4>
<div className="w-3 h-3 bg-transparent peer-checked:bg-secondary transition-all"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Vibrant, vaulted terracotta ceiling with dramatic live hearth sightlines and ambient murmur.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-sm">Main Level</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="sr-only peer" name="atmosphere" type="radio" defaultValue="Private Dastarkhwan Chamber"/>
<div className="h-full bg-surface-container-low peer-checked:bg-surface-container peer-checked:shadow-sm p-space-sm flex flex-col justify-between transition-all duration-300">
<div>
<div className="w-full h-32 mb-space-sm overflow-hidden bg-surface-dim">
<img alt="Private Dastarkhwan Chamber" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional secluded Mughal dastarkhwan dining room with low hand-woven silk seating, raw brass vessels, and intimate chiaroscuro lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPDmmYwvW2LzHdtp_YAEh2qQ69sCafJvmkQEnzvXRmyrzzL-qNRw0dvrA2G8nj6S2R8knTKXUwoqguGrpv4C1TkuraC5pMNzWqttqEtXjokFU_UZdbTJFP5oA2o5ZoCVWwcq-c6hdrnMecBR7Cn_CiQ35SRS-o-f0bHZgSOy14wInJ3cInIq-njpzi2Qeu5JXUQ9N1AQql3SFBy73x5dFGUCnpXVW5jQrX5aZRhK0"/>
</div>
<div className="flex items-center justify-between mb-space-xs">
<h4 className="font-headline-sm text-[18px] text-primary">Dastarkhwan Chamber</h4>
<div className="w-3 h-3 bg-transparent peer-checked:bg-secondary transition-all"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Secluded alcove offering artisanal handwoven cushions or elevated brass table settings.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-sm">Chamber I &amp; II</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="sr-only peer" name="atmosphere" type="radio" defaultValue="Star-Lit Courtyard"/>
<div className="h-full bg-surface-container-low peer-checked:bg-surface-container peer-checked:shadow-sm p-space-sm flex flex-col justify-between transition-all duration-300">
<div>
<div className="w-full h-32 mb-space-sm overflow-hidden bg-surface-dim">
<img alt="Star-Lit Courtyard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Open air courtyard restaurant at night under stars with babbling carved stone fountain, soft oil candles, and jasmine trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmfHQbQTAmhShFq4RN4h_eeHRxPFwu5pDtVLfAR4_UnSxI6yRK8nV_lb1ivGyZBbhG_ylggOtgeDMxjT_0JJtCJrYWcE7lFX_ap6m9E0XnsAxT1SxbfufPMS-vu_0FlBUGmDQDRAvgtx7EAL0YspNM39JXBHwAEYxyLQn-934MZChauII9XUU2Fp-oxGpJuw2UG_xlq-kyXshD0H-ThaLlkIr7hR7uG07ax1NPGs"/>
</div>
<div className="flex items-center justify-between mb-space-xs">
<h4 className="font-headline-sm text-[18px] text-primary">Star-Lit Courtyard</h4>
<div className="w-3 h-3 bg-transparent peer-checked:bg-secondary transition-all"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Al fresco dining under Gulberg evening skies accompanied by carved limestone fountains.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-sm">Open Air Cloister</span>
</div>
</label>
</div>
</div>
<div className="pt-space-md">
<div className="flex items-baseline justify-between mb-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-display-xl text-headline-sm text-secondary">02</span>
<span className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-[0.22em]">Date, Seating &amp; Party Size</span>
</div>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Service Times</span>
</div>
<div className="space-y-space-md">
<div>
<label className="block font-caption-folio text-caption-folio text-on-surface-variant uppercase tracking-[0.22em] mb-space-xs">Select Evening (Next 14 Days)</label>
<div className="grid grid-cols-4 sm:grid-cols-7 gap-2 overflow-x-auto pb-space-xs" id="date-scroll">
<button className="p-3 text-center bg-surface-container-high text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">TODAY</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">24</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
<button className="p-3 text-center bg-primary-container text-on-primary transition-colors" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-secondary-fixed">FRI</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">25</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-secondary-fixed">OCT</span>
</button>
<button className="p-3 text-center bg-surface-container-low text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">SAT</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">26</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
<button className="p-3 text-center bg-surface-container-low text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">SUN</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">27</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
<button className="p-3 text-center bg-surface-container-low text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">MON</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">28</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
<button className="p-3 text-center bg-surface-container-low text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">TUE</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">29</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
<button className="p-3 text-center bg-surface-container-low text-primary hover:bg-secondary hover:text-on-secondary transition-colors focus:bg-primary-container focus:text-on-primary" type="button">
<span className="block font-caption-folio text-[9px] uppercase tracking-wider text-outline">WED</span>
<span className="block font-headline-sm text-[20px] font-medium mt-1">30</span>
<span className="block font-caption-folio text-[9px] uppercase tracking-wider">OCT</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-caption-folio text-caption-folio text-on-surface-variant uppercase tracking-[0.22em] mb-space-xs">Seating Slot</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input defaultChecked className="sr-only peer" name="time_slot" type="radio" defaultValue="7:00 PM"/>
<div className="p-3 text-center bg-surface-container-low peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
<span className="block font-headline-sm text-[16px]">7:00 PM</span>
<span className="block font-caption-folio text-[9px] text-outline peer-checked:text-secondary-fixed uppercase">Sunset Seating</span>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="time_slot" type="radio" defaultValue="8:30 PM"/>
<div className="p-3 text-center bg-surface-container-low peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
<span className="block font-headline-sm text-[16px]">8:30 PM</span>
<span className="block font-caption-folio text-[9px] text-outline peer-checked:text-secondary-fixed uppercase">Prime Hearth</span>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="time_slot" type="radio" defaultValue="10:00 PM"/>
<div className="p-3 text-center bg-surface-container-low peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
<span className="block font-headline-sm text-[16px]">10:00 PM</span>
<span className="block font-caption-folio text-[9px] text-outline peer-checked:text-secondary-fixed uppercase">Nocturne Service</span>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="time_slot" type="radio" defaultValue="11:30 PM"/>
<div className="p-3 text-center bg-surface-container-low peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
<span className="block font-headline-sm text-[16px]">11:30 PM</span>
<span className="block font-caption-folio text-[9px] text-outline peer-checked:text-secondary-fixed uppercase">Late Communion</span>
</div>
</label>
</div>
</div>
<div>
<label className="block font-caption-folio text-caption-folio text-on-surface-variant uppercase tracking-[0.22em] mb-space-xs">Number of Guests</label>
<div className="grid grid-cols-6 gap-1 bg-surface-container-low p-2">
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all focus:bg-primary-container focus:text-on-primary"  type="button">1</button>
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all bg-primary-container text-on-primary"  type="button">2</button>
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all focus:bg-primary-container focus:text-on-primary"  type="button">3</button>
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all focus:bg-primary-container focus:text-on-primary"  type="button">4</button>
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all focus:bg-primary-container focus:text-on-primary"  type="button">6</button>
<button className="guest-btn h-10 flex items-center justify-center font-headline-sm text-[16px] text-primary hover:bg-surface transition-all focus:bg-primary-container focus:text-on-primary"  type="button">8+</button>
</div>
<input id="guest-count-input" name="guests" type="hidden" defaultValue="2"/>
<p className="font-body-sm text-[12px] text-outline mt-space-xs">For gatherings of 12 or more, kindly consult our private events concierge below.</p>
</div>
</div>
</div>
</div>
<div className="pt-space-md">
<div className="flex items-baseline justify-between mb-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-display-xl text-headline-sm text-secondary">03</span>
<span className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-[0.22em]">Guest Folio &amp; Preferences</span>
</div>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.2em]">Confidential</span>
</div>
<div className="space-y-space-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="relative">
<label className="block font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mb-1">Full Legal Name</label>
<input className="w-full bg-surface-container-low px-3 py-3 font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors" placeholder="Enter your full name" required type="text"/>
</div>
<div className="relative">
<label className="block font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mb-1">Email Dossier</label>
<input className="w-full bg-surface-container-low px-3 py-3 font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors" placeholder="Enter your email address" required type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mb-1">Contact Dial &amp; WhatsApp</label>
<div className="flex gap-2">
<select className="bg-surface-container-low px-2 py-3 font-body-sm text-on-surface focus:outline-none shrink-0">
<option value="+92">+92 (PK)</option>
<option value="+971">+971 (UAE)</option>
<option value="+44">+44 (UK)</option>
<option value="+1">+1 (US)</option>
</select>
<input className="w-full bg-surface-container-low px-3 py-3 font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors" placeholder="Enter your telephone number" required type="tel"/>
</div>
</div>
<div>
<label className="block font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mb-1">Occasion of Honor</label>
<select className="w-full bg-surface-container-low px-3 py-3 font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors">
<option value="Gastronomic Tasting">Gastronomic Tasting &amp; Heritage Repast</option>
<option value="Anniversary">Anniversary Commemoration</option>
<option value="Birthday">Birthday Celebration</option>
<option value="Corporate Hosting">Corporate &amp; Diplomatic Hosting</option>
<option value="Quiet Evening">Quiet Evening</option>
</select>
</div>
</div>
<div>
<label className="block font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mb-1">Dietary Nuances &amp; Special Accommodations</label>
<textarea className="w-full bg-surface-container-low p-3 font-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-colors resize-none" placeholder="Please specify spice tolerance, allergies (nuts, lactose, shellfish), or preferred seating orientation..." rows={3}></textarea>
</div>
</div>
</div>
<div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs text-outline">
<span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
<span className="font-caption-folio text-caption-folio uppercase tracking-[0.2em]">Instant Confirmation Via Concierge SMS</span>
</div>
<button className="w-full sm:w-auto h-[52px] px-space-xl bg-primary text-on-primary hover:bg-tertiary-container hover:text-secondary-fixed transition-all duration-300 font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase shadow-[0_4px_16px_rgba(42,33,27,0.15)] flex items-center justify-center gap-space-xs" type="submit">
<span>REQUEST A RESERVATION</span>
<span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
</button>
</div>
</form>
</div>
<div className="lg:col-span-4 space-y-space-md">
<div className="bg-primary text-on-primary p-space-md relative overflow-hidden shadow-[0_24px_64px_-12px_rgba(42,33,27,0.1)]">
<div className="space-y-space-sm relative z-10">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Immediate Engagement</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Concierge Desk</h3>
<p className="font-body-md text-body-md text-outline-variant">For same-evening seating, special bespoke menus, or urgent itinerary shifts, connect directly with our Maitre d&apos;Hotel.</p>
<div className="space-y-space-xs pt-space-xs">
<a className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors" href="tel:+924235789200">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">phone</span>
<span className="font-body-md font-medium tracking-wide">+92 42 3578 9200</span>
</a>
<a className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors" href="https://wa.me/924235789200">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
<span className="font-body-md font-medium tracking-wide">WhatsApp Desk (+92 42 3578 9200)</span>
</a>
</div>
</div>
</div>
<div className="bg-surface-container-high p-space-md space-y-space-sm">
<h4 className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-[0.22em]">Essential Protocol</h4>
<div className="space-y-space-xs">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">schedule</span>
<div>
<p className="font-caption-folio text-caption-folio text-on-surface uppercase tracking-[0.2em] font-semibold">Service Hours</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Daily dinner service from 7:00 PM to 1:00 AM exclusively. Kitchen commences final orders at 11:45 PM.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">apparel</span>
<div>
<p className="font-caption-folio text-caption-folio text-on-surface uppercase tracking-[0.2em] font-semibold">Dress Attire</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Elegant smart casual. Traditional tailored kurtas, bandhgalas, and evening jackets are warmly welcomed.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">local_parking</span>
<div>
<p className="font-caption-folio text-caption-folio text-on-surface uppercase tracking-[0.2em] font-semibold">Valet Sanctuary</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Complimentary white-glove valet attendants await at the Main Boulevard entrance portico.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">event_busy</span>
<div>
<p className="font-caption-folio text-caption-folio text-on-surface uppercase tracking-[0.2em] font-semibold">Cancellation Courtesy</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">We courteously ask for 6 hours advance notice to reallocate your reserved table to our evening waitlist.</p>
</div>
</div>
</div>
</div>
<div className="bg-surface-bright p-space-md flex items-center gap-space-sm shadow-[0_12px_32px_rgba(42,33,27,0.04)]">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
</div>
<div>
<p className="font-label-uppercase text-[10px] text-secondary uppercase tracking-[0.25em]">Mughal Gastronomy Code</p>
<p className="font-body-sm text-body-sm text-on-surface font-normal">Halal certified heritage sourcing, slow babool wood braising, hand-milled spices.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface py-space-xl">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="text-center max-w-xl mx-auto mb-space-lg">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Commitment to Service</span>
<h2 className="font-headline-md text-headline-md text-primary mt-space-xs">Reservation Policies</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Every repast at Junoon is crafted with monastic devotion to taste, ritual, and tranquil hospitality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-secondary-container/40 flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">timer</span>
</div>
<h4 className="font-headline-sm text-[20px] text-primary mb-space-xs">Table Duration</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Parties of 1–4 are allocated 1 hour 45 minutes; parties of 5+ are allocated 2 hours 30 minutes to savor every course without haste.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-md">Temporal Rhythm</span>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-secondary-container/40 flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">location_on</span>
</div>
<h4 className="font-headline-sm text-[20px] text-primary mb-space-xs">Location &amp; Entry</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Located along Gulberg II, Main Boulevard. Entrance through the brass archway portico with dedicated secure vehicle receiving.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-md">Arrival</span>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-secondary-container/40 flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">wine_bar</span>
</div>
<h4 className="font-headline-sm text-[20px] text-primary mb-space-xs">Artisanal Pairings</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our cellar presents artisanal wild botanical infusions, Kashmiri rooh cordials, and dry fermentations curated for every course.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-md">Beverage Philosophy</span>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-secondary-container/40 flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">lock_reset</span>
</div>
<h4 className="font-headline-sm text-[20px] text-primary mb-space-xs">Grace Period</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tables are preserved for 20 minutes past booking time before release to the waiting salon. Please notify concierge of transit delays.</p>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.2em] mt-space-md">Punctuality</span>
</div>
</div>
</div>
</section>
<section className="w-full bg-primary-container text-on-primary py-space-xl relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-7 space-y-space-md">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">Grand Festivities &amp; Corporate Receptions</span>
<h2 className="font-headline-lg text-headline-lg lg:text-[44px] text-on-primary leading-tight">PLANNING SOMETHING SPECIAL?</h2>
<p className="font-body-lg text-body-lg text-outline-variant max-w-xl">For parties of 12 or more, bespoke menus crafted directly with our Chef de Cuisine, or exclusive buyouts of our heritage chambers, discover our tailored private dining suites.</p>
<div className="pt-space-xs">
<a className="inline-flex items-center gap-space-xs text-secondary-fixed hover:text-on-primary transition-colors font-label-uppercase text-label-uppercase uppercase tracking-[0.25em]" href="/private-dining">
<span>EXPLORE PRIVATE DINING &amp; EVENTS</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/3] w-full overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.3)]">
<img alt="Junoon Private Dining Chamber" className="w-full h-full object-cover" data-alt="Lavish long imperial Mughal dining table setting with glowing candelabras, heavy woven brass charger plates, and floral centerpieces for an exclusive banquet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrU3ySjE8SpfK5JcKtlaW6zz2bMQG8dzR02XSYDw3t7c_Qs1_BfwMRTQ6Ki-yma6WO57t3Oq6OFnAwUn0XoFaPqGHz4cEbX46Dc12mP_0QM9gwrkIIBYdtztRQE6HK2b2nlJiasUEeC9puIo3aL3P1deMbbpu5cqtXOUxOPERY-4VQ4GFD2uuqFGUquPQpMQrwd-bk0wvO5EMKbrrZE4znEDTFWSg7Z0zkTZnXDo"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-surface p-space-sm hidden sm:block shadow-md">
<p className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Capacity</p>
<p className="font-headline-sm text-headline-sm text-primary">Up to 80 Guests</p>
</div>
</div>
</div>
</div>
</section>
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-md hidden" id="confirmation-modal">
<div className="bg-surface-bright max-w-lg w-full p-space-lg shadow-2xl relative">
<button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary"  type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
<div className="text-center space-y-space-sm">
<div className="w-16 h-16 mx-auto bg-secondary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[32px]">done</span>
</div>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Reservation Received</span>
<h3 className="font-headline-md text-headline-md text-primary">COMMUNION CONFIRMED</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Your table dossier has been relayed to our Gulberg Concierge. We have dispatched a formal confirmation to your contact details.</p>
<div className="p-space-sm bg-surface-container-low text-left space-y-1">
<p className="font-caption-folio text-[10px] text-outline uppercase tracking-wider">Arrival Dossier</p>
<p className="font-body-sm font-medium text-primary">Main Boulevard Portico • Complimentary Valet</p>
<p className="font-body-sm text-secondary">Inquiries: +92 42 3578 9200</p>
</div>
<div className="pt-space-xs">
<button className="w-full py-3 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-tertiary-container transition-colors"  type="button">
            CLOSE &amp; RETURN
          </button>
</div>
</div>
</div>
</div>

</div></main>
    </>
  );
}


