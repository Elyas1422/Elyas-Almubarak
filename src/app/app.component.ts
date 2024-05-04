import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';

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
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'Elyas Almubarak';
  constructor(
    private translateService: TranslateService,
    private titleService: Title,
    private cookieService: CookieService
  ) {
    const browserLang =
      this.cookieService.get('lang') || this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(browserLang || 'en');
    this.translateService
      .get('settings.title')
      .subscribe((translatedTitle: string) => {
        this.titleService.setTitle(translatedTitle);
      });
    this.translateService.onLangChange.subscribe(() => {
      const lang = this.translateService.currentLang;
      this.cookieService.set('lang', lang, { expires: new Date('9999-12-31') });
      this.translateService
        .get('settings.title')
        .subscribe((translatedTitle: string) => {
          this.titleService.setTitle(translatedTitle);
        });
    });
  }
}
