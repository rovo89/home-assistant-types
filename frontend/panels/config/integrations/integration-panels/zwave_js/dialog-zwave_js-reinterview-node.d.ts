import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSReinterviewNodeDialogParams } from "./show-dialog-zwave_js-reinterview-node";
declare class DialogZWaveJSReinterviewNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _stages?;
    private _subscribed?;
    showDialog(params: ZWaveJSReinterviewNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startReinterview;
    private _handleMessage;
    private _unsubscribe;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-reinterview-node": DialogZWaveJSReinterviewNode;
    }
}
export {};
