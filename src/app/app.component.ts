import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    TranslateModule,
  ],
})
export class AppComponent {
  title = 'Elyas Almubarak';
  constructor(
    private translateService: TranslateService,
    private titleService: Title
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.onLangChange.subscribe(() => {
      this.translateService
        .get('settings.title')
        .subscribe((translatedTitle: string) => {
          this.titleService.setTitle(translatedTitle);
        });
    });
  }
}
