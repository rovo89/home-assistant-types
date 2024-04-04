import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-formfield";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import "../../../components/ha-icon-picker";
import "../../../components/ha-color-picker";
import { HassDialog } from "../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../types";
import { LabelDetailDialogParams } from "./show-dialog-label-detail";
declare class DialogLabelDetail extends LitElement implements HassDialog<LabelDetailDialogParams> {
    hass: HomeAssistant;
    private _name;
    private _icon;
    private _color;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: LabelDetailDialogParams): void;
    private _handleKeyPress;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _input;
    private _valueChanged;
    private _updateEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-label-detail": DialogLabelDetail;
    }
}
export {};
