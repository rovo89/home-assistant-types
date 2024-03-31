import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-formfield";
import "../../../components/ha-qr-code";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import { HassDialog } from "../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../types";
import { TagDetailDialogParams } from "./show-dialog-tag-detail";
declare class DialogTagDetail extends LitElement implements HassDialog<TagDetailDialogParams> {
    hass: HomeAssistant;
    private _id?;
    private _name;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: TagDetailDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _updateEntry;
    private _updateWriteEntry;
    private _deleteEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-tag-detail": DialogTagDetail;
    }
}
export {};
