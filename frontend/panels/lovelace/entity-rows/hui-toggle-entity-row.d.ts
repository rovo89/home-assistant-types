import { LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiToggleEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-toggle-entity-row": HuiToggleEntityRow;
    }
}
export {};
