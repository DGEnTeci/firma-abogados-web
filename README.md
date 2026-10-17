# Valdés & Rueda Abogados (firma-abogados-web)

Landing page institucional y de conversión para una firma boutique de abogados en Bogotá, Colombia, enfocada en explicar asuntos jurídicos en lenguaje claro (derecho constitucional y acciones de tutela, derecho laboral, familia y sucesiones, derecho civil y comercial, administrativo y penal). Construida con Next.js (App Router), TypeScript, Tailwind CSS v4, animaciones puntuales con `motion/react` e iconografía de `@phosphor-icons/react`.

## Aviso importante sobre datos de demostración (Placeholders) y carácter informativo

> **Nota de demostración:** El nombre de la firma ("Valdés & Rueda Abogados S.A.S."), el NIT, las estadísticas, los testimonios, las tarifas en pesos colombianos (`$180.000 COP`), la dirección física en Bogotá, los correos electrónicos y el número de WhatsApp incluidos en este proyecto son **datos ficticios de ejemplo (PLACEHOLDERS)** con fines exclusivamente ilustrativos y de diseño. El formulario de consulta opera como una simulación local en el navegador y no transmite datos a servidores externos. Todo el contenido publicado es estrictamente informativo y pedagógico y **no constituye asesoría jurídica formal ni crea una relación abogado-cliente**.

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
│   ├── ConsultationForm.tsx           # Formulario interactivo de consulta (simulado en navegador)
│   ├── FaqAccordion.tsx               # Acordeón interactivo de preguntas frecuentes
│   ├── HeaderNav.tsx                  # Barra de navegación principal y menú móvil
│   ├── LegalGuidesBento.tsx           # Cuadrícula Bento 1+2 y modal lector de guías jurídicas
│   ├── NewsletterForm.tsx             # Formulario de suscripción al boletín en el pie de página
│   ├── PracticeAreasInteractive.tsx   # Lista interactiva maestro-detalle de áreas de práctica
│   ├── RevealInView.tsx               # Hoja cliente para transiciones de entrada con soporte reduced-motion
│   ├── TestimonialsSection.tsx        # Carrusel de relatos ilustrativos (placeholders)
│   └── legal-data.ts                  # Contenido jurídico en español de Colombia y constantes
├── public/
│   └── images/                        # Activos visuales locales generados para cada sección
├── reference/
│   └── referencia.jpg                 # Referencia visual de composición y paleta de color
├── AUDIT.md                           # Informe completo de auditoría de diseño y verificación
├── eslint.config.mjs                  # Configuración de ESLint para Next.js y TypeScript
├── next.config.ts                     # Configuración de Next.js
├── package.json                       # Dependencias y scripts del proyecto
└── tsconfig.json                      # Configuración de TypeScript
```
