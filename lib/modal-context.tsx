"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  quoteOpen: boolean;
  assessmentOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
  openAssessment: () => void;
  closeAssessment: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        quoteOpen,
        assessmentOpen,
        openQuote: () => setQuoteOpen(true),
        closeQuote: () => setQuoteOpen(false),
        openAssessment: () => setAssessmentOpen(true),
        closeAssessment: () => setAssessmentOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
}
