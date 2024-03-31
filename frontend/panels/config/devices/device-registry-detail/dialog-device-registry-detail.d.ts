import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-area-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-labels-picker";
import "../../../../components/ha-textfield";
import { HomeAssistant } from "../../../../types";
import { DeviceRegistryDetailDialogParams } from "./show-dialog-device-registry-detail";
declare class DialogDeviceRegistryDetail extends LitElement {
    hass: HomeAssistant;
    private _nameByUser;
    private _error?;
    private _params?;
    private _areaId;
    private _labels;
    private _disabledBy;
    private _submitting;
    showDialog(params: DeviceRegistryDetailDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _nameChanged;
    private _areaPicked;
    private _labelsChanged;
    private _disabledByChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-registry-detail": DialogDeviceRegistryDetail;
    }
}
export {};
