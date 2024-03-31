import "../ha-list-item";
import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-combo-box";
import type { HaComboBox } from "../ha-combo-box";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./state-badge";
export type HaEntityPickerEntityFilterFunc = (entity: HassEntity) => boolean;
export declare class HaEntityPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomEntity: any;
    label?: string;
    value?: string;
    helper?: string;
    /**
     * Show entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * Show only entities with these unit of measuments.
     * @type {Array}
     * @attr include-unit-of-measurement
     */
    includeUnitOfMeasurement?: string[];
    /**
     * List of allowed entities to show. Will ignore all other filters.
     * @type {Array}
     * @attr include-entities
     */
    includeEntities?: string[];
    /**
     * List of entities to be excluded.
     * @type {Array}
     * @attr exclude-entities
     */
    excludeEntities?: string[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    hideClearIcon: boolean;
    itemLabelPath: string;
    private _opened;
    comboBox: HaComboBox;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _initedStates;
    private _states;
    private _rowRenderer;
    private _getStates;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _filterChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-picker": HaEntityPicker;
    }
}
