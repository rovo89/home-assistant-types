import { LitElement } from "lit";
import type { LogicalCondition } from "../../../../../data/automation";
import type { HomeAssistant, ItemPath } from "../../../../../types";
import "../ha-automation-condition";
import type { ConditionElement } from "../ha-automation-condition-row";
export declare class HaLogicalCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: LogicalCondition;
    disabled: boolean;
    path?: ItemPath;
    static get defaultConfig(): {
        conditions: any[];
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-logical": HaLogicalCondition;
    }
}
