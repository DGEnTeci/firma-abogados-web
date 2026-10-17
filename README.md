# Valdés & Rueda Abogados (firma-abogados-web)

Landing page institucional y de conversión para una firma boutique de abogados en Bogotá, Colombia, enfocada en explicar asuntos jurídicos en lenguaje claro (derecho constitucional y acciones de tutela, derecho laboral, familia y sucesiones, derecho civil y comercial, administrativo y penal). Construida con Next.js (App Router), TypeScript, Tailwind CSS v4, animaciones puntuales con `motion/react` e iconografía de `@phosphor-icons/react`.

## Aviso importante sobre datos de demostración (Placeholders) y carácter informativo

> **Nota de demostración:** El nombre de la firma ("Valdés & Rueda Abogados S.A.S."), el NIT, las estadísticas, los testimonios, las tarifas en pesos colombianos (`$180.000 COP`), la dirección física en Bogotá, los correos electrónicos y el número de WhatsApp por defecto (`573000000000`) incluidos en este proyecto son **datos ficticios de ejemplo (PLACEHOLDERS)** con fines exclusivamente ilustrativos y de diseño. El formulario de consulta prepara el mensaje en el navegador y abre WhatsApp (`wa.me`) para que el visitante decida enviarlo desde esa aplicación; si no se configura un número real, el enlace apuntará al número de ejemplo y no se comunicará con una firma real. Todo el contenido publicado es estrictamente informativo y pedagógico y **no constituye asesoría jurídica formal ni crea una relación abogado-cliente**.

## Configurar WhatsApp

El formulario de consulta y todos los botones de WhatsApp del sitio utilizan una única fuente de verdad definida en `lib/contact.ts`, que lee la variable de entorno `NEXT_PUBLIC_WHATSAPP_NUMBER` (con respaldo al número de ejemplo `573000000000`).

- **Formato del número:** Escriba únicamente dígitos, comenzando por el código de país (`57` para Colombia) seguido del número celular de 10 dígitos, **sin signo `+`, sin espacios y sin guiones** (por ejemplo: `573101234567`).
- **Configuración en entorno local (`.env.local`):**
  1. Copie el archivo `.env.example` a `.env.local` en la raíz del proyecto:
     ```bash
     cp .env.example .env.local
     ```
  2. Edite `.env.local` y asigne su número real:
     ```env
     NEXT_PUBLIC_WHATSAPP_NUMBER=573101234567
     ```
  3. Reinicie `npm run dev` para aplicar el cambio. El archivo `.env.local` permanece ignorado por Git (`.gitignore`).
- **Configuración en producción (Vercel):**
  1. En el panel de su proyecto en Vercel, diríjase a **Settings > Environment Variables**.
  2. Cree la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` con el valor en formato de solo dígitos (ej. `573101234567`) para los entornos *Production* y *Preview*.
  3. Vuelva a desplegar (*Redeploy*) el proyecto para que Next.js incorpore la variable pública en el cliente.

## Cómo ejecutar el proyecto

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo en `http://localhost:3000`:
   ```bash
   npm run dev
   ```

3. Ejecutar el linter de código:
   ```bash
   npm run lint
   ```

4. Generar la compilación de producción:
   ```bash
   npm run build
   ```

## Estructura de carpetas

```text
firma-abogados-web/
├── app/
│   ├── globals.css                    # Variables de tema (blanco cálido, azul marino y acento naranja)
│   ├── layout.tsx                     # Layout raíz con idioma es-CO y fuentes Geist / Geist Mono
│   └── page.tsx                       # Página principal con las 11 secciones de conversión
├── components/
│   ├── ConsultationForm.tsx           # Formulario interactivo conectado a WhatsApp (wa.me)
│   ├── FaqAccordion.tsx               # Acordeón interactivo de preguntas frecuentes
│   ├── HeaderNav.tsx                  # Barra de navegación principal y menú móvil
│   ├── LegalGuidesBento.tsx           # Cuadrícula Bento 1+2 y modal lector de guías jurídicas
│   ├── NewsletterForm.tsx             # Formulario de suscripción al boletín en el pie de página
│   ├── PracticeAreasInteractive.tsx   # Lista interactiva maestro-detalle de áreas de práctica
│   ├── RevealInView.tsx               # Hoja cliente para transiciones de entrada con soporte reduced-motion
│   ├── TestimonialsSection.tsx        # Carrusel de relatos ilustrativos (placeholders)
│   └── legal-data.ts                  # Contenido jurídico en español de Colombia y constantes
├── lib/
│   └── contact.ts                     # Fuente única del número de WhatsApp y helper buildWhatsAppUrl
├── public/
│   └── images/                        # Activos visuales locales generados para cada sección
├── reference/
│   └── referencia.jpg                 # Referencia visual de composición y paleta de color
├── .env.example                       # Plantilla de variable de entorno NEXT_PUBLIC_WHATSAPP_NUMBER
├── AUDIT.md                           # Informe completo de auditoría de diseño y verificación
├── eslint.config.mjs                  # Configuración de ESLint para Next.js y TypeScript
├── next.config.ts                     # Configuración de Next.js
├── package.json                       # Dependencias y scripts del proyecto
└── tsconfig.json                      # Configuración de TypeScript
```
