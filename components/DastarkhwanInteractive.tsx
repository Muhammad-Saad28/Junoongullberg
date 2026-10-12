"use client";

import { useState } from "react";

const dastarkhwanData = [
  {
    step: "Ritual Phase I of V",
    title: "The Hand-Woven Khaddar",
    badge: "Heritage Handspun Khaddar • Multan Sourcing",
    desc: "Before the embers are fanned, the table is honored with unbleached organic khaddar runners, hand-pressed using centuries-old wooden blocks carved in Multan. The cloth cushions the communion, inviting touch and grounded reverence.",
    significance: "To unfurl the dastarkhwan is an ancient declaration: status ceases at the perimeter of the cloth. All who break bread here share identical dignity and abundance.",
    meta: "100% Unbleached Cotton & Pomegranate Dye",
    prompt: "Archival overhead photograph of handspun unbleached khaddar linen runner with traditional indigo and rust woodblock Mughal botanical motifs arranged on aged sandstone dining table",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt406GYXo39zizEkZ1j21jZyRT68zJVATXiWnby84UH7XTzVe0af9UZo0gR4Z_z88EcaAL1X_ZRsYe8ZPYNGvuY5cjbP1ZuwROBH3yr4i1nt7edbf3P4qaAeA6WWEFY0qczzOcxQ3KudwiErG2QXEI_QB4e-sMnU1RFIuzmBGRsmWlM2GeElmgEYEEdvPgQUU5cGFVEGnI6aI2eDcaYLdtj7zVO-lgOEehtLoou0g"
  },
  {
    step: "Ritual Phase II of V",
    title: "Hand-Hammered Lahori Brassware",
    badge: "Chiniot & Lahore Guilds • Pure Polished Brass",
    desc: "Individual brass thalis, heavy goblet carafes, and curved serving spoons beaten by traditional metalsmiths in the walled city of Lahore. Brass retains both temperature and ancient ceremonial presence.",
    significance: "According to royal Unani medicinal traditions, warm food shared from beaten brass imparts grounding elemental vitality and antimicrobial purity.",
    meta: "Hand-Beaten Heavy Gauge Brass & Tinning",
    prompt: "Artisanal photograph of hand-hammered shiny Lahori brass plates, engraved goblets, and antique cutlery catching warm dining room candlelight",
    img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200" // using placeholder because image src wasn't in the provided snippet
  },
  {
    step: "Ritual Phase III of V",
    title: "Tandoor Breads & Stone Chutneys",
    badge: "Fresh From Multani Clay Kiln • 800°C Heat",
    desc: "Steaming Roghani Naans glistening with melted makhan and toasted nigella seeds, served alongside heirloom stone-ground chutneys: roasted pomegranate anardana, fresh mountain mint, and tamarind chutney in miniature clay degchis.",
    significance: "Bread is sacred life (rizq). It is broken by hand and passed clockwise around the table before any meat or curry is tasted.",
    meta: "Freshly Milled Wheat & Cold-Pressed Sesame",
    prompt: "Overhead shot of steaming golden blistered Roghani naan bread dusted with black nigella seeds beside small clay degchi bowls of bright green mint chutney and deep red pomegranate relish",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1200"
  },
  {
    step: "Ritual Phase IV of V",
    title: "Sizzling Karahi & Angaar Skewers",
    badge: "Indus River Valley • Cast Iron & Babool Charcoal",
    desc: "The crescendo of the meal: hand-hammered iron karahis crackling with ginger juliennes and lamb fat, balanced by skewers of smoked mutton seekh kebabs and saffron-tinged Zarbaad rice steaming with cardamom.",
    significance: "Placed precisely in the communal center of the dastarkhwan, encouraging shared serving, conversation, and simultaneous indulgence.",
    meta: "Black Forged Iron, Live Embers & Rock Salt",
    prompt: "Dramatic high contrast food photograph of sizzling iron wok karahi with red curry sauce, ginger juliennes, and skewers of charred seekh kebabs placed on communal table",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    step: "Ritual Phase V of V",
    title: "Digestif: Saffron Kahwa & Rooh-Afza Lassi",
    badge: "Peshawari Green Tea • Wild Mountain Saffron",
    desc: "The ritual concludes in tranquil repose. Long-spouted brass samovars pour fragrant cardamom and cinnamon Kahwa alongside miniature clay kulhars of chilled rose lassi perfumed with crushed pistachios.",
    significance: "A gentle benediction thanking the earth and kitchen for nourishment, easing digestion and prolonging intimate table conversation.",
    meta: "Swat Green Tea, Cardamom & Crushed Nuts",
    prompt: "Traditional brass samovar pouring steaming amber saffron Kahwa tea into glass cups with slivered almonds and cardamoms beside a chilled rose lassi in a clay kulhar cup",
    img: "https://images.unsplash.com/photo-1576092762791-dd9e2220c4af?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function DastarkhwanInteractive() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % dastarkhwanData.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + dastarkhwanData.length) % dastarkhwanData.length);

  const data = dastarkhwanData[currentStep];

  return (
    <section className="w-full py-space-xl bg-surface-container-low text-on-surface" id="dastarkhwan">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl pb-space-md border-b border-secondary/20">
          <div>
            <span className="font-caption-folio text-caption-folio uppercase tracking-[0.28em] text-secondary">
              Communal Ritual • The Sequence
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface uppercase tracking-tight mt-space-xs">
              The Dastarkhwan
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg italic">
            “Where food becomes memory, and every dish carries the breath of our ancestors.”
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-space-lg">
          {[
            { label: "Step I", title: "The Foundation" },
            { label: "Step II", title: "The Brassware" },
            { label: "Step III", title: "Bread & Chutneys" },
            { label: "Step IV", title: "Fire & Karahi" },
            { label: "Step V", title: "The Digestif" },
          ].map((btn, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`text-left p-space-sm transition-all ${
                index === currentStep 
                  ? "bg-surface-container border-b-2 border-secondary"
                  : "bg-surface border-b-2 border-transparent hover:bg-surface-container"
              }`}
            >
              <span className={`font-caption-folio text-caption-folio uppercase block mb-1 ${
                index === currentStep ? "text-secondary" : "text-outline"
              }`}>{btn.label}</span>
              <span className="font-headline-sm text-[16px] leading-5 text-on-surface block font-normal">{btn.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface p-space-md lg:p-space-lg shadow-sm">
          <div className="lg:col-span-7 relative overflow-hidden bg-surface-container aspect-[4/3] w-full">
            <img 
              key={currentStep} // forces re-render/animation
              className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]" 
              src={data.img}
              alt={data.prompt}
            />
            <div className="absolute bottom-4 left-4 bg-primary/85 backdrop-blur-md px-space-sm py-1 border border-secondary/30">
              <span className="font-caption-folio text-caption-folio uppercase text-secondary-fixed tracking-[0.24em]">
                {data.badge}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between py-space-sm">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-caption-folio text-caption-folio uppercase tracking-[0.28em] mb-space-sm">
                <span>{data.step}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-sm">
                {data.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md min-h-[100px]">
                {data.desc}
              </p>
              <div className="bg-surface-container-low p-space-md mb-space-md border-l border-secondary">
                <h4 className="font-caption-folio text-caption-folio uppercase text-secondary tracking-[0.22em] mb-1">Ritual Significance</h4>
                <p className="font-body-sm text-body-sm text-on-surface">
                  {data.significance}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-md border-t border-secondary/15">
              <div>
                <span className="font-caption-folio text-caption-folio text-outline uppercase block">Vessel &amp; Texture</span>
                <span className="font-label-uppercase text-label-uppercase text-primary font-semibold">{data.meta}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevStep}
                  aria-label="Previous step" 
                  className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">west</span>
                </button>
                <button 
                  onClick={nextStep}
                  aria-label="Next step" 
                  className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
