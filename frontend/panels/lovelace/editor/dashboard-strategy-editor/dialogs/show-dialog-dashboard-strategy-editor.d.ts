import { LovelaceDashboardStrategyConfig } from "../../../../../data/lovelace/config/types";
export interface DashboardStrategyEditorDialogParams {
    config: LovelaceDashboardStrategyConfig;
    saveConfig: (config: LovelaceDashboardStrategyConfig) => void;
    takeControl: () => void;
    showRawConfigEditor: () => void;
}
export declare const loadDashboardStrategyEditorDialog: () => Promise<typeof import("./dialog-dashboard-strategy-editor")>;
export declare const showDashboardStrategyEditorDialog: (element: HTMLElement, params: DashboardStrategyEditorDialogParams) => void;
