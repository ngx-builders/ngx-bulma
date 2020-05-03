import {
  Directive, ElementRef,
  Input, OnInit, Renderer2,
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[buTextarea]',
  providers: [SharedService]

})
export class BulmaTextareaDirective implements OnInit {

  @Input()
  theme: string;

  @Input()
  size: string;

  @Input()
  hovered = false;

  @Input()
  focus = false;

  @Input()
  fixed = false;

  defaultClass = 'textarea';

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

    if (this.hovered) {
      this.renderer.addClass(this.el.nativeElement, 'is-hovered');
    }
    if (this.focus) {
      this.renderer.addClass(this.el.nativeElement, 'is-focused');
    }
    if (this.fixed) {
      this.renderer.addClass(this.el.nativeElement, 'has-fixed-size');
    }
  }

}
