import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { RightSideBarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
    declarations: [ProgressComponent, RightSideBarComponent],
    imports: [
        CommonModule
    ],
    exports: [ProgressComponent, RightSideBarComponent]
})
export class AppToolkitModule { }
