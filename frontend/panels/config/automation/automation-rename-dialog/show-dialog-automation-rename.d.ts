import type { AutomationConfig } from "../../../../data/automation";
export declare const loadAutomationRenameDialog: () => Promise<typeof import("./dialog-automation-rename")>;
export interface AutomationRenameDialog {
    config: AutomationConfig;
    updateAutomation: (config: AutomationConfig) => void;
    onClose: () => void;
}
export declare const showAutomationRenameDialog: (element: HTMLElement, dialogParams: AutomationRenameDialog) => void;
