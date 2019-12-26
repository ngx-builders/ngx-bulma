import {
  Directive, ElementRef,
  Renderer2, OnInit, Input,
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[buButton]',
  providers: [SharedService]
})
export class ButtonDirective implements OnInit {

  @Input()
  color: string;

  @Input()
  theme: string;

  @Input()
  size: string;

  @Input()
  light = false;

  @Input()
  fullWidth = false;

  @Input()
  outlined = false;

  @Input()
  inverted = false;

  @Input()
  rounded = false;

  @Input()
  hovered = false;

  @Input()
  focus = false;

  @Input()
  active = false;

  @Input()
  loading = false;

  defaultClass = 'button';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const colorClass = this.sharedService.getColorClass(this.color, this.defaultClass);
    const themeClass = this.sharedService.getThemeClass(this.theme, this.defaultClass);
    const sizeClass = this.sharedService.getSizeClass(this.size, this.defaultClass);

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
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
    if (this.hovered) {
      this.renderer.addClass(this.el.nativeElement, 'is-hovered');
    }
    if (this.focus) {
      this.renderer.addClass(this.el.nativeElement, 'is-focused');
    }
    if (this.active) {
      this.renderer.addClass(this.el.nativeElement, 'is-active');
    }
    if (this.loading) {
      this.renderer.addClass(this.el.nativeElement, 'is-loading');
    }
  }
}
