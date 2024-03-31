import { PropertyValues } from "lit";
import { Blueprints } from "../../../data/blueprint";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-blueprint-overview";
declare global {
    interface HASSDomEvents {
        "reload-blueprints": undefined;
    }
}
declare class HaConfigBlueprint extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    blueprints: Record<string, Blueprints>;
    protected routerOptions: RouterOptions;
    private _getBlueprints;
    protected firstUpdated(changedProps: any): void;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-blueprint": HaConfigBlueprint;
    }
}
export {};
