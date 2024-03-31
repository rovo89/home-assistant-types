import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-textfield";
import type { HaTextField } from "../../../../components/ha-textfield";
import { HomeAssistant } from "../../../../types";
import { WebhookDialogParams } from "./show-dialog-manage-cloudhook";
export declare class DialogManageCloudhook extends LitElement {
    protected hass?: HomeAssistant;
    private _params?;
    _input: HaTextField;
    showDialog(params: WebhookDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _disableWebhook;
    private focusInput;
    private _copyUrl;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-manage-cloudhook": DialogManageCloudhook;
    }
}
