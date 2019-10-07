import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { CardComponent } from './card/card.component';
import {ModelComponent} from './model/model.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'message', component: MessageComponent },
  { path: 'card', component: CardComponent },
  { path: 'model', component: ModelComponent },
  { path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
