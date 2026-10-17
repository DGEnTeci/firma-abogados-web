"use client";

import React, { memo, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  WarningCircle,
  LockKey,
  FileText,
  ArrowCounterClockwise,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { PRACTICE_AREAS } from "./legal-data";
import { buildWhatsAppUrl } from "@/lib/contact";

interface FormValues {
  fullName: string;
  practiceArea: string;
  modality: string;
  summary: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  fullName?: string;
  practiceArea?: string;
  summary?: string;
  privacyAccepted?: string;
}

const INITIAL_VALUES: FormValues = {
  fullName: "",
  practiceArea: "",
  modality: "presencial-bogota",
  summary: "",
  privacyAccepted: false,
};

const MAX_SUMMARY_LENGTH = 500;

export const ConsultationForm = memo(function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 3) {
      nextErrors.fullName = "Por favor ingrese su nombre y apellido completos.";
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
        "Debe confirmar que comprende que el mensaje se prepara para WhatsApp y que el sitio es informativo.";
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

    const areaTitle =
      PRACTICE_AREAS.find((a) => a.id === values.practiceArea)?.title ??
      "Derecho General";
    const modalityLabel =
      values.modality === "presencial-bogota"
        ? "Presencial en Bogotá (Chapinero)"
        : "Consulta virtual por videollamada";
    const truncatedSummary = values.summary.trim().slice(0, MAX_SUMMARY_LENGTH);

    const message = [
      "Hola, quisiera agendar una consulta.",
      `Nombre: ${values.fullName.trim()}`,
      `Área: ${areaTitle}`,
      `Modalidad: ${modalityLabel}`,
      `Resumen: ${truncatedSummary}`,
    ].join("\n");

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedUrl(url);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmittedUrl(null);
  };

  const hasDraftContent =
    Boolean(values.fullName.trim()) ||
    Boolean(values.practiceArea) ||
    Boolean(values.summary.trim());

  if (submittedUrl) {
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
          Su mensaje está listo en WhatsApp
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Estimado(a) <span className="font-semibold text-[var(--text-primary)]">{values.fullName}</span>, se ha abierto una ventana de WhatsApp con el resumen de su consulta sobre{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {PRACTICE_AREAS.find((a) => a.id === values.practiceArea)?.title ?? "Derecho General"}
          </span>
          . Recuerde que usted debe pulsar el botón de enviar dentro de WhatsApp para que el mensaje llegue a la firma.
        </p>

        <div className="mt-5 rounded-xl bg-[var(--surface-secondary)] p-4 border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-2">
          <p className="font-medium text-[var(--text-primary)]">
            Nota sobre el número de demostración (PLACEHOLDER):
          </p>
          <p>
            El número configurado actualmente (+57 300 000 0000) es un número de ejemplo y el enlace no se comunicará con una firma real hasta que se configure el número definitivo.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={submittedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c24b16] px-6 py-3 text-xs sm:text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Si no se abrió WhatsApp, pulse aquí</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 py-3 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] active:scale-[0.98] whitespace-nowrap"
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
        </div>
        <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
          Complete su nombre, el área jurídica, la modalidad y un resumen breve para preparar su mensaje de consulta por WhatsApp. No necesita utilizar terminología técnica.
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
            A medida que diligencie su nombre, el área jurídica y el relato breve de los hechos, prepararemos su mensaje de solicitud de consulta.
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
        <span id="hint-summary" className="text-xs text-[var(--text-muted)] leading-relaxed">
          Relate brevemente su inquietud con sus propias palabras (máximo {MAX_SUMMARY_LENGTH} caracteres). Por su seguridad, no incluya números de cédula, datos bancarios ni otros documentos o datos sensibles en este primer mensaje.
        </span>
        <textarea
          id="summary"
          name="summary"
          rows={4}
          maxLength={MAX_SUMMARY_LENGTH}
          value={values.summary}
          onChange={(e) => setValues({ ...values, summary: e.target.value })}
          aria-invalid={Boolean(errors.summary)}
          aria-describedby={errors.summary ? "hint-summary error-summary" : "hint-summary"}
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
            Comprendo que este sitio web no almacena ni procesa mis datos en un servidor, que al continuar se abrirá WhatsApp con mi mensaje preparado y que el contenido publicado tiene carácter informativo y no constituye asesoría jurídica.
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

      {/* Aviso neutro encima del botón de envío sobre cómo funciona la apertura de WhatsApp */}
      <div className="rounded-xl bg-[var(--surface-secondary)] p-4 border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
        <LockKey size={16} weight="regular" className="mt-0.5 shrink-0 text-[#c24b16]" />
        <span>
          Al pulsar el botón se abrirá WhatsApp con su mensaje preparado. El mensaje solo se enviará cuando usted pulse enviar dentro de WhatsApp y será atendido a través de esa aplicación. (El número actual es de ejemplo / PLACEHOLDER y no se comunicará con una firma real).
        </span>
      </div>

      <div className="pt-1 flex justify-end">
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
