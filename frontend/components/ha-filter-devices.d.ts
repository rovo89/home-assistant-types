import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { RelatedResult } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-expansion-panel";
import "./ha-check-list-item";
export declare class HaFilterDevices extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: keyof RelatedResult;
    expanded: boolean;
    narrow: boolean;
    private _shouldRender;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderItem;
    private _handleItemClick;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _devices;
    private _findRelated;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-devices": HaFilterDevices;
    }
}
