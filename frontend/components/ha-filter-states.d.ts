import { CSSResultGroup, LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
export declare class HaFilterStates extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string[];
    states?: {
        value: any;
        label?: string;
        icon?: string;
    }[];
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _statesSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-states": HaFilterStates;
    }
}
