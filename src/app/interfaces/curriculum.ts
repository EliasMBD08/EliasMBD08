import { Education } from "./education";
import { Experience } from "./experience";

export interface Curriculum {
  perfil: {
    title: string;
    desc: string;
  };
  experiences: {
    title: string;
    items: Experience[];
  };
  education: {
    title: string;
    items: Education[];
  };
}