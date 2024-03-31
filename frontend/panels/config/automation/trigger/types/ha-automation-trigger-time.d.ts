import { LitElement, PropertyValues, nothing } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { TimeTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTimeTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TimeTrigger;
    disabled: boolean;
    private _inputMode?;
    static get defaultConfig(): {
        at: string;
    };
    private _schema;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-time": HaTimeTrigger;
    }
}
