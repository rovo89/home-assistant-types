import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import { MqttTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaMQTTTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: MqttTrigger;
    disabled: boolean;
    static get defaultConfig(): {
        topic: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-mqtt": HaMQTTTrigger;
    }
}
