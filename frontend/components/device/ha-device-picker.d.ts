import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { DeviceRegistryEntry } from "../../data/device_registry";
import { HomeAssistant } from "../../types";
import "../ha-combo-box";
import type { HaComboBox } from "../ha-combo-box";
import "../ha-list-item";
export type HaDevicePickerDeviceFilterFunc = (device: DeviceRegistryEntry) => boolean;
export type HaDevicePickerEntityFilterFunc = (entity: HassEntity) => boolean;
export declare class HaDevicePicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    /**
     * Show only devices with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no devices with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only devices with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of devices to be excluded.
     * @type {Array}
     * @attr exclude-devices
     */
    excludeDevices?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaDevicePickerEntityFilterFunc;
    disabled: boolean;
    required: boolean;
    private _opened?;
    comboBox: HaComboBox;
    private _init;
    private _getDevices;
    open(): Promise<void>;
    focus(): Promise<void>;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private get _value();
    private _filterChanged;
    private _deviceChanged;
    private _openedChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-picker": HaDevicePicker;
    }
}
