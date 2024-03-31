import { LitElement, TemplateResult } from "lit";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./ha-config-analytics";
declare class HaConfigSectionAnalytics extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-analytics": HaConfigSectionAnalytics;
    }
}
export {};
