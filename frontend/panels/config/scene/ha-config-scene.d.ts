import { PropertyValues } from "lit";
import { SceneEntity } from "../../../data/scene";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-scene-dashboard";
import "./ha-scene-editor";
declare class HaConfigScene extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    scenes: SceneEntity[];
    protected routerOptions: RouterOptions;
    private _debouncedUpdateScenes;
    private _getScenes;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-scene": HaConfigScene;
    }
}
export {};
