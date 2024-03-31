import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-button";
import { HomeAssistant } from "../../types";
import { UpdateBackupDialogParams } from "./show-update-backup-dialog";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: UpdateBackupDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _no;
    private _yes;
    private _cancel;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-update-backup": DialogBox;
    }
}
export {};
