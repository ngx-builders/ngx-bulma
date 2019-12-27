import {
  Directive, ElementRef,
  Input, OnInit, Renderer2,
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[buInput]',
  providers: [SharedService]
})
export class InputDirective implements OnInit {

  @Input()
  theme: string;

  @Input()
  size: string;

  @Input()
  rounded = false;

  @Input()
  hovered = false;

  @Input()
  focus = false;

  defaultClass = 'input';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const themeClass = this.sharedService.getThemeClass(this.theme, this.defaultClass);
    const sizeClass = this.sharedService.getSizeClass(this.size, this.defaultClass);

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
    this.renderer.addClass(this.el.nativeElement, themeClass);
    this.renderer.addClass(this.el.nativeElement, sizeClass);

    if (this.rounded) {
      this.renderer.addClass(this.el.nativeElement, 'is-rounded');
    }
    if (this.hovered) {
      this.renderer.addClass(this.el.nativeElement, 'is-hovered');
    }
    if (this.focus) {
      this.renderer.addClass(this.el.nativeElement, 'is-focused');
    }
  }
}
