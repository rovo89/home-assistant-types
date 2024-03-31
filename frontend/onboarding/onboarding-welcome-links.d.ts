import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-card";
import type { HomeAssistant } from "../types";
import "./onboarding-welcome-link";
declare class OnboardingWelcomeLinks extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    mobileApp: boolean;
    protected render(): TemplateResult;
    private _openCommunity;
    private _openApp;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome-links": OnboardingWelcomeLinks;
    }
}
export {};
