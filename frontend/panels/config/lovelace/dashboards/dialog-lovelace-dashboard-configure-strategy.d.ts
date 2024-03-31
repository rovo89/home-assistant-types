import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../../types";
import "../../../lovelace/editor/dashboard-strategy-editor/hui-dashboard-strategy-element-editor";
import { LovelaceDashboardConfigureStrategyDialogParams } from "./show-dialog-lovelace-dashboard-configure-strategy";
export declare class DialogLovelaceDashboardDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _submitting;
    private _data?;
    showDialog(params: LovelaceDashboardConfigureStrategyDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleConfigChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-lovelace-dashboard-configure-strategy": DialogLovelaceDashboardDetail;
    }
}
