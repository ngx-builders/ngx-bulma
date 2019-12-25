import {
  Directive, ElementRef,
  Renderer2, OnInit, Input,
  Inject
} from '@angular/core';
import { THEME_SERVICE, THEME_VALUES } from '../service/theme.service';
import { ITheme } from '../service/itheme';

@Directive({
  selector: '[buButton]',
  providers: [{ provide: THEME_SERVICE, useValue: THEME_VALUES }]
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
  loading = false;

  constructor(
    @Inject(THEME_SERVICE) private themeService: ITheme,
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const colorClass = this.getColorClass(this.color);
    const themeClass = this.getThemeClass(this.theme);
    const sizeClass = this.getSizeClass(this.size);

    this.renderer.addClass(this.el.nativeElement, 'button');
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

  getColorClass(color: string) {
    let colorClass = this.themeService.themes.get(color);
    return colorClass === undefined ? 'button' : colorClass;
  }

  getThemeClass(theme: string) {
    let themeClass = this.themeService.themes.get(theme);
    return themeClass === undefined ? 'button' : themeClass;
  }

  getSizeClass(size: string) {
    let sizeClass = this.themeService.themes.get(size);
    return sizeClass === undefined ? 'button' : sizeClass;
  }
}
