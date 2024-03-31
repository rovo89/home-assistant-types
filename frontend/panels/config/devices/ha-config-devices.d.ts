import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-config-device-page";
import "./ha-config-devices-dashboard";
declare class HaConfigDevices extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    protected routerOptions: RouterOptions;
    private _configEntries;
    private _manifests;
    protected firstUpdated(changedProps: any): void;
    protected updatePageEl(pageEl: any): void;
    private _loadData;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-devices": HaConfigDevices;
    }
}
export {};
