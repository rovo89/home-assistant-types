import { LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { StatisticsMetaData } from "../../data/recorder";
import { HomeAssistant } from "../../types";
import "../ha-combo-box";
import type { HaComboBox } from "../ha-combo-box";
import "../ha-svg-icon";
import "./state-badge";
export declare class HaStatisticPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    statisticTypes?: "mean" | "sum";
    allowCustomEntity: any;
    statisticIds?: StatisticsMetaData[];
    disabled: boolean;
    /**
     * Show only statistics natively stored with these units of measurements.
     * @type {Array}
     * @attr include-statistics-unit-of-measurement
     */
    includeStatisticsUnitOfMeasurement?: string | string[];
    /**
     * Show only statistics with these unit classes.
     * @attr include-unit-class
     */
    includeUnitClass?: string | string[];
    /**
     * Show only statistics with these device classes.
     * @attr include-device-class
     */
    includeDeviceClass?: string | string[];
    /**
     * Show only statistics on entities.
     * @type {Boolean}
     * @attr entities-only
     */
    entitiesOnly: boolean;
    /**
     * List of statistics to be excluded.
     * @type {Array}
     * @attr exclude-statistics
     */
    excludeStatistics?: string[];
    helpMissingEntityUrl: string;
    private _opened?;
    comboBox: HaComboBox;
    private _init;
    private _statistics;
    private _filteredItems?;
    private _rowRenderer;
    private _getStatistics;
    open(): void;
    focus(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult | typeof nothing;
    private _getStatisticIds;
    private get _value();
    private _statisticChanged;
    private _openedChanged;
    private _filterChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-statistic-picker": HaStatisticPicker;
    }
}
