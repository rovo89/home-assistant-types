import { LitElement } from "lit";
import "../../../../../components/entity/ha-entity-picker";
import { ZoneCondition } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
export declare class HaZoneCondition extends LitElement {
    hass: HomeAssistant;
    condition: ZoneCondition;
    disabled: boolean;
    static get defaultConfig(): {
        entity_id: string;
        zone: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _entityPicked;
    private _zonePicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-zone": HaZoneCondition;
    }
}
