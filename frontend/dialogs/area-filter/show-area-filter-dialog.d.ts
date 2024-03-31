import type { AreaFilterValue } from "../../components/ha-area-filter";
export interface AreaFilterDialogParams {
    title?: string;
    initialValue?: AreaFilterValue;
    submit?: (value?: AreaFilterValue) => void;
    cancel?: () => void;
}
export declare const showAreaFilterDialog: (element: HTMLElement, dialogParams: AreaFilterDialogParams) => Promise<AreaFilterValue>;
