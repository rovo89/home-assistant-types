import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { HomeAssistant } from "../types";
import "./ha-attribute-value";
import "./ha-expansion-panel";
declare class HaAttributes extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    extraFilters?: string;
    private _expanded;
    private get _filteredAttributes();
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private computeDisplayAttributes;
    private expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attributes": HaAttributes;
    }
}
export {};
