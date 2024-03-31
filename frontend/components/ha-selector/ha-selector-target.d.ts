import { HassServiceTarget } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { TargetSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-target-picker";
export declare class HaTargetSelector extends LitElement {
    hass: HomeAssistant;
    selector: TargetSelector;
    value?: HassServiceTarget;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _entitySources?;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterEntities;
    private _filterDevices;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-target": HaTargetSelector;
    }
}
