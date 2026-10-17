/**
 * Escala sistémica de Z-Index del proyecto (Sección 6.F de tasteskill):
 * - baseContent: z-0 (flujo normal de secciones)
 * - elevatedCard: z-10 (tarjetas superpuestas sobre imágenes)
 * - stickyHeader: z-30 (barra de navegación superior)
 * - modalBackdrop: z-40 (fondo de diálogo de lectura de guías jurídicas)
 * - modalDialog: z-50 (ventana emergente de lectura de guías jurídicas)
 */
export const Z_INDEX_SCALE = {
  baseContent: "z-0",
  elevatedCard: "z-10",
  stickyHeader: "z-30",
  modalBackdrop: "z-40",
  modalDialog: "z-50",
} as const;

export interface QuickSituation {
  id: string;
  question: string;
  explanation: string;
  targetAreaId: string;
  iconName: "shield" | "briefcase" | "fileText" | "buildings";
}

export const QUICK_SITUATIONS: QuickSituation[] = [
  {
    id: "salud-pensiones",
    question: "¿Le negaron un tratamiento médico o trámite pensional?",
    explanation:
      "Evaluamos la procedencia de una acción de tutela para proteger sus derechos fundamentales ante EPS o fondos.",
    targetAreaId: "constitucional",
    iconName: "shield",
  },
  {
    id: "despido-contrato",
    question: "¿Terminaron su contrato laboral o tiene dudas sobre su liquidación?",
    explanation:
      "Revisamos su vínculo laboral, indemnizaciones y prestaciones sociales bajo la normativa laboral colombiana.",
    targetAreaId: "laboral",
    iconName: "briefcase",
  },
  {
    id: "entidad-publica",
    question: "¿Una entidad pública o empresa no responde su solicitud formal?",
    explanation:
      "Estructuramos derechos de petición con sustento técnico para solicitar respuestas de fondo en los plazos legales.",
    targetAreaId: "administrativo",
    iconName: "fileText",
  },
  {
    id: "patrimonio-familia",
    question: "¿Necesita organizar una sucesión, contrato civil o sociedad?",
    explanation:
      "Redactamos acuerdos familiares y comerciales claros en Bogotá para prevenir controversias sobre su patrimonio.",
    targetAreaId: "civil-comercial",
    iconName: "buildings",
  },
];

export interface PracticeAreaItem {
  id: string;
  title: string;
  shortSummary: string;
  plainExplanation: string;
  typicalCases: string[];
  legalAnchor: string;
  iconName: "scales" | "briefcase" | "users" | "handshake" | "bank" | "gavel";
}

