import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSRemoveFailedNodeDialogParams } from "./show-dialog-zwave_js-remove-failed-node";
declare class DialogZWaveJSRemoveFailedNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status;
    private _error?;
    private _node?;
    private _subscribed?;
    disconnectedCallback(): void;
    showDialog(params: ZWaveJSRemoveFailedNodeDialogParams): Promise<void>;
    closeDialog(): void;
    closeDialogFinished(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startExclusion;
    private _handleMessage;
    private _unsubscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-remove-failed-node": DialogZWaveJSRemoveFailedNode;
    }
}
export {};
