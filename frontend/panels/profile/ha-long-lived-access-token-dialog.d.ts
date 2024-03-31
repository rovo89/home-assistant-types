import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../components/ha-textfield";
import "../../components/ha-icon-button";
import type { HomeAssistant } from "../../types";
import { LongLivedAccessTokenDialogParams } from "./show-long-lived-access-token-dialog";
export declare class HaLongLivedAccessTokenDialog extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _qrCode?;
    showDialog(params: LongLivedAccessTokenDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _copyToken;
    private _generateQR;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-long-lived-access-token-dialog": HaLongLivedAccessTokenDialog;
    }
}
