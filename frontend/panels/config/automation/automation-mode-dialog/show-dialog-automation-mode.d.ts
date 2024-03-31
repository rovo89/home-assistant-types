import type { AutomationConfig } from "../../../../data/automation";
export declare const loadAutomationModeDialog: () => Promise<typeof import("./dialog-automation-mode")>;
export interface AutomationModeDialog {
    config: AutomationConfig;
    updateAutomation: (config: AutomationConfig) => void;
    onClose: () => void;
}
export declare const showAutomationModeDialog: (element: HTMLElement, dialogParams: AutomationModeDialog) => void;
