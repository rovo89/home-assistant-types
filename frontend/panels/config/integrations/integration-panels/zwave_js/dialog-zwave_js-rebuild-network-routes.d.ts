import "@material/mwc-button/mwc-button";
import "@material/mwc-linear-progress/mwc-linear-progress";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSRebuildNetworkRoutesDialogParams } from "./show-dialog-zwave_js-rebuild-network-routes";
declare class DialogZWaveJSRebuildNetworkRoutes extends LitElement {
    hass: HomeAssistant;
    private entry_id?;
    private _status?;
    private _progress_total;
    private _progress_finished;
    private _progress_in_progress;
    private _subscribed?;
    showDialog(params: ZWaveJSRebuildNetworkRoutesDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _startRebuildingRoutes;
    private _stopRebuildingRoutes;
    private _handleMessage;
    private _unsubscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-rebuild-network-routes": DialogZWaveJSRebuildNetworkRoutes;
    }
}
export {};
