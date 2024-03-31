import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-info";
import { UpdateEntity } from "../data/update";
import type { HomeAssistant } from "../types";
export declare class StateCardUpdate extends LitElement {
    hass: HomeAssistant;
    stateObj: UpdateEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-update": StateCardUpdate;
    }
}
