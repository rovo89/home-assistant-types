import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-control-button";
import "../../components/ha-textfield";
import { HomeAssistant } from "../../types";
import { HassDialog } from "../make-dialog-manager";
import { EnterCodeDialogParams } from "./show-enter-code-dialog";
export declare class DialogEnterCode extends LitElement implements HassDialog<EnterCodeDialogParams> {
    hass?: HomeAssistant;
    private _dialogParams?;
    private _input?;
    private _showClearButton;
    showDialog(dialogParams: EnterCodeDialogParams): Promise<void>;
    closeDialog(): void;
    private _submit;
    private _cancel;
    private _numberClick;
    private _clear;
    private _inputValueChange;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-enter-code": DialogEnterCode;
    }
}
