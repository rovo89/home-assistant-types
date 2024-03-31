import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import "../../../components/ha-humidifier-state";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiHumidifierEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-entity-row": HuiHumidifierEntityRow;
    }
}
export {};
