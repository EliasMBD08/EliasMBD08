import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { profile } from '../../data/dataPortafolio';

interface ContactCard {
  label: string;
  handle: string;
  href: string;
  external: boolean;
  cta: string;
  icon: 'mail' | 'github' | 'linkedin' | 'map';
}

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './contact.html',
})
export class Contact {
  protected i18n = inject(I18nService);
  protected profile = profile;

  protected t = computed(() => this.i18n.t());

  protected cards = computed<ContactCard[]>(() => {
    const tr = this.t();
    return [
      {
        label: tr.contact.emailLabel,
        handle: this.profile.email,
        href: `mailto:${this.profile.email}`,
        external: false,
        cta: tr.contact.emailHandle,
        icon: 'mail',
      },
      {
        label: tr.contact.githubLabel,
        handle: '@EliasMBD08',
        href: this.profile.github,
        external: true,
        cta: tr.contact.githubHandle,
        icon: 'github',
      },
      {
        label: tr.contact.linkedinLabel,
        handle: 'Elias Daniel Marcos',
        href: this.profile.linkedin,
        external: true,
        cta: tr.contact.linkedinHandle,
        icon: 'linkedin',
      },
      {
        label: tr.contact.locationLabel,
        handle: tr.contact.locationValue,
        href: 'https://maps.google.com/?q=Lima,Peru',
        external: true,
        cta: 'Ver en mapa',
        icon: 'map',
      },
    ];
  });
}