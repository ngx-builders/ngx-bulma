import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { ButtonService } from './button.service';

@Directive({
  selector: '[buButton]'
})
export class ButtonDirective implements OnInit {

  @Input()
  color: string;

  @Input()
  theme: string;

  @Input()
  size: string;

  @Input()
  light: boolean = false;

  @Input()
  fullWidth: boolean = false;

  @Input()
  outlined: boolean = false;

  @Input()
  inverted: boolean = false;

  @Input()
  rounded: boolean = false;

  @Input()
  loading: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private buttonService: ButtonService) { }

  ngOnInit() {
    const colorClass = this.buttonService.getColorClass(this.color);
    const themeClass = this.buttonService.getThemeClass(this.theme);
    const sizeClass = this.buttonService.getSizeClass(this.size);

    this.renderer.addClass(this.el.nativeElement, "button");
    this.renderer.addClass(this.el.nativeElement, colorClass);
    this.renderer.addClass(this.el.nativeElement, themeClass);
    this.renderer.addClass(this.el.nativeElement, sizeClass);

    if (this.light) {
      this.renderer.addClass(this.el.nativeElement, 'is-light');
    }
    if (this.fullWidth) {
      this.renderer.addClass(this.el.nativeElement, 'is-fullwidth');
    }
    if (this.outlined) {
      this.renderer.addClass(this.el.nativeElement, 'is-outlined');
    }
    if (this.inverted) {
      this.renderer.addClass(this.el.nativeElement, 'is-inverted');
    }
    if (this.rounded) {
      this.renderer.addClass(this.el.nativeElement, 'is-rounded');
    }
    if (this.loading) {
      this.renderer.addClass(this.el.nativeElement, 'is-loading');
    }
  }
}
