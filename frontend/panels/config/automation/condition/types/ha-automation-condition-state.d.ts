import { LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { StateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { ConditionElement } from "../ha-automation-condition-row";
export declare class HaStateCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: StateCondition;
    disabled: boolean;
    static get defaultConfig(): {
        entity_id: string;
        state: string;
    };
    shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-state": HaStateCondition;
    }
}
