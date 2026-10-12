"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function GalleryPage() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    const activeCountEl = document.getElementById('active-count');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetCategory = btn.getAttribute('data-filter');

        // Update button active states
        filterButtons.forEach(b => {
          const ind = b.querySelector('.indicator');
          if (b === btn) {
            b.classList.remove('text-outline-variant');
            b.classList.add('text-primary');
            if (ind) {
              ind.classList.remove('w-0');
              ind.classList.add('w-full');
            }
          } else {
            b.classList.remove('text-primary');
            b.classList.add('text-outline-variant');
            if (ind) {
              ind.classList.remove('w-full');
              ind.classList.add('w-0');
            }
          }
        });

        // Filter Grid Items with smooth display toggle
        let visibleCount = 0;
        items.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (targetCategory === 'all' || itemCat === targetCategory) {
            item.classList.remove('hidden');
            visibleCount++;
          } else {
            item.classList.add('hidden');
          }
        });

        // Update Counter
        if (activeCountEl) {
          activeCountEl.textContent = (visibleCount < 10 ? '0' + visibleCount : visibleCount) + ' Plates';
        }
      });
    });

    // Lightbox Micro-Interaction
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img') as HTMLImageElement;
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTag = document.getElementById('modal-tag');
    const modalLoc = document.getElementById('modal-loc');
    const modalClose = document.getElementById('modal-close-btn');

    items.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3');
        const desc = item.querySelector('p');
        const spans = item.querySelectorAll('div > span');

        if (modalImg && img) modalImg.src = img.src;
        if (modalTitle && title) modalTitle.textContent = title.textContent;
        if (modalDesc && desc) modalDesc.textContent = desc.textContent;
        if (modalTag && spans.length > 0) modalTag.textContent = spans[0].textContent;
        if (modalLoc && spans.length > 1) modalLoc.textContent = spans[1].textContent;

        if (modal) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  }, []);

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  Top Editorial Header & Curatorial Prologue  */}
<section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-md">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl space-y-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-8 h-[1px] bg-secondary"></span>
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Permanent Photographic Exhibition</span>
</div>
<h1 className="font-display-xl text-display-xl text-primary tracking-tight uppercase">THE JUNOON MOMENTS</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          A glimpse into the table, the kitchen, and the moments between. Captured on 35mm film across Lahore’s seasons of harvest, spice, and flame.
        </p>
