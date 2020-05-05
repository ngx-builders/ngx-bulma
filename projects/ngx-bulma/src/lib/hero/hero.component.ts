import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'bu-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [SharedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaHeroComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  size: string;

  @Input()
  gradient = false;

  defaultClass = 'hero';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {

    const colorClass = this.sharedService.getColorClass(this.color, this.defaultClass);
    const sizeClass = this.sharedService.getSizeClass(this.size, this.defaultClass);

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
    this.renderer.addClass(this.el.nativeElement, colorClass);
    this.renderer.addClass(this.el.nativeElement, sizeClass);

    if (this.gradient) {
      this.renderer.addClass(this.el.nativeElement, 'is-bold');
    }
  }

}
