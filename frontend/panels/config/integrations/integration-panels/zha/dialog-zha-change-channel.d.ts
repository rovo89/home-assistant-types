import { LitElement, TemplateResult, nothing } from "lit";
import { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../../types";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-button";
import "../../../../../components/ha-select";
import "../../../../../components/ha-list-item";
import { ZHAChangeChannelDialogParams } from "./show-dialog-zha-change-channel";
declare class DialogZHAChangeChannel extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _migrationInProgress;
    private _params?;
    private _newChannel?;
    showDialog(params: ZHAChangeChannelDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): TemplateResult | typeof nothing;
    private _newChannelChosen;
    private _changeNetworkChannel;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zha-change-channel": DialogZHAChangeChannel;
    }
}
export {};
