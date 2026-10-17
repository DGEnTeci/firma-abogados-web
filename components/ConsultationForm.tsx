"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  WarningCircle,
  LockKey,
  FileText,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { PRACTICE_AREAS } from "./legal-data";

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  practiceArea: string;
  modality: string;
  summary: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  practiceArea?: string;
  summary?: string;
  privacyAccepted?: string;
}

const INITIAL_VALUES: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  practiceArea: "",
  modality: "presencial-bogota",
  summary: "",
  privacyAccepted: false,
};

export const ConsultationForm = memo(function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "submitted">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 3) {
      nextErrors.fullName = "Por favor ingrese su nombre y apellido completos.";
    }
    if (!values.phone.trim() || values.phone.trim().length < 7) {
      nextErrors.phone = "Ingrese un número de celular o teléfono fijo válido en Colombia.";
    }
    if (
      !values.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      nextErrors.email = "Ingrese un correo electrónico válido para enviarle la confirmación.";
    }
    if (!values.practiceArea) {
      nextErrors.practiceArea = "Seleccione el área jurídica que mejor describe su consulta.";
    }
    if (!values.summary.trim() || values.summary.trim().length < 20) {
      nextErrors.summary =
        "Describa brevemente su situación (mínimo 20 caracteres) para asignar al abogado especialista.";
    }
    if (!values.privacyAccepted) {
      nextErrors.privacyAccepted =
        "Debe aceptar el aviso de privacidad y uso de datos de contacto.";
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    timerRef.current = setTimeout(() => {
      setStatus("submitted");
    }, 900);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus("idle");
  };

  const hasDraftContent =
    Boolean(values.fullName.trim()) ||
    Boolean(values.practiceArea) ||
    Boolean(values.summary.trim());

  if (status === "loading") {
    /* Estado de carga esquelético (Skeletal loader acorde a la forma final, sin spinners circulares) */
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label="Simulando el envío de su solicitud de consulta jurídica"
        className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 sm:p-8 space-y-6"
      >
        <div className="h-6 w-2/3 rounded-lg bg-[var(--surface-secondary)] animate-pulse" />
        <div className="h-4 w-full rounded-lg bg-[var(--surface-secondary)] animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="h-12 w-full rounded-lg bg-[var(--surface-secondary)] animate-pulse" />
          <div className="h-12 w-full rounded-lg bg-[var(--surface-secondary)] animate-pulse" />
        </div>
        <div className="h-24 w-full rounded-lg bg-[var(--surface-secondary)] animate-pulse" />
        <div className="h-11 w-48 rounded-full bg-[#c24b16]/40 animate-pulse" />
      </div>
    );
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 sm:p-8"
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#c24b16]/15 text-[#c24b16]">
          <CheckCircle size={28} weight="fill" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
          Envío simulado en el navegador (Formulario de demostración)
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Estimado(a) <span className="font-semibold text-[var(--text-primary)]">{values.fullName}</span>, esta confirmación es una{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            simulación local en el navegador (placeholder)
          </span>
          . El formulario no está conectado a un servidor ni envía correos electrónicos reales para el área de{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {PRACTICE_AREAS.find((a) => a.id === values.practiceArea)?.title ?? "Derecho General"}
          </span>
          .
        </p>

        <div className="mt-6 rounded-xl bg-[var(--surface-secondary)] p-4 border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-primary)] space-y-1">
          <div>Estado técnico: Simulación cliente (setTimeout de 900 ms en memoria local)</div>
          <div>Modalidad elegida: {values.modality === "presencial-bogota" ? "Presencial en Bogotá (Chapinero)" : "Sesión virtual nacional"}</div>
          <div>Nota: No se han transmitido ni almacenado sus datos fuera de su navegador.</div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] active:scale-[0.98] whitespace-nowrap"
          >
            <ArrowCounterClockwise size={16} weight="bold" />
            <span>Volver al formulario</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 sm:p-8 space-y-5"
    >
      <div className="border-b border-[var(--border-subtle)] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            Formulario de valoración inicial
          </h3>
          <span className="font-mono text-[11px] font-semibold text-[#c24b16]">
            DEMOSTRACIÓN / SIMULADO
          </span>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
          Complete los siguientes datos. No necesita utilizar terminología técnica. (Formulario demostrativo sin envío a servidor).
        </p>
      </div>

      {/* Estado vacío informativo para la ficha preliminar antes de diligenciar */}
      {!hasDraftContent ? (
        <div className="flex items-start gap-3 rounded-xl bg-[var(--surface-secondary)] p-4 border border-[var(--border-subtle)]">
          <FileText size={20} weight="regular" className="mt-0.5 shrink-0 text-[#c24b16]" />
          <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-primary)]">
              Resumen de expediente aún vacío:
            </span>{" "}
            A medida que diligencie su nombre, el área jurídica y el relato breve de los hechos, prepararemos su ficha de valoración preliminar.
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--surface-secondary)] px-4 py-3 border border-[var(--border-subtle)] text-xs">
          <span className="text-[var(--text-primary)] font-medium">
            Ficha en preparación: {values.fullName || "Solicitante"} ·{" "}
            {PRACTICE_AREAS.find((a) => a.id === values.practiceArea)?.title ?? "Área por elegir"}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="text-[var(--text-muted)] hover:text-[#c24b16] underline whitespace-nowrap"
          >
            Limpiar campos
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nombre completo */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-[var(--text-primary)]"
          >
            Nombre y apellidos completos
          </label>
          <span className="text-xs text-[var(--text-muted)]">
            Persona natural o representante de pyme
          </span>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "error-fullName" : undefined}
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
          />
          {errors.fullName && (
            <p
              id="error-fullName"
              role="alert"
              className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
            >
              <WarningCircle size={15} weight="fill" className="shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Teléfono / WhatsApp */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[var(--text-primary)]"
          >
            Teléfono celular o WhatsApp
          </label>
          <span className="text-xs text-[var(--text-muted)]">
            En Colombia (ej. 310 000 0000)
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
          />
          {errors.phone && (
            <p
              id="error-phone"
              role="alert"
              className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
            >
              <WarningCircle size={15} weight="fill" className="shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Correo electrónico */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[var(--text-primary)]"
          >
            Correo electrónico
          </label>
          <span className="text-xs text-[var(--text-muted)]">
            Para enviarle la confirmación escrita
          </span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
          />
          {errors.email && (
            <p
              id="error-email"
              role="alert"
              className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
            >
              <WarningCircle size={15} weight="fill" className="shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Área de práctica */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="practiceArea"
            className="text-sm font-semibold text-[var(--text-primary)]"
          >
            Tema principal de su consulta
          </label>
          <span className="text-xs text-[var(--text-muted)]">
            Si no está seguro, elija la opción más cercana
          </span>
          <select
            id="practiceArea"
            name="practiceArea"
            value={values.practiceArea}
            onChange={(e) => setValues({ ...values, practiceArea: e.target.value })}
            aria-invalid={Boolean(errors.practiceArea)}
            aria-describedby={errors.practiceArea ? "error-practiceArea" : undefined}
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
          >
            <option value="">Seleccione un área jurídica</option>
            {PRACTICE_AREAS.map((area) => (
              <option key={area.id} value={area.id}>
                {area.title}
              </option>
            ))}
          </select>
          {errors.practiceArea && (
            <p
              id="error-practiceArea"
              role="alert"
              className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
            >
              <WarningCircle size={15} weight="fill" className="shrink-0" />
              <span>{errors.practiceArea}</span>
            </p>
          )}
        </div>
      </div>

      {/* Modalidad preferida */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="modality"
          className="text-sm font-semibold text-[var(--text-primary)]"
        >
          Modalidad de atención preferida
        </label>
        <span className="text-xs text-[var(--text-muted)]">
          Atendemos en nuestro despacho en Bogotá o por videollamada en todo el país
        </span>
        <select
          id="modality"
          name="modality"
          value={values.modality}
          onChange={(e) => setValues({ ...values, modality: e.target.value })}
          className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
        >
          <option value="presencial-bogota">Consulta presencial en Bogotá (Chapinero)</option>
          <option value="virtual-nacional">Consulta virtual por videollamada</option>
        </select>
      </div>

      {/* Resumen de los hechos */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="summary"
          className="text-sm font-semibold text-[var(--text-primary)]"
        >
          ¿Qué ocurrió y qué fecha o plazo tiene presente?
        </label>
        <span className="text-xs text-[var(--text-muted)]">
          Relate brevemente su inquietud con sus propias palabras
        </span>
        <textarea
          id="summary"
          name="summary"
          rows={4}
          value={values.summary}
          onChange={(e) => setValues({ ...values, summary: e.target.value })}
          aria-invalid={Boolean(errors.summary)}
          aria-describedby={errors.summary ? "error-summary" : undefined}
          className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[#c24b16] focus:outline-none focus:ring-2 focus:ring-[#c24b16]/30"
        />
        {errors.summary && (
          <p
            id="error-summary"
            role="alert"
            className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
          >
            <WarningCircle size={15} weight="fill" className="shrink-0" />
            <span>{errors.summary}</span>
          </p>
        )}
      </div>

      {/* Aviso neutro de privacidad */}
      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-start gap-3">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            checked={values.privacyAccepted}
            onChange={(e) =>
              setValues({ ...values, privacyAccepted: e.target.checked })
            }
            aria-invalid={Boolean(errors.privacyAccepted)}
            aria-describedby={errors.privacyAccepted ? "error-privacy" : undefined}
            className="mt-1 h-4 w-4 rounded border-[var(--border-subtle)] accent-[#c24b16] focus:ring-2 focus:ring-[#c24b16]"
          />
          <label
            htmlFor="privacyAccepted"
            className="text-xs text-[var(--text-secondary)] leading-relaxed"
          >
            Acepto el aviso de privacidad. Entiendo que este formulario es una demostración interactiva (simulada en el navegador) y que el contenido del sitio tiene carácter informativo y no constituye asesoría jurídica.
          </label>
        </div>
        {errors.privacyAccepted && (
          <p
            id="error-privacy"
            role="alert"
            className="flex items-center gap-1.5 text-xs font-medium text-[#b91c1c]"
          >
            <WarningCircle size={15} weight="fill" className="shrink-0" />
            <span>{errors.privacyAccepted}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <LockKey size={16} weight="regular" className="shrink-0 text-[#c24b16]" />
          <span>Envío simulado en navegador. Contenido informativo, no es asesoría legal.</span>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c24b16] px-7 py-3.5 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] focus-visible:ring-offset-2"
        >
          <span>Agenda tu consulta</span>
          <ArrowRight size={17} weight="bold" />
        </button>
      </div>
    </form>
  );
});
