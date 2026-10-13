"use client";

export default function WhatsAppButton() {
  // Official Junoon Concierge WhatsApp link with prefilled booking inquiry
  const phoneNumber = "924235789200";
  const defaultMessage = encodeURIComponent(
    "Hello Junoon Restaurant, I would like to inquire about a table reservation."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Junoon Restaurant on WhatsApp"
        title="Chat with Junoon Concierge on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1c120a] hover:bg-[#291b0f] text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(123,88,29,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#7b581d]/50 ring-2 ring-[#ffd089]/40 hover:ring-[#ffd089] group"
      >
        {/* Warm Gold Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#ffd089]/20 animate-ping pointer-events-none [animation-duration:3s]" />

        {/* Official WhatsApp SVG Logo (Zero Green — Luxury Gold on Deep Brown) */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Warm Royal Gold Speech Bubble with Tail */}
          <path
            fill="#ffd089"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"
          />
          {/* Deep Charcoal Brown Handset */}
          <path
            fill="#1c120a"
            d="M17.47 14.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.67-.52-.18-.01-.38-.01-.58-.01s-.53.08-.8.38c-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"
          />
        </svg>

        {/* Online Status Dot in Gold */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#180e08] border-2 border-[#1c120a] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#ffd089]" />
        </span>
      </a>
    </aside>
  );
}
