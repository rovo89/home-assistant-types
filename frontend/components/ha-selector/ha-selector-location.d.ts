import { LitElement } from "lit";
import type { LocationSelector, LocationSelectorValue } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../map/ha-locations-editor";
export declare class HaLocationSelector extends LitElement {
    hass: HomeAssistant;
    selector: LocationSelector;
    value?: LocationSelectorValue;
    label?: string;
    helper?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _location;
    private _locationChanged;
    private _radiusChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-location": HaLocationSelector;
    }
}
