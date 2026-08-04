export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    curriculum: string;
    contact: string;
  };
  actions: {
    viewProjects: string;
    downloadCV: string;
    viewDemo: string;
    viewCode: string;
    contactMe: string;
    toggleTheme: string;
    changeLanguage: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  home: {
    greeting: string;
    name: string;
    role: string;
    bio: string;
    availableForWork: string;
    scrollDown: string;
  };
  projects: {
    title: string;
    subtitle: string;
    empty: string;
  };
  curriculum: {
    title: string;
    subtitle: string;
    profile: string;
    experience: string;
    education: string;
    skills: string;
    present: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailHandle: string;
    githubLabel: string;
    githubHandle: string;
    linkedinLabel: string;
    linkedinHandle: string;
    locationLabel: string;
    locationValue: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
    template: string;
  };
}