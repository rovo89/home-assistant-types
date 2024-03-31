import { LitElement } from "lit";
import { ActionConfig } from "../../data/lovelace/config/action";
import { UiActionSelector } from "../../data/selector";
import "../../panels/lovelace/components/hui-action-editor";
import { HomeAssistant } from "../../types";
export declare class HaSelectorUiAction extends LitElement {
    hass: HomeAssistant;
    selector: UiActionSelector;
    value?: ActionConfig;
    label?: string;
    helper?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-ui_action": HaSelectorUiAction;
    }
}
