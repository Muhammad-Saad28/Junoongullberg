"use client";

import { useState } from "react";
import { FadeIn } from "./AnimationPrimitives";

export default function HomePageReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Simulate network request
    setTimeout(() => {
      // In a real app, this would be an API call
      // Example: await fetch('/api/reservations', { method: 'POST', body: ... })
      
      // Simulate successful submission
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <FadeIn className="bg-surface p-space-md lg:p-space-lg text-center border-l-4 border-secondary shadow-lg">
        <div className="w-16 h-16 mx-auto bg-secondary/10 flex items-center justify-center mb-space-sm rounded-full">
          <span className="material-symbols-outlined text-secondary text-[32px]">done</span>
        </div>
        <span className="font-caption-folio text-caption-folio text-secondary uppercase tracking-[0.28em] block mb-2">Reservation Received</span>
        <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">COMMUNION CONFIRMED</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
          Your table dossier has been relayed to our Gulberg Concierge. We look forward to welcoming you.
        </p>
      </FadeIn>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="border-b border-[#7b581d]/30 pb-4">
        <span className="text-[10px] uppercase text-[#d5a046] tracking-[0.28em] block font-semibold">
          Step 1 • Reserve Details
        </span>
        <h3 className="font-display text-2xl text-white font-normal mt-1">Select Dining Experience</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { id: 'main_hall', label: 'Atmospheric', name: 'Grand Dining Hall', checked: true },
          { id: 'dastarkhwan', label: 'Traditional', name: 'Private Chamber', checked: false },
          { id: 'courtyard', label: 'Open Sky', name: 'Star-Lit Courtyard', checked: false },
        ].map((opt) => (
          <label key={opt.id} className="cursor-pointer">
            <input defaultChecked={opt.checked} className="peer sr-only" name="experience_tier" type="radio" defaultValue={opt.id} />
            <div className="p-3.5 border border-[#7b581d]/30 bg-black/30 peer-checked:border-[#ffd089] peer-checked:bg-[#2e1d13] transition-all rounded-xl">
              <span className="text-[10px] uppercase text-[#d5a046] tracking-wider block mb-1">{opt.label}</span>
              <span className="text-xs text-[#ede5dc] block font-medium tracking-wide">{opt.name}</span>
            </div>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
        <div>
          <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-1.5 font-medium">Date of Visit</label>
          <input className="w-full bg-[#120b07] border border-[#7b581d]/40 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#ffd089] focus:outline-none transition-colors" required type="date" />
        </div>
        <div>
          <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-1.5 font-medium">Party Size</label>
          <select className="w-full bg-[#120b07] border border-[#7b581d]/40 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#ffd089] focus:outline-none transition-colors">
            <option value="2">2 Guests (Intimate Table)</option>
            <option value="4">4 Guests (Standard Dastarkhwan)</option>
            <option value="6">6 Guests (Family Table)</option>
            <option value="8">8 Guests (Feast Table)</option>
            <option value="12">12 Guests (Private Chamber)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-2 font-medium">Seating Service</label>
        <div className="grid grid-cols-3 gap-3">
          {[{ id: '1930', label: '7:30 PM', checked: true }, { id: '2130', label: '9:30 PM', checked: false }, { id: '2300', label: '11:00 PM', checked: false }].map((s) => (
            <label key={s.id} className="cursor-pointer">
              <input defaultChecked={s.checked} className="peer sr-only" name="slot" type="radio" defaultValue={s.id} />
              <div className="py-2.5 text-center border border-[#7b581d]/30 bg-black/30 peer-checked:border-[#ffd089] peer-checked:bg-[#2e1d13] text-[#cfbeae] peer-checked:text-[#ffd089] rounded-lg transition-all">
                <span className="text-xs uppercase font-medium tracking-wider">{s.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
        <div>
          <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-1.5 font-medium">Primary Guest Full Name</label>
          <input className="w-full bg-[#120b07] border border-[#7b581d]/40 rounded-lg px-3.5 py-2.5 text-white placeholder-[#7a6a5e] text-sm focus:border-[#ffd089] focus:outline-none transition-colors" placeholder="Enter your full name" required type="text" />
        </div>
        <div>
          <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-1.5 font-medium">Telephone Number</label>
          <input className="w-full bg-[#120b07] border border-[#7b581d]/40 rounded-lg px-3.5 py-2.5 text-white placeholder-[#7a6a5e] text-sm focus:border-[#ffd089] focus:outline-none transition-colors" placeholder="Enter your telephone number" required type="tel" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase text-[#c4b5a5] tracking-widest mb-1.5 font-medium">Special Occasion or Dietary Wishes</label>
        <input className="w-full bg-[#120b07] border border-[#7b581d]/40 rounded-lg px-3.5 py-2.5 text-white placeholder-[#7a6a5e] text-sm focus:border-[#ffd089] focus:outline-none transition-colors" placeholder="Anniversary banquet, low chili preference, etc." type="text" />
      </div>

      {status === "error" && (
        <div className="text-red-400 text-xs text-center pt-2">
          {errorMsg || "An error occurred while submitting your reservation. Please try again."}
        </div>
      )}

      <div className="pt-2">
        <button 
          className="w-full h-[52px] bg-gradient-to-r from-[#d5a046] to-[#b38a4a] text-[#180e07] hover:brightness-110 font-bold text-xs uppercase tracking-[0.24em] transition-all flex items-center justify-center gap-2 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Confirm Reservation</span>
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
