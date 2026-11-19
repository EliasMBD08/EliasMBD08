import type { Translations } from './translations';

export const es: Translations = {
  meta: {
    title: 'Elias Marcos · Portafolio',
    description:
      'Elias Daniel Marcos Bernardo — Ingeniero de Datos y Full Stack. Python, BigQuery, GCP, SAP S/4HANA e IA generativa.',
  },
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    curriculum: 'Currículum',
    aiMethod: 'Metodología IA',
    contact: 'Contacto',
  },
  actions: {
    viewProjects: 'Ver proyectos',
    downloadCV: 'Descargar CV',
    viewDemo: 'Ver demo',
    viewCode: 'Código',
    contactMe: 'Contáctame',
    toggleTheme: 'Cambiar tema',
    changeLanguage: 'Cambiar idioma a inglés',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
  },
  home: {
    greeting: 'Hola, soy',
    name: 'Elias Marcos',
    role: 'Ingeniero de Datos & Full Stack',
    bio: 'Ingeniero de Datos y Desarrollador Full Stack con experiencia end-to-end en migraciones de datos hacia SAP S/4HANA, modelado en la nube y construcción de aplicaciones web. Especializado en Python, BigQuery, modelado en capas (Bronze/Silver), calidad de datos y automatización asistida por IA generativa. Egresado de Ingeniería de Sistemas (UNMSM) con impacto cuantificado: reducciones de hasta 60% en tiempos operativos.',
    availableForWork: 'Disponible para nuevos proyectos',
    scrollDown: 'Desplázate para conocer más',
    highlightsTitle: 'Impacto medible',
    highlights: [
      {
        value: '−60%',
        label: 'Ciclo de selección',
        desc: 'Screening masivo de CVs con la API de Gemini sobre el ERP de reclutamiento.',
      },
      {
        value: '−40%',
        label: 'Carga operativa manual',
        desc: 'Reportería dinámica en Excel y módulo de postulantes sobre el ERP ISP.',
      },
      {
        value: 'Silver',
        label: 'Modelado en BigQuery',
        desc: 'Capa Silver con DDL/DML, DAGs de carga y despliegue orquestado a QA.',
      },
      {
        value: 'S/4HANA',
        label: 'Migración SAP R/3 → ERP',
        desc: 'Mapeo DE-PARA y homologación de campos entre fuentes heterogéneas.',
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Algunos trabajos recientes',
    empty: 'Aún no hay proyectos para mostrar.',
  },
  curriculum: {
    title: 'Currículum',
    subtitle: 'Perfil, experiencia y habilidades',
    profile: 'Perfil',
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Habilidades',
    present: 'Actualidad',
    languages: 'Idiomas',
    softSkills: 'Aptitudes',
    softSkillList: [
      'Resolución de problemas',
      'Pensamiento analítico',
      'Comunicación efectiva',
      'Trabajo en equipo',
      'Orientado a resultados',
    ],
    languageList: [
      {
        name: 'Español',
        level: 'Nativo',
        note: 'Lengua de trabajo y documentación técnica.',
      },
      {
        name: 'Inglés',
        level: 'A2',
        note: 'Lectura técnica de documentación y estándares.',
      },
    ],
    skillsFrontend: 'Frontend',
    skillsBackend: 'Backend',
    skillsData: 'Data & SAP',
    skillsTools: 'Tools & Cloud',
    skillsDesign: 'Design',
  },
  aiMethod: {
    title: 'Metodología con IA generativa',
    subtitle: 'Cómo integro agentes de IA generativa en el ciclo de desarrollo de datos',
    items: [
      {
        title: 'Desarrollo asistido por agentes',
        desc: 'Generación y refactorización de código, análisis y optimización de consultas SQL, y elaboración de documentación técnica.',
        tools: ['Claude Code', 'Codex', 'Minimax'],
      },
      {
        title: 'Revisión humana antes de producción',
        desc: 'Aceleración del análisis de esquemas de bases de datos y de la revisión de lógica de modelado, con validación y revisión humana del resultado antes de su paso a QA o a producción.',
        tools: ['Validación humana', 'Pull requests'],
      },
      {
        title: 'Control de calidad sobre el resultado',
        desc: 'Versionado en Git, revisión mediante pull requests y validación de datos en los pipelines de calidad de la capa Silver.',
        tools: ['Git', 'Code review', 'Data quality'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Hablamos? Encuentra el canal que prefieras.',
    emailLabel: 'Email',
    emailHandle: 'Escríbeme',
    githubLabel: 'GitHub',
    githubHandle: 'Ver mi código',
    linkedinLabel: 'LinkedIn',
    linkedinHandle: 'Conectemos',
    locationLabel: 'Ubicación',
    locationValue: 'Lima, Perú',
  },
  footer: {
    copyright: '© {year} Elias Marcos. Todos los derechos reservados.',
    builtWith: 'Construido con Angular y Tailwind CSS',
    template: 'Inspirado en Astrofy Template',
  },
};
