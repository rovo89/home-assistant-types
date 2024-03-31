import "../../../../../components/ha-textarea";
import { LitElement, PropertyValues } from "lit";
import type { TemplateTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
export declare class HaTemplateTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: TemplateTrigger;
    disabled: boolean;
    static get defaultConfig(): {
        value_template: string;
    };
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-template": HaTemplateTrigger;
    }
}
