import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../../../components/ha-expansion-panel";
import { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import { HomeAssistant } from "../../../../../../types";
export declare class HaDeviceInfoZha extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    private _zhaDevice?;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-info-zha": HaDeviceInfoZha;
    }
}
