import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollDown() {
    this.scrollBy(window.innerHeight);
  }

  scrollUp() {
    this.scrollBy(-window.innerHeight);
  }

  private scrollBy(pixels: number) {
    $('html, body').animate({
      scrollTop: window.scrollY + pixels,
    }, 'slow');
  }
}
