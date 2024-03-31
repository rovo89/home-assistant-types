import { StatisticsValidationResultUnitsChanged } from "../../../data/recorder";
export declare const loadFixUnitsDialog: () => Promise<typeof import("./dialog-statistics-fix-units-changed")>;
export interface DialogStatisticsUnitsChangedParams {
    issue: StatisticsValidationResultUnitsChanged;
    fixedCallback: () => void;
}
export declare const showFixStatisticsUnitsChangedDialog: (element: HTMLElement, detailParams: DialogStatisticsUnitsChangedParams) => void;
