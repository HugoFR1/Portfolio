import { Component, signal } from '@angular/core';
import { Iprojects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<Iprojects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto indisponível',
      title: 'vida fullstack',
      width: '100px',
      height: '51px',
      description: 
      '<p>no description<p/>',
      links: [
        {
          name: 'conheça o blog(não tem blog)',
          href: 'https://github.com/HugoFR1'
        },
      ],
    },
  ]);
}