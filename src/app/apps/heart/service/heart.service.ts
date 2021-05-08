import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { SRModel } from '../structured-report/sr.model';
import { CoronaryFeaturesModel } from '../heart.component.findingModel';
@Injectable({
  providedIn: 'root'
})
export class HeartService {
  public isFirstLoad : boolean = true;
  public centerlineListBE: string[] = [];
  public centerlineList: Array<object> = [];
  public currentVRParamName: string = 'Default';
  public isShowHeart: boolean = true;
  public selectedIndex: number = 0;
  public curSeriesUid: string = '';
  public imageInfoDict: any = {
    VR: [
      { name: 'LAO0 CAU30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO30 CRA30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO45 CAU35', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO45 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA30', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO90 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA20', isChecked: true, direction: [], canDelete: false },
    ],
    VRTree: [
      { name: 'LAO0 CAU30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO30 CRA30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO45 CAU35', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO45 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA30', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO90 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA20', isChecked: true, direction: [], canDelete: false },
    ],
    MIP: [
      { name: 'LAO0 CAU30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO30 CRA30', isChecked: true, direction: [], canDelete: false},
      { name: 'LAO45 CAU35', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO45 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO60 CRA30', isChecked: true, direction: [], canDelete: false },
      { name: 'LAO90 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO0 CRA20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CAU20', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA0', isChecked: true, direction: [], canDelete: false },
      { name: 'RAO30 CRA20', isChecked: true, direction: [], canDelete: false },
    ],
  };

  public tabImageType: string[] = ['VR', 'MIP', 'CPR/SCPR', '自定义'];
  public defaultTemplate: any = JSON.stringify({
    vr: {
      isChecked: true,
      option: 0, // 0:默认配置 1:旋转配置
      fixedImageInfo: this.imageInfoDict.VR,
      circleImageInfo: [],
      lrPreNumList: [9, 18, 27, 36],
      auPreNumList: [9, 18, 27, 36],
      lrPreNum: 18,
      auPreNum: 18,
    },
    vrTree: {
      isChecked: true,
      option: 0,
      fixedImageInfo: this.imageInfoDict.VRTree,
      circleImageInfo: [],
      lrPreNumList: [9, 18, 27, 36],
      auPreNumList: [9, 18, 27, 36],
      lrPreNum: 18,
      auPreNum: 18,
    },
    mip: {
      isChecked: true,
      option: 0,
      fixedImageInfo: this.imageInfoDict.MIP,
      circleImageInfo: [],
      lrPreNumList: [9, 18, 27, 36],
      auPreNumList: [9, 18, 27, 36],
      lrPreNum: 18,
      auPreNum: 18,
    },
    cpr: {
      isChecked: true,
      cprNodeValue: ['LAD', 'RCA', 'LCX'],
      cprNum: 5,
      cprNumList: [5, 10, 20],
    },
    scpr: {
      isChecked: true,
      scprNodeValue: ['LAD', 'RCA', 'LCX'],
      scprNum: 5,
      scprNumList: [5, 10, 20],
    },
    // 默认视图的顺序
    order: this.tabImageType,
    version: '1.0',
  });
  public cprNode: object[] = [
    {
      title: 'LAD',
      value: '_LAD',
      key: '_LAD',
      children: [
        {
          title: 'LAD',
          value: 'LAD',
          key: 'LAD',
          isLeaf: true
        },
        {
          title: 'D1',
          value: 'D1',
          key: 'D1',
          isLeaf: true
        },
        {
          title: 'D2',
          value: 'D2',
          key: 'D2',
          isLeaf: true
        },
        {
          title: 'D3',
          value: 'D3',
          key: 'D3',
          isLeaf: true
        },
        {
          title: 'D4',
          value: 'D4',
          key: 'D4',
          isLeaf: true
        },
        {
          title: 'D5',
          value: 'D5',
          key: 'D5',
          isLeaf: true
        },
      ]
    },
    {
      title: 'RCA',
      value: '_RCA',
      key: '_RCA',
      children: [
        {
          title: 'RCA',
          value: 'RCA',
          key: 'RCA',
          isLeaf: true
        },
        {
          title: 'R-PDA',
          value: 'R-PDA',
          key: 'R-PDA',
          isLeaf: true
        },
        {
          title: 'R-PLB',
          value: 'R-PLB',
          key: 'R-PLB',
          isLeaf: true
        }
      ]
    },
    {
      title: 'LCX',
      value: '_LCX',
      key: '_LCX',
      children: [
        {
          title: 'LCX',
          value: 'LCX',
          key: 'LCX',
          isLeaf: true
        },
        {
          title: 'RAMUS',
          value: 'RAMUS',
          key: 'RAMUS',
          isLeaf: true
        },
        {
          title: 'OM1',
          value: 'OM1',
          key: 'OM1',
          isLeaf: true
        },
        {
          title: 'OM2',
          value: 'OM2',
          key: 'OM2',
          isLeaf: true
        },
        {
          title: 'OM3',
          value: 'OM3',
          key: 'OM3',
          isLeaf: true
        },
        {
          title: 'OM4',
          value: 'OM4',
          key: 'OM4',
          isLeaf: true
        },
        {
          title: 'OM5',
          value: 'OM5',
          key: 'OM5',
          isLeaf: true
        },
        {
          title: 'L-PDA',
          value: 'L-PDA',
          key: 'L-PDA',
          isLeaf: true
        },
        {
          title: 'L-PLB',
          value: 'L-PLB',
          key: 'L-PLB',
          isLeaf: true
        },
        {
          title: 'L-PLB1',
          value: 'L-PLB1',
          key: 'L-PLB1',
          isLeaf: true
        },
        {
          title: 'L-PLB2',
          value: 'L-PLB2',
          key: 'L-PLB2',
          isLeaf: true
        },
        {
          title: 'L-PLB3',
          value: 'L-PLB3',
          key: 'L-PLB3',
          isLeaf: true
        },
        {
          title: 'L-PLB4',
          value: 'L-PLB4',
          key: 'L-PLB4',
          isLeaf: true
        },
        {
          title: 'L-PLB5',
          value: 'L-PLB5',
          key: 'L-PLB5',
          isLeaf: true
        },
        {
          title: 'LACX',
          value: 'LACX',
          key: 'LACX',
          isLeaf: true
        },
      ]
    }
  ];
  // 血管段结构
  public nodeStructure: any = {
    _LAD: ['LAD', 'D1', 'D2', 'D3', 'D4', 'D5'],
    _LCX: ['LCX', 'RAMUS', 'OM1', 'OM2', 'OM3', 'OM4', 'OM5', 'L-PDA', 'L-PLB', 'L-PLB1', 'L-PLB2', 'L-PLB3', 'L-PLB4', 'L-PLB5', 'LACX'],
    _RCA: ['RCA', 'R-PLB', 'R-PDA'],
  }

  public srM: SRModel = new SRModel();

  constructor() { }

  public matchName(index: number, name: string): boolean {
    if (this.centerlineList.length < index && index < 0) {
      return false;
    }

    let curObj = this.centerlineList[index];
    if (curObj['label'] === 1) {
      return false;
    }
    if (curObj['name'] === name) {
      return true;
    } else {
      return false;
    }
  }

  public notMatchName(index: number, nameList: string[]): boolean {
    if (this.centerlineList.length < index && index < 0) {
      return false;
    }

    let curObj = this.centerlineList[index];
    if (curObj['label'] === 1) {
      return false;
    }
    for (let i = 0; i < nameList.length; i++) {
      if (curObj['name'] === nameList[i]) {
        return false;
      }
    }
    return true;
  }

  public currentCenterLineName() : string {
    return this.centerlineList[this.selectedIndex]['name'];
  }
}
