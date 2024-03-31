import { HassRouterPage, RouterOptions } from "../../../../../layouts/hass-router-page";
import { PageNavigation } from "../../../../../layouts/hass-tabs-subpage";
import { HomeAssistant } from "../../../../../types";
export declare const configTabs: PageNavigation[];
declare class MatterConfigRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-config-panel": MatterConfigRouter;
    }
}
export {};
