import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from '@ngx-builders/ngx-bulma/services';

@Directive({
  selector: '[buTile]',
  exportAs: 'buTile',
  providers: [SharedService],
})
export class BulmaTileDirective implements OnInit {
  @Input('buTile')
  modifier: string;

  @Input()
  direction: string;

  @Input()
  horizontalSize: string;

  @Input()
  theme: string;

  defaultClass = 'tile';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const modifierClass = this.sharedService.getTileModifier(this.modifier, this.defaultClass);
    const directionClass = this.sharedService.getTileDirection(this.direction, this.defaultClass);
    const themeClass = this.sharedService.getThemeClass(this.theme, this.defaultClass);
    const horizontalSizeClass = this.sharedService.getHorizontalSizes(
      this.horizontalSize,
      this.defaultClass,
    );

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
    this.renderer.addClass(this.el.nativeElement, modifierClass);
    this.renderer.addClass(this.el.nativeElement, directionClass);
    this.renderer.addClass(this.el.nativeElement, themeClass);
    this.renderer.addClass(this.el.nativeElement, horizontalSizeClass);
  }
}
