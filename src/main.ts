import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RootModule } from './root/root.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();

    // 产品级编译时不输出info类型
    console.info = function() {};
}

platformBrowserDynamic().bootstrapModule(RootModule)
    .catch(err => console.error(err));
