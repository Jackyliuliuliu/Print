import { Component } from '@angular/core';
import { AdvAppServerAPIService } from './adv-app.server.api.service';
import { AppConfigService } from 'src/app/apps/app-config.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent {
    title = 'AdvApp-Angular';
    isenabled = true;

    constructor(private serverApi: AdvAppServerAPIService, private configApi: AppConfigService) {
        //serverApi.baseUrl = AppConfig.serverAPIBaseUrl;
        //serverApi.baseUrl = 'http://10.8.109.79:8006';
        //serverApi.baseUrl = 'http://192.168.0.24:8006';
        //console.log(AppConfig);
        this.configApi.getConfig().then(response => {
            const json = response.json();
            this.serverApi.baseUrl = json.serverAPIBaseUrl;
            this.isenabled = true;
        });
    }
}