export const PRACTICE_AREAS: PracticeAreaItem[] = [
  {
    id: "constitucional",
    title: "Derecho Constitucional y Acciones de Tutela",
    shortSummary: "Orientación en derechos fundamentales, salud, debido proceso y habeas data.",
    plainExplanation:
      "Cuando una autoridad pública o un particular vulnera un derecho fundamental y no existe otro medio eficaz de defensa, la acción de tutela y el derecho de petición permiten solicitar protección judicial oportuna.",
    typicalCases: [
      "Acciones de tutela por barreras en servicios de salud, medicamentos o tratamientos integrales.",
      "Redacción y seguimiento de derechos de petición e incidentes de desacato.",
      "Solicitudes de actualización y rectificación de datos personales (habeas data).",
    ],
    legalAnchor: "Marco de referencia informativo: Artículos 15, 23, 29 y 86 de la Constitución Política de 1991.",
    iconName: "scales",
  },
  {
    id: "laboral",
    title: "Derecho Laboral y Seguridad Social",
    shortSummary: "Orientación para trabajadores y pequeñas empresas en contratos, despidos y pensiones.",
    plainExplanation:
      "Aclaramos los derechos y deberes tanto del trabajador como del empleador pyme. Revisamos liquidaciones de prestaciones y acompañamos audiencias de conciliación o procesos laborales.",
    typicalCases: [
      "Reclamación por despido sin justa causa, contrato realidad y reliquidación de prestaciones.",
      "Asesoría preventiva para pymes en reglamentos internos, descargos y contratación.",
      "Trámites de traslado de régimen pensional, pensión de vejez, invalidez o sobrevivientes.",
    ],
    legalAnchor: "Marco de referencia informativo: Código Sustantivo del Trabajo y sistema general de pensiones.",
    iconName: "briefcase",
  },
  {
    id: "familia",
    title: "Derecho de Familia y Sucesiones",
    shortSummary: "Trámites de sucesión, divorcio, custodia y acuerdos patrimoniales con trato cercano.",
    plainExplanation:
      "Los asuntos familiares requieren claridad jurídica y serenidad. Priorizamos acuerdos en notaría o centros de conciliación para evitar desgastes emocionales y económicos innecesarios.",
    typicalCases: [
      "Sucesiones de mutuo acuerdo ante notaría o procesos sucesorales ante juzgados de familia.",
      "Divorcios, cesación de efectos civiles, liquidación de sociedad conyugal o patrimonial.",
      "Fijación de cuota alimentaria, regulación de visitas y capitulaciones matrimoniales.",
    ],
    legalAnchor: "Marco de referencia informativo: Normativa civil y de familia vigente en Colombia.",
    iconName: "users",
  },
  {
    id: "civil-comercial",
    title: "Derecho Civil y Comercial",
    shortSummary: "Contratos, arrendamientos, cobro de cartera y responsabilidad civil para personas y pymes.",
    plainExplanation:
      "Un contrato claro reduce el riesgo de pleitos futuros. Redactamos, revisamos y gestionamos obligaciones civiles y mercantiles para proteger sus acuerdos y bienes inmuebles.",
    typicalCases: [
      "Elaboración y revisión de contratos comerciales, promesa de compraventa y arrendamiento.",
      "Procesos ejecutivos de cobro de títulos valores, facturas y letras de cambio.",
      "Reclamaciones por incumplimiento contractual y responsabilidad civil.",
    ],
    legalAnchor: "Marco de referencia informativo: Legislación civil, procesal y comercial colombiana.",
    iconName: "handshake",
  },
  {
    id: "administrativo",
    title: "Derecho Administrativo y Actuaciones ante el Estado",
    shortSummary: "Orientación frente a actuaciones administrativas, contratación estatal y entidades públicas.",
    plainExplanation:
      "Si usted o su empresa interactúan con ministerios, alcaldías o superintendencias, le orientamos en sede administrativa y ante la Jurisdicción de lo Contencioso Administrativo.",
    typicalCases: [
      "Recursos de reposición y apelación contra actos administrativos.",
      "Medios de control de nulidad y restablecimiento del derecho y reparación directa.",
      "Acompañamiento a contratistas y proveedores en ejecución de contratos estatales.",
    ],
    legalAnchor: "Marco de referencia informativo: Procedimiento Administrativo y Contencioso Administrativo.",
    iconName: "bank",
  },
  {
    id: "penal",
    title: "Derecho Penal y Representación de Víctimas",
    shortSummary: "Defensa técnica y representación de víctimas en delitos patrimoniales, informáticos y empresariales.",
    plainExplanation:
      "Explicamos cada etapa ante la Fiscalía General de la Nación y los jueces de garantías, bajo estricto respeto al debido proceso.",
    typicalCases: [
      "Formulación técnica de denuncias penales por estafa, abuso de confianza o delitos informáticos.",
      "Defensa en indagación preliminar, audiencias de control de garantías y juicio oral.",
      "Prevención de riesgos penales para representantes legales de pequeñas y medianas empresas.",
    ],
    legalAnchor: "Marco de referencia informativo: Legislación penal y procesal penal colombiana.",
    iconName: "gavel",
  },
];

/* PLACEHOLDER: Estadísticas ficticias de ejemplo. Etiquetadas visiblemente en pantalla como PLACEHOLDER. */
export interface TrustMetric {
  id: string;
  badge: string;
  value: string;
  label: string;
  detail: string;
}

