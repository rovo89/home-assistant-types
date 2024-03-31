import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSRebuildNodeRoutesDialogParams } from "./show-dialog-zwave_js-rebuild-node-routes";
declare class DialogZWaveJSRebuildNodeRoutes extends LitElement {
    hass: HomeAssistant;
    private device?;
    private _status?;
    private _error?;
    showDialog(params: ZWaveJSRebuildNodeRoutesDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _startRebuildingRoutes;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-rebuild-node-routes": DialogZWaveJSRebuildNodeRoutes;
    }
}
export {};
