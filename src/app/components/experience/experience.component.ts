import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  ngOnInit(): void {
    gsap.set('#experienceContainer', { opacity: 0, y: 100 });

    gsap.to('#experienceContainer', {
      scrollTrigger: '#experienceContainer',
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power2.inOut',
    });
  }
  learnedSkills = [
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'RxJS', icon: 'devicon-rxjs-plain' },
    { name: 'SignalR', icon: 'icon signalr-icon' },
    { name: 'Ag Grid', icon: 'icon ag-grid-icon' },
  ];
}
