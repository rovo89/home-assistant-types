import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-circular-progress";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-menu-button";
import { HomeAssistant } from "../types";
declare class HassLoadingScreen extends LitElement {
    hass?: HomeAssistant;
    noToolbar: boolean;
    rootnav: boolean;
    narrow: boolean;
    message?: string;
    protected render(): TemplateResult;
    private _handleBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-loading-screen": HassLoadingScreen;
    }
}
export {};
