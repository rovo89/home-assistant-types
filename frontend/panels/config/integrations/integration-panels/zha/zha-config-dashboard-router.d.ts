import { HassRouterPage, RouterOptions } from "../../../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../../../types";
declare class ZHAConfigDashboardRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    private _configEntry;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-config-dashboard-router": ZHAConfigDashboardRouter;
    }
}
export {};
