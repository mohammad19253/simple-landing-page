"use client";

import { createContext, useContext, useState } from "react";
import { Add, AddCircle, Minus } from "iconsax-react";
type AccordionContextType = {
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export const useAccordion = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion must be used inside provider");
  return ctx;
};

export function Accordion({ children }: { children: React.ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="space-y-3">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {children}
    </div>
  );
}

export function AccordionTrigger({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  const { openIndex, setOpenIndex } = useAccordion();
  const isOpen = openIndex === index;

  return (
    <button
      onClick={() => setOpenIndex(isOpen ? null : index)}
      className="w-full flex items-center justify-between px-4 py-3 text-right cursor-pointer"
    >
      <span className="text-sm font-medium text-gray-800">{title}</span>

      <span className="text-gray-500">
        {isOpen ? <Minus size={24} color="black" /> : <AddCircle size={24} color="black" />}
      </span>
    </button>
  );
}

export function AccordionContent({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const { openIndex } = useAccordion();
  const isOpen = openIndex === index;

  return (
    <div
      className={`px-4 text-sm text-gray-600 transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-40 py-2" : "max-h-0 py-0"
      }`}
    >
      {children}
    </div>
  );
}
