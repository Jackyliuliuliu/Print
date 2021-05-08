export enum FindingTypeEnum {
    unknown = 0,
    stenosis = 1, // 狭窄
    stent = 2 // 心肌桥/支架
}

export enum userOperationType {
    addstenosis = 0,
    addstent = 1,
    savePics = 2,
    sendToPacs = 3,
    copyReport = 4,
    default = 5,
    plaque = 6,
    stent = 7,
    mip = 8,
    saveImage = 9,
}

// classify type of imagetype
export enum startImageIndex {
    vr = 1000,
    vrTree = 2000,
    mip = 3000,
    cpr = 4000,
    scpr = 5000,
    custom = 6000,
    delta = 500,    //区分固定以及旋转角度
}

export enum VesselEnum {
    Unknown = 0,
    RCA = 1,
    RCA_Middle = 2,
    RCA_Distal = 3,
    R_PDA = 4,
    LM = 5,
    LAD = 6,
    LAD_Middle = 7,
    LAD_Distal = 8,
    D1 = 9,
    D2 = 10,
    LCX = 11,
    OM1 = 12,
    LCX_Distal = 13,
    OM2 = 14,
    L_PDA = 15,
    R_PLB = 16,
    RAMUS = 17,
    L_PLB = 18
}

export enum AllVesselEnum {
    unKnow = 0,
    RCA = 1,
    R_PDA = 2,
    LM = 3,
    LAD = 4,
    D1 = 5,
    D2 = 6,
    LCX = 7,
    OM1 = 8,
    OM2 = 9,
    L_PDA = 10,
    R_PLB = 11,
    RAMUS = 12,
    L_PLB = 13,
    OM3 = 14,
    OM4 = 15,
    OM5 = 16,
    D3 = 17,
    D4 = 18,
    D5 = 19,
    L_PLB1 = 20,
    L_PLB2 = 21,
    L_PLB3 = 22,
    L_PLB4 = 23,
    L_PLB5 = 24,
    LACX = 25
}

export enum noFindingDescription {
    lTrunkBranch = '左主干未见狭窄和斑块。\n',
    AnteriorDescBranch = '前降支LAD各段及其分支第一对角支D1、第二对角支D2未见狭窄和斑块。\n',
    midBranch = '中间支RAMUS未见狭窄和斑块。\n',
    lCircumflexBranch = '左回旋支LCX各段及其分支第一钝缘支OM1、第二钝缘支OM2、左后降支L-PDA、左后侧支L-PLB未见狭窄和斑块。\n',
    rCoronaryBranch = '右冠状动脉RCA各段及其分支右后降支R-PDA、右后侧支R-PLB未见狭窄和斑块。\n',
}

export class ValueConverter {
    levelCvt(level) {
        switch (parseInt(level)) {
            case 1:
                return '浅表';
            case 2:
                return '纵深';
            default:
                return '未知';
        }
    }

    stentRestenosisCvt(val) {
        switch (parseInt(val)) {
            case 0:
                return '未知';
            case 1:
                return '支架内再狭窄';
            case 2:
                return '无';
            default:
                return '未知';
        }
    }

    stenosisLevelCvt(stenosisLevel) {
        switch (parseInt(stenosisLevel)) {
            case 0:
                return '未知';
            case 1:
                return '轻微狭窄';
            case 2:
                return '轻度狭窄';
            case 3:
                return '中度狭窄';
            case 4:
                return '重度狭窄';
            case 5:
                return '闭塞';
            default:
                return '未知';
        }
    }

    coronaryOstiumCvt(coronaryOstium) {
        switch (parseInt(coronaryOstium)) {
            case 0:
                return '左窦';
            case 1:
                return '右窦';
            case 2:
                return '其他';
        }
    }

    coronaryDominanceCvt(coronaryDominance) {
        switch (parseInt(coronaryDominance)) {
            case 0:
                return '左优势型';
            case 1:
                return '右优势型';
            case 2:
                return '均衡型';
        }
    }

    cornaryClassifyCvt(coronaryIndex) {
        /**左主干 */
        if (coronaryIndex == 5)
            return 0;
        /**前降支及分支 */
        if ((coronaryIndex >= 6 && coronaryIndex <= 10) || (coronaryIndex >= 22 && coronaryIndex <= 24))
            return 1;
        /**中间支 */
        if (coronaryIndex == 17)
            return 2;
        /**左回旋及分支 */
        if ((coronaryIndex >= 11 && coronaryIndex <= 15) || (coronaryIndex >= 18 && coronaryIndex <= 21) || (coronaryIndex >= 25 && coronaryIndex <= 30))
            return 3;
        /**右冠状动脉及分支 */
        if (coronaryIndex <= 4 || coronaryIndex == 16)
            return 4;
    }

    coronaryNameCvt(coronaryName: string) {
        switch (coronaryName) {
            case 'RCA':
                return 1;
            case 'R-PDA':
                return 4;
            case 'LM':
                return 5;
            case 'LAD':
                return 6;
            case 'D1':
                return 9;
            case 'D2':
                return 10;
            case 'LCX':
                return 11;
            case 'OM1':
                return 12;
            case 'OM2':
                return 14;
            case 'L-PDA':
                return 15;
            case 'R-PLB':
                return 16;
            case 'RAMUS':
                return 17;
            case 'L-PLB':
                return 18;
            case 'OM3':
                return 19;
            case 'OM4':
                return 20;
            case 'OM5':
                return 21;
            case 'D3':
                return 22;
            case 'D4':
                return 23;
            case 'D5':
                return 24;
            case 'L-PLB1':
                return 25;
            case 'L-PLB2':
                return 26;
            case 'L-PLB3':
                return 27;
            case 'L-PLB4':
                return 28;
            case 'L-PLB5':
                return 29;
            case 'LACX':
                return 30;
            default:
                return 100;
        }
    }

    coronaryIndexCvt(coronaryIndex) {
        switch (parseInt(coronaryIndex)) {
            case 1:
                return 'RCA近段';
            case 2:
                return 'RCA中段';
            case 3:
                return 'RCA远段';
            case 4:
                return 'R-PDA';
            case 5:
                return 'LM';
            case 6:
                return 'LAD近段';
            case 7:
                return 'LAD中段';
            case 8:
                return 'LAD远段';
            case 9:
                return 'D1';
            case 10:
                return 'D2';
            case 11:
                return 'LCX近段';
            case 12:
                return 'OM1';
            case 13:
                return 'LCX中远段';
            case 14:
                return 'OM2';
            case 15:
                return 'L-PDA';
            case 16:
                return 'R-PLB';
            case 17:
                return 'RAMUS';
            case 18:
                return 'L-PLB';
            case 19:
                return 'OM3';
            case 20:
                return 'OM4';
            case 21:
                return 'OM5';
            case 22:
                return 'D3';
            case 23:
                return 'D4';
            case 24:
                return 'D5';
            case 25:
                return 'L-PLB1';
            case 26:
                return 'L-PLB2';
            case 27:
                return 'L-PLB3';
            case 28:
                return 'L-PLB4';
            case 29:
                return 'L-PLB5';
            case 30:
                return 'LACX';
            default:
                return '未知';
        }
    }

    plaqueTypeCvt(plaqueType) {
        switch (parseInt(plaqueType)) {
            case 1:
                return '软斑块';
            case 2:
                return '混合斑块';
            case 3:
                return '钙化斑块';
            default:
                return '未知';
        }
    }

    isStentPresentCvt(isStentPresent) {
        switch (parseInt(isStentPresent)) {
            case 0:
                return '心肌桥';
            case 1:
                return '支架';
            default:
                return '未知';
        }
    }
}
