import { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
export declare const loadConfigFlowDialog: () => Promise<typeof import("./dialog-data-entry-flow")>;
export declare const showConfigFlowDialog: (element: HTMLElement, dialogParams: Omit<DataEntryFlowDialogParams, "flowConfig">) => void;
