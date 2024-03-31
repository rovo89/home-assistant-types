import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../../types";
import { LovelaceResourceDetailsDialogParams } from "./show-dialog-lovelace-resource-detail";
export declare class DialogLovelaceResourceDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _data?;
    private _error?;
    private _submitting;
    showDialog(params: LovelaceResourceDetailsDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _schema;
    private _computeLabel;
    private _valueChanged;
    private _updateResource;
    private _deleteResource;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-lovelace-resource-detail": DialogLovelaceResourceDetail;
    }
}
