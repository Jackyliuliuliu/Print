import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import * as AppCommon from 'uih-appcommon';
import { isNullOrUndefined } from 'util';
import { FindingModel } from '../heart.component.findingModel';
import { AdvAppBaseComponent } from '../../adv-app-base/adv-app-base.component'
import * as Enum from '../heart.component.enumConverter'
import { StructuredReportComponent } from '../structured-report/structured-report.component';
import { HeartService } from '../service/heart.service';
import { element } from 'protractor';
import { ValueConverter } from '../heart.component.enumConverter'
import { noFindingDescription } from '../heart.component.enumConverter'
import { from } from 'rxjs';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('srarea', { read: ViewContainerRef, static: false }) srarea: ViewContainerRef;

  content: string = '';
  contentAuto: string = '';

  isShowCopyAlert: boolean = false;

  plaqueType: Array<string> = ['有软斑块', '有混合斑块', '有钙化斑块'];
  stenosisLevel: Array<string> = ['管腔呈轻微狭窄', '管腔呈轻度狭窄', '管腔呈中度狭窄', '管腔呈重度狭窄', '管腔闭塞'];
  coronarySegMap = [
    [5], [6, 7, 8, 9, 10, 22, 23, 24], [17], [11, 13, 12, 14, 15, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30], [1, 2, 3, 4, 16]
  ];
  mainCoranaryIdxList = [
    [5],
    [6, 7, 8],
    [17],
    [11, 13],
    [1, 2, 3],
  ];
  visibleCenterlineIdx = [];
  valCvt: ValueConverter = new ValueConverter();

  constructor(protected modelContainer: ModelContainer,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected heartSvc: HeartService) { }

  ngOnInit() {
    AppCommon.Messenger.on('updateReport', (info) => { this.onUpdateReport(info); });
  }

  public copyReportContent(oElement, value): void {
    const aux = document.createElement('textarea');
    if (oElement) {
      var content = oElement.innerHTML || oElement.value;
    }
    var _content = value || content;
    aux.value = value;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('Copy');
    document.body.removeChild(aux);

    this.isShowCopyAlert = true;

    const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
    component.advAppAPIService.userOperationClient.saveUserOperation('admin',
      component.studyDTO.studyInstanceUID, Enum.userOperationType.copyReport, component.appName);

    component.advAppAPIService.aiDBSvcClient.updateSegStatus(component.studyDTO.list[0].seriesInstanceUID, 'CT_CORONARY', true);
  }

  public resetReportContent(): void {
    this.content = this.contentAuto;
  }

  public showStructedReport(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(StructuredReportComponent);
    this.srarea.clear();
    const componentRef = this.srarea.createComponent(componentFactory);
    componentRef.instance.isShowStructuredReport = true;
    componentRef.instance.batchViewContainer = this.srarea;
  }

  public onUpdateReport(info: any[]): void {
    // 冠脉起源
    this.visibleCenterlineIdx = this.getVisibleCenterlineIdx();
    this.content = '';
    const coronaryFeatureItem = info[0];

    if (coronaryFeatureItem.left_coronary_ostium === 2 || coronaryFeatureItem.right_coronary_ostium === 2) {
      this.content += '冠脉起源存在异常';
    } else if (coronaryFeatureItem.left_coronary_ostium === 0 && coronaryFeatureItem.right_coronary_ostium === 1) {
      this.content += '左主干起源于左窦，右冠状动脉起源于右窦';
    } else {
      this.content += (coronaryFeatureItem.left_coronary_ostium === 0) ? '左主干起源于左窦' : '左主干起源于右窦';
      this.content += (coronaryFeatureItem.right_coronary_ostium === 0) ? '，右冠状动脉起源于左窦' : '，右冠状动脉起源于右窦';
      this.content += '，冠脉起源存在异常';
    }
    this.content += (coronaryFeatureItem.coronary_dominance === 0) ? '，冠脉呈左优势型' :
      (coronaryFeatureItem.coronary_dominance === 1) ? '，冠脉呈右优势型' :
        (coronaryFeatureItem.coronary_dominance === 2) ? '，冠脉呈均衡型' : '';

    this.content += '。\n';

    // 狭窄、支架和心肌桥
    /**
     * 划分标准变化 狭窄斑块心肌桥同时记录
     */


    const coronaryFindingItems = info[1];
    if (isNullOrUndefined(coronaryFindingItems)) {
      return;
    } else {
      this.generateFindingItenmsReport(coronaryFindingItems);
    }

    this.contentAuto = this.content;
    this.heartSvc.srM.imagesM.content = this.content;
  }

  /**
   * Set copy tips unvisible when textarea lost focus
   */
  public lostFocus(): void {
    this.isShowCopyAlert = false;
  }

  public checkFindingItems(coronaryFindingItems: FindingModel[], checkedFindingItems: FindingModel[]): void {
    coronaryFindingItems.forEach(element => {
      if (element.isChecked) {
        checkedFindingItems.push(element);
      }
    });
  }

  public generateFindingItenmsReport(coronaryFindingItems: FindingModel[]): void {
    coronaryFindingItems = this.validateFindings(coronaryFindingItems);
    const checkedFindingItems = [];
    const splitedFindingObj = new SplitedFindingObj();
    this.checkFindingItems(coronaryFindingItems, checkedFindingItems);

    if (checkedFindingItems.length === 0) {
      splitedFindingObj.lTrunkBranch = [];
      splitedFindingObj.AnteriorDescBranch = [];
      splitedFindingObj.midBranch = [];
      splitedFindingObj.lCircumflexBranch = [];
      splitedFindingObj.rCoronaryBranch = [];
    } else {
      //区分修改过中心线的病灶
      checkedFindingItems.forEach(coronaryFindingItem => {
        const newCoronaryIdx = this.getNewCoronaryIdx(coronaryFindingItem);
        let classifyIdx = this.valCvt.cornaryClassifyCvt(newCoronaryIdx);
        switch (classifyIdx) {
          case 0:
            splitedFindingObj.lTrunkBranch.push(coronaryFindingItem);
            break;
          case 1:
            splitedFindingObj.AnteriorDescBranch.push(coronaryFindingItem);
            break;
          case 2:
            splitedFindingObj.midBranch.push(coronaryFindingItem);
            break;
          case 3:
            splitedFindingObj.lCircumflexBranch.push(coronaryFindingItem);
            break;
          case 4:
            splitedFindingObj.rCoronaryBranch.push(coronaryFindingItem);
            break;
        }
      });
    }
    if (splitedFindingObj.lTrunkBranch.length == 0) {
      this.content += noFindingDescription.lTrunkBranch;
    } else {
      this.singleContent(splitedFindingObj.lTrunkBranch, 0);
    }
    this.singleContent(splitedFindingObj.AnteriorDescBranch, 1);
    if (splitedFindingObj.midBranch.length == 0) {
      this.content += noFindingDescription.midBranch;
    } else {
      this.singleContent(splitedFindingObj.midBranch, 2);
    }
    this.singleContent(splitedFindingObj.lCircumflexBranch, 3);
    this.singleContent(splitedFindingObj.rCoronaryBranch, 4);
  }

  public singleContent(coronaryItems: any, index: any) {
    /**
     * 描述示例：
     * 前降支LAD近段存在狭窄，前降支LAD中段、远段及其分支第一对角支D1、第二对角支D2未见狭窄和斑块 
     */
    //只保留 一段血管中最严重的病灶
    coronaryItems.sort(this.sortFunc);
    if (index == 4) {
      coronaryItems.sort(function compare(a, b) { return a.newName.substring(0, 1) == 'R' && b.newName.substring(0, 1) == 'L' ? -1 : 0 });
    }
    coronaryItems = this.excludeNoServerVessel(coronaryItems);
    const coronarySegItems = this.coronarySegMap[index];
    // existIdx: 存在病灶的coronaryIndex;  missIdx:不存在病灶的coronaryIndex
    let existIdx = [];
    let newIdx = [];
    let missIdx = [];
    let _this = this;
    if (coronaryItems.length == 0) {
      missIdx = coronarySegItems;
      newIdx = coronarySegItems;
    } else {
      coronaryItems.forEach(element => {
        const newCoronaryIdx = this.getNewCoronaryIdx(element);
        if (coronarySegItems.indexOf(newCoronaryIdx) >= 0 && existIdx.indexOf(newCoronaryIdx) < 0) {
          existIdx.push(newCoronaryIdx);
        }
        if (coronarySegItems.indexOf(newCoronaryIdx) >= 0 && newIdx.indexOf(element.coronaryIndex) < 0) {
          newIdx.push(element.coronaryIndex);
        }
      });
      //避免改名导致的顺序混乱
      newIdx.sort(function compare(a, b) {
        let aIdx = newIdx.indexOf(a);
        let bIdx = newIdx.indexOf(b);
        return (existIdx[aIdx] - existIdx[bIdx]);
      })
      missIdx = coronarySegItems.filter((val) => { return !(existIdx.indexOf(val) > -1) })
        .concat(existIdx.filter((val) => { return !(coronarySegItems.indexOf(val) > -1) }));
    }
    missIdx = missIdx.filter((val) => {
      return _this.visibleCenterlineIdx.indexOf(val) >= 0 || _this.mainCoranaryIdxList[index].indexOf(val) >= 0;
    })
    if (!this.includeMainVessel(existIdx, this.mainCoranaryIdxList[index])) {
      // 病灶不在主血管
      missIdx = missIdx.filter((val) => {
        return _this.mainCoranaryIdxList[index].indexOf(val) < 0; //未存在病灶的主血管在前面已经描述过
      });
    }
    let cnt = 1;
    if (!this.includeMainVessel(existIdx, this.mainCoranaryIdxList[index])) {
      if (index == 1) {
        this.content += '前降支LAD近、中、远段未见狭窄和斑块。';
      }
      if (index == 3) {
        this.content += '左回旋支LCX近段、中远段未见狭窄和斑块。';
      }
      if (index == 4) {
        this.content += '右冠脉RCA近、中、远段未见狭窄和斑块。';
      }
      if (index == 1 || index == 3 || index == 4)
        this.content += missIdx.length > 0 ? '其分支' : '';
      cnt = 0;
    }
    if (existIdx.length != 0) {
      this.content += this.getCoronarySegmentByIdxList(newIdx, coronaryItems, true, cnt, index);
      this.content = this.content.slice(0, -1);
      this.content += '。';
    }
    if (missIdx.length != 0) {
      this.content += this.getCoronarySegmentByIdxList(missIdx, coronaryItems, false, cnt, index);
    }
    this.content += '\n';
  }

  private getCoronarySegmentByName(name: string) {
    let coronarySegment = new Map<string, string>();
    coronarySegment.set('RCA', "右冠状动脉");
    coronarySegment.set('R-PDA', "右后降支");
    coronarySegment.set('LM', "左主干");
    coronarySegment.set('LAD', "前降支");
    coronarySegment.set('D1', "第一对角支");
    coronarySegment.set('D2', "第二对角支");
    coronarySegment.set('D3', "第三对角支");
    coronarySegment.set('D4', "第四对角支");
    coronarySegment.set('D5', "第五对角支");
    coronarySegment.set('LCX', "回旋支");
    coronarySegment.set('OM1', "第一钝缘支");
    coronarySegment.set('OM2', "第二钝缘支");
    coronarySegment.set('OM3', "第三钝缘支");
    coronarySegment.set('OM4', "第四钝缘支");
    coronarySegment.set('OM5', "第五钝缘支");
    coronarySegment.set('L-PDA', "左后降支");
    coronarySegment.set('R-PDA', "右后降支");
    coronarySegment.set('R-PLB', "右后外侧支");
    coronarySegment.set('RAMUS', "中间支");
    coronarySegment.set('L-PLB', "左后外侧支");
    coronarySegment.set('L-PLB1', "第一左后外侧分支");
    coronarySegment.set('L-PLB2', "第二左后外侧分支");
    coronarySegment.set('L-PLB3', "第三左后外侧分支");
    coronarySegment.set('L-PLB4', "第四左后外侧分支");
    coronarySegment.set('L-PLB5', "第五左后外侧分支");
    coronarySegment.set('LACX', "左房回旋支");

    let keys = coronarySegment.keys();
    for (let i = 0; i < coronarySegment.size; i++) {
      const key = keys.next().value;
      if (name.indexOf(key) >= 0) {
        return coronarySegment.get(key);
      }

    }
    return "未知";
  }

  /**
   * 获取某段血管的详细描述
   * @param coronaryFindingItems 
   */
  private getCoronarySegmentDetail(coronaryFindingItems: any) {
    // 确保狭窄程度一致
    if (coronaryFindingItems.length == 0)
      return '';
    let coronaryFindingItem = coronaryFindingItems[0];
    let plaqueDesSet = new Set();
    let plaqueDes = '';
    coronaryFindingItems.forEach(element => {
      plaqueDesSet.add(element.plaqueName);
    });
    for (let item of plaqueDesSet) {
      plaqueDes += item + '、';
    }
    plaqueDes = plaqueDes.slice(0, -1);
    let content = '';
    if (coronaryFindingItem.findingType === 1) {  // 狭窄
      if (coronaryFindingItem.plaqueType > 0 || coronaryFindingItem.stenosisLevel > 0) {
        content += (coronaryFindingItem.plaqueType > 0) ? '有' + plaqueDes + '，' : '';
        content += (coronaryFindingItem.stenosisLevel > 0) ? (this.stenosisLevel[coronaryFindingItem.stenosisLevel - 1] + '；') : '';
      }
    } else { // 支架 & 心肌桥
      if (parseInt(coronaryFindingItem.is_stent_present.toString(), 10) === 1) {  // 支架
        content += '支架置入术后';
        if (parseInt(coronaryFindingItem.is_stent_restenosis.toString(), 10) === 0) {
          content += '，支架腔内无法评价；';
        }
        if (parseInt(coronaryFindingItem.is_stent_restenosis.toString(), 10) === 1) {
          content += '，支架内存在再狭窄；';
        }
        if (parseInt(coronaryFindingItem.is_stent_restenosis.toString(), 10) === 2) {
          content += '，管腔通畅；';
        }
      }
      if (parseInt(coronaryFindingItem.is_stent_present.toString(), 10) === 0) {  // 心肌桥
        content += '存在心肌桥';
        if (parseInt(coronaryFindingItem.level.toString(), 10) === 0) {
          //心肌桥不判断形状
          content += '；';
        }
        if (parseInt(coronaryFindingItem.level.toString(), 10) === 1) {
          content += '，呈浅表型；';
        }
        if (parseInt(coronaryFindingItem.level.toString(), 10) === 2) {
          content += '，呈纵深型；';
        }
      }
    }
    return content;
  }


  /**
   * 
   * @param idxArray 血管的index
   * @param coronaryItems 病变血管
   * @param isExist 是否需要分开描述 
   */
  private getCoronarySegmentByIdxList(idxArray: Array<number>, coronaryItems: any, isExist: boolean, cnt: number, index: number) {
    // [6 7 8 9 10] [前降支 前降支 前降支 第一对角支 第二对角支]
    let content = '';
    if (idxArray.length == 0)
      return content;
    // 未见狭窄与斑块
    if (!isExist) {
      let lastDes = '';
      let lastSegName = '';
      // 判断是否有主血管不存在病灶
      const mainVessel = this.mainCoranaryIdxList[index];
      let overlapIdx = mainVessel.filter(function (val) {
        return idxArray.indexOf(val) >= 0
      })
      const existFlag = !(overlapIdx.length == 0);

      idxArray.forEach(idx => {
        const mainVessels = this.mainCoranaryIdxList.reduce(function (a, b) { return a.concat(b) });
        let desCn = this.valCvt.coronaryIndexCvt(idx); //LCX近段
        let desEn = desCn.replace(/[\u4e00-\u9fa5]/g, "")
        let des = this.getCoronarySegmentByName(desEn); //前降支
        if (des == lastDes) {
          if (desCn.replace(/[\u4e00-\u9fa5]/g, "") == lastSegName.replace(/[\u4e00-\u9fa5]/g, "")) {
            content += ('、' + desCn.replace(/[^\u4e00-\u9fa5]/gi, ""));  //保留中文
          } else {
            content += ('、' + desCn);
          }
        } else {
          if (cnt == 1 && mainVessels.indexOf(idx) === -1) {
            content += existFlag ? '，其分支' : '其分支';
            cnt = cnt - 1;
            content += des + desCn;
          } else {
            content += lastDes == '' ? (des + desCn) : ('，' + des + desCn);
          }
        }
        lastDes = des;
        lastSegName = desCn;
      });
      content += '未见狭窄和斑块。';
    } else {
      // [6 7]
      idxArray.forEach(idx => {
        let selectedItems = coronaryItems.filter(function (x) {
          return x.coronaryIndex == idx;
        })
        const newCoronaryIdx = this.getNewCoronaryIdx(selectedItems[0]);
        let stenosisItems = selectedItems.filter(function (x) {
          return x.findingType == 1
        });
        let stentItems = selectedItems.filter(function (x) {
          return x.findingType != 1
        });
        let desCn = this.valCvt.coronaryIndexCvt(newCoronaryIdx); //LCX近段
        let desEn = desCn.replace(/[\u4e00-\u9fa5]/g, "")
        let des = this.getCoronarySegmentByName(desEn); //前降支
        content += selectedItems.length > 0 ? (des + desCn) : '';
        content += this.getCoronarySegmentDetail(stenosisItems);
        for (let i = 0; i < selectedItems.length; i++) {
          if (selectedItems[i].findingType !== 1)
            content += this.getCoronarySegmentDetail([selectedItems[i]]);
        }
      })

    }
    return content;
  }

  /**
   * 
   * @param coronaryItem1 
   * @param coronaryItem2 
   */
  private sortFunc(coronaryItem1: FindingModel, coronaryItem2: FindingModel) {
    if (coronaryItem1.coronaryIndex != coronaryItem2.coronaryIndex) {
      return coronaryItem1.coronaryIndex - coronaryItem2.coronaryIndex;
    } else {
      if (coronaryItem1.findingType != coronaryItem2.findingType) {
        return coronaryItem1.findingType - coronaryItem2.findingType;
      } else {
        return coronaryItem2.is_stent_present - coronaryItem1.is_stent_present;
      }
    }
  }

  /**
   * 判断是否有存在病灶的主血管
   * @param existIdx 存在病灶的血管
   * @param mainIdx 主血管
   */
  private includeMainVessel(existIdx, mainIdx) {
    for (let item of existIdx) {
      if (mainIdx.indexOf(item) >= 0)
        return true;
    }
    return false;
  }

  private excludeNoServerVessel(coronaryItems) {
    if (coronaryItems.length === 0) return coronaryItems;
    let coronaryItemsNew = [coronaryItems[0]];
    for (let i = 1; i < coronaryItems.length; i++) {
      if (this.getNewCoronaryIdx(coronaryItems[i]) !== this.getNewCoronaryIdx(coronaryItems[i - 1])) {
        coronaryItemsNew.push(coronaryItems[i]);
      } else {
        if (coronaryItems[i].stenosisLevel > coronaryItems[i - 1].stenosisLevel && coronaryItems[i - 1].findingType != 2
          || (coronaryItems[i].findingType === 2 && coronaryItems[i - 1].findingType === 2 && this.isServer(coronaryItems[i], coronaryItems[i - 1]))) {
          coronaryItemsNew = coronaryItemsNew.slice(0, -1);
          coronaryItemsNew.push(coronaryItems[i]);
        } else {
          if ((coronaryItems[i].findingType === 2 && coronaryItems[i - 1].findingType !== 2)
            || (coronaryItems[i].findingType === 2 && coronaryItems[i - 1].findingType === 2 && coronaryItems[i - 1].is_stent_present != coronaryItems[i].is_stent_present) //心肌桥与支架类型不一致
            || (coronaryItems[i].stenosisLevel === coronaryItems[i - 1].stenosisLevel && coronaryItems[i].plaqueType !== coronaryItems[i - 1].plaqueType)) {
            coronaryItemsNew.push(coronaryItems[i]);
          }
        }
      }
    }
    return coronaryItemsNew;
  }

  /**
   * 判断当前支架是否比之前的支架更严重
   * @param curItem 
   * @param previousItem 
   */
  private isServer(curItem, previousItem) {
    let ret = false;
    // 支架类型一致且当前的比之前的更严重
    if (curItem.is_stent_present != previousItem.is_stent_present)
      return false;
    else {
      if (curItem.is_stent_present == 1 && previousItem.is_stent_present == 1) {
        //支架
        if (curItem.is_stent_restenosis == 1 && previousItem.is_stent_restenosis == 2) {
          ret = true;
        }
      } else {
        //心肌桥
        if (curItem.level == 2 && previousItem.level == 1) {
          ret = true;
        }
      }
    }
    return ret;
  }

  /**
   * 验证新增的finding是否需要写入报告中
   * @param coronaryFindings 
   */
  validateFindings(coronaryFindings: FindingModel[]): FindingModel[] {
    let newCoronaryFindings: FindingModel[] = [];
    coronaryFindings.forEach(ele => {
      if (ele.findingType == 1) {
        //狭窄 
        let plaqueType: any = ele.plaqueType;
        let stenosisLevel: any = ele.stenosisLevel;
        if (parseInt(plaqueType) !== 0 || parseInt(stenosisLevel) !== 0) {
          newCoronaryFindings.push(ele);
        }
      } else {
        //支架 心肌桥
        let is_stent_present: any = ele.is_stent_present;
        if (parseInt(is_stent_present) !== 2) {
          newCoronaryFindings.push(ele);
        }
      }
    });
    return newCoronaryFindings;
  }

  getVisibleCenterlineIdx(): any {
    let visibleCenterline = this.heartSvc.centerlineList.filter(function (item) {
      return item['label'] === 0
    })
    let visibleCenterlineIdx = visibleCenterline.map((item) => {
      return this.valCvt.coronaryNameCvt(item['name'])
    })
    return visibleCenterlineIdx;
  }

  /**
   * 获取新的coronary index
   */
  getNewCoronaryIdx(coronaryFinding: FindingModel): any {
    return coronaryFinding.extend0 ?
      this.valCvt.coronaryNameCvt(coronaryFinding.extend0.substring(0, coronaryFinding.extend0.indexOf('_') >= 0 ? coronaryFinding.extend0.indexOf('_') : coronaryFinding.extend0.length)) :
      coronaryFinding.coronaryIndex;
  }
}
class SplitedFindingObj {
  lTrunkBranch = [];
  AnteriorDescBranch = [];
  midBranch = [];
  lCircumflexBranch = [];
  rCoronaryBranch = [];

}