export const TRUST_METRICS_PLACEHOLDER: TrustMetric[] = [
  {
    id: "consultas-atendidas",
    badge: "EJEMPLO / PLACEHOLDER",
    value: "1.420+",
    label: "Consultas orientadas (cifra ficticia de ejemplo)",
    detail: "Dato de demostración sobre atención presencial en Bogotá y sesiones virtuales en Colombia. No corresponde a una métrica real.",
  },
  {
    id: "guias-claras",
    badge: "EJEMPLO / PLACEHOLDER",
    value: "48",
    label: "Guías pedagógicas (cifra ficticia de ejemplo)",
    detail: "Dato de demostración sobre artículos explicativos de tutela, petición y contratos en lenguaje claro.",
  },
  {
    id: "respuesta-habil",
    badge: "EJEMPLO / PLACEHOLDER",
    value: "24 h",
    label: "Tiempo de respuesta inicial (dato de ejemplo)",
    detail: "Tiempo objetivo ilustrativo de demostración para confirmar la recepción de una solicitud de consulta.",
  },
];

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
  deliverable: string;
}

export const CONSULTATION_STEPS: ProcessStep[] = [
  {
    title: "Cuéntenos su situación",
    duration: "10 minutos por formulario o WhatsApp",
    description:
      "Usted nos comparte un resumen breve de lo ocurrido y los documentos básicos que tenga a la mano, sin necesidad de usar términos jurídicos.",
    deliverable: "Confirmación de recepción y agendamiento de su sesión.",
  },
  {
    title: "Revisión documental previa",
    duration: "Antes de la reunión",
    description:
      "Un abogado estudia sus soportes con antelación para identificar los hechos relevantes y los plazos aplicables a su caso.",
    deliverable: "Lectura previa de sus documentos para aprovechar la sesión.",
  },
  {
    title: "Diagnóstico en lenguaje claro",
    duration: "Sesión de 60 minutos (presencial o virtual)",
    description:
      "Le explicamos con claridad qué dice la norma, cuáles son los escenarios posibles ante jueces o entidades y qué alternativas existen.",
    /* PLACEHOLDER: Tarifa de consulta diagnóstica ilustrativa en pesos colombianos (COP) */
    deliverable: "Tarifa de ejemplo (PLACEHOLDER): $180.000 COP por consulta diagnóstica inicial.",
  },
  {
    title: "Hoja de ruta y propuesta escrita",
    duration: "Entrega posterior a la consulta",
    description:
      "Usted recibe por escrito un resumen orientativo de los pasos recomendados y una propuesta transparente de honorarios en pesos colombianos.",
    deliverable: "Usted decide con calma y sin presiones cómo desea avanzar.",
  },
];

export interface LegalGuide {
  id: string;
  category: string;
  readTime: string;
  updatedDate: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  fullContent: {
    whenApplies: string;
    keyDeadlines: string;
    practicalChecklist: string[];
    constitutionalNote: string;
  };
}

