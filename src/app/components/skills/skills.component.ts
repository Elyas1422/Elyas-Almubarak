import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Swagger', icon: 'devicon-swagger-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
  ];
}