</div>
{/*  Exhibition Folio / Curation Meta  */}
<div className="flex flex-col md:items-end space-y-1">
<span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-[0.25em]">Folio No. 04 / Archival Collection</span>
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.28em]">Gulberg II • Lahore • 31.5204° N, 74.3587° E</span>
</div>
</div>
{/*  Editorial Thin Divider  */}
<div className="w-full h-[1px] bg-secondary/30 mt-space-md"></div>
{/*  Curatorial Filter Navigation Strip  */}
<div className="w-full flex flex-wrap items-center justify-between gap-space-sm pt-space-sm pb-space-xs overflow-x-auto no-scrollbar">
<nav className="flex items-center gap-space-md" id="gallery-filter-bar">
<button className="gallery-filter-btn group relative pb-1 font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase text-primary transition-colors focus:outline-none" data-filter="all">
<span>All Works</span>
<span className="indicator absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary transition-all"></span>
</button>
<button className="gallery-filter-btn group relative pb-1 font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase text-outline-variant hover:text-primary transition-colors focus:outline-none" data-filter="cuisine">
<span>Cuisine &amp; Hearth</span>
<span className="indicator absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all group-hover:w-full"></span>
</button>
<button className="gallery-filter-btn group relative pb-1 font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase text-outline-variant hover:text-primary transition-colors focus:outline-none" data-filter="spaces">
<span>Architecture &amp; Spaces</span>
<span className="indicator absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all group-hover:w-full"></span>
</button>
<button className="gallery-filter-btn group relative pb-1 font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase text-outline-variant hover:text-primary transition-colors focus:outline-none" data-filter="craft">
<span>Craftsmanship &amp; Hands</span>
<span className="indicator absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all group-hover:w-full"></span>
</button>
<button className="gallery-filter-btn group relative pb-1 font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase text-outline-variant hover:text-primary transition-colors focus:outline-none" data-filter="gatherings">
<span>Private Gatherings</span>
<span className="indicator absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all group-hover:w-full"></span>
</button>
</nav>
{/*  Live Counter & Index  */}
<div className="hidden sm:flex items-center gap-space-xs font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">
<span>Displaying</span>
<span className="font-semibold text-primary" id="active-count">08 Plates</span>
<span>• Natural Light &amp; Embers</span>
</div>
</div>
</section>
{/*  Luxury Asymmetric Editorial Gallery Grid  */}
<section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
{/*  Grid System with Varied Aspect Ratios  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md lg:gap-space-lg items-start" id="gallery-container">
{/*  ITEM 1: Cast-Iron Karahi in Fire (Cuisine & Hearth) - Spans 7 cols, tall portrait/cinematic  */}
<div className="gallery-item md:col-span-7 group cursor-pointer" data-category="cuisine">
<div className="relative overflow-hidden bg-surface-container aspect-[4/5] md:aspect-[16/13] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Close chiaroscuro photograph of chef hands tossing cracked coriander seed and wild ginger slivers into a blazing cast-iron karahi over babool wood fire. Glowing orange sparks, dark charcoal soot, rich roasted tomato masala bubbling in amber ghee, museum quality high end culinary photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP5swzy1hSqwjuWdS-HHL2RGpdOZBXGezQE7TP9Jw-w89r5OPijlNJ6cuH1XkyU5AMtI0-qMdYtGR3BoA5gRumgLnfcmMItVuwxEuT5NQ6567e8D97zXS4ePOr0t5eQsT6pa3aL3fGx79L4PcO13evVZvdt63OMPWcyDvdf77kjGwoBAafnrZiuIVrvj9cKYYNsus20EP8QElewiMpaUX5LXQLDTN_dyRHo4dStrw"/>
{/*  Hairline Inset Antique Gold Frame on Hover  */}
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
{/*  Bottom Scrim & Editorial Caption  */}
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 01 • Live Hearth</span>
<span>Gulberg Sanctuary</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Tempering of the Karahi</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Wild mountain coriander meets 800-degree babool coals at peak service.</p>
</div>
</div>
</div>
{/*  ITEM 2: Terracotta Dining Hall (Architecture & Spaces) - Spans 5 cols, tall portrait  */}
<div className="gallery-item md:col-span-5 group cursor-pointer" data-category="spaces">
<div className="relative overflow-hidden bg-surface-container aspect-[4/5] md:aspect-[3/4] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Interior architectural view of JUNOON restaurant vaulted terracotta brick dining sanctuary in Gulberg Lahore. Dramatic warm candle chandeliers casting shadows over raw linen banquet tables, antique brass vessels, quiet monastic luxury editorial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDeEZs9pgGx02hSJYFUShZ375ymRfrVZsTa6WYN9jm9q3lDjkf7QN3BryyNhAmuxVCQ0VMxZi0hSWA-EEVAPW1fQAkZ2y0tW58z0mUlSetrlLpkWxpibag1CoSCGJzwgR4O6FkueWmsud4J2vK3vX_Fr74T5JVCLjN8FI_YN77xJ9TQlmxl1UFJElqhaGYibCGTQV2WkJrVgTl7oxPU3YICEf8Uf992SXa9QedK0"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 02 • Architecture</span>
<span>Central Nave</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Terracotta Vaults</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Exposed kiln brick acoustics, dampened for contemplative conversation.</p>
</div>
</div>
</div>
{/*  ITEM 3: Kunna Gosht in Earthen Pot (Cuisine & Hearth) - Spans 4 cols, square/intimate macro  */}
<div className="gallery-item md:col-span-4 group cursor-pointer" data-category="cuisine">
<div className="relative overflow-hidden bg-surface-container aspect-square shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Top down sensory macro photograph of authentic Kunna Gosht slow simmered in an unglazed clay handi pot. Velvety marrow-rich saffron gravy, tender lamb shank, edible gold leaf flake, delicate julienned ginger, unbleached linen background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8dpOTq0G3eBs6FdqTD5tZwG1IlrJgEhu73Vrjl-pjRzoYQVkbLqEEC_Dk13a7NIGCRdb6nviB8yUq009U4Han1g0tArzJZYLAalA0rl-BeKtnIy9qN-8X0UQ5WnwP4GQd8_2yX936KGztgdznWO1OAwTcWV72JE2CuDrqf_xOYsDXP_iERjeNQPzHLlDEkZ0e1TVi58dm_05_ZDAJ6DYT2tF3LJoT9r33UZkrUkQ"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 03 • Slow Craft</span>
<span>Chiniot Heritage</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Kunna Gosht in Raw Terracotta</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Simmered over seven hours sealed in subterranean earthen kilns.</p>
</div>
</div>
</div>
{/*  ITEM 4: Hand-Punched Brass Jaali Screen (Architecture & Spaces) - Spans 8 cols, wide landscape  */}
<div className="gallery-item md:col-span-8 group cursor-pointer" data-category="spaces">
<div className="relative overflow-hidden bg-surface-container aspect-[4/3] md:aspect-[16/9] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Intricate artisanal hand-punched solid brass jaali latticework partition inside JUNOON restaurant. Afternoon amber sun casting delicate geometric Mughal shadows across a raw limestone floor and polished teak credenza, fine architectural photograph." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz0jclARlzjavM2fz84Py1GOj-jUHRlZ5-4IvYzBIshgH9oFwt-dvxeHVSne9Z7Mz-vcnoEXXczS0d5XzYyIdJ0pUwdh6aCy0vZxXVUG_bQ0KYl0gi9zM07ARnV_4EpORGz-9WufNW7StPWB-Q_ytLjLE1gg_t0h_iSDEGCgnopqKbBuJn4IFm53gcM75KdBOCs5zkeW7QYRj_CD6vc4HHZj1zxkZgFxh7PPIj6qE"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 04 • Materiality</span>
<span>The West Screen</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Jaali of Solar Shadows</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Hand-hammered brass latticework separating sanctuary from twilight avenue.</p>
</div>
</div>
</div>
{/*  ITEM 5: Master Baker lifting Roghani Naan from Tandoor (Craftsmanship & Hands) - Spans 6 cols  */}
<div className="gallery-item md:col-span-6 group cursor-pointer" data-category="craft">
<div className="relative overflow-hidden bg-surface-container aspect-[4/5] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Authentic action portrait of veteran Pakistani naan baker using long iron curved skewers to retrieve a blistered golden roghani naan sprinkled with nigella seeds and brushed with melted cultured butter from the glowing mouth of an earthen tandoor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz6obmhaV06C7oBbtMeZ3aa5pPm6KykeybnIE8mWd_OPugf_pRslsJJn55WDN32oWY-_pILEh2GaPBy0b4GJPXeVHgthQ40CPGTkKIKD5PuJx3pUh-OkFOfAMUtnz0N88XD2TueJDh6Aul_rtgUULcj2T43oDgDDW2bmp7EW3cyUmrgkSbBXHo51Db80GNaF-t0bY91lB7Hwk0NabALwXnwOFKw-5V_2OUjbFVg5k"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 05 • Hearth Master</span>
<span>Tandoor Station</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Golden Roghani Lift</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Wild sourdough starter fed daily since 1994, fired in riverbank clay.</p>
</div>
</div>
</div>
{/*  ITEM 6: Private Dastarkhwan Chamber (Private Gatherings) - Spans 6 cols  */}
<div className="gallery-item md:col-span-6 group cursor-pointer" data-category="gatherings">
<div className="relative overflow-hidden bg-surface-container aspect-[4/5] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Opulent private dining Dastarkhwan chamber at JUNOON restaurant. Heavy crimson and unbleached raw silk bolsters, hand beaten brass thali plates and chased water carafes, fresh white jasmine garlands, soft lantern glow on antique Persian rugs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI14ETPJSBNfCc5j8dXZTgKextlrtqpfdmmCxkzR8HnlMojJCwBxiTiGKeWkD3fM4Mfz2nR-gtlToMsI23MHXvQQ2sh6_b7LfWSv4VFDvXfiUMQC7sUCqT6dlwFF84WW9KC07_Cd-VekmOlxWkZI0s71KHnOYsFeU91pTNPsUdUo41XaSJzcAu8_sAjBooEmnxQD_161U4NNWC1tZr2YaR0ktxdmfIshqflZExDuQ"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 06 • Feast Communion</span>
<span>The Dewan Suite</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">The Dastarkhwan Chamber</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Low seating arranged for sixteen patrons sharing twenty imperial courses.</p>
</div>
</div>
</div>
{/*  ITEM 7: Pouring Saffron Kahwa (Craftsmanship & Hands) - Spans 5 cols  */}
<div className="gallery-item md:col-span-5 group cursor-pointer" data-category="craft">
<div className="relative overflow-hidden bg-surface-container aspect-[3/4] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Steaming hot golden saffron and crushed green cardamom kahwa tea poured gracefully from an antique chased copper samovar kettle into delicate fluted ceramic cups. Fine steam rising, green pistachio and almond slivers floating, dark dramatic background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByrEBjNgcEjDnK6aZAURuUySFEisRHYFJOSDpB64sznb7EKKc-B3j2M4tOKcO_pyxxrN-eLyNXeawK4u7yZR4z6yO8RWGRl-Ha8AlmZMoPny6alh64TMv4Pwym6fa5pQ9ZhRuxrKwgnYJ15rzldHnEQNDd0MW8xSNkG9nP8X5-Yxj2KP0PJSkwVOXRp9VPFdAyGfg7YGOX0Oz0wNiRGDZ7BLu19Sd6Hz3lWpamtE0"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 07 • Hospitality Ritual</span>
<span>Tea Cellar</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Pouring the Saffron Kahwa</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">Steeped with Kashmiri saffron threads and raw mountain wildflower honey.</p>
</div>
</div>
</div>
{/*  ITEM 8: Twilight Courtyard & Water Rill (Architecture & Spaces) - Spans 7 cols  */}
<div className="gallery-item md:col-span-7 group cursor-pointer" data-category="spaces">
<div className="relative overflow-hidden bg-surface-container aspect-[16/10] shadow-md transition-all duration-700">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Atmospheric twilight photo of JUNOON outdoor courtyard garden in Lahore. Reflective stone water channel with floating jasmine blossoms, glowing unglazed diya oil lamps, silhouetted pomegranate trees, evening blue hour sky against warm ochre architecture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFJsaSfjFl60DIPmxqi_YPu1IG3nXL8yZiUDRpgJqdfyKDi3iFWPxv6F9E9f-cxgdk_wY_aqYGzN-Kq-qlBKy8dauJ_-IE4kO_pawY3Uy8wTKvaQNSjuwFaPHGS2RcPUD9o2m6h8bTNlf-2FHjefGr7dzjCAyD-3O6Kr6LhH_gcey70hYMFKuT-GqaZMQFD7yopGyIp1XUVK_YWkeqPVu855017D5C-EsInsLAxBw"/>
<div className="absolute inset-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ring-1 ring-secondary/50"></div>
<div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-primary/95 via-primary/60 to-transparent text-on-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
<div className="flex items-center justify-between text-secondary-fixed font-caption-folio text-caption-folio tracking-[0.28em] uppercase mb-1">
<span>Plate No. 08 • Courtyard</span>
<span>The Charbagh Waterway</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Twilight on the Jasmine Rill</h3>
<p className="font-body-sm text-body-sm text-outline-variant mt-1 line-clamp-1">The fragrant transition where pre-dinner contemplation begins under the stars.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Museum Curatorial Statement (Negative Space Breathing Section)  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-4 space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em]">Sensory Documentation</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">The Philosophy of the Open Lens</h2>
</div>
<div className="md:col-span-8 border-l border-secondary/30 pl-space-md lg:pl-space-lg space-y-space-sm">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Every dish served at JUNOON is ephemeral — consumed in fragrant minutes over shared laughter. This visual gallery serves as our permanent archive: the memory of heat, the geometry of carved marble, and the quiet devotion of artisans who treat culinary craft as devotion.
          </p>
