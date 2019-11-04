import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLanguage]'
})
export class LanguageDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'grey'

   }

}
