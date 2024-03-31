import { LitElement, PropertyValues, nothing } from "lit";
import type { DeviceSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../device/ha-device-picker";
import "../device/ha-devices-picker";
export declare class HaDeviceSelector extends LitElement {
    hass: HomeAssistant;
    selector: DeviceSelector;
    private _entitySources?;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterDevices;
    private _filterEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-device": HaDeviceSelector;
    }
}
