import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-card";
import "../../layouts/hass-tabs-subpage";
import { HomeAssistant, Route } from "../../types";
import "./ha-advanced-mode-row";
import "./ha-enable-shortcuts-row";
import "./ha-force-narrow-row";
import "./ha-pick-dashboard-row";
import "./ha-pick-first-weekday-row";
import "./ha-pick-language-row";
import "./ha-pick-number-format-row";
import "./ha-pick-theme-row";
import "./ha-pick-time-format-row";
import "./ha-pick-date-format-row";
import "./ha-pick-time-zone-row";
import "./ha-push-notifications-row";
import "./ha-set-suspend-row";
import "./ha-set-vibrate-row";
declare class HaProfileSectionGeneral extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _coreUserData?;
    route: Route;
    private _unsubCoreData?;
    private getCoreData;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _customizeSidebar;
    private _handleLogOut;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-section-general": HaProfileSectionGeneral;
    }
}
export {};
