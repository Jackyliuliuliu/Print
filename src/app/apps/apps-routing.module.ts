import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StencilComponent } from './stencil/stencil.component';
import { AppsConsts } from './apps-consts';
import { HeartComponent } from './heart/heart.component';
import { CTReview2DDemoComponent } from './ctreview2-ddemo/ctreview2-ddemo.component';
import { FilmingComponent } from './filming/filming.component';

const emptyRedirect: string = AppsConsts.App_RootPath_Stencil + '/' +
    AppsConsts.RoutePara_HostType_WebHost + '/' +
    AppsConsts.RoutePara_StudyInstanceUID_Invalid + '/' +
    AppsConsts.RoutePara_ProxyName_InValid;

const routes: Routes = [
    { path: AppsConsts.Route_Stencil, component: StencilComponent },
    { path: AppsConsts.Route_Heart, component: HeartComponent },
    { path: AppsConsts.Route_CTReview2D, component: CTReview2DDemoComponent },
    { path: AppsConsts.Route_FilmingV2, component: FilmingComponent },
    { path: '', redirectTo: emptyRedirect, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule {

}
