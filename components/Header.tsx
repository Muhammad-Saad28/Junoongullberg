"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Experience", href: "/experience" },
    { name: "Private Dining", href: "/private-dining" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const headerBgClass = scrolled
    ? "bg-[#1f130b]/95 backdrop-blur-md border-b border-[#7b581d]/30 shadow-md text-[#f5efe6]"
    : isHome
      ? "bg-transparent text-primary"
      : "bg-surface/95 backdrop-blur-md border-b border-secondary/20 shadow-sm text-primary";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass} h-20 lg:h-24`}>
        <div className="max-w-[1536px] mx-auto w-full h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between relative">

          {/* Mobile Hamburger (Left on Mobile, Hidden on Desktop) */}
          <div className="lg:hidden flex items-center">
            <button
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-1 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Logo Area: Centered on Mobile, Left on Desktop */}
          <div className="shrink-0 flex items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Link href="/" className="flex items-center">
              <img
                alt="Junoon Logo"
                className={`w-auto object-contain transition-all duration-300 ${isHome && !scrolled ? 'h-14 sm:h-16 lg:h-20' : 'h-12 sm:h-14 lg:h-16'}`}
                src="/logo.png"
              />
            </Link>
          </div>

          {/* Mobile Right CTA (Visible on Mobile only for immediate reservations) */}
          <div className="lg:hidden flex items-center">
            <Link
              href="/reservations"
              className={`px-3 py-1.5 border font-label-uppercase text-[10px] tracking-[0.2em] uppercase transition-all duration-300 font-semibold shadow-sm ${
                scrolled
                  ? "bg-secondary text-primary-fixed border-secondary hover:bg-secondary-fixed"
                  : "bg-primary text-secondary-fixed hover:bg-tertiary-container border-secondary/40"
              }`}
            >
              Book
            </Link>
          </div>

          {/* Nav Links (Desktop) - Shifted right to avoid overlapping brown bar */}
          <div className="hidden lg:flex items-center justify-end flex-1 pl-48 xl:pl-64 pr-8">
            <nav className="flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-label-uppercase text-[11px] xl:text-[12px] uppercase transition-colors tracking-[0.2em] font-semibold whitespace-nowrap ${pathname === link.href
                    ? "text-secondary-fixed"
                    : scrolled
                      ? "text-[#f3ede4] hover:text-secondary-fixed"
                      : "text-primary hover:text-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right CTA (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/reservations"
              className={`h-[42px] px-6 xl:px-7 border font-label-uppercase text-[11px] tracking-[0.22em] uppercase flex items-center justify-center transition-all duration-300 whitespace-nowrap shadow-sm font-semibold ${scrolled
                ? "bg-secondary text-primary-fixed border-secondary hover:bg-secondary-fixed hover:text-primary"
                : "bg-primary text-secondary-fixed hover:bg-tertiary-container hover:text-on-tertiary border-secondary/40"
                }`}
            >
              Reserve a Table
            </Link>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#160d08] text-[#ede5dc] z-40 transition-transform duration-500 lg:hidden pt-28 px-6 flex flex-col justify-between pb-8 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-[#d5a046]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d5a046] font-semibold">
              Junoon Gastronomy
            </span>
          </div>

          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-[26px] tracking-wide uppercase transition-colors flex items-center justify-between border-b border-[#7b581d]/20 pb-3 ${
                  pathname === link.href ? "text-[#ffd089]" : "text-[#ede5dc] hover:text-[#ffd089]"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#d5a046]">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Link
              href="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="h-[50px] w-full bg-gradient-to-r from-[#d5a046] to-[#b38a4a] text-[#180e07] font-label-uppercase text-[11px] tracking-[0.24em] uppercase flex items-center justify-center font-bold shadow-lg"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Mobile Menu Concierge Footer */}
        <div className="pt-8 border-t border-[#7b581d]/30 mt-8 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#a48e7e] font-light">Gulberg III, Lahore</span>
            <a href="tel:+924235789200" className="text-[#ffd089] font-medium">+92 42 3578 9200</a>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#a48e7e]">
            <span>Daily 7:00 PM – 1:00 AM</span>
            <a 
              href="https://wa.me/924235789200?text=Hello%20Junoon%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] font-semibold flex items-center gap-1"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
