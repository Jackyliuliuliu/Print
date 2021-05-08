export class AppsConsts {
    static RoutePara_HostType: string = 'hostType';
    static RoutePara_HostType_WebHost: string = 'WebHost';
    static RoutePara_HostType_NativeHost: string = 'NativeHost';

    static RoutePara_StudyInstanceUID: string = 'studyInstanceUID';
    static RoutePara_StudyInstanceUID_Invalid: string = 'InvalidStudyUID';

    static RoutePara_ProxyName: string = 'proxyName';
    static RoutePara_ProxyName_InValid: string = 'proxyNameInvalid';

    static RoutePara_GeneralRoutPara: string = ':' + AppsConsts.RoutePara_HostType +
        '/:' + AppsConsts.RoutePara_StudyInstanceUID +
        '/:' + AppsConsts.RoutePara_ProxyName;

    static App_Name_Stencil: string = 'Stencil';
    static App_RootPath_Stencil: string = 'demo3d';

    static App_Name_Heart: string = 'CTCardiacAnalysis';
    static App_RootPath_Heart: string = 'heart';

    static App_Name_CTReview2D: string = 'CTReview2D';
    static App_RootPath_CTReview2D: string = 'ctReview2D';

    static App_Name_FilmingV2: string = 'FilmingV2';
    static App_RootPath_FilmingV2: string = 'FilmingV2';

    static Route_Stencil: string = AppsConsts.App_RootPath_Stencil + '/' + AppsConsts.RoutePara_GeneralRoutPara;
    static Route_Heart: string = AppsConsts.App_RootPath_Heart + '/' + AppsConsts.RoutePara_GeneralRoutPara;
    static Route_CTReview2D: string = AppsConsts.App_RootPath_CTReview2D + '/' + AppsConsts.RoutePara_GeneralRoutPara;
    static Route_FilmingV2: string = AppsConsts.App_RootPath_FilmingV2 + '/' + AppsConsts.RoutePara_GeneralRoutPara;

    static generateChildRoute(appRoutPath: string, hostType: string, studyInstanceUID: string, proxyName: string): string {
        const postFix = appRoutPath + '/' + hostType + '/' + studyInstanceUID + '/' + proxyName;
        return postFix;
    }

    static getAppNameByRoutPath(currentUrl: string): string {
        if (currentUrl.includes(AppsConsts.App_RootPath_Stencil)) {
            return AppsConsts.App_Name_Stencil;
        } else if (currentUrl.includes(AppsConsts.App_RootPath_CTReview2D)) {
            return AppsConsts.App_Name_CTReview2D;
        } else if (currentUrl.includes(AppsConsts.App_RootPath_Heart)) {
            return AppsConsts.App_Name_Heart;
        } else if (currentUrl.includes(AppsConsts.App_RootPath_FilmingV2)) {
            return AppsConsts.App_Name_FilmingV2;
        }
        return '';
    }
}
