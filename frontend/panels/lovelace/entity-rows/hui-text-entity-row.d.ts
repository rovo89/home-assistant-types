import { LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiTextEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-text-entity-row": HuiTextEntityRow;
    }
}
export {};
