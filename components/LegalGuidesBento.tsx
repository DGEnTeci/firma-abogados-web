"use client";

import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  BookOpenText,
  ArrowUpRight,
  Clock,
  CheckCircle,
  X,
  ArrowRight,
} from "@phosphor-icons/react";
import { LEGAL_GUIDES, type LegalGuide, Z_INDEX_SCALE } from "./legal-data";

export const LegalGuidesBento = memo(function LegalGuidesBento() {
  const [activeGuide, setActiveGuide] = useState<LegalGuide | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!activeGuide) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGuide(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGuide]);

  const featuredGuide = LEGAL_GUIDES[0];
  const secondaryGuides = LEGAL_GUIDES.slice(1);

  return (
    <div>
      {/* Cuadrícula Bento asimétrica de 3 celdas (1 destacada + 2 apiladas) para 3 guías */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Celda 1 (Destacada): ocupa 7 columnas en escritorio */}
        <article className="w-full lg:col-span-7 flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] overflow-hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e1e32]">
            <Image
              src={featuredGuide.image}
              alt={featuredGuide.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[#c24b16]">
                  {featuredGuide.category}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 font-mono">
                  <Clock size={14} weight="regular" />
                  {featuredGuide.readTime}
                </span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--text-primary)] leading-snug">
                {featuredGuide.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-[62ch]">
                {featuredGuide.summary}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {featuredGuide.updatedDate}
              </span>
              <button
                type="button"
                onClick={() => setActiveGuide(featuredGuide)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0e1e32] px-4 py-2 text-xs font-semibold text-[#faf9f6] hover:bg-[#c24b16] active:scale-[0.98] transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
              >
                <BookOpenText size={16} weight="regular" />
                <span>Leer guía práctica</span>
              </button>
            </div>
          </div>
        </article>

        {/* Celdas 2 y 3 (Apiladas): ocupan 5 columnas en escritorio con variación de superficie */}
        <div className="w-full lg:col-span-5 flex flex-col gap-6">
          {secondaryGuides.map((guide, index) => (
            <article
              key={guide.id}
              className={`flex flex-1 flex-col justify-between rounded-xl border border-[var(--border-subtle)] overflow-hidden ${
                index === 0
                  ? "bg-[var(--surface-secondary)]"
                  : "bg-[#0e1e32] text-[#f8f7f3]"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                <div className="relative aspect-[16/10] sm:aspect-auto sm:col-span-5 w-full min-h-[180px]">
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div
                      className={`flex items-center gap-2 text-xs ${
                        index === 0 ? "text-[var(--text-muted)]" : "text-[#cbd2dc]"
                      }`}
                    >
                      <span className="font-semibold text-[#c24b16]">
                        {guide.category}
                      </span>
                      <span>·</span>
                      <span className="font-mono">{guide.readTime}</span>
                    </div>
                    <h3
                      className={`mt-2 text-base sm:text-lg font-semibold leading-snug ${
                        index === 0 ? "text-[var(--text-primary)]" : "text-[#f8f7f3]"
                      }`}
                    >
                      {guide.title}
                    </h3>
                    <p
                      className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                        index === 0 ? "text-[var(--text-secondary)]" : "text-[#cbd2dc]"
                      }`}
                    >
                      {guide.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveGuide(guide)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] rounded ${
                        index === 0 ? "text-[#c24b16]" : "text-[#faf9f6]"
                      }`}
                    >
                      <span>Leer guía práctica</span>
                      <ArrowUpRight size={15} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal accesible para lectura completa de la guía en lenguaje claro */}
      <AnimatePresence>
        {activeGuide && (
          <div
            className={`fixed inset-0 ${Z_INDEX_SCALE.modalBackdrop} flex items-center justify-center p-4 sm:p-6 bg-[#091524]/75 backdrop-blur-sm`}
            onClick={() => setActiveGuide(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="guide-dialog-title"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative ${Z_INDEX_SCALE.modalDialog} w-full max-w-2xl max-h-[88dvh] overflow-y-auto rounded-xl bg-[var(--surface-elevated)] p-6 sm:p-8 border border-[var(--border-subtle)] shadow-2xl`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#c24b16]">
                    {activeGuide.category} · {activeGuide.readTime}
                  </span>
                  <h3
                    id="guide-dialog-title"
                    className="mt-1 text-xl sm:text-2xl font-semibold text-[var(--text-primary)] leading-snug"
                  >
                    {activeGuide.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGuide(null)}
                  aria-label="Cerrar guía jurídica"
                  className="rounded-lg p-2 text-[var(--text-muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              <div className="mt-6 space-y-5 text-sm text-[var(--text-secondary)] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    ¿Cuándo aplica esta figura jurídica?
                  </h4>
                  <p className="mt-1">{activeGuide.fullContent.whenApplies}</p>
                </div>

                <div className="rounded-xl bg-[var(--surface-secondary)] p-4 border border-[var(--border-subtle)]">
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Términos y plazos legales en Colombia
                  </h4>
                  <p className="mt-1 font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                    {activeGuide.fullContent.keyDeadlines}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Recomendaciones prácticas antes de radicar
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {activeGuide.fullContent.practicalChecklist.map((step) => (
                      <li key={step} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-[#c24b16]"
                        />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-4">
                  Nota orientativa: {activeGuide.fullContent.constitutionalNote} Este resumen es informativo y no reemplaza el análisis formal de su expediente.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveGuide(null)}
                  className="rounded-full border border-[var(--border-subtle)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] whitespace-nowrap"
                >
                  Cerrar lectura
                </button>
                <a
                  href="#consulta"
                  onClick={() => setActiveGuide(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#c24b16] px-5 py-2.5 text-xs font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Agenda tu consulta</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});
