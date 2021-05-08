import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { RootConsts } from './root-consts';

const routes: Routes = [
    { path: 'home', component: AppListComponent },
// tslint:disable-next-line: max-line-length
    { path: RootConsts.RoutePara_APP, loadChildren: () => import('../app/apps/apps.module').then(m => m.AppsModule) }, //loadChildren: '../app/apps/apps.module#AppsModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule { }