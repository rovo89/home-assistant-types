import { LitElement, TemplateResult } from "lit";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./ha-config-network";
import "./ha-config-url-form";
import "./supervisor-hostname";
import "./supervisor-network";
declare class HaConfigSectionNetwork extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-network": HaConfigSectionNetwork;
    }
}
export {};
