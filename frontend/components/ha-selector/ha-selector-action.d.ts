import { CSSResultGroup, LitElement } from "lit";
import { Action } from "../../data/script";
import { ActionSelector } from "../../data/selector";
import "../../panels/config/automation/action/ha-automation-action";
import { HomeAssistant } from "../../types";
export declare class HaActionSelector extends LitElement {
    hass: HomeAssistant;
    selector: ActionSelector;
    value?: Action;
    label?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-action": HaActionSelector;
    }
}
