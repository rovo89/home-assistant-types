import { PropertyValues } from "lit";
import { AutomationEntity } from "../../../data/automation";
import { HassRouterPage, RouterOptions } from "../../../layouts/hass-router-page";
import { HomeAssistant } from "../../../types";
import "./ha-automation-editor";
import "./ha-automation-picker";
declare class HaConfigAutomation extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    automations: AutomationEntity[];
    private _debouncedUpdateAutomations;
    protected routerOptions: RouterOptions;
    private _getAutomations;
    protected firstUpdated(changedProps: any): void;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-automation": HaConfigAutomation;
    }
}
export {};
