import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box";
import type { HaComboBox } from "./ha-combo-box";
import "./ha-icon-button";
import "./ha-list-item";
import "./ha-svg-icon";
export declare class HaAreaPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    /**
     * Show only areas with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no areas with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only areas with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of areas to be excluded.
     * @type {Array}
     * @attr exclude-areas
     */
    excludeAreas?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    private _opened?;
    comboBox: HaComboBox;
    private _suggestion?;
    private _init;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _getAreas;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _filterChanged;
    private get _value();
    private _openedChanged;
    private _areaChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-picker": HaAreaPicker;
    }
}
