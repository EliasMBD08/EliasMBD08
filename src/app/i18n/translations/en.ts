import type { Translations } from './translations';

export const en: Translations = {
  meta: {
    title: 'Elias Marcos · Portfolio',
    description:
      'Elias Daniel Marcos Bernardo — Data Engineer and Full Stack Developer. Python, BigQuery, GCP, SAP S/4HANA and generative AI.',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    curriculum: 'Résumé',
    aiMethod: 'AI Workflow',
    contact: 'Contact',
  },
  actions: {
    viewProjects: 'View projects',
    downloadCV: 'Download CV',
    viewDemo: 'Live demo',
    viewCode: 'Code',
    contactMe: 'Get in touch',
    toggleTheme: 'Toggle theme',
    changeLanguage: 'Switch language to Spanish',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
  },
  home: {
    greeting: 'Hi, I am',
    name: 'Elias Marcos',
    role: 'Data Engineer & Full Stack Developer',
    bio: 'Data Engineer and Full Stack Developer with end-to-end experience migrating data into SAP S/4HANA, cloud data modeling and web application development. Specialized in Python, BigQuery, layered modeling (Bronze/Silver), data quality and automation assisted by generative AI. Systems Engineering graduate (UNMSM) with quantified impact: reductions of up to 60% in operational time.',
    availableForWork: 'Open to new opportunities',
    scrollDown: 'Scroll to discover more',
    highlightsTitle: 'Measurable impact',
    highlights: [
      {
        value: '−60%',
        label: 'Selection cycle',
        desc: 'Mass CV screening with the Gemini API inside the recruiting ERP.',
      },
      {
        value: '−40%',
        label: 'Manual operational load',
        desc: 'Dynamic Excel reporting and applicant module on the ISP ERP.',
      },
      {
        value: 'Silver',
        label: 'BigQuery modeling',
        desc: 'Silver layer with DDL/DML, orchestrated load DAGs and QA deployments.',
      },
      {
        value: 'S/4HANA',
        label: 'SAP R/3 → ERP migration',
        desc: 'DE-PARA mapping and field harmonization across heterogeneous sources.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of recent work',
    empty: 'No projects to show yet.',
  },
  curriculum: {
    title: 'Résumé',
    subtitle: 'Profile, experience and skills',
    profile: 'Profile',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    present: 'Present',
    languages: 'Languages',
    softSkills: 'Soft skills',
    softSkillList: [
      'Problem solving',
      'Analytical thinking',
      'Effective communication',
      'Teamwork',
      'Result-oriented',
    ],
    languageList: [
      {
        name: 'Spanish',
        level: 'Native',
        note: 'Working language and technical documentation.',
      },
      {
        name: 'English',
        level: 'A2',
        note: 'Technical reading of documentation and standards.',
      },
    ],
    skillsFrontend: 'Frontend',
    skillsBackend: 'Backend',
    skillsData: 'Data & SAP',
    skillsTools: 'Tools & Cloud',
    skillsDesign: 'Design',
  },
  aiMethod: {
    title: 'Generative AI workflow',
    subtitle: 'How I bring generative AI agents into the data development cycle',
    items: [
      {
        title: 'Agent-assisted development',
        desc: 'Code generation and refactoring, SQL query analysis and optimization, and technical documentation authoring.',
        tools: ['Claude Code', 'Codex', 'Minimax'],
      },
      {
        title: 'Human review before production',
        desc: 'Faster database schema analysis and modeling logic review, with human validation of the result before it reaches QA or production.',
        tools: ['Human validation', 'Pull requests'],
      },
      {
        title: 'Quality control over the output',
        desc: 'Versioning in Git, review through pull requests, and data validation within the Silver layer quality pipelines.',
        tools: ['Git', 'Code review', 'Data quality'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's talk. Pick the channel you prefer.",
    emailLabel: 'Email',
    emailHandle: 'Write me',
    githubLabel: 'GitHub',
    githubHandle: 'See my code',
    linkedinLabel: 'LinkedIn',
    linkedinHandle: "Let's connect",
    locationLabel: 'Location',
    locationValue: 'Lima, Peru',
  },
  footer: {
    copyright: '© {year} Elias Marcos. All rights reserved.',
    builtWith: 'Built with Angular and Tailwind CSS',
    template: 'Inspired by Astrofy Template',
  },
};
