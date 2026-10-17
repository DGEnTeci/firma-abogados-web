"use client";

import React, { memo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Quotes, CaretLeft, CaretRight, Scales } from "@phosphor-icons/react";
import { TESTIMONIALS_PLACEHOLDER } from "./legal-data";

export const TestimonialsSection = memo(function TestimonialsSection() {
  /* PLACEHOLDER: Estado del carrusel de testimonios ficticios de ejemplo */
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const current = TESTIMONIALS_PLACEHOLDER[index];

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? TESTIMONIALS_PLACEHOLDER.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev === TESTIMONIALS_PLACEHOLDER.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            Relatos de orientación (Ejemplos / Placeholders)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-[62ch]">
            Nota visible: Los siguientes textos y nombres son ejemplos ficticios de diseño (placeholders) para ilustrar cómo explicamos cada caso. No corresponden a testimonios de clientes reales.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Ver ejemplo anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[#c24b16] hover:text-[#c24b16] active:scale-[0.98] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Ver siguiente ejemplo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[#c24b16] hover:text-[#c24b16] active:scale-[0.98] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>

      {/* Escenario editorial centrado de foco único (Single-Focus Editorial Quote Stage) */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] overflow-hidden">
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#c24b16]/12 text-[#c24b16]">
              <Quotes size={22} weight="fill" />
            </span>
            <span className="rounded-full bg-[var(--surface-secondary)] px-3.5 py-1 font-mono text-xs font-semibold text-[#c24b16] border border-[var(--border-subtle)]">
              {current.badge}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <p className="text-lg sm:text-xl text-[var(--text-primary)] leading-relaxed line-clamp-3">
                “{current.quote}”
              </p>
              <footer className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {current.authorName}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {current.authorRole}
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {current.caseContext}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Epígrafe constitucional horizontal en la base del escenario */}
        <div className="bg-[var(--surface-secondary)] px-6 py-4 sm:px-10 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-primary)]">
            <Scales size={18} weight="regular" className="shrink-0 text-[#c24b16]" />
            <span>
              “El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas.”
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
            Artículo 29, Constitución Política de 1991
          </span>
        </div>
      </div>
    </div>
  );
});
