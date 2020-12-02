import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buTable]'
})
export class BulmaTableDirective implements OnInit {

  @Input()
  bordered = false

  @Input()
  striped = false

  @Input()
  narrower = false

  @Input()
  hoverable = false

  @Input()
  fullWidth = false

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if (this.bordered)
      this.renderer.addClass(this.el.nativeElement, 'is-bordered')

    if (this.striped)
      this.renderer.addClass(this.el.nativeElement, 'is-striped')

    if (this.narrower)
      this.renderer.addClass(this.el.nativeElement, 'is-narrow')

    if (this.hoverable)
      this.renderer.addClass(this.el.nativeElement, 'is-hoverable')

    if (this.fullWidth)
      this.renderer.addClass(this.el.nativeElement, 'is-fullwidth')

  }
}
