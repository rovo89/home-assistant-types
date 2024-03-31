import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-slider";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig, LovelaceRow } from "./types";
declare class HuiInputNumberEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _loaded?;
    private _updated?;
    private _resizeObserver?;
    setConfig(config: EntityConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _initialLoad;
    private _measureCard;
    private _attachObserver;
    private _selectedValueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-input-number-entity-row": HuiInputNumberEntityRow;
    }
}
export {};
