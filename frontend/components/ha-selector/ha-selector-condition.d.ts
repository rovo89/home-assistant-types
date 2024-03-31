import { CSSResultGroup, LitElement } from "lit";
import { Condition } from "../../data/automation";
import { ConditionSelector } from "../../data/selector";
import "../../panels/config/automation/condition/ha-automation-condition";
import { HomeAssistant } from "../../types";
export declare class HaConditionSelector extends LitElement {
    hass: HomeAssistant;
    selector: ConditionSelector;
    value?: Condition;
    label?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-condition": HaConditionSelector;
    }
}
