"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function ArticleFAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-10 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-[#E2D7CC] bg-[#EFE8E0] overflow-hidden transition-all duration-300 hover:border-[#F28C18]/40 shadow-xs"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 bg-[#EFE8E0] hover:bg-[#ECE3D9] transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#F28C18] shrink-0" />
                <span className="font-bold text-base sm:text-lg text-[#171717]">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#626262] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-[#F28C18]" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 py-5 text-[#626262] text-sm sm:text-base leading-relaxed bg-[#FAF6F1] border-t border-[#E2D7CC]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
