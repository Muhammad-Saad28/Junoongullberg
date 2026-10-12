"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  // Official Junoon Concierge WhatsApp link with prefilled booking inquiry
  const phoneNumber = "924235789200";
  const defaultMessage = encodeURIComponent(
    "Hello Junoon Restaurant, I would like to inquire about a table reservation."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip / Label for Desktop */}
      <div
        className={`hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#1b120a]/95 backdrop-blur-md border border-[#7b581d]/40 text-[#ede5dc] text-[11px] font-medium tracking-wider uppercase shadow-xl transition-all duration-300 pointer-events-none select-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse mr-2" />
        <span className="text-[#ffd089] mr-1">WhatsApp</span> Concierge
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Junoon Restaurant on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-[#ffd089]/60 hover:ring-[#ffd089]"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none [animation-duration:3s]" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-current drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-2.399-1.2-2.823-1.287-3.227-.688l-.582.79c-.292.408-.59.458-1.126.192-.536-.265-2.072-.763-3.95-2.437-1.456-1.298-2.44-2.901-2.726-3.392-.286-.49-.03-.756.237-1.022.24-.24.536-.622.803-.933.268-.31.357-.532.536-.888.179-.355.09-.665-.045-.932-.134-.267-1.127-2.716-1.545-3.722-.407-.98-.82-.847-1.126-.862-.29-.015-.624-.018-.958-.018s-.877.125-1.334.624c-.457.5-1.748 1.708-1.748 4.162s1.79 4.827 2.038 5.16c.248.334 3.522 5.378 8.533 7.542 1.192.515 2.123.823 2.848 1.054 1.198.38 2.288.327 3.15.198.96-.143 2.95-1.205 3.367-2.37.417-1.165.417-2.164.293-2.37-.123-.207-.46-.33-.972-.586z" />
          <path d="M12.004 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.483 1.331 5.002L2 22l5.161-1.312c1.464.798 3.116 1.22 4.843 1.22 5.518 0 9.994-4.476 9.994-9.993 0-5.517-4.476-10.015-9.994-10.015zm0 18.286c-1.536 0-3.04-.413-4.35-1.194l-.312-.185-3.23.821.862-3.148-.204-.326c-.859-1.368-1.312-2.955-1.312-4.582 0-4.595 3.738-8.333 8.336-8.333 4.597 0 8.335 3.738 8.335 8.333 0 4.595-3.738 8.336-8.335 8.336z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#180e08] border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
        </span>
      </a>
    </aside>
  );
}
