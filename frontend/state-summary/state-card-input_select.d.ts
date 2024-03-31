import "@material/mwc-list/mwc-list-item";
import "../components/ha-select";
import { CSSResultGroup, LitElement, TemplateResult, PropertyValues } from "lit";
import "../components/entity/state-badge";
import { InputSelectEntity } from "../data/input_select";
import type { HomeAssistant } from "../types";
declare class StateCardInputSelect extends LitElement {
    hass: HomeAssistant;
    stateObj: InputSelectEntity;
    private _haSelect;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_select": StateCardInputSelect;
    }
}
export {};
