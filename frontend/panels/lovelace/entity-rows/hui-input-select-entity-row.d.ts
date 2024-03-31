import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-select";
import { HomeAssistant } from "../../../types";
import { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import { LovelaceRow } from "./types";
declare class HuiInputSelectEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _haSelect;
    setConfig(config: EntitiesCardEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _selectedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-input-select-entity-row": HuiInputSelectEntityRow;
    }
}
export {};
