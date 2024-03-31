import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../ha-icon";
export declare class HaBatteryIcon extends LitElement {
    batteryStateObj?: HassEntity;
    batteryChargingStateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-battery-icon": HaBatteryIcon;
    }
}
