import { LitElement, PropertyValues } from "lit";
import "../../components/entity/ha-entity-picker";
import "../../components/ha-date-range-picker";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import "../../components/ha-top-app-bar-fixed";
import { HomeAssistant } from "../../types";
import "./ha-logbook";
export declare class HaPanelLogbook extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    _time: {
        range: [Date, Date];
    };
    _entityIds?: string[];
    private _showBack?;
    constructor();
    private _goBack;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _locationChanged;
    private _applyURLParams;
    private _dateRangeChanged;
    private _entityPicked;
    private _updatePath;
    private _refreshLogbook;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-logbook": HaPanelLogbook;
    }
}
