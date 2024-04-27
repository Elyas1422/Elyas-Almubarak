import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  frontendSkills = [
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Angular', icon: 'devicon-angular-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'PrimeNg', icon: 'prime-icon' },
  ];
  backendSkills = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Swagger', icon: 'devicon-swagger-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
  ];

  constructor(
    public el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    gsap.set('#cardsContainer', { opacity: 0, y: 100 });

    gsap.to('#cardsContainer', {
      scrollTrigger: '#cardsContainer',
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power2.inOut',
    });
  }
}
