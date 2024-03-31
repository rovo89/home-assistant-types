import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../types";
import { JoinBetaDialogParams } from "./show-dialog-join-beta";
export declare class DialogJoinBeta extends LitElement implements HassDialog<JoinBetaDialogParams> {
    hass: HomeAssistant;
    private _dialogParams?;
    showDialog(dialogParams: JoinBetaDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _join;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-beta": DialogJoinBeta;
    }
}
