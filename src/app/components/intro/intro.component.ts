import { Component } from '@angular/core';
import { Blob } from '../../models/blob.model';
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  ngOnInit(): void {
    this.animateBlobs();
  }
  openBotPopUp(): void {
    window.location.href = 'https://bard.google.com/';
  }
  private posX: number = 0;
  private posY: number = 0;
  private speed: number = 0.2;

  animateBlobs() {
    const blobsEls = document.querySelectorAll('.blob');
    const blobs = Array.from(blobsEls).map((blobEl) => new Blob(blobEl));

    function update() {
      blobs.forEach((blob) => {
        blob.update();
        blob.move();
      });
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
}
