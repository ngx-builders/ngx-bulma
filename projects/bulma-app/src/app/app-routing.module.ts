import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./introduction/introduction.module').then(
        (introduction) => introduction.IntroductionModule,
      ),
  },
  {
    path: 'gettingstarted',
    loadChildren: () =>
      import('./gettingstarted/gettingstarted.module').then((gs) => gs.GettingstartedModule),
  },
  {
    path: 'components/menu',
    loadChildren: () => import('./menu/menu.module').then((menu) => menu.MenuModule),
  },
  {
    path: 'components/navbar',
    loadChildren: () => import('./navbar/navbar.module').then((navbar) => navbar.NavbarModule),
  },
  {
    path: 'components/message',
    loadChildren: () => import('./message/message.module').then((message) => message.MessageModule),
  },
  {
    path: 'components/card',
    loadChildren: () => import('./card/card.module').then((card) => card.CardModule),
  },
  {
    path: 'components/modal',
    loadChildren: () => import('./modal/modal.module').then((modal) => modal.ModalModule),
  },
  {
    path: 'components/panel',
    loadChildren: () => import('./panel/panel.module').then((panel) => panel.PanelModule),
  },
  { path: 'tab', loadChildren: () => import('./tab/tab.module').then((tab) => tab.TabModule) },
  {
    path: 'elements/button',
    loadChildren: () => import('./button/button.module').then((button) => button.ButtonModule),
  },
  {
    path: 'form/input',
    loadChildren: () => import('./input/input.module').then((input) => input.InputModule),
  },
  {
    path: 'form/textarea',
    loadChildren: () =>
      import('./textarea/textarea.module').then((textarea) => textarea.TextareaModule),
  },
  {
    path: 'elements/progress',
    loadChildren: () =>
      import('./progressbar/progressbar.module').then((progress) => progress.ProgressbarModule),
  },
  {
    path: 'layout/container',
    loadChildren: () =>
      import('./container/container.module').then((container) => container.ContainerModule),
  },
  {
    path: 'layout/footer',
    loadChildren: () => import('./footer/footer.module').then((footer) => footer.FooterModule),
  },
  {
    path: 'layout/hero',
    loadChildren: () => import('./hero/hero.module').then((hero) => hero.HeroModule),
  },
  {
    path: 'layout/tiles',
    loadChildren: () => import('./tile/tile.module').then((tile) => tile.TileModule),
  },
  {
    path: 'core-team',
    loadChildren: () => import('./team/team.module').then((team) => team.TeamModule),
  },
  {
    path: 'elements/box',
    loadChildren: () => import('./box/box.module').then((box) => box.BoxModule),
  },
  // Landing Components routings
  {
    path: 'components',
    loadChildren: () =>
      import('./landingcomponents/components/components.module').then(
        (comp) => comp.ComponentsModule,
      ),
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('./landingcomponents/elements/elements.module').then((eles) => eles.ElementsModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./landingcomponents/forms/forms.module').then((form) => form.FormsModule),
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./landingcomponents/layout/layout.module').then((layout) => layout.LayoutModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./introduction/introduction.module').then(
        (introduction) => introduction.IntroductionModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
