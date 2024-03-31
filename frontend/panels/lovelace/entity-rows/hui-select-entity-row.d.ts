import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-select";
import { HomeAssistant } from "../../../types";
import { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import { LovelaceRow } from "./types";
declare class HuiSelectEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntitiesCardEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _selectedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-select-entity-row": HuiSelectEntityRow;
    }
}
export {};
