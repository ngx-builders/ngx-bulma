import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDropdownComponent implements OnInit {
  @Input()
  boxed = false;

  @HostBinding('class') class = 'navbar-dropdown';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.boxed) {
      this.renderer.addClass(this.el.nativeElement, 'is-boxed');
    }
  }
}
