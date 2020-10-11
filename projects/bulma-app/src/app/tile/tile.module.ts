import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BulmaTileModule } from '@ngx-builders/ngx-bulma/tile';
import { MarkdownModule } from 'ngx-markdown';
import { TileRoutingModule } from './tile-routing.module';
import { TileComponent } from './tile.component';

@NgModule({
  declarations: [TileComponent],
  imports: [
    CommonModule,
    TileRoutingModule,
    BulmaTileModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [TileComponent],
})
export class TileModule {}
