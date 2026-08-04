import type { Translations } from './translations';

export const es: Translations = {
  meta: {
    title: 'Elias Marcos · Portfolio',
    description:
      'Elias Marcos — Ingeniero de sistemas y desarrollador de software. Portfolio full stack.',
  },
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    curriculum: 'Currículum',
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
    role: 'Ingeniero de Sistemas y Desarrollador de Software Full Stack',
    bio: 'Apasionado desarrollador web full stack y estudiante de ingeniería de sistemas en la Universidad Nacional Mayor de San Marcos. Combino formación académica sólida con experiencia práctica en el desarrollo de soluciones web innovadoras y eficientes. Competente en Django, Node.js, React y Angular, con trayectoria en automatización de procesos y RPA con Python.',
    availableForWork: 'Disponible para nuevos proyectos',
    scrollDown: 'Desplázate para conocer más',
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