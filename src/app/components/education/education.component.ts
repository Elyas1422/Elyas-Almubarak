import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  ngOnInit(): void {
    gsap.set('#educationContainer', { opacity: 0, y: 100 });

    gsap.to('#educationContainer', {
      scrollTrigger: '#educationContainer',
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power2.inOut',
    });
  }
}
