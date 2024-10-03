import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio de Analista de desenvolvimento',
        p: 'IBrowse | MAI 2023 - Present',
      },
      text: '<p>Desde Maio de 2023, atuo como analista de desenvolvimento na IB, na parte de suporte e na criação de alguns projetos front/back-end, utilizando-se de html5, Css3, JavaScript, Angular+2, back-end.'
    }
  ])
}