export const LEGAL_GUIDES: LegalGuide[] = [
  {
    id: "guia-tutela-peticion",
    category: "Derecho Constitucional",
    readTime: "Lectura de 5 min",
    updatedDate: "Contenido pedagógico",
    title: "Diferencia entre derecho de petición y acción de tutela: cuándo usar cada uno",
    summary:
      "Conozca los plazos generales de 15 días hábiles para peticiones de información, 10 días para solicitud de documentos y cuándo procede acudir al juez constitucional.",
    image: "/images/guia-documentos.jpg",
    imageAlt: "Carpeta de lino, hojas de papel de algodón y pluma fuente sobre escritorio de madera",
    featured: true,
    fullContent: {
      whenApplies:
        "El derecho de petición (Artículo 23 de la Constitución) sirve para solicitar información, copias de documentos o respuestas de fondo a entidades públicas y organizaciones privadas. La acción de tutela (Artículo 86) procede cuando un derecho fundamental se encuentra vulnerado o amenazado y requiere protección urgente.",
      keyDeadlines:
        "Petición de interés general o particular: 15 días hábiles. Petición de documentos o copias: 10 días hábiles. Fallo de acción de tutela en primera instancia: hasta 10 días hábiles desde su admisión.",
      practicalChecklist: [
        "Conserve siempre el radicado físico o el correo electrónico de confirmación con fecha y hora.",
        "Relate los hechos en orden cronológico y adjunte únicamente los soportes relevantes (historia clínica, respuestas previas o contratos).",
        "Indique con precisión qué solicitud concreta formula ante la entidad o el juez.",
      ],
      constitutionalNote:
        "Nota informativa: Este resumen es de carácter estrictamente pedagógico y no constituye asesoría jurídica para un caso particular.",
    },
  },
  {
    id: "guia-contratos-laborales-pymes",
    category: "Derecho Laboral",
    readTime: "Lectura de 4 min",
    updatedDate: "Contenido pedagógico",
    title: "Liquidación laboral y terminación de contrato: guía clara para empleados y pymes",
    summary:
      "Qué conceptos integran la liquidación definitiva (cesantías, intereses, prima y vacaciones) y qué aspectos revisar al finalizar una relación laboral.",
    image: "/images/guia-laboral-empresa.jpg",
    imageAlt: "Oficina de pequeña empresa con pared de ladrillo a la vista y escritorio de roble",
    fullContent: {
      whenApplies:
        "Aplica al finalizar cualquier contrato de trabajo (a término fijo, indefinido o por obra o labor), sea por renuncia voluntaria, mutuo acuerdo o terminación unilateral.",
      keyDeadlines:
        "El pago de salarios y prestaciones sociales adeudadas debe realizarse al finalizar el vínculo laboral para prevenir controversias posteriores.",
      practicalChecklist: [
        "Verifique el salario base de liquidación incluyendo el auxilio de transporte cuando corresponda.",
        "Revise que las fechas de ingreso, retiro y vacaciones disfrutadas estén soportadas por escrito.",
        "Documente el desglose de cada concepto liquidado en pesos colombianos (COP).",
      ],
      constitutionalNote:
        "Nota informativa: Este texto es material educativo general y no sustituye el concepto de un abogado sobre su liquidación.",
    },
  },
  {
    id: "guia-sucesiones-patrimonio",
    category: "Familia y Patrimonio",
    readTime: "Lectura de 6 min",
    updatedDate: "Contenido pedagógico",
    title: "Sucesiones en notaría frente a juzgado: requisitos, tiempos y etapas en Colombia",
    summary:
      "Cuándo es posible adelantar una sucesión por mutuo acuerdo ante notario en Bogotá y cómo organizar los documentos del patrimonio familiar.",
    image: "/images/guia-familia-patrimonio.jpg",
    imageAlt: "Patio interior de ladrillo tradicional con vegetación andina y luz de tarde",
    fullContent: {
      whenApplies:
        "Cuando todos los herederos y el cónyuge o compañero permanente están de acuerdo en la distribución de los bienes, el trámite puede adelantarse ante notaría mediante apoderado.",
      keyDeadlines:
        "La duración de una sucesión notarial depende de la obtención de registros civiles, avalúos y paz y salvos tributarios (impuestos prediales y nacionales).",
      practicalChecklist: [
        "Reúna registros civiles de defunción, matrimonio y nacimiento de los interesados.",
        "Obtenga certificados de tradición y libertad actualizados y estados de cuenta prediales.",
        "Identifique pasivos o deudas vigentes para incluirlos de forma clara en el inventario de bienes.",
      ],
      constitutionalNote:
        "Nota informativa: Este resumen es meramente informativo y no constituye asesoría jurídica ni opinión legal vinculante.",
    },
  },
];

/* PLACEHOLDER: Testimonios ficticios de ejemplo. Marcados visiblemente en pantalla como PLACEHOLDER. */
export interface TestimonialPlaceholder {
  id: string;
  badge: string;
  quote: string;
  authorName: string;
  authorRole: string;
  caseContext: string;
}

