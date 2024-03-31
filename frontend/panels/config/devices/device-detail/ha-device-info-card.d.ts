import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-card";
import { DeviceRegistryEntry } from "../../../../data/device_registry";
import { HomeAssistant } from "../../../../types";
export declare class HaDeviceCard extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    narrow: boolean;
    protected render(): TemplateResult;
    protected _getAddresses(): [string, string][];
    private _computeDeviceName;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-info-card": HaDeviceCard;
    }
}
