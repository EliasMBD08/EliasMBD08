import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ExperienceDetailComponent } from '../../shared/components/experience-detail/experience-detail.component';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [TimelineModule, SectionTitleComponent, ExperienceDetailComponent, TooltipComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
  academicExperiences = [
    {
      id: 1,
      title: 'Systems Engineering Student',
      subtitle: 'Universidad Nacional Mayor de San Marcos',
      desc: ''
    },
  ];

  workExperiences = [
    {
      id: 2,
      title: 'Systems and Web Applications Development Intern',
      subtitle: 'From 2024.01 to 2024.07 to Madrisqui, Lima, Perú',
      desc: 'I developed systems and applications, and specialized in the automation of computer processes and the development of robust and efficient solutions. I worked with a variety of technologies, including Django, Node.js, Angular, React, and MySQL. My experience spans creating bots in Python, developing advanced reports using Excel, and designing intuitive and engaging user interfaces (UI) and user experiences (UX). Additionally, I was responsible for the maintenance and optimization of existing applications, as well as the integration of new functionalities to improve the performance and usability of the developed solutions.'
    },
    {
      id: 1,
      title: 'Data Engineering and Cloud Platforms Assistant',
      subtitle: 'From 2022.12 to 2023.01, Lima, Perú',
      desc: 'Collaborate in the design, implementation, and management of cloud databases using Azure SQL Database or other database solutions in Microsoft Azure. Perform configuration and maintenance tasks to ensure data availability, security, and integrity. Participate in the creation and scheduling of extraction, transformation, and loading (ETL) workflows in Azure Data Factory. Configure and connect pipeline components, such as extraction, transformation, and loading (ETL) activities.'
    },
  ];
}
