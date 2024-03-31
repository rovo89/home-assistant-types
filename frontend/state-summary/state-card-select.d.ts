import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-badge";
import "../components/ha-select";
import { SelectEntity } from "../data/select";
import type { HomeAssistant } from "../types";
declare class StateCardSelect extends LitElement {
    hass: HomeAssistant;
    stateObj: SelectEntity;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-select": StateCardSelect;
    }
}
export {};
