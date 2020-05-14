import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsHomeComponent } from './landingcomponents/components/components.home';
import { ElementComponent } from './landingcomponents/elements/elements.home';
import { FormsComponent } from './landingcomponents/forms/forms.home';
import { LayoutComponent } from './landingcomponents/layout/layout.home';

const routes: Routes = [
  { path: '', loadChildren: () => import('./introduction/introduction.module').then(introduction => introduction.IntroductionModule)},

  { path: 'gettingstarted', loadChildren: () => import('./gettingstarted/gettingstarted.module').then(gs => gs.GettingstartedModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(home => home.HomeModule)  },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(menu => menu.MenuModule) },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(navbar => navbar.NavbarModule)},
  { path: 'message', loadChildren: () => import('./message/message.module').then(message => message.MessageModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then(card => card.CardModule)},
  { path: 'modal', loadChildren: () => import('./modal/modal.module').then(modal => modal.ModalModule) },
  { path: 'panel', loadChildren: () => import('./panel/panel.module').then(panel => panel.PanelModule) },
  { path: 'tab', loadChildren: () => import('./tab/tab.module').then(tab => tab.TabModule) },
  { path: 'button', loadChildren: () => import('./button/button.module').then(button => button.ButtonModule) },
  { path: 'input', loadChildren: () => import('./input/input.module').then(input => input.InputModule) },
  { path: 'textarea', loadChildren: () => import('./textarea/textarea.module').then(textarea => textarea.TextareaModule) },
  { path: 'progress', loadChildren: () => import('./progressbar/progressbar.module').then(progress => progress.ProgressbarModule) },
  { path: 'container', loadChildren: () => import('./container/container.module').then(container => container.ContainerModule)  },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(footer => footer.FooterModule) },
  { path: 'hero', loadChildren: () => import('./hero/hero.module').then(hero => hero.HeroModule) },
  {
    path: 'Components', component: ComponentsHomeComponent
  },
  {
    path: 'Elements', component: ElementComponent
  },
  {
    path: 'Form', component: FormsComponent
  },
  {
    path: 'Layout', component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
