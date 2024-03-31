import "../components/ha-textfield";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-badge";
import { TextEntity } from "../data/text";
import type { HomeAssistant } from "../types";
declare class StateCardText extends LitElement {
    hass: HomeAssistant;
    stateObj: TextEntity;
    protected render(): TemplateResult;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-text": StateCardText;
    }
}
export {};
