import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { AppListComponent } from './app-list/app-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        RootComponent,
        AppListComponent
    ],
    imports: [
        BrowserModule,
        RootRoutingModule,
        BrowserAnimationsModule,
        HttpModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
    ],
    providers: [],
    bootstrap: [RootComponent]
})

export class RootModule {
}