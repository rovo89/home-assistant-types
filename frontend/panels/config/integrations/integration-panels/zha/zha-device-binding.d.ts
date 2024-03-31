import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import { ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
export declare class ZHADeviceBindingControl extends LitElement {
    hass?: HomeAssistant;
    device?: ZHADevice;
    private _bindTargetIndex;
    private bindableDevices;
    private _deviceToBind?;
    private _bindingOperationInProgress;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _bindTargetIndexChanged;
    private _onBindDevicesClick;
    private _onUnbindDevicesClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-binding-control": ZHADeviceBindingControl;
    }
}
