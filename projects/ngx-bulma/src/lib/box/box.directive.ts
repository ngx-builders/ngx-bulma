import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buBox]',
  exportAs: 'buBox',
})
export class BulmaBoxDirective implements OnInit {
  defaultClass = 'box';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
  }
}
