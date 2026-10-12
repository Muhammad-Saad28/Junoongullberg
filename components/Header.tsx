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
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass} h-24`}>
        <div className="max-w-[1536px] mx-auto w-full h-full px-6 lg:px-12 flex items-center justify-between">

          {/* Mobile Hamburger (Hidden on Desktop) */}
          <div className="lg:hidden w-[80px] flex justify-center items-center h-full">
            <button
              className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? 'bg-[#f5efe6]' : 'bg-primary'} transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Logo Area */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                alt="Junoon Logo"
                className={`w-auto object-contain transition-all duration-300 ${isHome && !scrolled ? 'h-16 lg:h-20' : 'h-14 lg:h-16'}`}
                src="/logo.png"
              />
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

          {/* Right CTA */}
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
        className={`fixed inset-0 bg-surface z-40 transition-transform duration-500 xl:hidden pt-32 px-margin-mobile flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-space-md mt-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-headline-sm text-[28px] uppercase ${pathname === link.href ? "text-secondary" : "text-primary"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-space-md pt-space-md border-t border-secondary/20">
            <Link
              href="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="h-[52px] w-full bg-primary text-secondary-fixed font-label-uppercase text-label-uppercase tracking-[0.24em] uppercase flex items-center justify-center transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
