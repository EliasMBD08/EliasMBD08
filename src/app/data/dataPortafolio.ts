import type { ExperienceItem } from './experience.types';

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconUrl: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Tailwind CSS', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'JavaScript', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Angular', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'React', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },

  // Backend
  { name: 'Node.js', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Python', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Django', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'C++', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'Spring', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/spring/6DB33F' },

  // Databases
  { name: 'MySQL', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'PostgreSQL', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1' },

// Tools
  { name: 'Git', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/github/FFFFFF' },
  { name: 'GitHub Actions', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/githubactions/2088FF' },
  { name: 'Nginx', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/nginx/009639' },
  { name: 'Docker', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Linux', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/linux/FCC624' },
  { name: 'Playwright', category: 'tools', iconUrl: 'https://icon.icepanel.io/Technology/svg/Playwrite.svg' },
  { name: 'Azure', category: 'tools', iconUrl: 'https://www.svgrepo.com/show/353467/azure-icon.svg' },
  { name: 'Google Cloud', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Gemini', category: 'tools', iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },

  // Design
  { name: 'Figma', category: 'design', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Photoshop', category: 'design', iconUrl: 'https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg' },
  { name: 'Illustrator', category: 'design', iconUrl: 'https://www.svgrepo.com/show/452147/adobe-illustrator.svg' },
];

export const categoryOrder: SkillCategory[] = ['frontend', 'backend', 'tools', 'design'];

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
  link: string;
  title: string;
  desc: string;
  tags?: string[];
}

export const profile: ResumeProfile = {
  fullName: 'Elias Marcos',
  role: 'Ingeniero de Sistemas y Desarrollador Full Stack',
  bio: 'Apasionado desarrollador web full stack y estudiante de ingeniería de sistemas en la Universidad Nacional Mayor de San Marcos. Combino mi sólida formación académica con experiencia práctica en el desarrollo de soluciones web innovadoras y eficientes. Soy competente en tecnologías como Django, Node.js, React y Angular, y tengo una trayectoria comprobada en automatización de procesos, desarrollo de RPA con Python. Mi objetivo es crear aplicaciones funcionales y atractivas, optimizar el rendimiento y aportar valor real a cada proyecto en el que participo.',
  email: 'elias.developer.08@gmail.com',
  github: 'https://github.com/EliasMBD08',
  linkedin: 'https://www.linkedin.com/in/elias-daniel-marcos-bernardo/',
  location: 'Lima, Perú',
  cvUrl: '/files/CV_ELIAS_DANIEL_MARCOS_BERNARDO.pdf',
};

export const projects: Project[] = [
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
    id: 4,
    role: 'Analista Desarrollador Full Stack Junior',
    company: 'ISP Consulting (Remoto)',
    duration: 'Oct 2025 — Actualidad',
    desc: 'Lidero el desarrollo end-to-end de una plataforma de reclutamiento inteligente (ATS) con integración de IA generativa mediante la API de Gemini para el análisis masivo de CVs, reduciendo el tiempo de selección en un 60%. Diseño e implemento un ecosistema de gestión de Recursos Humanos que centraliza fichas de ingreso, T-Registro y control de Exámenes Médicos Ocupacionales. Desarrollo un motor de notificaciones automáticas para vencimiento de documentos y un módulo de reportes en Excel que disminuye la carga operativa manual en un 40%. Integro los sistemas de reclutamiento y RRHH asegurando consistencia de datos desde la postulación hasta la contratación. Administro el ciclo de vida de las aplicaciones con Docker y Google Cloud Platform (Cloud Run) garantizando escalabilidad y alta disponibilidad. Configuro pipelines de CI/CD con GitHub Actions para los entornos de desarrollo, QA y producción. Implemento tareas programadas con Google Cloud Jobs para mantenimiento automático y sincronización de datos. Integro la API de Google Drive para gestión y sincronización de expedientes digitales. Automatizo el flujo de comunicación con candidatos y la generación de reportes dinámicos para el seguimiento de postulantes.',
  },
  {
    id: 2,
    role: 'Desarrollador Full Stack y Especialista en Automatización de Procesos',
    company: 'Inversiones Madrisqui SAC — Surquillo, Lima, Perú',
    duration: 'Dic 2023 — Jul 2025',
    desc: 'Desarrollo de soluciones de software robustas y automatización de procesos de negocio con Django, Node.js, Angular, React, PostgreSQL y MySQL. Creación de bots en Python para RPA y Web Scraping, generación de informes en Excel y manipulación de datos. Diseño e implementación de pipelines de pruebas automatizadas. Optimización de aplicaciones existentes, integración de nuevas funcionalidades y soporte de TI (configuración de dominios Windows, administración de usuarios).',
  },
  {
    id: 1,
    role: 'Asistente de Ingeniería de Datos y Plataformas en la Nube',
    company: 'Lima, Perú',
    duration: 'Dic 2022 — Ene 2023',
    desc: 'Apoyo en diseño, implementación y gestión de bases de datos en la nube con Azure SQL Database y otras soluciones de Microsoft Azure. Configuración y mantenimiento para asegurar disponibilidad, seguridad e integridad. Participación en flujos ETL con Azure Data Factory y procesamiento de grandes volúmenes con Databricks y PySpark.',
  },
];

export const educationExperiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Ingeniería de Sistemas',
    company: 'Universidad Nacional Mayor de San Marcos',
  },
];

export const sidebarItems: { title: string; linkto: string }[] = [
  { title: 'Inicio', linkto: 'inicio' },
  { title: 'Proyectos', linkto: 'proyectos' },
  { title: 'Currículum', linkto: 'curriculum' },
  { title: 'Contacto', linkto: 'contacto' },
];

export type SidebarItem = (typeof sidebarItems)[number];