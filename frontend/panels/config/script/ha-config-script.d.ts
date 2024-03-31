import { PropertyValues } from "lit";
import { EntityRegistryEntry } from "../../../data/entity_registry";
import { ScriptEntity } from "../../../data/script";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-script-editor";
import "./ha-script-picker";
declare class HaConfigScript extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    scripts: ScriptEntity[];
    _entityReg: EntityRegistryEntry[];
    protected routerOptions: RouterOptions;
    private _debouncedUpdateScripts;
    private _getScripts;
    protected firstUpdated(changedProps: any): void;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-script": HaConfigScript;
    }
}
export {};
