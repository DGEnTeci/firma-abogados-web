import Image from "next/image";
import {
  ShieldCheck,
  Briefcase,
  FileText,
  Buildings,
  ArrowRight,
  WhatsappLogo,
  Scales,
  Clock,
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  CheckCircle,
  Info,
} from "@phosphor-icons/react/dist/ssr";
import { HeaderNav } from "@/components/HeaderNav";
import { RevealInView } from "@/components/RevealInView";
import { PracticeAreasInteractive } from "@/components/PracticeAreasInteractive";
import { LegalGuidesBento } from "@/components/LegalGuidesBento";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ConsultationForm } from "@/components/ConsultationForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  QUICK_SITUATIONS,
  TRUST_METRICS_PLACEHOLDER,
  CONSULTATION_STEPS,
  WHATSAPP_URL,
  Z_INDEX_SCALE,
  type QuickSituation,
} from "@/components/legal-data";

function renderSituationIcon(iconName: QuickSituation["iconName"]) {
  switch (iconName) {
    case "shield":
      return <ShieldCheck size={24} weight="regular" />;
    case "briefcase":
      return <Briefcase size={24} weight="regular" />;
    case "fileText":
      return <FileText size={24} weight="regular" />;
    case "buildings":
      return <Buildings size={24} weight="regular" />;
  }
}

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[var(--surface-primary)] text-[var(--text-primary)]">
      <HeaderNav />

      <main className="flex-1">
        {/* SECCIÓN 1 (Descubre): Hero asimétrico con corte diagonal de imagen */}
        <section
          id="inicio"
          className="relative min-h-[100dvh] flex flex-col justify-between border-b border-[var(--border-subtle)] overflow-hidden"
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-12 lg:pb-16 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
              {/* Pila de texto del Hero: estrictamente 4 elementos (Eyebrow, Headline <= 2 líneas, Subtext <= 20 palabras, CTAs) */}
              <RevealInView className="w-full lg:col-span-6 z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c24b16] mb-4">
                  DERECHO CLARO EN BOGOTÁ
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-[var(--text-primary)] leading-[1.08] max-w-[16ch]">
                  Defensa jurídica explicada en lenguaje claro.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[48ch]">
                  Acompañamos a personas y empresas en Bogotá desde su primera duda legal hasta la consulta formal con abogados especialistas.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#consulta"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#c24b16] px-7 py-3.5 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] focus-visible:ring-offset-2"
                  >
                    <span>Agenda tu consulta</span>
                    <ArrowRight size={17} weight="bold" />
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#0e1e32] bg-[#0e1e32] px-6 py-3.5 text-sm font-semibold text-[#faf9f6] hover:bg-[#182f4c] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16] focus-visible:ring-offset-2"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Escribir por WhatsApp</span>
                  </a>
                </div>
              </RevealInView>

              {/* Activo visual derecho con corte diagonal inspirado en referencia.jpg */}
              <div className="w-full lg:col-span-6">
                <div className="relative aspect-[4/3] lg:aspect-[11/9] w-full overflow-hidden rounded-xl lg:rounded-r-xl lg:rounded-l-none hero-diagonal-clip border border-[var(--border-subtle)] lg:border-0 shadow-[0_20px_50px_rgba(14,30,50,0.12)]">
                  <Image
                    src="/images/hero-justicia.jpg"
                    alt="Edificio cívico en piedra y ladrillo sobre una plaza en Bogotá con los Cerros Orientales al fondo"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0e1e32]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2 (Descubre): Franja de entrada rápida por situaciones cotidianas */}
          <div
            id="situaciones"
            className="w-full border-t border-[var(--border-subtle)] bg-[var(--surface-secondary)]"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
                {QUICK_SITUATIONS.map((item) => (
                  <a
                    key={item.id}
                    href="#areas"
                    className="group flex flex-col justify-between p-6 lg:p-7 hover:bg-[var(--surface-elevated)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c24b16]"
                  >
                    <div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#c24b16]/12 text-[#c24b16] group-hover:bg-[#c24b16] group-hover:text-[#faf9f6] transition-colors duration-200">
                        {renderSituationIcon(item.iconName)}
                      </span>
                      <h2 className="mt-4 text-base font-semibold text-[var(--text-primary)] leading-snug">
                        {item.question}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#c24b16] group-hover:translate-x-0.5 transition-transform duration-200 whitespace-nowrap">
                      <span>Ver orientación</span>
                      <ArrowRight size={14} weight="bold" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 (Entiende): Acerca de la firma con insignia cualitativa no numérica */}
        <section
          id="firma"
          className="py-16 md:py-24 border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <RevealInView className="w-full lg:col-span-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                  Conocimiento constitucional al servicio de decisiones tranquilas
                </h2>
                <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
                  En Valdés &amp; Rueda Abogados (firma ficticia de demostración) creemos que ningún ciudadano ni empresario en Colombia debe firmar un documento o iniciar un trámite sin comprender antes sus alcances reales.
                </p>
                <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
                  Explicamos las figuras de la Constitución Política de 1991, los códigos y la jurisprudencia en un lenguaje directo, sereno y comprensible desde la primera conversación.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[#c24b16]"
                    />
                    <span className="text-sm text-[var(--text-primary)] font-medium">
                      Concepto orientativo escrito antes de iniciar cualquier actuación
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[#c24b16]"
                    />
                    <span className="text-sm text-[var(--text-primary)] font-medium">
                      Propuestas de honorarios en COP desglosadas por etapas
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#consulta"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#0e1e32] px-6 py-3 text-sm font-semibold text-[#faf9f6] hover:bg-[#c24b16] active:scale-[0.98] transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
                  >
                    <span>Agenda tu consulta</span>
                    <ArrowRight size={16} weight="bold" />
                  </a>
                </div>
              </RevealInView>

              <RevealInView delay={0.08} className="w-full lg:col-span-6">
                <div className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#0e1e32]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about-despacho-bogota.jpg"
                      alt="Sala de juntas de despacho jurídico en Bogotá con mesa de nogal y vista a arquitectura de ladrillo"
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Insignia cualitativa no numérica que no implica promesas de resultados */}
                  <div
                    className={`sm:absolute sm:bottom-5 sm:left-5 ${Z_INDEX_SCALE.elevatedCard} m-4 sm:m-0 max-w-xs rounded-xl bg-[var(--surface-elevated)] p-5 shadow-[0_14px_34px_rgba(14,30,50,0.2)] border border-[var(--border-subtle)]`}
                  >
                    <div className="text-base font-bold text-[#0e1e32]">
                      Trato directo con socios
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[var(--text-secondary)] leading-snug">
                      Cada consulta es atendida personalmente por un abogado especialista, sin intermediarios y en lenguaje claro.
                    </p>
                  </div>
                </div>
              </RevealInView>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4 (Entiende): Áreas de práctica como lista interactiva con imagen */}
        <section
          id="areas"
          className="py-16 md:py-24 border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PracticeAreasInteractive />
          </div>
        </section>

        {/* SECCIÓN 5 (Confía): Banda de indicadores de ejemplo claramente marcados como PLACEHOLDER */}
        <section
          id="respaldo"
          className="py-16 md:py-24 bg-[var(--surface-secondary)] border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealInView className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Rigor jurídico. Independencia. Claridad.
              </h2>
              <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
                Nota visible: Las cifras de esta banda son ejemplos ficticios de maquetación (placeholders) y no representan métricas auditadas ni promesas de resultado.
              </p>
            </RevealInView>

            {/* PLACEHOLDER: Banda de estadísticas ficticias de ejemplo, etiquetadas visiblemente en pantalla */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
              {TRUST_METRICS_PLACEHOLDER.map((metric) => (
                <div key={metric.id} className="p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-[var(--surface-secondary)] px-3 py-1 font-mono text-[11px] font-semibold text-[#c24b16] border border-[var(--border-subtle)] mb-3">
                    {metric.badge}
                  </span>
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                    {metric.label}
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 6 (Confía): Banner oscuro de declaración institucional (2 columnas: texto izquierda, imagen derecha) */}
        <section
          id="compromiso"
          className="py-16 md:py-20 border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-[#0e1e32] text-[#f8f7f3] border border-[#22344a]">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="w-full lg:col-span-7 p-8 sm:p-10 lg:p-14 z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#cbd2dc] mb-3">
                    <Scales size={16} weight="regular" className="text-[#c24b16]" />
                    <span>Orientación preventiva y representación en Colombia</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#f8f7f3] leading-[1.12]">
                    Claridad. Acceso. Debido Proceso.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-[#cbd2dc] leading-relaxed max-w-[54ch]">
                    Construimos una relación basada en la confianza y el estudio detenido de sus documentos. Le explicamos qué opciones son viables antes de dar el primer paso.
                  </p>
                  <div className="mt-7">
                    <a
                      href="#consulta"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#c24b16] px-7 py-3.5 text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
                    >
                      <span>Agenda tu consulta</span>
                      <ArrowRight size={17} weight="bold" />
                    </a>
                  </div>
                </div>

                <div className="relative w-full lg:col-span-5 min-h-[260px] lg:min-h-[360px] h-full">
                  <Image
                    src="/images/banner-bogota-cerros.jpg"
                    alt="Panorámica nocturna del Centro Internacional de Bogotá frente a los Cerros Orientales"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0e1e32] via-[#0e1e32]/45 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 7 (Entiende / Confía): Proceso de consulta en 4 pasos */}
        <section
          id="proceso"
          className="py-16 md:py-24 border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealInView className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c24b16] mb-3">
                RUTA DE ATENCIÓN
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Cómo funciona su consulta desde el primer contacto
              </h2>
              <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
                Un proceso ordenado en cuatro momentos para que usted conozca el alcance de cada etapa. La tarifa en COP mostrada es un ejemplo ilustrativo (placeholder).
              </p>
            </RevealInView>

            <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONSULTATION_STEPS.map((step) => (
                <li
                  key={step.title}
                  className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#c24b16]">
                      <Clock size={15} weight="regular" />
                      <span>{step.duration}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)] leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                    <p className="font-mono text-xs text-[var(--text-primary)] leading-relaxed">
                      {step.deliverable}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECCIÓN 8 (Entiende): Guías jurídicas en lenguaje claro (Bento 1+2) */}
        <section
          id="guias"
          className="py-16 md:py-24 bg-[var(--surface-secondary)] border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealInView className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Guías jurídicas para entender sus derechos
              </h2>
              <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
                Consulte nuestras notas pedagógicas e informativas sobre acción de tutela, derecho de petición, contratos laborales y trámites sucesorales en Colombia.
              </p>
            </RevealInView>

            <LegalGuidesBento />
          </div>
        </section>

        {/* SECCIÓN 9 (Confía): Testimonios de ejemplo (Single-Focus Editorial Quote Stage) */}
        <section
          id="testimonios"
          className="py-16 md:py-24 border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <TestimonialsSection />
          </div>
        </section>

        {/* SECCIÓN 10 (Confía): Preguntas frecuentes en lenguaje claro (Single-Column Vertical Disclosure Stack) */}
        <section
          id="preguntas"
          className="py-16 md:py-24 bg-[var(--surface-secondary)] border-b border-[var(--border-subtle)]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FaqAccordion />
          </div>
        </section>

        {/* SECCIÓN 11 (Consulta): Mesa de conversión con formulario y canal directo de WhatsApp */}
        <section id="consulta" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Columna izquierda: Orientación directa, WhatsApp y datos de ejemplo del despacho */}
              <div className="w-full lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.15]">
                    Converse con un abogado especialista
                  </h2>
                  <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
                    Elija el canal que le resulte más cómodo. Puede enviarnos su consulta mediante el formulario o escribirnos por WhatsApp para coordinar su cita en Bogotá o por videollamada.
                  </p>
                </div>

                {/* Tarjeta secundaria de contacto directo por WhatsApp */}
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[#0e1e32] p-6 text-[#f8f7f3]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c24b16] text-[#faf9f6]">
                      <WhatsappLogo size={24} weight="fill" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#f8f7f3]">
                        Atención por WhatsApp (Número de ejemplo / Placeholder)
                      </h3>
                      {/* PLACEHOLDER: Número telefónico de contacto ilustrativo */}
                      <p className="font-mono text-xs text-[#cbd2dc]">
                        +57 (300) 000 0000 · Lunes a viernes, 8:00 a. m. a 6:00 p. m.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-[#cbd2dc] leading-relaxed">
                    Canal ilustrativo para verificar disponibilidad de agenda o confirmar qué documentos reunir antes de su sesión diagnóstica.
                  </p>
                  <div className="mt-5">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#c24b16] px-6 py-3 text-xs sm:text-sm font-semibold text-[#faf9f6] hover:bg-[#a63d0f] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c24b16]"
                    >
                      <WhatsappLogo size={18} weight="fill" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Datos de ubicación en Bogotá (PLACEHOLDER visible en pantalla) */}
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      Despacho en Bogotá D.C.
                    </h3>
                    <span className="font-mono text-[11px] font-semibold text-[#c24b16]">
                      DATOS DE EJEMPLO / PLACEHOLDER
                    </span>
                  </div>
                  {/* PLACEHOLDER: Dirección y teléfono de oficina de carácter ilustrativo */}
                  <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-3">
                      <MapPin
                        size={19}
                        weight="regular"
                        className="mt-0.5 shrink-0 text-[#c24b16]"
                      />
                      <span>
                        Calle 72 # 9-55, Oficina 602, Chapinero, Bogotá D.C., Colombia (Dirección ficticia de ejemplo)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <PhoneCall
                        size={19}
                        weight="regular"
                        className="shrink-0 text-[#c24b16]"
                      />
                      <span className="font-mono">+57 (601) 000 0000 (Teléfono de ejemplo)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <EnvelopeSimple
                        size={19}
                        weight="regular"
                        className="shrink-0 text-[#c24b16]"
                      />
                      <span className="font-mono">consultas@valdesrueda.co (Correo de ejemplo)</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                    <Info
                      size={16}
                      weight="regular"
                      className="mt-0.5 shrink-0 text-[#c24b16]"
                    />
                    <span>
                      Nota informativa: El contenido de esta página es estrictamente informativo y no constituye asesoría jurídica formal ni promesa de resultado.
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna derecha: Formulario completo con validación y estados interactivos */}
              <div className="w-full lg:col-span-7">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA INSTITUCIONAL CON BOLETÍN */}
      <footer className="bg-[#091524] text-[#f8f7f3] border-t border-[#22344a] overflow-hidden">
        {/* Banda superior del footer con formulario de boletín y acento diagonal sobrio */}
        <div className="relative border-b border-white/10">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 right-0 w-[34%] bg-[#c24b16]/90 footer-diagonal-accent pointer-events-none"
          />
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="w-full lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f8f7f3]">
                  Sus derechos explicados con claridad. Nuestra misión.
                </h2>
                <p className="mt-2 text-sm text-[#cbd2dc] max-w-[54ch] leading-relaxed">
                  Reciba mensualmente en su correo electrónico resúmenes informativos de sentencias de la Corte Constitucional y guías ciudadanas en lenguaje claro.
                </p>
                <div className="mt-6">
                  <NewsletterForm />
                </div>
              </div>

              <div className="w-full lg:col-span-5 lg:pl-12">
                <div className="rounded-xl bg-[#0e1e32]/95 p-6 border border-white/15 backdrop-blur-sm">
                  {/* Detalle tricolor colombiano con máxima sobriedad institucional */}
                  <div
                    aria-hidden="true"
                    className="flex h-1 w-16 overflow-hidden rounded-full mb-4"
                  >
                    <span className="w-2/4 bg-[#eab308]" />
                    <span className="w-1/4 bg-[#1d4ed8]" />
                    <span className="w-1/4 bg-[#dc2626]" />
                  </div>
                  <p className="text-sm font-semibold text-[#f8f7f3]">
                    Aviso de carácter informativo y no vinculante
                  </p>
                  <p className="mt-1.5 text-xs text-[#cbd2dc] leading-relaxed">
                    Toda la información publicada en este sitio web tiene fines exclusivamente pedagógicos y de orientación general. Su lectura no reemplaza el estudio de un abogado ni constituye consejo legal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque inferior del pie de página con NIT de ejemplo, dirección de ejemplo y aviso neutro de privacidad */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-lg font-semibold tracking-tight text-[#f8f7f3]">
                Valdés &amp; Rueda Abogados S.A.S. (Nombre ficticio / Placeholder)
              </div>
              {/* PLACEHOLDER: NIT y dirección de carácter ilustrativo */}
              <p className="font-mono text-xs text-[#cbd2dc]">
                NIT de ejemplo (Placeholder): 900.000.000-1
              </p>
              <p className="text-xs text-[#98a4b5] leading-relaxed max-w-[46ch]">
                Demostración de firma boutique de abogados en Bogotá D.C. Orientación jurídica en derecho constitucional, laboral, familiar, civil, comercial, penal y administrativo.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2.5">
              <div className="text-xs font-semibold text-[#f8f7f3]">
                Secciones del sitio
              </div>
              <ul className="space-y-2 text-xs text-[#cbd2dc]">
                <li>
                  <a href="#inicio" className="hover:text-[#faf9f6] transition-colors">
                    Inicio y diagnóstico rápido
                  </a>
                </li>
                <li>
                  <a href="#firma" className="hover:text-[#faf9f6] transition-colors">
                    Sobre la firma
                  </a>
                </li>
                <li>
                  <a href="#areas" className="hover:text-[#faf9f6] transition-colors">
                    Áreas de práctica
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="hover:text-[#faf9f6] transition-colors">
                    Proceso y tarifa de ejemplo
                  </a>
                </li>
                <li>
                  <a href="#guias" className="hover:text-[#faf9f6] transition-colors">
                    Guías ciudadanas
                  </a>
                </li>
                <li>
                  <a href="#consulta" className="hover:text-[#faf9f6] transition-colors">
                    Agenda tu consulta
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-xs font-semibold text-[#f8f7f3]">
                Aviso de Privacidad y Uso de Datos
              </div>
              <p className="text-xs text-[#98a4b5] leading-relaxed">
                Los datos de contacto suministrados voluntariamente en este sitio se utilizan únicamente para atender solicitudes de información o agendar consultas. Usted puede solicitar en cualquier momento la actualización, rectificación o eliminación de sus datos escribiendo al correo de ejemplo{" "}
                <span className="font-mono text-[#cbd2dc]">privacidad@valdesrueda.co</span>.
              </p>
              {/* PLACEHOLDER: Dirección física ilustrativa */}
              <p className="font-mono text-xs text-[#cbd2dc] pt-1">
                Dirección de ejemplo (Placeholder): Calle 72 # 9-55, Of. 602, Bogotá D.C.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#98a4b5]">
            <p>
              © 2026 Valdés &amp; Rueda Abogados (Proyecto de demostración). El contenido de este sitio es informativo y no constituye asesoría jurídica.
            </p>
            <div className="flex items-center gap-4">
              <a href="#consulta" className="hover:text-[#f8f7f3] transition-colors">
                Aviso de Privacidad
              </a>
              <span>·</span>
              <a href="#preguntas" className="hover:text-[#f8f7f3] transition-colors">
                Nota Informativa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
