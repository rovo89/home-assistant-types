import { DataEntryFlowDialogParams } from "../../../dialogs/config-flow/show-dialog-data-entry-flow";
import { HelperDomain } from "./const";
export declare const loadHelperDetailDialog: () => Promise<typeof import("./dialog-helper-detail")>;
export interface ShowDialogHelperDetailParams {
    domain?: HelperDomain;
    dialogClosedCallback?: DataEntryFlowDialogParams["dialogClosedCallback"];
}
export declare const showHelperDetailDialog: (element: HTMLElement, params: ShowDialogHelperDetailParams) => void;
