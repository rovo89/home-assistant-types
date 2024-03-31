import { LitElement } from "lit";
import "../../../../../components/ha-textarea";
import type { TemplateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaTemplateCondition extends LitElement {
    hass: HomeAssistant;
    condition: TemplateCondition;
    disabled: boolean;
    static get defaultConfig(): {
        value_template: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-template": HaTemplateCondition;
    }
}
