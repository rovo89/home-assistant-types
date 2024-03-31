import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-dialog-header";
import "../../../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../../../types";
import "../hui-dashboard-strategy-element-editor";
import type { DashboardStrategyEditorDialogParams } from "./show-dialog-dashboard-strategy-editor";
declare class DialogDashboardStrategyEditor extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _strategyConfig?;
    private _GUImode;
    private _guiModeAvailable?;
    private _strategyEditorEl?;
    showDialog(params: DashboardStrategyEditorDialogParams): Promise<void>;
    closeDialog(): void;
    private _handleConfigChanged;
    private _handleGUIModeChanged;
    private _toggleMode;
    private _opened;
    private _save;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _takeControl;
    private _showRawConfigEditor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-dashboard-strategy-editor": DialogDashboardStrategyEditor;
    }
}
export {};
