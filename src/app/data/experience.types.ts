export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration?: string;
  desc?: string;
  /** Tecnologías clave de la experiencia, mostradas como etiquetas. */
  stack?: string[];
}
