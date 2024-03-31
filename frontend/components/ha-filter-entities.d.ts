import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { RelatedResult } from "../data/search";
import type { HomeAssistant } from "../types";
import "./ha-state-icon";
import "./ha-check-list-item";
export declare class HaFilterEntities extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: keyof RelatedResult;
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    willUpdate(properties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _renderItem;
    private _handleItemClick;
    private _expandedWillChange;
    private _expandedChanged;
    private _entities;
    private _findRelated;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-entities": HaFilterEntities;
    }
}
