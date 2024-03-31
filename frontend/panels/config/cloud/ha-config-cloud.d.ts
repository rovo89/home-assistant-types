import { CloudStatus } from "../../../data/cloud";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant, Route } from "../../../types";
import "./account/cloud-account";
import "./login/cloud-login";
declare class HaConfigCloud extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    cloudStatus: CloudStatus;
    protected routerOptions: RouterOptions;
    private _flashMessage;
    private _loginEmail;
    private _resolveCloudStatusLoaded;
    private _cloudStatusLoaded;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    protected createElement(tag: string): HTMLElement;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-cloud": HaConfigCloud;
    }
}
export {};
