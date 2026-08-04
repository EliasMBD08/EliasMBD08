import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { SectionTitle } from '../../components/section-title/section-title';
import { ExperienceDetail } from '../../components/experience-detail/experience-detail';
import { TooltipDirective } from '../../shared/ui/tooltip.directive';
import { LinkButton } from '../../shared/ui/link-button/link-button';
import {
  educationExperiences,
  profile,
  skills,
  skillsByCategory,
  workExperiences,
} from '../../data/dataPortafolio';

@Component({
  selector: 'app-curriculum',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SectionHeading,
    SectionTitle,
    ExperienceDetail,
    TooltipDirective,
    LinkButton,
  ],
  templateUrl: './curriculum.html',
})
export class Curriculum {
  protected i18n = inject(I18nService);

  protected profile = profile;
  protected workExperiences = workExperiences;
  protected educationExperiences = educationExperiences;
  protected skills = skills;

  protected t = computed(() => this.i18n.t());

  protected frontendSkills = skillsByCategory('frontend');
  protected backendSkills = skillsByCategory('backend');
  protected toolsSkills = skillsByCategory('tools');
  protected designSkills = skillsByCategory('design');

  protected hasDesignSkills = this.designSkills.length > 0;
}