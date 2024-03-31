import { LitElement, TemplateResult } from "lit";
import "./ha-progress-button";
import { HomeAssistant } from "../../types";
declare class HaCallServiceButton extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    progress: boolean;
    domain: string;
    service: string;
    serviceData: {};
    confirmation?: any;
    render(): TemplateResult;
    private _callService;
    private _buttonTapped;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-call-service-button": HaCallServiceButton;
    }
}
declare global {
    interface HASSDomEvents {
        "hass-service-called": {
            domain: string;
            service: string;
            serviceData: object;
            success: boolean;
        };
    }
}
export {};
