import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSRemoveNodeDialogParams } from "./show-dialog-zwave_js-remove-node";
export interface ZWaveJSRemovedNode {
    node_id: number;
    manufacturer: string;
    label: string;
}
declare class DialogZWaveJSRemoveNode extends LitElement {
    hass: HomeAssistant;
    private entry_id?;
    private _status;
    private _node?;
    private _removeNodeTimeoutHandle?;
    private _subscribed?;
    disconnectedCallback(): void;
    showDialog(params: ZWaveJSRemoveNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startExclusion;
    private _handleMessage;
    private _unsubscribe;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-remove-node": DialogZWaveJSRemoveNode;
    }
}
export {};
