import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[buContainer]'
})
export class BulmaContainerDirective implements OnInit {

  @Input()
  type: string;

  defaultClass = 'container';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    const containerTypeClass = this.sharedService.getColorClass(this.type, this.defaultClass);

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
    this.renderer.addClass(this.el.nativeElement, containerTypeClass);
  }

}
