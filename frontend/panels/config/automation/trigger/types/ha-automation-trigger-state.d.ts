import { LitElement, PropertyValues } from "lit";
import { StateTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
import { TriggerElement } from "../ha-automation-trigger-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaStateTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: StateTrigger;
    disabled: boolean;
    static get defaultConfig(): {
        entity_id: any[];
    };
    private _schema;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-state": HaStateTrigger;
    }
}
