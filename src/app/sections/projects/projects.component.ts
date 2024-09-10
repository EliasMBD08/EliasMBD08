import { Component } from '@angular/core';
import { CardProjectComponent } from '../../shared/components/card-project/card-project.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      image: '/images/projects/alianzamanchay.org.webp',
      title: 'Alianza de Manchay web site',
      desc: 'Developed an admin-friendly website for Alianza Cristiana y Misionera Church in Manchay to streamline content management and communication with congregation members. The platform allows easy updates of events, ministries, and academic courses.',
      link: 'https://alianzamanchay.org',
    },
    // {
    //   id: 2,
    //   image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
    //   title: 'Corporación Mastergraf web site',
    //   desc: "Created an admin-friendly website for Corporación Mastergraf SAC, a printing company. The site effectively showcases the company's products and services, and provides detailed information about the company. It features a CMS for easy updates on products, services, promotions, and news.",
    //   link: 'https://alianzamanchay.org',
    // },
  ];
}
