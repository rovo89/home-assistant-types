import { LitElement, PropertyValues, nothing } from "lit";
import "../../../../../components/ha-code-editor";
import { ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
declare class ZHADeviceZigbeeInfo extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    private _signature;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-zigbee-info": ZHADeviceZigbeeInfo;
    }
}
export {};
