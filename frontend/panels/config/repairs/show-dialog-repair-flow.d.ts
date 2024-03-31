import { RepairsIssue } from "../../../data/repairs";
export declare const loadRepairFlowDialog: () => Promise<typeof import("../../../dialogs/config-flow/dialog-data-entry-flow")>;
export declare const showRepairsFlowDialog: (element: HTMLElement, issue: RepairsIssue, dialogClosedCallback?: (params: {
    flowFinished: boolean;
}) => void) => void;
