import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../types";
import { ZoneDetailDialogParams } from "./show-dialog-zone-detail";
declare class DialogZoneDetail extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _data?;
    private _params?;
    private _submitting;
    showDialog(params: ZoneDetailDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _schema;
    private _formData;
    private _valueChanged;
    private _computeLabel;
    private _updateEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zone-detail": DialogZoneDetail;
    }
}
export {};
