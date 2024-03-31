import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list";
import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./date-range-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-textfield";
export interface DateRangePickerRanges {
    [key: string]: [Date, Date];
}
export declare class HaDateRangePicker extends LitElement {
    hass: HomeAssistant;
    startDate: Date;
    endDate: Date;
    ranges?: DateRangePickerRanges | false;
    private _ranges?;
    autoApply: boolean;
    timePicker: boolean;
    disabled: boolean;
    minimal: boolean;
    private _hour24format;
    extendedPresets: boolean;
    openingDirection?: "right" | "left" | "center" | "inline";
    private _calcedOpeningDirection?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _setDateRange;
    private _cancelDateRange;
    private _applyDateRange;
    private get _dateRangePicker();
    private _handleInputClick;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-range-picker": HaDateRangePicker;
    }
}
