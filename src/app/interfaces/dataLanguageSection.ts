import { Curriculum } from "./curriculum";
import { IconLanguage } from "./iconLanguage";
import { Project } from "./project";
import { Resume } from "./resume";
import { SidebarItem } from "./sidebarItem";

export interface DataLanguageSection {
  iconLanguage: IconLanguage;
  sidebar: SidebarItem[];
  resume: Resume;
  projects: {
    title: string;
    items: Project[];
  };
  curriculum: Curriculum;
  buttons: {
    downloadCV: {
      text: string,
      link: string,
    },
  };
}

export interface Data {
  spanish: DataLanguageSection;
  english: DataLanguageSection;
}