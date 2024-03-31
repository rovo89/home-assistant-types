import "@material/mwc-button/mwc-button";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-list-item";
import { HomeAssistant } from "../../../types";
import type { ShowDialogHelperDetailParams } from "./show-dialog-helper-detail";
export declare class DialogHelperDetail extends LitElement {
    hass: HomeAssistant;
    private _item?;
    private _opened;
    private _domain?;
    private _error?;
    private _submitting;
    private _form?;
    private _helperFlows?;
    private _loading;
    private _params?;
    showDialog(params: ShowDialogHelperDetailParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _valueChanged;
    private _createItem;
    private _domainPicked;
    private _focusForm;
    private _goBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-helper-detail": DialogHelperDetail;
    }
}
