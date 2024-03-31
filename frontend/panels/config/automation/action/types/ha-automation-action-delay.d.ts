import { LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-duration-input";
import { DelayAction } from "../../../../../data/script";
import { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaDelayAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: DelayAction;
    private _timeData?;
    static get defaultConfig(): {
        delay: string;
    };
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-delay": HaDelayAction;
    }
}
