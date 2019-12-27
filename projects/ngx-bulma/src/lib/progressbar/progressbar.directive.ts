import {
  Directive, ElementRef,
  Input, OnInit, Renderer2,
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[buProgress]',
  providers: [SharedService]
})
export class ProgressbarDirective implements OnInit {

  @Input()
  theme: string;

  @Input()
  size: string;

  defaultClass = 'progress';

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
  }

}
