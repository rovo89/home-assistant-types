import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-next";
import type { HomeAssistant } from "../../../../types";
export declare class HaDeviceViaDevicesCard extends LitElement {
    hass: HomeAssistant;
    deviceId: string;
    _showAll: boolean;
    private _viaDevices;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _toggleShowAll;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-via-devices-card": HaDeviceViaDevicesCard;
    }
}
