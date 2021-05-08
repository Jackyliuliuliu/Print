import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppsRoutingModule } from './apps-routing.module';
import { AppToolkitModule } from '../app-toolkit/app-toolkit.module';
import { StencilComponent } from './stencil/stencil.component';
import { AppConfigService } from './app-config.service';
import { HeartComponent } from './heart/heart.component';
import { VRShowOrHideHeartComponent } from './heart/vr-show-or-hide-heart/vr-show-or-hide-heart.component';
import { AdvAppBaseComponent } from './adv-app-base/adv-app-base.component';
import { CTReview2DDemoComponent } from './ctreview2-ddemo/ctreview2-ddemo.component';
import { ToolkitModule, BatchComponent } from 'uih-apptoolkit';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MPRCPRSwitchComponent } from './heart/mpr-cpr-switch/mpr-cpr-switch.component';
import { VRRenderParamsSwitchComponent } from './heart/vr-render-params-switch/vr-render-params-switch.component';
import { ResultTableComponent } from './heart/result-table/result-table.component';
import { ReportComponent } from './heart/report/report.component';
import { ToolbarComponent } from './heart/toolbar/toolbar.component';
import { CenterLineNameEditComponent } from './heart/centerline-name-edit-component/centerline-name-edit.component';
import { ToolbarBottomComponent } from './heart/toolbar-bottom/toolbar-bottom.component';
import { RapidResultsComponent } from './heart/rapid-results/rapid-results.component';
import { RapidResultComboxComponent } from './heart/rapid-result-combox/rapid-result-combox.component'
import { RapidResultTooltipComponent} from './heart/rapid-result-tooltip/rapid-result-tooltip.component'
import { HeartService } from './heart/service/heart.service'
import { ToastService } from './heart/service/toast.service';
import { StructuredReportComponent } from './heart/structured-report/structured-report.component';
import { MovableModalDirective } from './heart/directives/movable-modal.directive';
import { SRHeaderComponent } from './heart/structured-report/sr-header/sr-header.component';
import { SRFooterComponent } from './heart/structured-report/sr-footer/sr-footer.component';
import { SRBasicInfoComponent } from './heart/structured-report/sr-basic-info/sr-basic-info.component';
import { SRImagesComponent } from './heart/structured-report/sr-images/sr-images.component';
import { SRFindingsComponent } from './heart/structured-report/sr-findings/sr-findings.component';
import { SRCommentsComponent } from './heart/structured-report/sr-comments/sr-comments.component';
import { EditorComponent } from './heart/editor/editor.component';
import { FilmingToolboxEditerComponent } from './filming/filming-toolbox-editer/filming-toolbox-editer.component';
import { FilmingToolboxPrinterComponent } from './filming/filming-toolbox-printer/filming-toolbox-printer.component';
import { FilmingComponent } from './filming/filming.component';
import { IFrameHostComponent } from 'uih-apptoolkit';
import { HelpComponent } from './heart/help/help.component';
import { FilmingReviewComponent } from './heart/filming-review/filming-review.component';
import { MPRCPRLinkComponent } from './heart/mpr-cpr-link/mpr-cpr-link.component';
import { PopupCommonComponent } from './filming/popupCommon';
import { PrintModelPipe } from './pipes/printmodel.pipe';
import { FilmingVisibleService } from './filming/filming.component.service';

@NgModule({
    declarations: [
        StencilComponent,
        HeartComponent,
        AdvAppBaseComponent,
        CTReview2DDemoComponent,
        MPRCPRSwitchComponent,
        MPRCPRLinkComponent,
        VRRenderParamsSwitchComponent,
        VRShowOrHideHeartComponent,
        ResultTableComponent,
        ReportComponent,
        ToolbarComponent,
        CenterLineNameEditComponent,
        ToolbarBottomComponent,
        RapidResultsComponent,
        RapidResultComboxComponent,
        RapidResultTooltipComponent,
        StructuredReportComponent,
        MovableModalDirective,
        SRHeaderComponent,
        SRFooterComponent,
        SRBasicInfoComponent,
        SRImagesComponent,
        SRFindingsComponent,
        SRCommentsComponent,
        EditorComponent,
        FilmingToolboxEditerComponent,
        FilmingToolboxPrinterComponent,
        PopupCommonComponent,
    
        FilmingReviewComponent,
        HelpComponent,
        FilmingComponent,
        PrintModelPipe,
     
    ],
    imports: [
        CommonModule,
        AppsRoutingModule,
        AppToolkitModule,
        ToolkitModule,
        FormsModule,
        NgZorroAntdModule,
        NzCheckboxModule,
        NzTableModule,
        HttpModule,
        ReactiveFormsModule,
    ],
    exports: [
        StencilComponent,
        HeartComponent,
        AdvAppBaseComponent
    ],
    entryComponents: [
        MPRCPRSwitchComponent,
        VRRenderParamsSwitchComponent,
        VRShowOrHideHeartComponent,
        CenterLineNameEditComponent,
        RapidResultsComponent,
        RapidResultComboxComponent,
        RapidResultTooltipComponent,
        FilmingReviewComponent,
        StructuredReportComponent,
        HelpComponent,
        IFrameHostComponent,
        MPRCPRLinkComponent
    ],
    providers: [AppConfigService, HeartService, ToastService,FilmingVisibleService]
})
export class AppsModule {
    constructor(private injector: Injector) {
        console.log('AppsModule constructor');
    }
}

