"use client";

import React, { memo, useState } from "react";
import { Bank, List, X, ArrowRight } from "@phosphor-icons/react";
import { Z_INDEX_SCALE } from "./legal-data";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "La Firma", href: "#firma" },
  { label: "Áreas de Práctica", href: "#areas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Guías Claras", href: "#guias" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export const HeaderNav = memo(function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 ${Z_INDEX_SCALE.stickyHeader} w-full border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]/95 backdrop-blur-md`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] rounded-lg"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e1e32] text-[#f8f7f3]">
            <Bank size={22} weight="regular" />
          </span>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight leading-tight whitespace-nowrap">
              Valdés &amp; Rueda
            </span>
            <span className="text-xs text-[var(--text-muted)] leading-tight whitespace-nowrap">
              Abogados en Bogotá
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex lg:items-center lg:gap-7"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="#consulta"
            className="inline-flex items-center gap-2 rounded-full bg-[#c24b16] px-5 py-2.5 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] focus-visible:ring-offset-2"
          >
            <span>Agenda tu consulta</span>
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="inline-flex lg:hidden items-center justify-center rounded-lg p-2.5 text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
        >
          {mobileMenuOpen ? <X size={24} weight="regular" /> : <List size={24} weight="regular" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--surface-primary)] px-4 pt-3 pb-6">
          <nav aria-label="Navegación móvil" className="flex flex-col space-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#consulta"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c24b16] px-5 py-3 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Agenda tu consulta</span>
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
});
