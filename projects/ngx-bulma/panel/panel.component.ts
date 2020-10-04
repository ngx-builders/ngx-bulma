import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { SharedService } from '@ngx-builders/ngx-bulma/services';

@Component({
  selector: 'bu-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaPanelComponent implements OnInit {
  @Input()
  theme: string;

  defaultClass = 'panel';

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const themeClass = this.sharedService.getThemeClass(this.theme, this.defaultClass);

    this.renderer.addClass(this.el.nativeElement, this.defaultClass);
    this.renderer.addClass(this.el.nativeElement, themeClass);
  }
}
