import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-select";
import { HomeAssistant } from "../../../types";
import { MoveDatadiskDialogParams } from "./show-dialog-move-datadisk";
declare class MoveDatadiskDialog extends LitElement {
    hass: HomeAssistant;
    private _hostInfo?;
    private _selectedDevice?;
    private _disks?;
    private _osInfo?;
    private _moving;
    showDialog(dialogParams: MoveDatadiskDialogParams): Promise<Promise<void>>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _select_device;
    private _moveDatadisk;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-move-datadisk": MoveDatadiskDialog;
    }
}
export {};
