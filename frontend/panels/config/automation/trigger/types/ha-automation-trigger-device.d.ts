import { LitElement } from "lit";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/device/ha-device-trigger-picker";
import "../../../../../components/ha-form/ha-form";
import { DeviceTrigger } from "../../../../../data/device_automation";
import { EntityRegistryEntry } from "../../../../../data/entity_registry";
import { HomeAssistant } from "../../../../../types";
export declare class HaDeviceTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: DeviceTrigger;
    disabled: boolean;
    private _deviceId?;
    private _capabilities?;
    _entityReg: EntityRegistryEntry[];
    private _origTrigger?;
    static get defaultConfig(): {
        device_id: string;
        domain: string;
        entity_id: string;
    };
    private _extraFieldsData;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected updated(changedProps: any): void;
    private _getCapabilities;
    private _devicePicked;
    private _deviceTriggerPicked;
    private _extraFieldsChanged;
    private _extraFieldsComputeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-device": HaDeviceTrigger;
    }
}
