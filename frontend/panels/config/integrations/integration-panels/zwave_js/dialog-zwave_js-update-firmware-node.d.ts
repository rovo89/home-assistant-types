import "@material/mwc-button/mwc-button";
import "@material/mwc-linear-progress/mwc-linear-progress";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-file-upload";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-svg-icon";
import { HomeAssistant } from "../../../../../types";
import { ZWaveJSUpdateFirmwareNodeDialogParams } from "./show-dialog-zwave_js-update-firmware-node";
declare class DialogZWaveJSUpdateFirmwareNode extends LitElement {
    hass: HomeAssistant;
    private device?;
    private _uploading;
    private _updateFinishedMessage?;
    private _updateProgressMessage?;
    private _updateInProgress;
    private _firmwareFile?;
    private _nodeStatus?;
    private _firmwareTarget?;
    private _subscribedNodeStatus?;
    private _subscribedNodeFirmwareUpdate?;
    private _deviceName?;
    showDialog(params: ZWaveJSUpdateFirmwareNodeDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _beginFirmwareUpdate;
    private _abortFirmwareUpdate;
    private _subscribeNodeStatus;
    private _unsubscribeNodeStatus;
    private _subscribeNodeFirmwareUpdate;
    private _unsubscribeNodeFirmwareUpdate;
    private _firmwareTargetChanged;
    private _uploadFile;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-update-firmware-node": DialogZWaveJSUpdateFirmwareNode;
    }
}
export {};
