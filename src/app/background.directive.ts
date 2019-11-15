import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input('appBackground') url: string;
  @HostBinding('style.background-size') backgroundSize = 'cover';
  @HostBinding('style.background-position') backgroundPosition = 'center';
  @HostBinding('style.background-image') get background() {
    return `url(${this.url})`;
  }

  constructor() { }

}
