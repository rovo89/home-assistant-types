import { ConfigEntry } from "../../data/config_entries";
import { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
export declare const loadOptionsFlowDialog: () => Promise<typeof import("./dialog-data-entry-flow")>;
export declare const showOptionsFlowDialog: (element: HTMLElement, configEntry: ConfigEntry, dialogParams?: Omit<DataEntryFlowDialogParams, "flowConfig">) => void;
