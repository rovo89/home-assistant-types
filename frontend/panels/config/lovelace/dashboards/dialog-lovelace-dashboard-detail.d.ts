import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../../types";
import { LovelaceDashboardDetailsDialogParams } from "./show-dialog-lovelace-dashboard-detail";
export declare class DialogLovelaceDashboardDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _urlPathChanged;
    private _data?;
    private _error?;
    private _submitting;
    showDialog(params: LovelaceDashboardDetailsDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _schema;
    private _computeLabel;
    private _valueChanged;
    private _fillUrlPath;
    private _toggleDefault;
    private _updateDashboard;
    private _deleteDashboard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-lovelace-dashboard-detail": DialogLovelaceDashboardDetail;
    }
}
