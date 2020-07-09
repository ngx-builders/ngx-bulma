import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaMenuModule } from 'ngx-bulma';
import { MarkdownModule } from 'ngx-markdown';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    BulmaMenuModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
