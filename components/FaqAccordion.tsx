"use client";

import React, { memo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus, Minus, WhatsappLogo } from "@phosphor-icons/react";
import { FAQ_ITEMS } from "./legal-data";
import { buildWhatsAppUrl } from "@/lib/contact";

export const FaqAccordion = memo(function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
          Preguntas frecuentes resueltas sin tecnicismos
        </h2>
        <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
          Sabemos que consultar a un abogado genera inquietudes sobre costos, tiempos y alcance. Aquí respondemos con claridad las preguntas más habituales.
        </p>
      </div>

      {/* Pila vertical de acordeón de una sola columna (Single-Column Vertical Disclosure Stack) */}
      <div className="divide-y divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-6 sm:px-8">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-5">
              <h3>
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] rounded-lg py-1"
                >
                  <span className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                      isOpen
                        ? "border-[#c24b16] bg-[#c24b16] text-[#faf9f6]"
                        : "border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={15} weight="bold" />
                    ) : (
                      <Plus size={15} weight="bold" />
                    )}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-3 pr-8"
                  >
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            ¿Su inquietud involucra un plazo próximo a vencer?
          </p>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Escríbanos para verificar la fecha límite de respuesta (número de ejemplo / placeholder: el enlace no se comunicará con una firma real).
          </p>
        </div>
        <a
          href={buildWhatsAppUrl(
            "Hola, tengo una consulta con un plazo próximo a vencer y quisiera orientación inicial."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0e1e32] bg-[#0e1e32] px-5 py-2.5 text-xs font-semibold text-[#faf9f6] hover:bg-[#c24b16] hover:border-[#c24b16] active:scale-[0.98] transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
        >
          <WhatsappLogo size={17} weight="fill" />
          <span>Escribir por WhatsApp</span>
        </a>
      </div>
    </div>
  );
});
