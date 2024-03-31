import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-card";
import { ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
import "./zha-device-card";
declare class ZHADevicePairingStatusCard extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    narrow: boolean;
    private _showHelp;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-pairing-status-card": ZHADevicePairingStatusCard;
    }
}
export {};
