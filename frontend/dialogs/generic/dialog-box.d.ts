import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-dialog";
import "../../components/ha-svg-icon";
import "../../components/ha-switch";
import { HomeAssistant } from "../../types";
import { DialogBoxParams } from "./show-dialog-box";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _textField?;
    showDialog(params: DialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dismiss;
    private _confirm;
    private _dialogClosed;
    private _close;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-box": DialogBox;
    }
}
export {};