export const TESTIMONIALS_PLACEHOLDER: TestimonialPlaceholder[] = [
  {
    id: "testimonio-1",
    badge: "TESTIMONIO DE EJEMPLO (PLACEHOLDER)",
    quote:
      "Llegué con mucha angustia por una negativa de mi fondo de pensiones. En la primera consulta me explicaron en palabras sencillas qué documentos faltaban y cuál era el camino a seguir.",
    authorName: "Clara Inés Morales (Nombre ficticio / Placeholder)",
    authorRole: "Docente pensionada en Bogotá (Perfil ilustrativo, no es un cliente real)",
    caseContext: "Ejemplo de consulta en Derecho Constitucional y Pensional",
  },
  {
    id: "testimonio-2",
    badge: "TESTIMONIO DE EJEMPLO (PLACEHOLDER)",
    quote:
      "Como gerente de una pyme familiar necesitábamos organizar nuestros contratos laborales sin tecnicismos confusos. Recibimos una hoja de ruta clara desde la primera reunión.",
    authorName: "Mauricio Gómez Castellanos (Nombre ficticio / Placeholder)",
    authorRole: "Director operativo de pyme en Bogotá (Perfil ilustrativo, no es un cliente real)",
    caseContext: "Ejemplo de consulta en Derecho Laboral y Comercial",
  },
  {
    id: "testimonio-3",
    badge: "TESTIMONIO DE EJEMPLO (PLACEHOLDER)",
    quote:
      "Buscábamos orientación para organizar la sucesión familiar de mutuo acuerdo en notaría. Valoramos mucho la explicación detallada de cada requisito documental.",
    authorName: "Familia Rojas Santamaría (Nombre ficticio / Placeholder)",
    authorRole: "Copropietarios familiares en Bogotá (Perfil ilustrativo, no es un cliente real)",
    caseContext: "Ejemplo de consulta en Sucesiones y Familia",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-costo-consulta",
    question: "¿Cuánto cuesta la consulta inicial y qué incluye?",
    /* PLACEHOLDER: Valor en COP de referencia ilustrativa */
    answer:
      "Como referencia ilustrativa en esta demostración (PLACEHOLDER), la consulta diagnóstica inicial tiene un valor de ejemplo de $180.000 COP. Incluye la lectura previa de sus documentos básicos, una sesión de 60 minutos presencial en Bogotá o por videollamada y un resumen escrito de las opciones estudiadas.",
  },
  {
    id: "faq-resultados",
    question: "¿Se puede garantizar el resultado de un proceso judicial o trámite?",
    answer:
      "No. En Colombia, las decisiones judiciales y administrativas dependen de la valoración autónoma de los jueces y autoridades, así como de las pruebas de cada expediente. Ningún abogado serio debe prometer un resultado garantizado; nuestro trabajo consiste en ofrecer un análisis honesto y una actuación técnica rigurosa.",
  },
  {
    id: "faq-tutela-abogado",
    question: "¿Necesito abogado para presentar un derecho de petición o una acción de tutela?",
    answer:
      "Cualquier persona puede presentar un derecho de petición o una acción de tutela en nombre propio. Sin embargo, cuando el asunto involucra historias clínicas extensas, cálculos pensionales, vulneración al debido proceso o impugnaciones, la orientación de un abogado ayuda a estructurar mejor los hechos y las pruebas.",
  },
  {
    id: "faq-documentos-primera-cita",
    question: "¿Qué documentos debo tener listos para agendar mi consulta?",
    answer:
      "Para el primer contacto solo necesita relatarnos brevemente qué ocurrió y en qué fecha. Si dispone de contratos, cartas, respuestas de entidades, radicados previos o notificaciones, puede compartirlos antes de la sesión para su estudio previo.",
  },
  {
    id: "faq-atencion-virtual",
    question: "¿Atienden únicamente en Bogotá o también en otras ciudades de Colombia?",
    answer:
      "Atendemos consultas presenciales con cita previa en Bogotá y sesiones por videollamada para personas y pequeñas empresas en cualquier ciudad o municipio de Colombia.",
  },
  {
    id: "faq-privacidad",
    question: "¿Cómo se maneja la información que escribo en el formulario?",
    answer:
      "Este sitio web no almacena ni guarda en servidores los datos que usted escribe en el formulario. Al pulsar el botón de envío, su propio navegador prepara el texto y abre WhatsApp para que usted revise el mensaje y decida enviarlo directamente a través de esa aplicación.",
  },
];
