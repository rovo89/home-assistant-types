import "@material/mwc-button/mwc-button";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-svg-icon";
import { HomeAssistant } from "../../../../../types";
import { ZHAReconfigureDeviceDialogParams } from "./show-dialog-zha-reconfigure-device";
declare class DialogZHAReconfigureDevice extends LitElement {
    hass: HomeAssistant;
    private _status?;
    private _stages?;
    private _clusterConfigurationStatuses?;
    private _params;
    private _allSuccessful;
    private _showDetails;
    private _subscribed?;
    showDialog(params: ZHAReconfigureDeviceDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startReconfiguration;
    private _handleMessage;
    private _unsubscribe;
    private _subscribe;
    private _toggleDetails;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zha-reconfigure-device": DialogZHAReconfigureDevice;
    }
}
export {};
