import * as ViewerKit from 'uih-viewerkit';
import * as Appcommon from 'uih-appcommon';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import { AdvAppBaseComponent } from './adv-app-base.component';

export class LoadSeriesStartOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: Appcommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.commandSender.workflowName = obj.workflowName;
        return null;
    }
}

export class SetLayoutOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: Appcommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        console.log('receive setlayout from be');
        component.setDefaultLayout();
        return null;
    }
}

export class LoadEndOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: Appcommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.loadCompleteRequest.emit("LoadedSeriesUID");
        return null;
    }
}