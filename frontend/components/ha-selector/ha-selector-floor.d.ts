import { LitElement, PropertyValues, nothing } from "lit";
import type { FloorSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-floor-picker";
import "../ha-floors-picker";
export declare class HaFloorSelector extends LitElement {
    hass: HomeAssistant;
    selector: FloorSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _entitySources?;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterEntities;
    private _filterDevices;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-floor": HaFloorSelector;
    }
}
