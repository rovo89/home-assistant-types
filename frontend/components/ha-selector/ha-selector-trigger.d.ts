import { CSSResultGroup, LitElement } from "lit";
import { Trigger } from "../../data/automation";
import { TriggerSelector } from "../../data/selector";
import "../../panels/config/automation/trigger/ha-automation-trigger";
import { HomeAssistant } from "../../types";
export declare class HaTriggerSelector extends LitElement {
    hass: HomeAssistant;
    selector: TriggerSelector;
    value?: Trigger;
    label?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-trigger": HaTriggerSelector;
    }
}
