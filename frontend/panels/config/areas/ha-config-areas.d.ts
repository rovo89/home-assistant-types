import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-config-area-page";
import "./ha-config-areas-dashboard";
declare class HaConfigAreas extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(pageEl: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-areas": HaConfigAreas;
    }
}
export {};
