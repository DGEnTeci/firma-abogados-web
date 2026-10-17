"use client";

import React, { memo, useState } from "react";
import { CheckCircle, WarningCircle, EnvelopeSimple } from "@phosphor-icons/react";

export const NewsletterForm = memo(function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "subscribed">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Ingrese un correo electrónico válido para recibir el boletín informativo.");
      return;
    }
    setError("");
    setStatus("subscribed");
  };

  if (status === "subscribed") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 rounded-xl bg-white/10 p-4 border border-white/15 text-sm text-[#f8f7f3] max-w-md"
      >
        <CheckCircle size={22} weight="fill" className="shrink-0 text-[#c24b16]" />
        <span>
          Demostración visual: no se envió ni almacenó el correo <strong className="font-mono">{email}</strong> porque este boletín es solo un ejemplo de diseño sin servidor.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md flex flex-col gap-2">
      <label
        htmlFor="newsletter-email"
        className="text-sm font-semibold text-[#f8f7f3]"
      >
        Correo electrónico para recibir guías y notas informativas (Ejemplo / Placeholder)
      </label>
      <span className="text-xs text-[#cbd2dc]">
        Nota: Este campo de boletín es una maqueta visual sin conexión a servidor; no almacena su correo ni envía mensajes reales.
      </span>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-1">
        <div className="relative flex-1">
          <input
            id="newsletter-email"
            name="newsletterEmail"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : undefined}
            className="w-full rounded-full border border-white/25 bg-[#f8f7f3] px-4 py-3 text-sm text-[#0e1e32] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c24b16] px-6 py-3 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
        >
          <EnvelopeSimple size={17} weight="bold" />
          <span>Suscribirme</span>
        </button>
      </div>
      {error && (
        <p
          id="newsletter-error"
          role="alert"
          className="flex items-center gap-1.5 text-xs font-medium text-[#fca5a5] pt-1"
        >
          <WarningCircle size={15} weight="fill" className="shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </form>
  );
});
