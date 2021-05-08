import { FindingModel, CoronaryFeaturesModel } from '../heart.component.findingModel';

export class BasicInfoModel {
    constructor() { }
}

export class ImagesModel {
    public content: string = '';
    public coronaryFeatureItem: CoronaryFeaturesModel = new CoronaryFeaturesModel();
    constructor() { }
}

export class CommonModel {
    public hospitalName: string = '';
    public hospitalLogoUrl: string = '';
    public currentPage: number = 1;
    public totalPage: number = 1;
    public isDefaultPlaque: number = 1;

    constructor() { }
}

export class LesionModel {
    public findings: Array<FindingModel> = new Array<FindingModel>();
    public lesions: Array<[FindingModel, number, number]> = [];

    constructor() { }
}

export class SRModel {
    public commonM: CommonModel = new CommonModel();
    public basicInfoM: BasicInfoModel = new BasicInfoModel();
    public lesionM: LesionModel = new LesionModel();
    public imagesM: ImagesModel = new ImagesModel();
    public findings: Array<FindingModel> = new Array<FindingModel>();

    constructor() { }
}
