import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-menu-button";
import { HomeAssistant } from "../types";
import "../components/ha-alert";
declare class HassErrorScreen extends LitElement {
    hass: HomeAssistant;
    toolbar: boolean;
    rootnav: boolean;
    narrow: boolean;
    error?: string;
    protected render(): TemplateResult;
    private _handleBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-error-screen": HassErrorScreen;
    }
}
export {};
