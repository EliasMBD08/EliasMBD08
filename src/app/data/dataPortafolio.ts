import type { ExperienceItem } from './experience.types';

export type SkillCategory = 'frontend' | 'backend' | 'data' | 'tools' | 'design';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconUrl: string;
}

/** Iconos sin equivalente en simpleicons, embebidos como SVG en línea. */
const ICON_SQL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232F6FB0' stroke-width='1.6'%3E%3Cellipse cx='12' cy='5.5' rx='7.5' ry='3'/%3E%3Cpath d='M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6'/%3E%3Cpath d='M4.5 11.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6'/%3E%3C/svg%3E";

const ICON_DRF =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23092E20' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8.5 6 3.5 12l5 6'/%3E%3Cpath d='m15.5 6 5 6-5 6'/%3E%3Cpath d='m13.5 4-3 16'/%3E%3C/svg%3E";

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/css/1572B6' },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6',
  },
  { name: 'Angular', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'React', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },

  // Backend
  { name: 'Node.js', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Python', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Django', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'DRF', category: 'backend', iconUrl: ICON_DRF },
  { name: 'FastAPI', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'MySQL', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
  {
    name: 'PostgreSQL',
    category: 'backend',
    iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },

  // Data & SAP
  {
    name: 'BigQuery',
    category: 'data',
    iconUrl: 'https://cdn.simpleicons.org/googlebigquery/4285F4',
  },
  { name: 'SQL', category: 'data', iconUrl: ICON_SQL },
  { name: 'SAP S/4HANA', category: 'data', iconUrl: 'https://cdn.simpleicons.org/sap/008FD3' },
  {
    name: 'Azure SQL',
    category: 'data',
    iconUrl: 'https://www.svgrepo.com/show/353467/azure-icon.svg',
  },
  { name: 'DAGs', category: 'data', iconUrl: 'https://cdn.simpleicons.org/apacheairflow/017CEE' },

  // Tools
  { name: 'Git', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/github/FFFFFF' },
  {
    name: 'GitHub Actions',
    category: 'tools',
    iconUrl: 'https://cdn.simpleicons.org/githubactions/2088FF',
  },
  { name: 'Nginx', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/nginx/009639' },
  { name: 'Docker', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Linux', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/linux/FCC624' },
  {
    name: 'Playwright',
    category: 'tools',
    iconUrl: 'https://icon.icepanel.io/Technology/svg/Playwrite.svg',
  },
  {
    name: 'Azure',
    category: 'tools',
    iconUrl: 'https://www.svgrepo.com/show/353467/azure-icon.svg',
  },
  {
    name: 'Google Cloud',
    category: 'tools',
    iconUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4',
  },
  { name: 'Gemini', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
  {
    name: 'Claude Code',
    category: 'tools',
    iconUrl: 'https://cdn.simpleicons.org/anthropic/D4A574',
  },
  {
    name: 'Google Drive API',
    category: 'tools',
    iconUrl: 'https://cdn.simpleicons.org/googledrive/4285F4',
  },

  // Design
  { name: 'Figma', category: 'design', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  {
    name: 'Photoshop',
    category: 'design',
    iconUrl: 'https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg',
  },
  {
    name: 'Illustrator',
    category: 'design',
    iconUrl: 'https://www.svgrepo.com/show/452147/adobe-illustrator.svg',
  },
];

export const categoryOrder: SkillCategory[] = ['frontend', 'backend', 'data', 'tools', 'design'];

export const skillsByCategory = (cat: SkillCategory): Skill[] =>
  skills.filter((s) => s.category === cat);

export interface ResumeProfile {
  fullName: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  cvUrl: string;
}

export interface Project {
  id: number;
  image: string;
  /** Opcional: proyectos internos o sin URL pública se muestran sin enlace. */
  link?: string;
  title: string;
  desc: string;
  tags?: string[];
}

export const profile: ResumeProfile = {
  fullName: 'Elias Daniel Marcos Bernardo',
  role: 'Ingeniero de Datos & Full Stack',
  bio: 'Ingeniero de Datos y Desarrollador Full Stack con experiencia end-to-end en migraciones de datos hacia SAP S/4HANA, modelado en la nube y construcción de aplicaciones web. Especializado en Python, BigQuery, modelado en capas (Bronze/Silver), calidad de datos y automatización asistida por IA generativa. Egresado de Ingeniería de Sistemas (UNMSM) con impacto cuantificado: reducciones de hasta 60% en tiempos operativos.',
  email: 'elias.mbd08@gmail.com',
  github: 'https://github.com/EliasMBD08',
  linkedin: 'https://www.linkedin.com/in/elias-daniel-marcos-bernardo/',
  location: 'Lima, Perú',
  cvUrl: '/files/CV_Elias_Marcos_Bernardo.pdf',
};

export const projects: Project[] = [
  {
    id: 5,
    image: '/images/projects/ekklesia.webp',
    title: 'Ekklesia — ERP para iglesia local',
    desc: 'ERP en producción para una iglesia local, con módulos de Consejería, Perfil por persona, Contabilidad, Seguridad, Eventos y Asistencias, y Ministerios. Backend en FastAPI y PostgreSQL, frontend en Angular 22, containerizado en Docker y desplegado en servidor Linux con pipeline de CI/CD que ejecuta pruebas unitarias en cada entrega.',
    tags: ['FastAPI', 'PostgreSQL', 'Angular 22', 'Docker', 'CI/CD'],
  },
  {
    id: 4,
    image: '/images/projects/fact_sys.webp',
    link: 'https://www.bitnova.devmb.top/',
    title: 'Sistema de Facturación e Inventario',
    desc: 'Plataforma integral de facturación e inventario con integración a APIs para verificación de usuarios mediante DNI o RUC, conectada a SUNAT para la emisión de facturas y boletas electrónicas. Incluye gestión de ventas, control de inventario, administración de clientes y dashboard interactivo.',
    tags: ['Angular', 'Django', 'PostgreSQL', 'SUNAT'],
  },
  {
    id: 3,
    image: '/images/projects/form_polos.webp',
    link: 'https://forms.alianzamanchay.org/form-polos',
    title: 'Formulario para Venta de Polos',
    desc: 'Aplicación web de ventas en línea para una empresa textil con amplia experiencia en el sector, diseñada para facilitar la compra de polos en diversos tamaños y estilos. Los clientes registran pedidos en línea y el equipo de ventas los valida al momento de la entrega.',
    tags: ['Angular', 'Node.js', 'MySQL'],
  },
  {
    id: 2,
    image: '/images/projects/alianzamanchay.org.webp',
    link: 'https://alianzamanchay.org',
    title: 'Sitio Web de la Alianza de Manchay',
    desc: 'Sitio web administrable (CMS) para la Iglesia Alianza Cristiana y Misionera en Manchay, orientado a mejorar la gestión de contenido y la comunicación con la congregación y el público en general. Permite actualizaciones ágiles de eventos, ministerios y programas académicos.',
    tags: ['React', 'CMS'],
  },
  {
    id: 1,
    image: '/images/projects/grafimar.com.webp',
    link: 'https://cgrafimar.com/',
    title: 'Sitio Web de Corporación Grafimar SAC',
    desc: 'Sitio web moderno e intuitivo para Grafimar SAC, empresa líder en el sector de imprenta, con el fin de optimizar la gestión de servicios de impresión y mejorar la comunicación con sus clientes. Permite seguimiento eficiente de pedidos y actualizaciones de servicio.',
    tags: ['Angular', 'Diseño Web'],
  },
];

export const workExperiences: ExperienceItem[] = [
  {
    id: 5,
    role: 'Ingeniero de Datos — Programa Horizonte',
    company: 'ISP Consulting · Cliente: Alicorp',
    duration: 'Oct 2026 — Actualidad',
    desc: 'Migración de datos de nuevas sociedades (sistemas propios y SAP R/3) al ERP SAP S/4HANA de Alicorp: análisis de fuentes, mapeo DE-PARA y homogenización de campos entre sistemas heterogéneos. Modelado de tablas en la capa Silver de BigQuery (DDL/DML) en entornos de desarrollo, con pase a QA y validación de consultas SQL mediante pull requests y revisión técnica de calidad de código. Definición de reglas de calidad de datos por dominio y subdominio, y armado de un dashboard de KPIs de calidad con corte por sociedad, frente, dominio y subdominio. Definición de campos de homologación para unificar información entre las fuentes y el ERP destino, estableciendo criterios de consistencia entre capas y soportando decisiones de negocio. Documentación técnica y funcional de los procesos de modelado, DDL/DML y despliegue, que sostienen la operación y el traspaso de conocimiento dentro del programa. Orquestación de cargas y despliegue a QA mediante DAGs, sobre el repositorio versionado del proyecto y los estándares de nomenclatura de la capa Silver.',
    stack: ['BigQuery', 'SQL', 'SAP R/3', 'SAP S/4HANA', 'Git / GitHub', 'DAGs'],
  },
  {
    id: 4,
    role: 'Analista Desarrollador Full Stack — Responsable del ERP ISP',
    company: 'ISP Consulting · Lima, Perú',
    duration: 'Oct 2025 — Actualidad',
    desc: 'Responsable técnico del ERP ISP (sostenimiento evolutivo e integración de nuevas funcionalidades), evolucionado desde una plataforma de reclutamiento hacia un sistema empresarial con módulos de RR.HH., Activos, Facturación, Seguridad, Automatización y Reclutamiento y Selección, integrado con otros sistemas del cliente. Desarrollo end-to-end de la plataforma de reclutamiento inteligente integrando la API de Gemini (IA generativa) para screening masivo de CVs, reduciendo en un 60% el tiempo del ciclo de selección. Diseño y despliegue del ecosistema de RR.HH. que centraliza fichas de ingreso, T-Registro y control de Exámenes Médicos Ocupacionales (EMO), con motor de notificaciones automáticas por vencimientos. Módulos de reportería dinámica en Excel y de postulantes, disminuyendo un 40% la carga operativa manual. Contenedorización con Docker y orquestación en GCP Cloud Run, pipelines CI/CD con GitHub Actions para entornos Dev / QA / Producción. Tareas programadas con Cloud Jobs para sincronización de datos e integración con la API de Google Drive para la gestión documental de expedientes.',
    stack: [
      'Python',
      'Django',
      'DRF',
      'Angular',
      'MySQL',
      'Docker',
      'GCP',
      'GitHub Actions',
      'Gemini API',
    ],
  },
  {
    id: 2,
    role: 'Desarrollador Full Stack y Especialista en Automatización de Procesos',
    company: 'Inversiones Madrisqui SAC — Surquillo, Lima, Perú',
    duration: 'Dic 2023 — Jul 2025',
    desc: 'Desarrollo de aplicaciones web full-stack con Django, Node.js, Angular, React, MySQL y PostgreSQL, entregando soluciones escalables de extremo a extremo. Diseño e implementación de pruebas automatizadas de software para garantizar calidad, seguridad y eficiencia de las aplicaciones. Automatización de procesos mediante RPA y bots en Python, incluyendo generación de informes y análisis de datos en Excel para soporte a la toma de decisiones. Optimización de aplicaciones existentes e integración de nuevas funcionalidades alineadas a requerimientos de negocio y mejora de UX. Administración y soporte de infraestructura TI: configuración de dominios Windows, gestión de permisos de usuarios y soporte técnico general.',
    stack: ['Python', 'Django', 'Node.js', 'Angular', 'React', 'MySQL', 'PostgreSQL', 'RPA'],
  },
  {
    id: 1,
    role: 'Asistente de Ingeniería de Datos con Plataformas Cloud',
    company: 'Prácticas preprofesionales · Lima, Perú',
    duration: 'Dic 2022 — Ene 2023',
    desc: 'Diseño, implementación y administración de bases de datos en la nube (Azure SQL) y procesos ETL en Azure Data Factory.',
    stack: ['Azure SQL', 'Azure Data Factory'],
  },
  {
    id: 3,
    role: 'Atención al Cliente y Publicidad Digital',
    company: 'Corporación Mastergraf SAC · Lima, Perú',
    duration: 'May 2015 — Dic 2021',
    desc: 'Diseño publicitario para promociones y campañas; contenido visual para redes sociales y marketing digital.',
    stack: ['Photoshop', 'Illustrator', 'Figma', 'Marketing digital'],
  },
];

export const educationExperiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Ingeniería de Sistemas',
    company: 'Universidad Nacional Mayor de San Marcos (UNMSM) · FISI',
    duration: '2021 — 2025 · Egresado',
    desc: 'Enfoque en desarrollo de software, bases de datos, inteligencia artificial y gestión de proyectos técnicos.',
  },
];

export type NavKey = 'home' | 'projects' | 'curriculum' | 'aiMethod';

/**
 * Secciones del sitio que el sidebar lista como enlaces internos.
 * "Contacto" se muestra aparte como CTA de correo (ver sidebar-content).
 */
export const sidebarItems: { titleKey: NavKey; linkto: string }[] = [
  { titleKey: 'home', linkto: 'inicio' },
  { titleKey: 'projects', linkto: 'proyectos' },
  { titleKey: 'curriculum', linkto: 'curriculum' },
  { titleKey: 'aiMethod', linkto: 'metodologia-ia' },
];

export type SidebarItem = (typeof sidebarItems)[number];