<div className="flex items-center gap-space-lg pt-space-xs text-on-surface font-caption-folio text-caption-folio tracking-[0.25em] uppercase">
<span>Archivist • Bilal Tariq</span>
<span>Medium • 35mm Silver Gelatin</span>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Lightbox Modal (Accessible / Client-side interactive)  */}
<div className="fixed inset-0 z-50 hidden bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 transition-opacity duration-300" id="gallery-modal">
<button className="absolute top-6 right-6 lg:top-8 lg:right-12 text-on-primary hover:text-secondary-fixed flex items-center gap-space-xs font-label-uppercase text-label-uppercase tracking-[0.22em] uppercase focus:outline-none z-20" id="modal-close-btn">
<span>Close Folio</span>
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
<div className="max-w-5xl w-full flex flex-col md:flex-row bg-primary-container shadow-2xl overflow-hidden relative">
<div className="w-full md:w-2/3 max-h-[716px] md:max-h-[819px] flex items-center justify-center bg-black/40">
<img alt="Gallery preview" className="w-full h-full object-contain max-h-[768px]" id="modal-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfJSgCsuKLfyKlCpFkwrehqcK8sgV6nc8JVgl1aYNkXfH-A8giPLTYZ_aBy0y9ZZ8vQwI9b0tH3zMzxCDb_Y1HmJEqIu4qRrB-42YYvx5tNk45Pl6ksFOEcpY-kAVDf0jpe8PhgDzyqZF0aZZuq1Rzs1P2dBu5Wvev9bDE_5PZ_CM8-animBq3YNCgyASQ4Bz5fhNx8IR-y6Qc2jDSbWQJWOvWdiKdTm3ekLw_9jo"/>
</div>
<div className="w-full md:w-1/3 p-space-md lg:p-space-lg flex flex-col justify-between bg-primary-container text-on-primary">
<div className="space-y-space-sm">
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]" id="modal-tag">Plate Details</span>
<h4 className="font-headline-sm text-headline-sm text-on-primary" id="modal-title">Title</h4>
<p className="font-body-md text-body-md text-outline-variant" id="modal-desc">Description note detailing culinary techniques and provenance.</p>
</div>
<div className="pt-space-md border-t border-secondary/20 flex flex-col space-y-space-xs">
<span className="font-caption-folio text-caption-folio text-outline uppercase tracking-[0.25em]">Location</span>
<span className="font-body-sm text-body-sm text-on-primary" id="modal-loc">Sanctuary, Gulberg</span>
<a className="mt-space-sm inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-secondary-fixed hover:text-on-primary uppercase tracking-[0.22em]" href="/reservations">
<span>Reserve Table →</span>
</a>
</div>
</div>
</div>
</div>
{/*  Footer Transition Callout: Direct Conversion  */}
<section className="w-full bg-primary text-on-primary py-space-xl">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
<div className="max-w-3xl mx-auto space-y-space-md">
<div className="inline-flex items-center gap-space-xs">
<span className="w-6 h-[1px] bg-secondary-fixed"></span>
<span className="font-caption-folio text-caption-folio text-secondary-fixed uppercase tracking-[0.28em]">The Reality Beyond Imagery</span>
<span className="w-6 h-[1px] bg-secondary-fixed"></span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-primary uppercase tracking-tight">
          Experience it in person.<br/>Book your table for dinner tonight.
        </h2>
<p className="font-body-lg text-body-lg text-outline-variant max-w-xl mx-auto">
          The sound of smoldering charcoal, the aroma of crushed green cardamom, and the warmth of the Dastarkhwan cannot be photographed.
        </p>
{/*  Call to Action Cluster  */}
<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-center gap-space-md">
<a className="w-full sm:w-auto h-[52px] px-space-lg bg-secondary text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed shadow-md" href="/reservations">
            Reserve a Table
          </a>
<a className="w-full sm:w-auto h-[52px] px-space-lg border border-secondary/40 text-secondary-fixed font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-surface-container/10 hover:border-secondary" href="/menu">
            Explore The Tasting Menu
          </a>
</div>
<div className="pt-space-md flex items-center justify-center gap-space-md text-outline-variant font-caption-folio text-caption-folio uppercase tracking-[0.28em]">
<span>Service Hours: 7:00 PM – 12:30 AM Daily</span>
<span>•</span>
<span>Telephone Concierge: +92 42 3578 9200</span>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}

