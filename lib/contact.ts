/* PLACEHOLDER: Número de WhatsApp de ejemplo (sin signo más ni espacios). */
export const WHATSAPP_PLACEHOLDER_NUMBER = "573000000000";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || WHATSAPP_PLACEHOLDER_NUMBER;

export const DEFAULT_WHATSAPP_GREETING =
  "Hola, quisiera agendar una consulta jurídica con Valdés & Rueda Abogados.";

export function buildWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_GREETING
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
