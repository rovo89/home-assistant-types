import { LitElement } from "lit";
import "../../../../../components/device/ha-device-condition-picker";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/ha-form/ha-form";
import { DeviceCondition } from "../../../../../data/device_automation";
import { EntityRegistryEntry } from "../../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../../types";
export declare class HaDeviceCondition extends LitElement {
    hass: HomeAssistant;
    condition: DeviceCondition;
    disabled: boolean;
    private _deviceId?;
    private _capabilities?;
    _entityReg: EntityRegistryEntry[];
    private _origCondition?;
    static get defaultConfig(): {
        device_id: string;
        domain: string;
        entity_id: string;
    };
    private _extraFieldsData;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected updated(changedPros: any): void;
    private _getCapabilities;
    private _devicePicked;
    private _deviceConditionPicked;
    private _extraFieldsChanged;
    private _extraFieldsComputeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-device": HaDeviceCondition;
    }
}
