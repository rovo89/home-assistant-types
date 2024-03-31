import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import { NumericStateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export default class HaNumericStateCondition extends LitElement {
    hass: HomeAssistant;
    condition: NumericStateCondition;
    disabled: boolean;
    private _inputAboveIsEntity?;
    private _inputBelowIsEntity?;
    static get defaultConfig(): {
        entity_id: string;
    };
    private _schema;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-numeric_state": HaNumericStateCondition;
    }
}
