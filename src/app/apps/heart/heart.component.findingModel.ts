import { FindingCtCoronaryDto } from 'uih-app-serverapi';
import { CoronaryFeaturesDto } from 'uih-app-serverapi';
import { isNullOrUndefined } from 'util';

export class FindingModel {
    // 是否处于hover状态
    isHovered: boolean = false;
    // 是否被勾选
    isChecked: boolean = true;
    // 是否为需要显示的重要病灶
    isKey: boolean = true;
    // 病灶名称
    findingName: string;

    pid: number;
    findingUID?: string | undefined;
    seriesInstanceUID?: string | undefined;
    centerPointX?: number | undefined;
    centerPointY?: number | undefined;
    centerPointZ?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    depth?: number | undefined;

    // 狭窄率
    range_in_millimeters?: number | undefined;

    // 病灶类型，狭窄：1，心肌桥/支架：2
    findingType?: number | undefined;

    // 斑块类型
    plaqueType?: number | undefined;
    // 斑块名字 区分不同医院
    plaqueName?: string | undefined;

    userID?: string | undefined;

    updateTime: Date;
    extend0?: string | undefined;
    extend1?: string | undefined;

    // 狭窄程度
    stenosisLevel?: number | undefined;

    // 分段
    coronaryIndex?: number | undefined;

    // 是否有支架
    is_stent_present?: number | undefined;

    // 是否有支架内狭窄
    is_stent_restenosis?: number | undefined;

    // 心肌桥类型：浅表：1，纵深：2
    level?: number | undefined;

    // 狭窄长度
    narrow_length?: number | undefined;

    // 是否需要更新命名
    isNeedRename?: boolean | undefined;

    // 新命名
    newName?: string | undefined;

    constructor() { }

    fromDto(dto: FindingCtCoronaryDto): void {
        this.pid = dto.pid;
        this.findingUID = dto.findingUID;
        this.findingType = dto.findingType;
        this.seriesInstanceUID = dto.seriesInstanceUID;
        this.centerPointX = dto.centerPointX;
        this.centerPointY = dto.centerPointY;
        this.centerPointZ = dto.centerPointZ;
        this.range_in_millimeters = Math.round(dto.range_in_millimeters);
        this.plaqueType = dto.plaqueType;
        this.userID = dto.userID;
        this.updateTime = dto.updateTime;
        this.extend0 = dto.extend0;
        this.extend1 = dto.extend1;
        this.stenosisLevel = dto.stenosisLevel;
        this.coronaryIndex = dto.coronaryIndex;
        this.is_stent_present = isNullOrUndefined(dto.is_stent_present) ? 0 : dto.is_stent_present;
        this.is_stent_restenosis = dto.is_stent_restenosis; // isNullOrUndefined(dto.is_stent_restenosis) ? 0 : dto.is_stent_restenosis;
        this.level = dto.level;
        this.narrow_length = Math.round(dto.narrow_length);
    }

    toDto(): FindingCtCoronaryDto {
        let dto = new FindingCtCoronaryDto();
        dto.pid = this.pid;
        dto.findingUID = this.findingUID;
        dto.findingType = this.findingType;
        dto.seriesInstanceUID = this.seriesInstanceUID;
        dto.centerPointX = this.centerPointX;
        dto.centerPointY = this.centerPointY;
        dto.centerPointZ = this.centerPointZ;
        dto.findingType = this.findingType;
        dto.range_in_millimeters = Math.round(this.str2Float(this.range_in_millimeters));
        dto.plaqueType = this.plaqueType;
        dto.userID = this.userID;
        dto.updateTime = this.updateTime;
        dto.extend0 = this.extend0;
        dto.extend1 = this.extend1;
        dto.stenosisLevel = this.str2Int(this.stenosisLevel);
        dto.coronaryIndex = this.coronaryIndex;
        dto.is_stent_present = this.str2Int(this.is_stent_present);
        dto.is_stent_restenosis = this.str2Int(this.is_stent_restenosis);
        dto.level = this.str2Int(this.level);
        dto.narrow_length = Math.round(this.str2Float(this.narrow_length) * 10) / 10;
        return dto;
    }

    str2Int(val) {
        if (typeof val === 'string') {
            val = parseInt(val, 10);
        }
        return val;
    }

    str2Float(val) {
        if (typeof val === 'string') {
            val = parseFloat(val);
        }
        return val;
    }
}

export class CoronaryFeaturesModel {
    pid: number;
    featureUID?: string | undefined;
    seriesInstanceUID?: string | undefined;

    // 左主干起源
    left_coronary_ostium?: number | undefined;

    // 右冠状动脉起源
    right_coronary_ostium?: number | undefined;

    // 冠脉优势型
    coronary_dominance?: number | undefined;

    extend0?: string | undefined;
    extend1?: string | undefined;
    extend2?: string | undefined;
    extend3?: string | undefined;
    modified?: number| undefined;
    markable?: number| undefined;

    constructor() { }

    fromDto(dto: CoronaryFeaturesDto): void {
        this.pid = dto.pid;
        this.featureUID = dto.featureUID;
        this.seriesInstanceUID = dto.seriesInstanceUID;
        this.left_coronary_ostium = dto.left_coronary_ostium;
        this.right_coronary_ostium = dto.right_coronary_ostium;

        if (this.left_coronary_ostium > 2) {
            this.left_coronary_ostium = 2;
        }
        if (this.right_coronary_ostium > 2) {
            this.right_coronary_ostium = 2;
        }
        this.coronary_dominance = dto.coronary_dominance;
        this.extend0 = dto.extend0;
        this.extend1 = dto.extend1;
        this.extend2 = dto.extend2;
        this.extend3 = dto.extend3;
        this.modified = dto.modified;
        this.markable = dto.markable;
    }

    toDto(): CoronaryFeaturesDto {
        const dto = new CoronaryFeaturesDto();
        dto.pid = this.pid;
        dto.featureUID = this.featureUID;
        dto.seriesInstanceUID = this.seriesInstanceUID;
        dto.left_coronary_ostium = this.str2Int(this.left_coronary_ostium);
        dto.right_coronary_ostium = this.str2Int(this.right_coronary_ostium);
        dto.coronary_dominance = this.str2Int(this.coronary_dominance);
        dto.extend0 = this.extend0;
        dto.extend1 = this.extend1;
        dto.extend2 = this.extend2;
        dto.extend3 = this.extend3;
        dto.modified = this.modified;
        dto.markable = this.markable;
        return dto;
    }

    str2Int(val) {
        if (typeof val === 'string') {
            val = parseInt(val, 10);
        }
        return val;
    }

    str2Float(val) {
        if (typeof val === 'string') {
            val = parseFloat(val);
        }
        return val;
    }
}
