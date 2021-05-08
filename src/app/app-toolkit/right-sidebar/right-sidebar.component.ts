import { Component, OnInit, Injector } from '@angular/core';

@Component({
    selector: 'right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.css']
})
export class RightSideBarComponent implements OnInit {

    themes: UiThemeInfo[] = [
        new UiThemeInfo("Red", "red"),
        new UiThemeInfo("Pink", "pink"),
        new UiThemeInfo("Purple", "purple"),
        new UiThemeInfo("Deep Purple", "deep-purple"),
        new UiThemeInfo("Indigo", "indigo"),
        new UiThemeInfo("Blue", "blue"),
        new UiThemeInfo("Light Blue", "light-blue"),
        new UiThemeInfo("Cyan", "cyan"),
        new UiThemeInfo("Teal", "teal"),
        new UiThemeInfo("Green", "green"),
        new UiThemeInfo("Light Green", "light-green"),
        new UiThemeInfo("Lime", "lime"),
        new UiThemeInfo("Yellow", "yellow"),
        new UiThemeInfo("Amber", "amber"),
        new UiThemeInfo("Orange", "orange"),
        new UiThemeInfo("Deep Orange", "deep-orange"),
        new UiThemeInfo("Brown", "brown"),
        new UiThemeInfo("Grey", "grey"),
        new UiThemeInfo("Blue Grey", "blue-grey"),
        new UiThemeInfo("Black", "black")
    ];

    selectedThemeCssClass: string = "red";

    constructor(
        injector: Injector,
        //private _configurationService: ConfigurationServiceProxy
    ) {
    }

    ngOnInit(): void {
        //this.selectedThemeCssClass = this.setting.get('App.UiTheme');
        //$('body').addClass('theme-' + this.selectedThemeCssClass);
    }

    setTheme(theme: UiThemeInfo): void {
        // const input = new ChangeUiThemeInput();
        // input.theme = theme.cssClass;
        // this._configurationService.changeUiTheme(input).subscribe(() => {
        //     const $body = $('body');

        //     $('.right-sidebar .demo-choose-skin li').removeClass('active');
        //     $body.removeClass('theme-' + this.selectedThemeCssClass);
        //     $('.right-sidebar .demo-choose-skin li div.' + theme.cssClass).closest('li').addClass('active');
        //     $body.addClass('theme-' + theme.cssClass);

        //     this.selectedThemeCssClass = theme.cssClass;
        // });
    }
}

class UiThemeInfo {
    constructor(
        public name: string,
        public cssClass: string
    ) { }
}
