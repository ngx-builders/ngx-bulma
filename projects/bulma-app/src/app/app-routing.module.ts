import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModelComponent } from './model/model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { TabComponent } from './tab/tab.component';
import { TextareaComponent } from './textarea/textarea.component';


const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'gettingstarted', component: GettingstartedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'message', component: MessageComponent },
  { path: 'card', component: CardComponent },
  { path: 'model', component: ModelComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'tab', component: TabComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'input', component: InputComponent },
  { path: 'textarea', component: TextareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
