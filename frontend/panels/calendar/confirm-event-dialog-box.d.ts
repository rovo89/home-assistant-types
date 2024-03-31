import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-dialog";
import "../../components/ha-svg-icon";
import "../../components/ha-switch";
import { HomeAssistant } from "../../types";
import { ConfirmEventDialogBoxParams } from "./show-confirm-event-dialog-box";
declare class ConfirmEventDialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: ConfirmEventDialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dismiss;
    private _confirm;
    private _confirmFuture;
    private _dialogClosed;
    private _close;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "confirm-event-dialog-box": ConfirmEventDialogBox;
    }
}
export {};
