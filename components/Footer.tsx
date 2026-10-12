import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0704] text-[#ede5dc] pt-16 sm:pt-20 pb-12 border-t border-[#7b581d]/30 relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[150px] bg-[#d5a046]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 border-b border-[#7b581d]/20 pb-12 sm:pb-16">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d5a046] font-semibold block">Gastronomic Heritage</span>
            <h2 className="font-display text-4xl text-[#ffd089] tracking-[0.2em] uppercase font-light">JUNOON</h2>
            <p className="text-[#a48e7e] text-sm leading-relaxed font-light">
              A sacred celebration of Pakistan&apos;s communal table, slow-fired over wild coals and steeped in Mughal culinary poetry.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <span className="text-[10px] text-[#ffd089] uppercase tracking-[0.28em] font-semibold block mb-5 border-l-2 border-[#d5a046] pl-3">
              Explore
            </span>
            <ul className="space-y-3">
              <li><Link href="/menu" className="text-xs uppercase tracking-[0.2em] text-[#cfbeae] hover:text-[#ffd089] transition-colors block">The Tasting Menu</Link></li>
              <li><Link href="/our-story" className="text-xs uppercase tracking-[0.2em] text-[#cfbeae] hover:text-[#ffd089] transition-colors block">Craft & Lineage</Link></li>
              <li><Link href="/experience" className="text-xs uppercase tracking-[0.2em] text-[#cfbeae] hover:text-[#ffd089] transition-colors block">Architectural Sanctuary</Link></li>
              <li><Link href="/private-dining" className="text-xs uppercase tracking-[0.2em] text-[#cfbeae] hover:text-[#ffd089] transition-colors block">The Royal Chambers</Link></li>
              <li><Link href="/contact" className="text-xs uppercase tracking-[0.2em] text-[#cfbeae] hover:text-[#ffd089] transition-colors block">Concierge & Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] text-[#ffd089] uppercase tracking-[0.28em] font-semibold block mb-5 border-l-2 border-[#d5a046] pl-3">
              Sanctuary Address
            </span>
            <address className="text-[#cfbeae] text-sm not-italic space-y-1 mb-5 font-light">
              <p className="font-medium text-white">Gulberg III, Main Boulevard</p>
              <p>Lahore, Punjab, Pakistan</p>
            </address>
            <div className="space-y-2 text-xs tracking-wider">
              <a href="tel:+924235789200" className="block text-[#d5a046] hover:text-[#ffe4b5] transition-colors font-medium">+92 42 3578 9200</a>
              <a href="mailto:reservations@junoon.pk" className="block text-[#a48e7e] hover:text-[#d5a046] transition-colors">reservations@junoon.pk</a>
              <a 
                href="https://wa.me/924235789200?text=Hello%20Junoon%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#52e88b] transition-colors font-semibold uppercase text-[11px] tracking-wider pt-1"
              >
                <span>💬 WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Hours & Action */}
          <div>
            <span className="text-[10px] text-[#ffd089] uppercase tracking-[0.28em] font-semibold block mb-5 border-l-2 border-[#d5a046] pl-3">
              Service Hours
            </span>
            <div className="text-[#cfbeae] text-xs space-y-1.5 mb-6 font-light">
              <p className="font-medium text-white">Daily Evening Service</p>
              <p className="text-sm text-[#ffd089]">7:00 PM – 1:00 AM</p>
              <p className="text-[#887060] text-[11px] italic">Kitchen orders close at 11:45 PM</p>
            </div>
            <Link 
              href="/reservations" 
              className="inline-flex w-full py-3.5 px-6 border border-[#d5a046]/50 text-[#ffd089] hover:bg-[#d5a046] hover:text-[#180e07] transition-all duration-300 text-[10px] tracking-[0.24em] uppercase font-semibold text-center items-center justify-center rounded-none shadow-md"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-[#887060] uppercase tracking-[0.2em] text-[10px]">
            &copy; 2026 Junoon Restaurant &bull; Gulberg, Lahore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] uppercase tracking-[0.24em] text-[#a48e7e] hover:text-[#ffd089] transition-colors">Instagram</a>
            <span className="text-[#7b581d]/40">&bull;</span>
            <a href="#" className="text-[10px] uppercase tracking-[0.24em] text-[#a48e7e] hover:text-[#ffd089] transition-colors">Facebook</a>
            <span className="text-[#7b581d]/40">&bull;</span>
            <a href="#" className="text-[10px] uppercase tracking-[0.24em] text-[#a48e7e] hover:text-[#ffd089] transition-colors">Private Dining</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
