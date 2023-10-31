import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadTest } from '../core/can-load-test';
import { CardListComponent } from './components/card-list/card-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

//#Navigation - routing
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    //#Navigation - lazy loading
    path: 'cardList',
    loadChildren: () => import('./components/card-list/card-list.module').then(m => m.CardModule),
    canLoad: [CanLoadTest],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
