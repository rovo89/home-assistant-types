import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-cover-controls";
import "../../../components/ha-cover-tilt-controls";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiCoverEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-entity-row": HuiCoverEntityRow;
    }
}
export {};
