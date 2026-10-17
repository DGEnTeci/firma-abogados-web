"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Scales,
  Briefcase,
  Users,
  Handshake,
  Bank,
  Gavel,
  CaretRight,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { PRACTICE_AREAS, type PracticeAreaItem, Z_INDEX_SCALE } from "./legal-data";

function renderPracticeIcon(iconName: PracticeAreaItem["iconName"]) {
  switch (iconName) {
    case "scales":
      return <Scales size={22} weight="regular" />;
    case "briefcase":
      return <Briefcase size={22} weight="regular" />;
    case "users":
      return <Users size={22} weight="regular" />;
    case "handshake":
      return <Handshake size={22} weight="regular" />;
    case "bank":
      return <Bank size={22} weight="regular" />;
    case "gavel":
      return <Gavel size={22} weight="regular" />;
  }
}

export const PracticeAreasInteractive = memo(function PracticeAreasInteractive() {
  const [selectedId, setSelectedId] = useState<string>(PRACTICE_AREAS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const selectedArea =
    PRACTICE_AREAS.find((area) => area.id === selectedId) ?? PRACTICE_AREAS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Columna izquierda: Lista interactiva de áreas de práctica (no cuadrícula de tarjetas) */}
      <div className="w-full lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c24b16] mb-3">
          ÁREAS DE PRÁCTICA
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
          Especialidades jurídicas explicadas con claridad
        </h2>
        <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
          Seleccione el área relacionada con su situación para conocer cómo le acompañamos y qué normas colombianas respaldan su caso.
        </p>

        <div
          role="tablist"
          aria-label="Especialidades jurídicas de Valdés & Rueda Abogados"
          className="mt-8 divide-y divide-[var(--border-subtle)]"
        >
          {PRACTICE_AREAS.map((area) => {
            const isSelected = area.id === selectedId;
            return (
              <div key={area.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  role="tab"
                  id={`tab-${area.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${area.id}`}
                  onClick={() => setSelectedId(area.id)}
                  className="group flex w-full items-start justify-between gap-4 text-left py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                        isSelected
                          ? "bg-[#c24b16] text-[#faf9f6]"
                          : "bg-[var(--surface-secondary)] text-[#c24b16] group-hover:bg-[#c24b16]/15"
                      }`}
                    >
                      {renderPracticeIcon(area.iconName)}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[#c24b16] transition-colors duration-200">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {area.shortSummary}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 text-[var(--text-muted)] ${
                      isSelected ? "rotate-90 text-[#c24b16]" : "group-hover:translate-x-0.5"
                    }`}
                  >
                    <CaretRight size={18} weight="bold" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      id={`panel-${area.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${area.id}`}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-3 ml-0 sm:ml-14 rounded-xl bg-[var(--surface-secondary)] p-5 border border-[var(--border-subtle)]"
                    >
                      <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                        {area.plainExplanation}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {area.typicalCases.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                          >
                            <CheckCircle
                              size={18}
                              weight="fill"
                              className="mt-0.5 shrink-0 text-[#c24b16]"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          Sustento: {area.legalAnchor}
                        </span>
                        <a
                          href="#consulta"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c24b16] hover:underline whitespace-nowrap"
                        >
                          <span>Consultar sobre esta área</span>
                          <ArrowRight size={14} weight="bold" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Columna derecha: Fotografía arquitectónica con tarjeta inferior de llamado a la acción */}
      <div className="w-full lg:col-span-5 lg:sticky lg:top-28">
        <div className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#0e1e32]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/practica-constitucional.jpg"
              alt="Claustro arquitectónico con columnas de piedra iluminadas por el sol en el centro histórico de Bogotá"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e32]/80 via-[#0e1e32]/15 to-transparent" />
          </div>

          <div
            className={`absolute bottom-5 left-5 right-5 ${Z_INDEX_SCALE.elevatedCard} rounded-xl bg-[var(--surface-elevated)] p-5 shadow-[0_16px_40px_rgba(14,30,50,0.22)] border border-[var(--border-subtle)]`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)]">
                  Enfoque seleccionado: {selectedArea.title}
                </p>
                <p className="mt-1 text-base font-semibold text-[var(--text-primary)] leading-snug">
                  Sus derechos explicados paso a paso antes de tomar decisiones.
                </p>
              </div>
              <a
                href="#consulta"
                aria-label="Agenda tu consulta jurídica"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c24b16] text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
              >
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
